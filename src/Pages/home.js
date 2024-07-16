import React, { useState } from 'react';
import '../Pages/home.css'; // Importing CSS for styling

const Home = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [persons, setPersons] = useState([]);
  const [places, setPlaces] = useState([]);
  const [emotionalWords, setEmotionalWords] = useState([]);
  const [readingEmotion, setReadingEmotion] = useState('neutral'); // Emotion state for PDF reading voice

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      extractInfoFromPdf(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  // Placeholder for extracting information from PDF
  const extractInfoFromPdf = (pdfFile) => {
    // Simulating extraction of persons, places, and emotional words from PDF
    // Replace with actual logic using libraries like pdf.js for parsing PDF content
    setTimeout(() => {
      const mockPersons = ['John Doe', 'Jane Smith'];
      const mockPlaces = ['New York', 'Paris'];
      const mockEmotionalWords = ['happy', 'excited', 'surprised'];
      setPersons(mockPersons);
      setPlaces(mockPlaces);
      setEmotionalWords(mockEmotionalWords);
    }, 1000); // Simulating async processing time
  };

  // Function to start emotion-based PDF reading
  const startEmotionBasedReading = () => {
    // Placeholder for starting emotion-based PDF reading
    // Example: Use a text-to-speech library with emotion modulation
    // based on readingEmotion state
    alert(`Starting emotion-based reading with ${readingEmotion} emotion.`);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Emotion PDF Reader</h1>
        <p className="subtitle">Upload a PDF and explore its content with emotion detection.</p>
      </header>
      <section className="upload-section">
        <div className="file-upload">
          <input
            type="file"
            accept=".pdf"
            id="upload-pdf"
            onChange={handleFileUpload}
          />
          <label htmlFor="upload-pdf" className="upload-button">Choose PDF File</label>
        </div>
        <p className="upload-instructions">Supported file types: PDF</p>
      </section>
      {pdfFile && (
        <section className="info-section">
          <h2 className="section-title">Extracted Information</h2>
          <div className="info-lists">
            <div className="info-list">
              <h3 className="info-title">Persons</h3>
              <ul className="info-items">
                {persons.map((person, index) => (
                  <li key={index} className="info-item">{person}</li>
                ))}
              </ul>
            </div>
            <div className="info-list">
              <h3 className="info-title">Places</h3>
              <ul className="info-items">
                {places.map((place, index) => (
                  <li key={index} className="info-item">{place}</li>
                ))}
              </ul>
            </div>
            <div className="info-list">
              <h3 className="info-title">Emotional Words</h3>
              <ul className="info-items">
                {emotionalWords.map((word, index) => (
                  <li key={index} className="info-item">{word}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className="start-reading-btn" onClick={startEmotionBasedReading}>
            Start Emotion-Based Reading
          </button>
        </section>
      )}
      <footer className="footer">
        <p className="footer-text">Developed by techateam &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Home;