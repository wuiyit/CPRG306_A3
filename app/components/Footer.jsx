
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-800 text-white text-center py-4 mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Internet Movies Rental Company (IMR). All rights reserved.</p>
        <p>Contact us: support@imr.com | +1-800-123-4567</p>
        <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-blue-400 hover:underline"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
