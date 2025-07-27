import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import TranscriptResult from '../components/TranscriptResult';

const Home = () => {
  const [transcript, setTranscript] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6">
      <h1 className="text-4xl font-bold text-center mt-4 mb-6">🎙️ Speech to Text App</h1>
      <FileUploader onTranscript={setTranscript} />
      <TranscriptResult transcript={transcript} />
    </div>
  );
};

export default Home;
