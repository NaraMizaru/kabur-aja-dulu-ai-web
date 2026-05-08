import React from 'react';

const UploadPage = ({ onUploadSuccess, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F111A] text-white font-sans antialiased">
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="text-2xl font-bold text-[#00CFFF]">
          KaburAjaDulu<span className="text-[#00CFFF]">.Ai</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-[#00CFFF] text-[#0F111A] rounded-full font-bold text-sm hover:bg-[#00E0FF] transition-all">
            Tentang
          </button>
          <button onClick={() => onNavigate('register')} className="px-6 py-2 bg-[#00CFFF] text-[#0F111A] rounded-full font-bold text-sm hover:bg-[#00E0FF] transition-all">
            Daftar
          </button>
          <button onClick={() => onNavigate('login')} className="px-6 py-2 bg-[#00CFFF] text-[#0F111A] rounded-full font-bold text-sm hover:bg-[#00E0FF] transition-all">
            Masuk
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-4 -mt-10">
        <div className="w-full max-w-6xl text-center">
          <h1 className="mb-6 text-[64px] font-extrabold leading-tight text-white max-w-5xl mx-auto">
            Ubah CV Jadi <span className="bg-gradient-to-r from-[#00CFFF] to-[#00E0FF] bg-clip-text text-transparent mx-4">Roadmap Karier</span> Berbasis AI.
          </h1>
          <p className="mb-16 text-xl text-slate-400 max-w-3xl mx-auto font-medium opacity-80">
            Gunakan kekuatan Data Science untuk membedah skill gap kamu dan temukan jalur belajar yang paling efisien.
          </p>
          <div onClick={onUploadSuccess} className="group cursor-pointer bg-[#1E2533]/30 border-2 border-dashed border-slate-600 hover:border-[#00CFFF] rounded-[60px] p-20 transition-all duration-300 w-full max-w-[950px] mx-auto backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="mb-8 text-slate-600 group-hover:text-[#00CFFF] transition-colors">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-200 mb-2 group-hover:text-white">Upload CV Kamu (PDF)</h3>
              <p className="text-lg text-slate-500 group-hover:text-slate-400">Seret dan letakan disini atau klik untuk mencari file</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadPage;