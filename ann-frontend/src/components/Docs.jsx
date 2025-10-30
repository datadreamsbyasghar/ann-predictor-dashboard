import React from 'react';

function Docs() {
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
      <h2 style={titleStyle}>Documentation</h2>

      <div style={sectionStyle}>
        <h4>🔍 What is an Artificial Neural Network?</h4>
        <p>
          An <strong>Artificial Neural Network (ANN)</strong> is a machine learning model inspired by the human brain. It consists of layers of interconnected nodes (neurons) that learn patterns from data. ANNs are especially powerful for classification tasks like predicting income levels, eligibility, or risk.
        </p>
      </div>

      <div style={sectionStyle}>
        <h4>📊 Model Inputs</h4>
        <ul style={listStyle}>
          <li><strong>Age Group</strong>: Categorical value (0–3)</li>
          <li><strong>Legal Status</strong>: Binary (0 = Illegal, 1 = Legal)</li>
          <li><strong>Number of Dependents</strong>: Integer</li>
          <li><strong>Active Dependents</strong>: Derived feature (Legal × Dependents)</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h4>🧠 How Prediction Works</h4>
        <p>
          The ANN processes scaled input features and outputs a prediction:
        </p>
        <ul style={listStyle}>
          <li><strong>0</strong>: Low Income / Not Eligible</li>
          <li><strong>1</strong>: High Income / Eligible</li>
        </ul>
        <p>
          These predictions help organizations make informed decisions quickly and fairly.
        </p>
      </div>

      <div style={sectionStyle}>
        <h4>📦 Tech Stack</h4>
        <p>
          <strong>Frontend</strong>: React · Custom CSS<br />
          <strong>Backend</strong>: FastAPI · Scikit-learn · ANN Model<br />
          <strong>Deployment</strong>: Localhost (demo) · Future-ready for cloud
        </p>
      </div>

      <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
        Last updated: October 2025 · ANN Model v1.0
      </div>
    </div>
  );
}

export default Docs;