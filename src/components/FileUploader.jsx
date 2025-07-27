import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FileUploader = ({ onTranscript }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("audio", file);

      const backendUrl = "http://localhost:4000";

      const uploadRes = await axios.post(`${backendUrl}/api/audio/uploads`, formData);
      const { url } = uploadRes.data;//yaha destructuring ki hai 🧠 yeh data Axios ke response ka default part hota hai.



      toast.success("File uploaded successfully!");

      const transcribeRes = await axios.post(`${backendUrl}/api/transcribe`, {
        audioUrl: url,
      });

      toast.success("Transcription completed!");
      onTranscript(transcribeRes.data.text);
    } catch (err) {
      toast.error("Upload or transcription failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-auto mt-12 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        🎙️ Upload Audio
      </h2>

      <div className="mb-5">
        <input
          type="file"
          accept="audio/*"// 🧠 accept="audio/*" → saare audio formats allow (wildcard * use hua hai)
          onChange={handleFileChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-700 cursor-pointer bg-gray-50 hover:bg-gray-100"
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition duration-300 disabled:opacity-50"
      >
        {loading ? "⏳ Transcribing..." : "📤 Upload & Transcribe"}
      </button>
    </div>
  );
};

export default FileUploader;
