
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchBitcoinAnalysis = async (days: number) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=daily`
  );
  const data = await response.json();
  
  return data.prices.map(([timestamp, price]: [number, number]) => ({
    date: new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    price: Math.round(price),
    timestamp
  }));
};

const BitcoinAnalysisChart = () => {
  const [timeRange, setTimeRange] = useState(30);
  const [isLogScale, setIsLogScale] = useState(false);

  const { data: analysisData, isLoading } = useQuery({
    queryKey: ['bitcoinAnalysis', timeRange],
    queryFn: () => fetchBitcoinAnalysis(timeRange),
    refetchInterval: 300000, // Refetch every 5 minutes
  });

  const timeRanges = [
    { label: '7D', value: 7 },
    { label: '30D', value: 30 },
    { label: '90D', value: 90 },
    { label: '1Y', value: 365 }
  ];

  if (isLoading) {
    return (
      <div className="glass-card p-6 rounded-3xl mb-8 animate-fade-in bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-white/10">
        <h2 className="text-xl font-bold mb-6 text-white">Bitcoin Price Analysis</h2>
        <div className="w-full h-[300px] flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading analysis...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 rounded-3xl mb-8 animate-fade-in bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Bitcoin Price Analysis</h2>
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          NEW
        </span>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                timeRange === range.value
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary/80 hover:text-white'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setIsLogScale(!isLogScale)}
          className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
            isLogScale
              ? 'bg-warning text-white shadow-lg shadow-warning/25'
              : 'bg-secondary/50 text-muted-foreground hover:bg-secondary/80 hover:text-white'
          }`}
        >
          {isLogScale ? 'Log' : 'Linear'}
        </button>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analysisData}>
            <XAxis 
              dataKey="date" 
              stroke="#E6E4DD"
              fontSize={12}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              stroke="#E6E4DD"
              fontSize={12}
              scale={isLogScale ? 'log' : 'linear'}
              domain={isLogScale ? ['auto', 'auto'] : [42000, 48000]}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(26, 26, 26, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}
              labelStyle={{ color: '#E6E4DD', fontWeight: 'bold' }}
              itemStyle={{ color: '#8989DE', fontWeight: 'medium' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Price']}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="url(#gradientLine)" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#8989DE', stroke: '#fff', strokeWidth: 2 }}
            />
            <defs>
              <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8989DE" />
                <stop offset="100%" stopColor="#DE89C7" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BitcoinAnalysisChart;
