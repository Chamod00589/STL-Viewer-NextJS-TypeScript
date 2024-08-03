"use client"
import STLViewer from "@/component/ModelViewer";
import Header from "./(Coponents)/Header/page";


export default function Home() {
  // const path = "Part1.STL"; // Replace with the path to your STL file
  const path = "cube1.STL"; // Replace with the path to your STL file
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div
          style={{
            height: 1000,
            width: 1000,
            borderWidth: 2,
            borderColor: "black",
          }}
        >
          <STLViewer path={path} />
        </div>

      </div>
    </>

  );
}












