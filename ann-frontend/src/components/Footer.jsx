import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5 border-top">
      <div className="container text-center">
        <small className="text-muted">Built with FastAPI & React</small><br />
        <small>&copy; {new Date().getFullYear()} Ali Asghar. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;