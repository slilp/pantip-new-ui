import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-8 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  How Airbnb works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Newsroom
                </a>
              </li>
              // Add more links here
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Diversity & Belonging
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Accessibility
                </a>
              </li>
              // Add more links here
            </ul>
          </div>
          // Add more columns here
        </div>
      </div>
    </footer>
  );
}

export default Footer;
