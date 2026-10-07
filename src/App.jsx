import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h1>DevOps Dashboard</h1>
        <span className="status">● Online</span>
      </header>

      <main className="container">
        <section className="hero">
          <h2>My DevOps Demo Project 🚀</h2>
          <p>
            A simple React frontend created to learn Docker, CI/CD and AWS.
          </p>

          <button onClick={() => alert("Deployment started!")}>
            Deploy Project
          </button>
        </section>

        <section className="cards">
          <div className="card">
            <div className="icon">⚛️</div>
            <h3>Frontend</h3>
            <p>React Application</p>
            <span className="success">Running</span>
          </div>

          <div className="card">
            <div className="icon">🐳</div>
            <h3>Docker</h3>
            <p>Container Status</p>
            <span className="success">Ready</span>
          </div>

          <div className="card">
            <div className="icon">🔄</div>
            <h3>CI/CD</h3>
            <p>Pipeline Status</p>
            <span className="success">Passed</span>
          </div>

          <div className="card">
            <div className="icon">☁️</div>
            <h3>AWS</h3>
            <p>Deployment</p>
            <span className="warning">Pending</span>
          </div>
        </section>

        <section className="pipeline">
          <h2>Deployment Pipeline</h2>

          <div className="steps">
            <div className="step completed">
              <span>✓</span>
              <p>Code</p>
            </div>

            <div className="line"></div>

            <div className="step completed">
              <span>✓</span>
              <p>Build</p>
            </div>

            <div className="line"></div>

            <div className="step completed">
              <span>✓</span>
              <p>Docker</p>
            </div>

            <div className="line"></div>

            <div className="step pending">
              <span>4</span>
              <p>Deploy</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>DevOps Demo Project | React + Docker + AWS</p>
      </footer>
    </div>
  );
}

export default App;