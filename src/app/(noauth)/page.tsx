"use client"

import { Suspense } from "react";
import { PlotComponentExperimental } from "../components/plotComponentExperimental/PlotComponentExperimental";
import { ChartComponent } from "../components/pieChartComponent";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

export default function Home() {

  return (
    <>
      <div id="top-container" className=" flex flex-row">
        <div className="bg-[#141414] w-[45%] h-[45vh] ms-11 mt-5 rounded-md">
          {/* <Suspense>
            <PlotComponentExperimental />
          </Suspense> */}
        </div>

        <div className="bg-[#141414] w-[45%] h-[45vh] ms-11 mt-5 rounded-md">
          <Suspense>
            <ChartComponent />
          </Suspense>

          {/* <ResponsiveContainer width={"95%"} height={"100%"}>
            <PieChart width={300} height={300}>
              <Pie data={[{weight: 1}, {weight: 12}, {weight: 1}, {weight: 2}, {weight: 12}]} dataKey="weight" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart>
          </ResponsiveContainer> */}
        </div>
      </div>
      <div id="bottom-container" className=" flex flex-row">
        <div className="bg-[#141414] w-[45%] h-[20vh] ms-11 mt-5 rounded-md">
        </div>

        <div className="bg-[#141414] w-[45%] h-[20vh] ms-11 mt-5 rounded-md">

        </div>
      </div>

      <div id="second-bottom-container" className=" flex flex-row">
        <div className="bg-[#141414] w-[45%] h-[20vh] ms-11 mt-5 rounded-md">

        </div>

        <div className="bg-[#141414] w-[45%] h-[20vh] ms-11 mt-5 rounded-md">
          click pls
        </div>
      </div>
    </>
  );
}
