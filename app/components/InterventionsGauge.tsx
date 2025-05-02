import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

interface GaugeData {
  name: string;
  value: number;
  fill: string;
}

const InterventionsGauge: React.FC = () => {
  // Sample data for the gauges
  const gaugeData: GaugeData[] = [
    { name: 'Speed', value: 85, fill: '#22c55e' }, // Bright green
    { name: 'Braking', value: 70, fill: '#16a34a' }, // Medium green
    { name: 'Acceleration', value: 60, fill: '#15803d' }, // Dark green
    { name: 'Cornering', value: 45, fill: '#166534' }, // Darker green
  ];

  return (
    <div className="bg-safely-white p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Interventions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gaugeData.map((data, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full h-40">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="100%"
                  data={[data]}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={30}
                    fill={data.fill}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2">
              <p className="text-sm font-medium">{data.name}</p>
              <p className="text-2xl font-semibold" style={{ color: data.fill }}>
                {data.value}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterventionsGauge; 