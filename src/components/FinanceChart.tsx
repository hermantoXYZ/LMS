"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    const data = [
    {
        name: 'Jan',
        income: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        income: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        income: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Mei',
        income: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Juni',
        income: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Juli',
        income: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Agustus',
        income: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'September',
        income: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Oktober',
        income: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'November',
        income: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Desember',
        income: 3490,
        pv: 4300,
        amt: 2100,
    },
    ];



const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
              {/* TITLE */}
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Students</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20}   />
                </div>
            <ResponsiveContainer width="100%" height="90%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
            <XAxis dataKey="name" 
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            />
            <YAxis 
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}/>
            <Tooltip />
            <Legend
                align="center"
                verticalAlign="top"
                wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }}  strokeWidth={4}  />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={4} />

            </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart