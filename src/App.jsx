import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <header>
        <h1>Javier Enrique Navarro</h1>
        <p>Burnaby, BC</p>
        <p>672.699.1101⁕  <a href="mailto:jenavarro40@hotmail.com">jenavarro40@hotmail.com</a> ⁕ <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </header>
      <section>
        <h2>Objective</h2>
        <p>Network Engineer</p>
      </section>
      <section>
        <h2>Highlights of Qualifications</h2>
        <ul>
          <li>20 years of experience in the telecommunications industry, including Nokia, Claro Colombia, and Ericson.</li>
          <li>Experienced developing integrated network plans in collaboration with teams.</li>
          <li>Familiar with network planning and engineering.</li>
          <li>Knowledge of 5G, LTE, IP/TCP, Fibre, and Visualization technologies.</li>
          <li>Developer in C, C#, Java, Python.</li>
          <li>Database administrator PostgreSQL, MySQL, DuckDB, SQLite, PowerBI dashboard developer.</li>
          <li>Able to articulate end-to-end capital programs to secure funding and trade-offs.</li>
          <li>Excellent troubleshooting liaison & communication skills in English & Spanish.</li>
          <li>Experienced preparing and delivering presentations.</li>
          <li>Driven focus on innovation with a friendly and collaborative approach.</li>
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        <div>
          <h3>Data Analysis and Development, Amdocs (2023 - 2024)</h3>
          <ul>
            <li>GIT bash</li>
            <li>Wireshark analysis</li>
            <li>TWAMP dashboard development</li>
            <li>Python, Java, Script developer for filling data in databases</li>
            <li>Bash Automatization process</li>
            <li>Windows Server administrator bash scripts and NIFI</li>
            <li>PostgreSQL administrator</li>
            <li>PowerBI dashboard developer</li>
          </ul>
        </div>
        <div>
          <h3>NPO RF Freelance 5G and 4G (2023)</h3>
          <ul>
            <li>Coordinate 5G activities test and improve the KPI in 400 sites.</li>
            <li>Driven leadership wireless LTE Dimensioning.</li>
          </ul>
        </div>
        <div>
          <h3>NPO RF NR 5G Engineer, Nokia Colombia (2014 - 2023)</h3>
          <ul>
            <li>Coordinate 5G activities test and improve the KPI in 400 sites.</li>
            <li>Driven leadership wireless LTE and 3G optimization.</li>
            <li>Definition of processes for network improvement for 2410 3G sites.</li>
          </ul>
        </div>
        <div>
          <h3>NPO RF Engineer, Nokia Chile (2011 - 2014)</h3>
          <ul>
            <li>Planning, dimensioning, and simulation of UMTS Network.</li>
            <li>Optimization in radio parts of UMTS Network.</li>
            <li>LTE Initial Tuning, Coverage and Capacity Analysis.</li>
          </ul>
        </div>
        <div>
          <h3>Engineer, Claro and Ericson, Colombia (2003 - 2011)</h3>
          <ul>
            <li>Planning, dimensioning, and simulation GSM and UMTS.</li>
            <li>ANS Switched configuration.</li>
            <li>Indoor RF design and propagation evaluation.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li>Electronics Engineering Degree</li>
          <li>Data Analysis Post Bachelorette in progress</li>
          <li>Management Specialist</li>
          <li>Google Data Analysis Certificate</li>
          <li>Nokia LTE and 5G Specialist Optimization Certificate</li>
          <li>IbWave, Levels 1, 2, and 3 certified</li>
        </ul>
      </section>
      <footer>
        <p>References available upon request.</p>
      </footer>
    </div>
  );
}

export default App;

