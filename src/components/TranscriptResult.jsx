import React from 'react';

const TranscriptResult = ({ transcript }) => {
  return (
    <div className="p-4 mt-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Transcribed Text</h2>
      <div className="bg-gray-100 p-4 rounded shadow">
        {transcript ? transcript : "No transcript available."}
      </div>
    </div>
  );
};

export default TranscriptResult;
