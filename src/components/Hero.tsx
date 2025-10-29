import { Scan, Atom, CircuitBoard, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <div className="relative">
      {/* Floating Tech Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Molecular Structure Decorations */}
        <div className="absolute top-10 left-[10%] animate-float opacity-20">
          <Atom className="w-16 h-16 text-[#68C8D7]" />
        </div>
        <div className="absolute top-32 right-[15%] animate-float-delayed opacity-15">
          <CircuitBoard className="w-20 h-20 text-[#225DA9]" />
        </div>
        <div className="absolute bottom-20 left-[20%] animate-float opacity-10">
          <Sparkles className="w-12 h-12 text-[#68C8D7]" />
        </div>
        
        {/* Hexagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2368C8D7' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12">

          {/* Main Title - Clean Corporate */}
          <div className="relative inline-block">
            {/* Holographic Glow Effect */}
            <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-[#68C8D7] via-[#FFFFFF] to-[#68C8D7] animate-shimmer"></div>
            
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#68C8D7] via-[#FFFFFF] to-[#68C8D7] tracking-[0.2em] animate-shimmer">
              LUNAVERSE
            </h1>
            
            {/* 3D Depth Shadow */}
            <div className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold text-[#68C8D7] opacity-5 blur-sm translate-x-1 translate-y-1 tracking-[0.2em] pointer-events-none">
              LUNAVERSE
            </div>
          </div>

        </div>

        {/* Subtitle - Minimalist Corporate */}
        <div className="space-y-2 md:space-y-3 text-center">
          <p className="text-lg md:text-2xl lg:text-3xl text-[#DCDCDE] font-light tracking-wide">
            Where <span className="text-[#68C8D7] font-normal">Science</span> Meets <span className="text-[#68C8D7] font-normal">Beauty</span>
          </p>
          
          {/* Tech Stats Line - Smaller */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[#68C8D7]/60 text-[10px] md:text-xs font-light tracking-wider">
            <span>SCIENTIFIC RESEARCH</span>
            <div className="w-1 h-1 rounded-full bg-[#68C8D7]/40"></div>
            <span>EVIDENCE BASED</span>
            <div className="w-1 h-1 rounded-full bg-[#68C8D7]/40"></div>
            <span>AI POWERED</span>
            <div className="w-1 h-1 rounded-full bg-[#68C8D7]/40"></div>
            <span>SMART MANUFACTURING</span>
          </div>
        </div>


        {/* Call to Action - Minimalist */}
        <div className="pt-4 md:pt-6 text-center">
          <p className="text-[#868686] text-xs md:text-sm font-light">
            <Scan className="inline w-3 h-3 mr-1.5 text-[#68C8D7]/60" />
            Pilih layanan di bawah atau <span className="text-[#68C8D7]">scan QR code</span> untuk akses langsung
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
