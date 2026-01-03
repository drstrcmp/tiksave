import React, { useState, useEffect, useRef } from 'react';
import { Download, Link, Play, FileVideo, Music, AlertCircle, X, CheckCircle, Loader2 } from 'lucide-react';

// --- KONFIGURASI LINK IKLAN ---
const ADS_CONFIG = {
  popunder: 'https://pl28392525.effectivegatecpm.com/3d/67/d3/3d67d376994d4f3c6f15ae7b4cd3fdce.js',
  smartlink: 'https://www.effectivegatecpm.com/efpsrvbxq?key=5398d447159bc55dce9620aeebf89344',
  native_script: 'https://pl28392557.effectivegatecpm.com/1993f79f7b6338d23dca2cc8bfa88cde/invoke.js',
  banner_key: '7e3492e92272f7fe28349c34dbcdedc5'
};

// --- KOMPONEN IKLAN (ADSTERRA / EFFECTIVEGATE) ---
const AdSpace = ({ type }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Bersihkan konten sebelumnya
    adRef.current.innerHTML = '';

    if (type === 'banner') {
        const container = document.createElement('div');
        
        const conf = document.createElement('script');
        conf.type = 'text/javascript';
        conf.innerHTML = `
            atOptions = {
                'key' : '${ADS_CONFIG.banner_key}',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
            };
        `;
        
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `//www.highperformanceformat.com/${ADS_CONFIG.banner_key}/invoke.js`;
        
        container.appendChild(conf);
        container.appendChild(s);
        adRef.current.appendChild(container);

    } else if (type === 'native') {
        const nativeContainerId = "container-1993f79f7b6338d23dca2cc8bfa88cde";
        let container = document.getElementById(nativeContainerId);
        
        if (!container) {
            container = document.createElement('div');
            container.id = nativeContainerId;
            adRef.current.appendChild(container);
        }

        const s = document.createElement('script');
        s.async = true;
        s.setAttribute('data-cfasync', 'false');
        s.src = ADS_CONFIG.native_script;
        
        adRef.current.appendChild(s);
    }
  }, [type]);

  return (
    <div ref={adRef} className="w-full flex justify-center items-center my-6 min-h-[100px] bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 relative z-10">
        <span className="text-gray-700 text-xs absolute z-0">Ads Area</span>
    </div>
  );
};

