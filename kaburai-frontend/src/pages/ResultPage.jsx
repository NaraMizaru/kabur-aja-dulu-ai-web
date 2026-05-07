import React from 'react';

const ResultPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0F111A] text-white font-sans antialiased p-8 lg:p-12">
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-[#00E0FF]">KaburAjaDulu.Ai</h1>
          <span className="text-slate-500 text-xl">/ Analisis CV</span>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 bg-[#1E2533] hover:bg-[#2A3345] px-5 py-2 rounded-lg font-bold transition-all text-sm border border-slate-700"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Upload Ulang
        </button>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Kolom Kiri */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#171B26] border border-blue-500/30 rounded-3xl p-8 text-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
            <h3 className="text-xl font-bold mb-4">Match Score</h3>
            <div className="text-7xl font-black text-[#00E0FF] mb-4">-%</div>
            <p className="text-slate-400 italic text-sm">"pekerjaan yang mungkin bisa didapatkan"</p>
          </div>

          <div className="bg-[#171B26] border border-slate-800 rounded-3xl p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-500 rounded-full"></span> Skill Terdeteksi
            </h3>
            <div className="flex flex-wrap gap-2">
              {['skill 1', 'skill 2', 'skill 3', 'skill 4'].map(skill => (
                <span key={skill} className="px-4 py-1.5 bg-[#1E2533] border border-blue-900/50 rounded-full text-xs font-bold text-blue-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#171B26] border border-red-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-red-500"></div>
            <h3 className="text-lg font-bold mb-6 text-red-100 flex items-center gap-3">
              <span className="w-2 h-6 bg-red-500 rounded-full"></span> Skill Gap
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black bg-red-900/50 text-red-500 px-2 py-0.5 rounded border border-red-500/30">HIGH</span>
                <span className="text-sm text-slate-300">skill gap 1</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black bg-orange-900/50 text-orange-500 px-2 py-0.5 rounded border border-orange-500/30">MED</span>
                <span className="text-sm text-slate-300">skill gap 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#171B26] border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
              <svg className="text-[#00E0FF]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
              Roadmap Pengembangan Karier
            </h3>

            {/* Jalur Roadmap Sejajar Kiri */}
            <div className="relative pl-12 border-l border-slate-700 space-y-12 ml-4">
              <div className="relative">
                <div className="absolute -left-[65px] top-0 w-10 h-10 bg-[#0F111A] border-2 border-blue-500 rounded-full flex items-center justify-center font-bold text-sm z-10">1</div>
                <div className="p-6 bg-[#1E2533]/50 border border-slate-700 rounded-2xl w-full max-w-lg">
                  <h4 className="text-[#00E0FF] font-bold mb-2">poin pertama</h4>
                  <p className="text-sm text-slate-400">isi poin pertama</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[65px] top-0 w-10 h-10 bg-[#2A3345] border-2 border-slate-600 rounded-full flex items-center justify-center font-bold text-sm z-10">2</div>
                <div className="p-6 bg-[#1E2533]/50 border border-slate-700 rounded-2xl w-full max-w-lg">
                  <h4 className="text-white font-bold mb-2">poin kedua</h4>
                  <p className="text-sm text-slate-400">isi poin kedua</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="bg-[#171B26] border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <svg className="text-yellow-500" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
              AI CV Feedback
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-[#0F111A] border border-slate-800 rounded-2xl text-sm">
                <h4 className="text-[#00E0FF] font-bold mb-2">poin feedback</h4>
                <p className="text-slate-400">isi poin feedback 1</p>
              </div>
              <div className="p-6 bg-[#0F111A] border border-slate-800 rounded-2xl text-sm">
                <h4 className="text-[#00E0FF] font-bold mb-2">poin feedback</h4>
                <p className="text-slate-400">isi poin feedback 2</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResultPage;