import { QrCode, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  qrImage: string;
  characterImage: string;
  gradient: string;
  glowColor: string;
  delay: number;
}

function ServiceCard({
  title,
  subtitle,
  description,
  url,
  qrImage,
  characterImage,
  gradient,
  glowColor,
  delay
}: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);
  const [qrError, setQrError] = useState(false);

  const [showQR, setShowQR] = useState(false);

  return (
    <div
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Glow Effect */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"
        style={{ background: glowColor }}
      ></div>

      {/* Main Card - Mobile First Design */}
      <div className="relative bg-gradient-to-br from-[#1a1a1a]/95 via-[#292929]/90 to-[#1a1a1a]/95 backdrop-blur-xl border border-[#68C8D7]/20 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[#68C8D7]/50 group-hover:shadow-2xl hover:shadow-[#68C8D7]/20">
        
        {/* Top Badge - Smaller */}
        <div className="absolute top-2 right-2 z-20 px-2 py-1 rounded-full bg-[#68C8D7]/10 border border-[#68C8D7]/20 backdrop-blur-sm">
          <span className="text-[9px] font-light text-[#68C8D7]/80 tracking-wide">{subtitle}</span>
        </div>

        {/* Compact Header with Icon */}
        <div className="relative bg-gradient-to-br from-[#225DA9]/20 to-[#68C8D7]/10 p-4 border-b border-[#68C8D7]/10">
          <div className="flex items-center gap-4">
            {/* Avatar/Icon */}
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#68C8D7]/20 to-[#225DA9]/20 border border-[#68C8D7]/30 flex items-center justify-center overflow-hidden">
                {!imageError ? (
                  <img
                    src={characterImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#68C8D7]/20 border-2 border-[#68C8D7]/50 flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-[#68C8D7]" />
                  </div>
                )}
              </div>
              {/* Pulse Ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#68C8D7]/30 animate-ping"></div>
            </div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 truncate">
                {title}
              </h3>
              <div className={`h-0.5 w-16 bg-gradient-to-r ${gradient} rounded-full`}></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4">
          <p className="text-[#DCDCDE] text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="p-4 pt-0 space-y-2">
          {/* Primary CTA */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-3 px-4 rounded-xl bg-gradient-to-r ${gradient} text-white font-semibold text-sm text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#68C8D7]/40 active:scale-95 relative overflow-hidden group/btn`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Buka Layanan
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>
          </a>

          {/* QR Toggle */}
          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full py-2.5 px-4 rounded-xl border border-[#68C8D7]/30 bg-[#0B0E11]/40 text-[#68C8D7] font-medium text-sm hover:bg-[#68C8D7]/10 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            <QrCode className="w-4 h-4" />
            {showQR ? 'Sembunyikan QR' : 'Tampilkan QR'}
          </button>
        </div>

        {/* QR Code Expandable */}
        <div className={`overflow-hidden transition-all duration-500 ${showQR ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 pt-0">
            <div className="relative p-4 rounded-xl border border-[#68C8D7]/30 bg-white/5 backdrop-blur-sm">
              {!qrError ? (
                <img
                  src={qrImage}
                  alt={`QR Code for ${title}`}
                  className="w-full max-w-[200px] h-auto mx-auto object-contain"
                  onError={() => setQrError(true)}
                />
              ) : (
                <div className="w-full max-w-[200px] h-[200px] mx-auto flex flex-col items-center justify-center text-[#68C8D7]/30 space-y-2">
                  <QrCode className="w-16 h-16" />
                  <p className="text-xs text-center">{qrImage}</p>
                </div>
              )}
              <p className="text-center text-xs text-[#868686] mt-3">Scan untuk akses cepat</p>
            </div>
          </div>
        </div>

        {/* Bottom Shine Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#68C8D7]/50 to-transparent"></div>
        
        {/* Hover Scan Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#68C8D7]/5 to-transparent translate-y-[-200%] group-hover:translate-y-[200%] transition-transform duration-[2000ms] pointer-events-none"></div>
      </div>
    </div>
  );
}

export default ServiceCard;
