import React, { useState } from 'react';
import UploadPage from './pages/UploadPage';
import ResultPage from './pages/ResultPage';

function App() {
  const [currentPage, setCurrentPage] = useState('upload');

  return (
    <div className="min-h-screen">
      {currentPage === 'upload' ? (
        <UploadPage onUploadSuccess={() => setCurrentPage('result')} />
      ) : (
        <ResultPage onBack={() => setCurrentPage('upload')} />
      )}
    </div>
  );
}

export default App;