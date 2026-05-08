import React from 'react';

const LoginPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#0F111A] text-white font-sans antialiased p-8 lg:p-12 relative">
      <div className="max-w-7xl mx-auto flex justify-end mb-10">
        <button 
          onClick={() => onNavigate('upload')}
          className="flex items-center gap-2 bg-[#1E2533] hover:bg-[#2A3345] px-6 py-2.5 rounded-xl font-bold border border-slate-700 transition-all text-sm shadow-lg shadow-black/20"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Kembali
        </button>
      </div>

      <div className="flex items-center justify-center -mt-20 min-h-[70vh]">
        <div className="w-full max-w-md bg-[#171B26] border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl">
          <h2 className="text-3xl font-bold mb-2 text-white">Masuk</h2>
          <p className="text-slate-400 mb-8">Masuk ke akun kamu.</p>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
              <input type="email" placeholder="Email" className="w-full bg-[#0F111A] border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#00CFFF] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-[#0F111A] border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#00CFFF] transition-all" />
            </div>
            <div className="text-right">
              <button onClick={() => onNavigate('reset-password')} className="text-xs text-[#00CFFF] underline underline-offset-2">Lupa password?</button>
            </div>
            <button className="w-full bg-[#00CFFF] text-[#0F111A] font-bold py-4 rounded-2xl hover:bg-[#00E0FF] transition-all mt-4 shadow-lg shadow-[#00CFFF]/10">
              Masuk
            </button>
          </form>
          
          <p className="mt-8 text-center text-slate-400 text-sm">
            Belum punya akun? <button onClick={() => onNavigate('register')} className="text-[#00CFFF] font-bold underline underline-offset-4 decoration-[#00CFFF]">Buat akun</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;