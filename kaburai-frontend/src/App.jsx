import React, { useState } from 'react';
import UploadPage from './pages/UploadPage';
import ResultPage from './pages/ResultPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
  const [currentPage, setCurrentPage] = useState('upload');

  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="min-h-screen bg-[#0F111A]">
      {currentPage === 'upload' && (
        <UploadPage 
          onUploadSuccess={() => navigateTo('result')} 
          onNavigate={navigateTo} 
        />
      )}

      {currentPage === 'login' && (
        <LoginPage onNavigate={navigateTo} />
      )}

      {currentPage === 'register' && (
        <RegisterPage onNavigate={navigateTo} />
      )}

      {currentPage === 'reset-password' && (
        <ResetPasswordPage onNavigate={navigateTo} />
      )}

      {currentPage === 'result' && (
        <ResultPage onBack={() => navigateTo('upload')} />
      )}
    </div>
  );
}

export default App;