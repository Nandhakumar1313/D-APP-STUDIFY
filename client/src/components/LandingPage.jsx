import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1>Secure, Blockchain-Based Student Document Verification</h1>
        <p>Your Trusted Solution for Transparent, Tamper-Proof Document Management</p>
      </header>
      
      <section className="how-it-works">
        <h2>How It Works:</h2>
        <ul>
          <li>📜 <b>Document Verification by Educational Institutions</b> – Students submit their physical documents (e.g., academic records, transcripts) to the educational institution for verification. Once validated, the institution uploads these documents to the blockchain as digital records.</li>
          <li>🔑 <b>Access Control via MetaMask Wallet</b> – Each student is assigned a MetaMask wallet—their unique digital identity. Through this wallet, students can securely access and manage their verified documents stored on the blockchain, giving them full control over who views their records.</li>
        </ul>
      </section>
      
      <section className="key-benefits">
        <h2>Key Benefits:</h2>
        <h3>For Students:</h3>
        <ul>
          <li>🛡 <b>Full control</b> over your verified documents.</li>
          <li>🔐 <b>Secure access</b> through your MetaMask wallet.</li>
          <li>🔒 <b>Privacy assured</b>, with the ability to share documents only with authorized entities.</li>
        </ul>
        <h3>For Educational Institutions:</h3>
        <ul>
          <li>📚 <b>Tamper-proof</b>, blockchain-secured document storage.</li>
          <li>🚫 <b>Reduced fraud risks</b> by ensuring only verified records are stored.</li>
          <li>📂 <b>Seamless document management</b> without handling physical files.</li>
        </ul>
        <h3>For Employers:</h3>
        <ul>
          <li>⏱ <b>Instant access</b> to verified academic credentials.</li>
          <li>💼 <b>Faster recruitment</b> with authentic and secure records.</li>
          <li>✅ <b>Eliminates fraud risk</b>, ensuring you only hire qualified candidates.</li>
        </ul>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose Our Blockchain Solution?</h2>
        <ul>
          <li>🔐 <b>Secure & Transparent</b> – Blockchain technology ensures that documents are immutable, secure, and easily accessible without the risk of tampering or fraud.</li>
          <li>⚙️ <b>Student-Controlled Access</b> – With MetaMask, students have complete control over who can access their documents, maintaining privacy and security.</li>
          <li>⏱ <b>Quick & Efficient Verification</b> – Institutions and employers can instantly verify credentials, saving time and resources in the hiring or admission process.</li>
        </ul>
      </section>
      
      <section className="get-started">
        <h2>Get Started Today!</h2>
        <ul>
          <li>🔹 <b>Students</b>: Take control of your academic records and securely share them with institutions or employers.</li>
          <li>🔹 <b>Educational Institutions</b>: Enhance your verification processes with blockchain security and provide your students with digital certificates.</li>
          <li>🔹 <b>Employers</b>: Quickly verify candidates' academic qualifications and make more informed hiring decisions.</li>
        </ul>
      </section>
      
      <footer className="cta-section">
        <h2>Ready to experience the future of document management?</h2>
        <p>Watch this video for more insights:</p>
        <a href="https://youtu.be/nfCsHccl1-E?feature=shared" target="_blank" rel="noopener noreferrer">
          <button>Watch Video</button>
        </a>
        <p>For more information:</p>
        <a href="/signup">
          <button>Sign Up</button>
        </a>
        <a href="/learn-more">
          <button>Learn More</button>
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;