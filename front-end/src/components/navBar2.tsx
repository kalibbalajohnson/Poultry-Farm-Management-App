import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-800 text-white py-5 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Title Section */}
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-wide">
            Poultry Farm Management
          </h1>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            to="/login"
            className="text-white font-semibold px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-green-600 hover:shadow-md"
          >
            Logout
          </Link>

          <div className="flex items-center">
            <img
              src="farm.jpg"
              alt="User Avatar"
              className=" bg-white w-9 h-9 rounded-full border border-white"
            />
            <span className="ml-3 text-white font-semibold">Username</span>{" "}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar2;