export default function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // ---------------------------------------------------------
  // 1. LOGIKA VERIFIKASI GOOGLE (FILE HTML HACK)
  // ---------------------------------------------------------
  // Ini akan mengecek jika URL browser diakhiri dengan nama file verifikasi Anda.
  // Jika ya, React akan berhenti merender aplikasi dan hanya menampilkan teks verifikasi.
  // Nama file: google24f5818bb3f489e6.html
  if (typeof window !== 'undefined' && window.location.pathname.includes('google24f5818bb3f489e6.html')) {
    return (
      <div style={{
          fontFamily: 'monospace', 
          whiteSpace: 'pre-wrap', 
          wordBreak: 'break-all',
          padding: '20px'
      }}>
        google-site-verification: google24f5818bb3f489e6.html
      </div>
    );
  }
  // ---------------------------------------------------------

  // --- SETUP META TAG & POPUNDER (Backup) ---
  useEffect(() => {
      // Script Popunder
      const popScript = document.createElement('script');
      popScript.src = ADS_CONFIG.popunder;
      popScript.async = true;
      document.body.appendChild(popScript);

      // (Opsional) Meta tag verification tetap dibiarkan sebagai cadangan
      const meta = document.createElement('meta');
      meta.name = "google-site-verification";
      meta.content = "CpmEco7qhJ4DQwH-O9SCVn9OeVq20wAThf9DU4L-zRk";
      document.head.appendChild(meta);

      return () => {
          if (document.body.contains(popScript)) {
            document.body.removeChild(popScript);
          }
          if (document.head.contains(meta)) {
            document.head.removeChild(meta);
        }
      };
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    
    if (ADS_CONFIG.smartlink) {
        window.open(ADS_CONFIG.smartlink, '_blank');
    }

    if (!url.includes('tiktok.com')) {
      setError('Mohon masukkan link TikTok yang valid!');
      return;
    }
    
    setError('');
    setLoading(true);
    setResult(null);

    // SIMULASI FETCH API
    setTimeout(() => {
      setLoading(false);
      setResult({
        author: '@catkuy_official',
        desc: 'Video kucing lucu banget #fyp #cat',
        cover: 'https://via.placeholder.com/150x200?text=Thumbnail',
        videoUrl: '#',
        musicUrl: '#'
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-[#0f0f12]/90 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-cyan-400 to-pink-500 p-1.5 rounded-lg">
                <Download size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter">Tik<span className="text-pink-500">Save</span></span>
          </div>
          <button className="text-sm font-bold text-gray-400 hover:text-white transition">How to use?</button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-10 max-w-3xl">
        
        {/* IKLAN ATAS (Banner 728x90) */}
        <AdSpace type="banner" />

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-pink-500">
            Download Video TikTok <br/> Tanpa Watermark
          </h1>
          <p className="text-gray-400 text-lg">Tempel link, klik download, simpan video HD.</p>
        </div>

        {/* Input Box */}
        <div className="bg-[#18181b] p-2 rounded-2xl border-2 border-gray-700 shadow-2xl shadow-pink-500/10 focus-within:border-pink-500 transition-all duration-300 transform focus-within:-translate-y-1 z-20 relative">
          <form onSubmit={handleDownload} className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4">
              <Link className="text-gray-500 mr-3" />
              <input 
                type="text" 
                placeholder="Tempel link TikTok di sini..." 
                className="w-full bg-transparent text-white py-4 outline-none placeholder:text-gray-600 font-medium"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {url && <button type="button" onClick={() => setUrl('')}><X className="text-gray-500 hover:text-white" /></button>}
            </div>
            <button 
                type="submit" 
                disabled={loading}
                className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-pink-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? <Loader2 className="animate-spin" /> : <><Download size={20} /> Download</>}
            </button>
          </form>
        </div>

        {error && (
          <div className="mt-6 bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-xl flex items-center justify-center gap-2 animate-bounce">
            <AlertCircle size={20} /> {error}
          </div>
        )}

        {/* RESULT AREA */}
        {result && (
          <div className="mt-10 animate-fade-in-up">
            <div className="bg-[#18181b] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="p-6 md:flex gap-6">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 relative group">
                  <img src={result.cover} alt="Cover" className="w-full rounded-lg shadow-lg border border-gray-700" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg cursor-pointer">
                    <Play className="fill-white text-white w-12 h-12" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                     <h3 className="font-bold text-xl text-white flex items-center gap-2">
                        {result.author} <CheckCircle size={16} className="text-blue-400 fill-blue-400/20" />
                     </h3>
                     <p className="text-gray-400 text-sm mt-1 line-clamp-2">{result.desc}</p>
                  </div>

                  {/* TOMBOL CUAN */}
                  <div className="space-y-3">
                    <a href={result.videoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full p-4 bg-[#27272a] hover:bg-[#3f3f46] rounded-xl border border-gray-700 transition group cursor-pointer" onClick={() => window.open(ADS_CONFIG.smartlink, '_blank')}>
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><FileVideo size={20} /></div>
                            <div className="text-left">
                                <p className="font-bold text-sm text-gray-200">Download Video (No WM)</p>
                                <p className="text-xs text-gray-500">MP4 • HD Quality</p>
                            </div>
                        </div>
                        <Download size={20} className="text-gray-500 group-hover:text-blue-400" />
                    </a>
                    
                    <a href={result.musicUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full p-4 bg-[#27272a] hover:bg-[#3f3f46] rounded-xl border border-gray-700 transition group cursor-pointer" onClick={() => window.open(ADS_CONFIG.smartlink, '_blank')}>
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><Music size={20} /></div>
                            <div className="text-left">
                                <p className="font-bold text-sm text-gray-200">Download Audio (MP3)</p>
                                <p className="text-xs text-gray-500">Original Sound</p>
                            </div>
                        </div>
                        <Download size={20} className="text-gray-500 group-hover:text-green-400" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* IKLAN DI DALAM HASIL (NATIVE) */}
              <div className="bg-[#121212] p-4 border-t border-gray-800">
                  <p className="text-center text-xs text-gray-600 mb-2">SPONSORED</p>
                  <AdSpace type="native" />
              </div>
            </div>
          </div>
        )}

        {/* SEO TEXT / CONTENT */}
        <div className="mt-20 prose prose-invert max-w-none text-gray-400 text-sm">
            <h3 className="text-white">Kenapa menggunakan TikSave?</h3>
            <p>TikSave adalah alat gratis untuk mengunduh video TikTok tanpa tanda air (watermark) secara online. Anda dapat menyimpan video dalam kualitas HD MP4 atau MP3.</p>
        </div>

        {/* IKLAN BAWAH (Banner 728x90) */}
        <AdSpace type="banner" />

      </main>

      <footer className="border-t border-gray-800 bg-[#0a0a0a] py-8 text-center text-gray-600 text-sm">
        <p>&copy; 2025 TikSave Downloader. All rights reserved.</p>
      </footer>

      <style>{`
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
