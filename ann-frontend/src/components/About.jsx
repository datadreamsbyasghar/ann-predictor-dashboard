import React from 'react';

function About() {
  const containerStyle = {
    padding: '40px',
    maxWidth: '900px',
    margin: '0 auto',
    color: '#333',
    lineHeight: '1.6'
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#1c1c1c'
  };

  const sectionStyle = {
    marginBottom: '30px'
  };

  const listStyle = {
    paddingLeft: '20px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>About This App</h2>

      <div style={sectionStyle}>
        <p>
          The <strong>ANN Predictor Dashboard</strong> is a machine learning-powered tool designed to assess income eligibility and risk levels based on user profiles. It uses an Artificial Neural Network (ANN) model trained on structured data to deliver fast, reliable predictions.
        </p>
      </div>

      <div style={sectionStyle}>
        <p>This app is ideal for organizations involved in:</p>
        <ul style={listStyle}>
          <li>Financial screening</li>
          <li>Loan or aid eligibility</li>
          <li>Risk assessment</li>
          <li>Social service targeting</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <p>
          Built by <strong>Ali Asghar</strong>, this dashboard combines backend intelligence with frontend clarity — making predictions understandable and actionable for real-world users.
        </p>
      </div>

      <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
        Version 1.0 · Powered by FastAPI + React · © 2025 Ali Asghar
      </div>
    </div>
  );
}

export default About;