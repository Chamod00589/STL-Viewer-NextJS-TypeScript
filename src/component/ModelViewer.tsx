import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
// Function to calculate volume of a geometry
const calculateVolume = (geometry: any) => {
  let volume = 0;
  const position = geometry.attributes.position;

  for (let i = 0; i < position.count; i += 3) {
    const p0 = new THREE.Vector3().fromBufferAttribute(position, i);
    const p1 = new THREE.Vector3().fromBufferAttribute(position, i + 1);
    const p2 = new THREE.Vector3().fromBufferAttribute(position, i + 2);

    volume += p0.dot(p1.cross(p2)) / 6;
  }

  return Math.abs(volume); // Return absolute value of volume
};

const STLModel = ({ path }: { path: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useLoader(STLLoader, path);

  geometry.center();
  if (geometry != null) {
    const volumeMm3 = calculateVolume(geometry); // Calculate volume in cubic millimeters
    const volumeCm3 = (volumeMm3 / 1000).toFixed(); // Convert to cubic centimeters
    console.log(volumeCm3);
  }

  // Scale to fit the container
  const [scale, setScale] = useState<[number, number, number]>([1, 1, 1]);
  geometry.computeBoundingBox();
  const bbox = geometry.boundingBox;
  if (bbox) {
    const size = [
      bbox.max.x - bbox.min.x,
      bbox.max.y - bbox.min.y,
      bbox.max.z - bbox.min.z,
    ];
    // Use 'size' as needed
    const maxDim = Math.max(size[0], size[1], size[2]);
    const scaleFactor = 3 / maxDim; // Adjust 3 to fit your container
    if (scale[0] === 1 && scale[1] === 1 && scale[2] === 1) {
      setScale([scaleFactor, scaleFactor, scaleFactor]);
    }
  } else {
    // Handle the case where bbox is null
    console.error("Bounding box is null");
  }


  const [rotate, setRotate] = useState(true); // State to manage rotation

  useFrame(() => {
    if (rotate && meshRef.current) {
      meshRef.current.rotation.y += 0.003; // Smooth rotation
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      scale={scale}
      rotation={[0.6, 0, 0]}
      onPointerEnter={() => setRotate(false)} // Add click event listener
      onPointerLeave={() => setRotate(true)} // Add click event listener
    >
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

// {/* <meshStandardMaterial color="lightblue" specular="#555555" shininess={30} /> */}
const STLViewer = ({ path }: { path: string }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[1, 1, 1]} />
      <STLModel path={path} />
      <OrbitControls />
    </Canvas>
  );
};

export default STLViewer;
