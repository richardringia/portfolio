export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-4">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:underline">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="hover:underline">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="hover:underline">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
