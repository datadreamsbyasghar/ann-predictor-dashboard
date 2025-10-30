import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-dark text-white py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo + Title */}
        <div className="d-flex align-items-center">
          <img
            src="/logo192.png" // Replace with your actual logo path if needed
            alt="Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          <div>
            <h2 className="mb-0">ANN Predictor Dashboard</h2>
            <small className="text-muted">Predict outcomes. Make smarter decisions.</small>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-2">
              <Link to="/" className="text-white text-decoration-none">Home</Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link to="/about" className="text-white text-decoration-none">About</Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link to="/docs" className="text-white text-decoration-none">Docs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;