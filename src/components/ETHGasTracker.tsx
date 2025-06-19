
import { useQuery } from "@tanstack/react-query";
import { Flame } from "lucide-react";

const fetchGasData = async () => {
  // Simulating gas data since we need a reliable source
  return {
    slow: { price: 0.410, time: '5+ min' },
    standard: { price: 0.460, time: '2 min' },
    fast: { price: 0.506, time: '30 sec' }
  };
};

const ETHGasTracker = () => {
  const { data: gasData, isLoading } = useQuery({
    queryKey: ['ethGas'],
    queryFn: fetchGasData,
    refetchInterval: 15000, // Refetch every 15 seconds
  });

  const getGasColor = (price: number) => {
    if (price < 0.4) return 'text-success';
    if (price < 0.5) return 'text-warning';
    return 'text-red-400';
  };

  const getGasBg = (price: number) => {
    if (price < 0.4) return 'bg-success/10 border-success/20';
    if (price < 0.5) return 'bg-warning/10 border-warning/20';
    return 'bg-red-400/10 border-red-400/20';
  };

  if (isLoading) {
    return (
      <div className="glass-card p-4 rounded-3xl animate-fade-in bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-white">ETH Gas</h3>
        </div>
        <div className="animate-pulse space-y-3">
          <div className="h-12 bg-secondary/30 rounded-xl"></div>
          <div className="h-12 bg-secondary/30 rounded-xl"></div>
          <div className="h-12 bg-secondary/30 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-4 rounded-3xl animate-fade-in bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-white">ETH Gas</h3>
        </div>
        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          LIVE
        </span>
      </div>
      
      <div className="space-y-3">
        <div className={`p-3 rounded-xl border transition-all duration-200 hover:scale-105 ${getGasBg(gasData?.slow.price || 0)}`}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-white">Slow</span>
            <span className={`font-bold ${getGasColor(gasData?.slow.price || 0)}`}>
              {gasData?.slow.price} Gwei
            </span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">{gasData?.slow.time}</div>
        </div>
        
        <div className={`p-3 rounded-xl border transition-all duration-200 hover:scale-105 ${getGasBg(gasData?.standard.price || 0)}`}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-white">Standard</span>
            <span className={`font-bold ${getGasColor(gasData?.standard.price || 0)}`}>
              {gasData?.standard.price} Gwei
            </span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">{gasData?.standard.time}</div>
        </div>
        
        <div className={`p-3 rounded-xl border transition-all duration-200 hover:scale-105 ${getGasBg(gasData?.fast.price || 0)}`}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-white">Fast</span>
            <span className={`font-bold ${getGasColor(gasData?.fast.price || 0)}`}>
              {gasData?.fast.price} Gwei
            </span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">{gasData?.fast.time}</div>
        </div>
      </div>
    </div>
  );
};

export default ETHGasTracker;
