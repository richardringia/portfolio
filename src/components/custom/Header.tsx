export const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
