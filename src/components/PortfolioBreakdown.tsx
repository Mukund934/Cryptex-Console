
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Wallet, TrendingUp } from "lucide-react";

const portfolioData = [
  { name: 'Bitcoin', value: 45000, percentage: 45, color: '#F59E0B' },
  { name: 'Ethereum', value: 25000, percentage: 25, color: '#8B5CF6' },
  { name: 'Cardano', value: 10000, percentage: 10, color: '#06B6D4' },
  { name: 'Solana', value: 10000, percentage: 10, color: '#10B981' },
  { name: 'Others', value: 10000, percentage: 10, color: '#EF4444' }
];

const PortfolioBreakdown = () => {
  const totalValue = 100000;
  const totalGains = 12000;
  const gainsPercentage = 12.6;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-3 shadow-2xl backdrop-blur-sm">
          <p className="text-white font-medium">{data.name}</p>
          <p className="text-primary font-bold">${data.value.toLocaleString()}</p>
          <p className="text-muted-foreground text-sm">{data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-card p-6 rounded-3xl animate-fade-in bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-white">Portfolio</h3>
        </div>
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          PORTFOLIO
        </span>
      </div>
      
      <div className="space-y-4 mb-6">
        <div>
          <div className="text-sm text-muted-foreground">Total Value</div>
          <div className="text-3xl font-bold text-white">${totalValue.toLocaleString()}</div>
        </div>
        
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-success font-bold">+${totalGains.toLocaleString()}</span>
          <span className="text-success">({gainsPercentage}%)</span>
        </div>
      </div>
      
      <div className="h-[250px] mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={portfolioData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {portfolioData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  className="hover:opacity-80 transition-opacity duration-200"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-2">
        {portfolioData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/20 transition-colors duration-200">
            <div className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-white font-medium text-sm">{item.name}</span>
            </div>
            <div className="text-right">
              <div className="text-white font-medium text-sm">${item.value.toLocaleString()}</div>
              <div className="text-muted-foreground text-xs">{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioBreakdown;
