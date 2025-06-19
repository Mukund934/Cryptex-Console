import MarketStats from "@/components/MarketStats";
import CryptoChart from "@/components/CryptoChart";
import PortfolioCard from "@/components/PortfolioCard";
import CryptoList from "@/components/CryptoList";
import BitcoinAnalysisChart from "@/components/BitcoinAnalysisChart";
import ETHGasTracker from "@/components/ETHGasTracker";
import TrendingCoins from "@/components/TrendingCoins";
import PortfolioBreakdown from "@/components/PortfolioBreakdown";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#111111] to-[#1A1A1A] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Crypto Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">Welcome back to your enhanced portfolio</p>
        </header>
        
        {/* Keep existing Market Stats exactly as they are */}
        <MarketStats />
        
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-8">
          {/* Main chart area - spans 3 columns on xl screens */}
          <div className="xl:col-span-3 space-y-8">
            {/* Keep existing Bitcoin Price chart exactly as it is */}
            <CryptoChart />
            
            {/* NEW: Bitcoin Price Analysis Chart */}
            <BitcoinAnalysisChart />
          </div>
          
          {/* Sidebar - spans 1 column on xl screens */}
          <div className="space-y-6">
            {/* Keep existing Portfolio Card exactly as it is */}
            <PortfolioCard />
            
            {/* NEW: ETH Gas Tracker */}
            <ETHGasTracker />
            
            {/* NEW: Trending Coins */}
            <TrendingCoins />
          </div>
        </div>
        
        {/* Bottom section with Portfolio Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            {/* Keep existing Crypto List exactly as it is */}
            <CryptoList />
          </div>
          <div>
            {/* NEW: Portfolio Breakdown */}
            <PortfolioBreakdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
