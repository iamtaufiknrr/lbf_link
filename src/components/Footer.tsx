function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      <div className="text-center space-y-6 md:space-y-8">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-[#68C8D7]"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rotate-45 border border-[#68C8D7]"></div>
            <div className="w-2 h-2 rotate-45 border border-[#68C8D7] bg-[#68C8D7]/50"></div>
            <div className="w-2 h-2 rotate-45 border border-[#68C8D7]"></div>
          </div>
          <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-[#68C8D7]"></div>
        </div>

        {/* Brand Statement */}
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-[#FFFFFF] tracking-wide">
            Beauty Manufacturing Made Simple
          </h3>
          <p className="text-[#DCDCDE] text-xs md:text-sm lg:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Dari research hingga produksi, setiap formula di LunaRay adalah harmoni dari perjalanan sains,
            pengalaman dan ketelitian yang membawa nilai, keindahan dan dampak positif bagi industri kecantikan
          </p>
        </div>

        {/* Tech Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto py-8 md:py-10">
          <div className="space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#68C8D7] to-[#225DA9]">
              AI-Powered
            </div>
            <p className="text-[#868686] text-xs md:text-sm font-light">Smart Technology</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#225DA9] to-[#253499]">
              Research-Based
            </div>
            <p className="text-[#868686] text-xs md:text-sm font-light">Scientific Innovation</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#253499] to-[#68C8D7]">
              Nature-Inspired
            </div>
            <p className="text-[#868686] text-xs md:text-sm font-light">Sustainable Beauty</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="space-y-3 md:space-y-4 pt-8 md:pt-10 border-t border-[#68C8D7]/10">
          <p className="text-[#868686] text-xs md:text-sm font-light tracking-wide">
            Driven by Research, Perfected by Expertise
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#68C8D7] animate-pulse"></div>
            <p className="text-[#868686] text-[10px] md:text-xs tracking-widest">
              LUNARAY BEAUTY INNOVATION
            </p>
            <div className="w-1 h-1 rounded-full bg-[#68C8D7] animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
