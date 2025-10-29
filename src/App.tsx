import ServiceCard from './components/ServiceCard';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const services = [
    {
      id: 1,
      title: 'Luna Website',
      subtitle: 'Digital Assistant',
      description: 'Asisten AI berbasis web untuk konsultasi skincare dan produk kecantikan',
      url: 'https://bit.ly/lunaray_web_ai',
      qrImage: '/qr-lunaray-web.png',
      characterImage: 'https://i.pinimg.com/1200x/a3/50/60/a35060add776a578d4062d549ee1fb68.jpg',
      gradient: 'from-[#68C8D7] to-[#225DA9]',
      glowColor: 'rgba(104, 200, 215, 0.4)'
    },
    {
      id: 2,
      title: 'Luna WhatsApp',
      subtitle: 'Digital Assistant',
      description: 'Konsultasi langsung melalui WhatsApp dengan AI assistant untuk rekomendasi personal',
      url: 'https://bit.ly/lunaray_whatsapp',
      qrImage: '/qr-lunaray-whatsapp.png',
      characterImage: 'https://i.pinimg.com/736x/f5/b3/5e/f5b35e46462d9107b4a33d45aa034d6a.jpg',
      gradient: 'from-[#225DA9] to-[#253499]',
      glowColor: 'rgba(34, 93, 169, 0.4)'
    },
    {
      id: 3,
      title: 'Luna Product',
      subtitle: 'Concept Gallery',
      description: 'Eksplorasi konsep produk inovatif dari research hingga formulasi final',
      url: 'https://product-concept.lunaray.id/simulator',
      qrImage: '/qr-product-concept.png',
      characterImage: 'https://i.pinimg.com/736x/b7/a5/df/b7a5df801aac5eb96d903b934119dba2.jpg',
      gradient: 'from-[#253499] to-[#68C8D7]',
      glowColor: 'rgba(37, 52, 153, 0.4)'
    },
    {
      id: 4,
      title: 'SkinChat Website',
      subtitle: 'Smart Consultation',
      description: 'Platform konsultasi skincare dengan teknologi AI untuk analisis kulit',
      url: 'https://iamtaufiknrr-cantika-ft5j.bolt.host/',
      qrImage: '/qr-skinchat-web.png',
      characterImage: 'https://i.pinimg.com/736x/35/86/68/358668c9eba7b69ef93f593724381d56.jpg',
      gradient: 'from-[#68C8D7] via-[#225DA9] to-[#253499]',
      glowColor: 'rgba(104, 200, 215, 0.4)'
    },
    {
      id: 5,
      title: 'SkinChat WhatsApp',
      subtitle: 'Instant Care',
      description: 'Solusi cepat untuk masalah kulit Anda langsung via WhatsApp',
      url: 'https://wa.me/6285134892552?text=hai%20asisten%20digital%20pribadi%20kulitku%20cantik.ai',
      qrImage: '/qr-skinchat-whatsapp.png',
      characterImage: 'https://i.pinimg.com/736x/7a/99/8c/7a998c3365aca6d2b0bdb85a8378eb20.jpg',
      gradient: 'from-[#225DA9] to-[#68C8D7]',
      glowColor: 'rgba(34, 93, 169, 0.4)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0E11] via-[#0B0E11] to-[#1a1a2e] relative overflow-hidden">
      {/* Hi-Tech Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-radial from-[#225DA9]/30 to-transparent rounded-full mix-blend-screen filter blur-[120px] animate-float"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-radial from-[#68C8D7]/25 to-transparent rounded-full mix-blend-screen filter blur-[100px] animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#253499]/20 to-transparent rounded-full mix-blend-screen filter blur-[90px] animate-pulse-slow"></div>
        
        {/* Sci-Fi Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #68C8D7 1px, transparent 1px),
            linear-gradient(to bottom, #68C8D7 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L50 20 M50 80 L50 100 M0 50 L20 50 M80 50 L100 50 M50 50 L50 50' stroke='%2368C8D7' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%2368C8D7'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Hexagonal Tech Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='87' viewBox='0 0 100 87' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0l25 14.4v28.8L25 57.6 0 43.2V14.4z M75 0l25 14.4v28.8L75 57.6 50 43.2V14.4z M25 57.6l25 14.4v28.8L25 115.2 0 100.8V72z M75 57.6l25 14.4v28.8L75 115.2 50 100.8V72z' stroke='%2368C8D7' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 87px'
        }}></div>
        
        {/* DNA/Molecular Helix Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2368C8D7' stroke-width='0.5'%3E%3Ccircle cx='40' cy='10' r='4'/%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3Ccircle cx='40' cy='70' r='4'/%3E%3Cline x1='40' y1='14' x2='40' y2='36'/%3E%3Cline x1='40' y1='44' x2='40' y2='66'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Scanning Beam Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#68C8D7]/50 to-transparent animate-scan"></div>
      </div>
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0B0E11]/50"></div>

      {/* Content */}
      <div className="relative z-20">
        <Hero />

        {/* Services Grid */}
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
