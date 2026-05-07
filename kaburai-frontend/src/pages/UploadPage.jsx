import React from 'react';

const UploadPage = ({ onUploadSuccess }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F111A] text-white font-sans antialiased">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5">
        <div className="text-2xl font-bold text-[#00E0FF]">
          KaburAjaDulu<span className="text-[#00CFFF]">.Ai</span>
        </div>
        <div className="flex items-center gap-10">
          <a href="#" className="text-lg font-medium text-slate-300 hover:text-white transition-colors">
            About
          </a>
          <button className="px-8 py-3.5 bg-[#00E0FF] text-[#0F111A] rounded-full font-bold text-lg hover:bg-[#00CFFF] transition-colors shadow-lg shadow-[#00E0FF]/20">
            Mulai Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20">
        <div className="w-full max-w-6xl text-center">
          <h1 className="mb-6 text-[70px] font-extrabold leading-[1.1] tracking-tight text-white max-w-5xl mx-auto">
            Ubah CV Jadi 
            <span className="bg-gradient-to-r from-[#00CFFF] to-[#00E0FF] bg-clip-text text-transparent mx-4">
              Roadmap Karier
            </span>
            Berbasis AI.
          </h1>
          
          <p className="mb-16 text-2xl leading-relaxed text-slate-400 max-w-4xl mx-auto font-medium">
            Gunakan kekuatan Data Science untuk membedah skill gap kamu dan temukan
            jalur belajar yang paling efisien menuju industri digital.
          </p>

          {/* Upload Area */}
          <div 
            onClick={onUploadSuccess}
            className="group cursor-pointer bg-[#171B26] border border-dashed border-slate-700 hover:border-[#00CFFF] rounded-[40px] p-16 transition-all duration-300 w-full max-w-[900px] mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="mb-10 text-[#40495F] group-hover:text-[#00CFFF] transition-colors">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 75V25M50 25L29.1667 45.8333M50 25L70.8333 45.8333" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.6667 79.1667H83.3333" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3 group-hover:text-white transition-colors">
                Upload CV Kamu (PDF)
              </h3>
              <p className="text-xl text-slate-500 group-hover:text-slate-400 transition-colors font-medium">
                Seret dan letakan disini atau klik untuk mencari file. Di rekomendasikan untuk memakai CV ATS (Applicant Tracking System) 
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="h-20"></footer>
    </div>
  );
};

export default UploadPage;