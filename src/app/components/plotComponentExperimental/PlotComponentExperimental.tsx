"use client"

import { Area, AreaChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export const PlotComponentExperimental = async () => {
    const response = await fetch("http://localhost:3000/api/test", { method: "GET" });
    let data = await response.json();
    let minDomain = Math.min(...data.map((element: any) => element.weight))

    return (
        <>
            <ResponsiveContainer width={"95%"} height={"100%"}>
                <AreaChart data={data}>
                    <XAxis dataKey="date" stroke='white'/>
                    <YAxis domain={[minDomain - 3, "dataMax"]} stroke='white'/>
                    <CartesianGrid stroke="#94a3b8" strokeDasharray="5 5" className='bg-slate-'/>
                    <Tooltip />
                    <Area type="monotone" dataKey="weight" strokeWidth={"0.5vh"} fill='#278EA5' cursor={"pointer"}/>
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}