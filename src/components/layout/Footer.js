import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="text-center text-secondary mt-5">
        <a className="text-secondary" href="https://github.com/paoregz">
          Created by <i className="fab fa-github"></i> Gabriel Reganit
        </a>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
