"use client"
import Image from "next/image";

export default function Home() {

  const onClickHandler = async () => {
    const response = await fetch("/api/test")
    let exercise_data = await response.json()
    console.log(exercise_data.data)
    let weights = exercise_data.data.map((element: any) => element.weight)
    const sumWithValue = weights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    console.log(sumWithValue)
  }

  return (
    <>
      <div id="top-container" className=" flex flex-row">
        <div className="bg-white w-[45%] h-[45vh] ms-11 mt-5 rounded-md">

        </div>

        <div className="bg-white w-[45%] h-[45vh] ms-11 mt-5 rounded-md">

        </div>
      </div>
      <div id="bottom-container" className=" flex flex-row">
        <div className="bg-white w-[45%] h-[20vh] ms-11 mt-5 rounded-md">

        </div>

        <div className="bg-white w-[45%] h-[20vh] ms-11 mt-5 rounded-md">

        </div>
      </div>

      <div id="second-bottom-container" className=" flex flex-row">
        <div className="bg-white w-[45%] h-[20vh] ms-11 mt-5 rounded-md">

        </div>

        <div className="bg-white w-[45%] h-[20vh] ms-11 mt-5 rounded-md" onClick={onClickHandler}>
          click pls
        </div>
      </div>
    </>
  );
}
