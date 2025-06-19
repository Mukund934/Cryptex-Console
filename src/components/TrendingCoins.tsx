
import { TrendingUp } from "lucide-react";

const trendingCoins = [
  { name: "Notcoin", symbol: "NOT", rank: 1, change: "+15.2%" },
  { name: "LAMBO", symbol: "LAMBO", rank: 2, change: "+12.8%" },
  { name: "HYPE", symbol: "HYPE", rank: 3, change: "+9.4%" },
  { name: "ZKJ", symbol: "ZKJ", rank: 4, change: "+7.1%" },
  { name: "Solana", symbol: "SOL", rank: 5, change: "+5.3%" }
];

const TrendingCoins = () => {
  return (
    <div className="glass-card p-6 rounded-3xl animate-fade-in bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-white/10 shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-success" />
          <h3 className="font-bold text-white">Trending Coins</h3>
        </div>
        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          HOT
        </span>
      </div>
      
      <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar">
        {trendingCoins.map((coin, index) => (
          <div 
            key={coin.symbol}
            className="flex items-center justify-between p-3 rounded-xl bg-secondary/20 border border-white/5 hover:bg-secondary/30 hover:border-white/10 transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                {coin.rank}
              </div>
              <div>
                <div className="font-medium text-white">{coin.name}</div>
                <div className="text-sm text-muted-foreground">{coin.symbol}</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-success font-bold text-sm">{coin.change}</div>
              <div className="text-xs text-muted-foreground">24h</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
