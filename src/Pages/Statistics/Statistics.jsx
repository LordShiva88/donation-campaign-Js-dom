import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getDonate } from "../../Utility/LocalStroage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [updateData, setUpdateData] = useState();

  const givenDonate = getDonate();

  const totalDonate = useLoaderData();

  useEffect(() => {
    const dataAfterDonate = totalDonate.length - givenDonate.length;
    setUpdateData(dataAfterDonate);
  }, [givenDonate, totalDonate]);

  const data = [
    { name: "Group A", value: updateData },
    { name: "Group B", value: totalDonate.length },
  ];
  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-10 md:flex-row flex-col justify-center">
        <div className="flex items-center gap-3 justify-center">
          <h2>Your Donation </h2>
          <div className="w-10 h-2 bg-[#00C49F]"></div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <h2>Total Donation </h2>
          <div className="w-10 h-2 bg-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
