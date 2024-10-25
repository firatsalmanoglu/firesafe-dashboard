"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Toplam",
    count: 106,
    fill: "white",
  },
  {
    name: "Müşteri",
    count: 53,
    fill: "#C40808",
  },
  {
    name: "Servis Sağlayıcı",
    count: 53,
    fill: "#EA723E",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Kullanıcılar</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/users.png"
          alt=""
          width={75}
          height={75}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-firered rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-[#000000]-300">Müşteri (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-firelightorange rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-[#000000]-300">Servis Sağlayıcı (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
