function Navbar({ toggleDrawer }) {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 md:p-4 shadow-lg sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between relative max-w-7xl mx-auto px-2 md:px-4">
        {/* Hamburger Menu Button - Left Side */}
        <button
          onClick={toggleDrawer}
          className="md:hidden text-white hover:text-blue-100 transition-colors p-2 flex-shrink-0"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Centered Header */}
        <div className="flex-1 text-center">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold truncate">
            🐍 Python OOPs Guide
          </h1>
          <p className="text-xs md:text-sm text-blue-100 mt-0.5 md:mt-1 hidden sm:block truncate">
            Comprehensive Guide to Object-Oriented Programming in Python
          </p>
        </div>

        {/* Empty div for flex balance on mobile */}
        <div className="w-10 md:hidden flex-shrink-0"></div>
      </div>
    </nav>
  );
}

export default Navbar;