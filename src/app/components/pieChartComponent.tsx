"use client"
import { ResponsiveContainer, Pie, PieChart, Label, Tooltip } from "recharts";

export const ChartComponent = async () => {
    // const response = await fetch("http://localhost:3000/api/test", { method: "GET" });
    // let data = await response.json();

    return (
        <>
            <ResponsiveContainer width={"95%"} height={"100%"}>
                <PieChart width={300} height={300}>
                    <Tooltip/>
                    <Pie data={[{weight: 15,
                        label: "peso"
                    }, {weight: 30, label: "peso"}]} dataKey="weight" nameKey="label" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label/>
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}