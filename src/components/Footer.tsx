import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo and name */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/login.png" alt="Logo" className="w-16 h-16" />
            <h1 className="text-4xl font-bold">PAWSOME</h1>
          </div>
          <p className="text-gray-400 text-sm md:mt-2">"Making every paw count."</p>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <p className="text-md font-bold mb-4">Follow us on</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-primaryLight rounded-full hover:text-blue-600 transition-all"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-primaryLight rounded-full hover:text-blue-400 transition-all"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-primaryLight rounded-full hover:text-pink-600 transition-all"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-gray-300 mb-4 text-center md:text-left">Quick Links</h2>
          <div className="w-8 h-0.5 bg-primaryLight mx-auto md:mx-0 mb-5"></div>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="/about"
              className="block bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-700 transition-all"
            >
              About Us
            </a>
            <a
              href="/adoptions"
              className="block bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-700 transition-all"
            >
              Register
            </a>
            <a
              href="/register"
              className="block bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-700 transition-all"
            >
              Donations
            </a>
            <a
              href="/donations"
              className="block bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-700 transition-all"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="text-center md:text-left space-y-4 md:col-span-3">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <div className="w-8 h-0.5 bg-primaryLight mx-auto md:mx-0"></div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>+34 655 555-555</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>contact@pawsome.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rights Reserved */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PAWSOME. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

