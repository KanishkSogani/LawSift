import { useState } from "react";
import axios from "axios";

function Try() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      return alert("Please select a PDF file");
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/analysis/summary",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Upload PDF File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileInputChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Try;
