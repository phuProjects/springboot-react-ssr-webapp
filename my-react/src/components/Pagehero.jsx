export default function Pagehero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Generate Your Custom UI with AI</h1>
        <p>
          Create beautiful, responsive UI layouts in seconds with the power of
          AI.
        </p>
        <button className="cta-button" 
                onClick={() => setIsDesigning(true)}>
          Start Designing
        </button>
      </div>
    </div>
  );
}
