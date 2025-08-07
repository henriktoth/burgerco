import NavItem from "./NavItem"
import ShoppingCart from "./ShoppingCart"

function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-amber-400 text-white p-3">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <img 
          src="/navbar/HamburgerIcon.svg" 
          alt="Logo" 
          className="svg-white w-10 h-10 mx-3 cursor-pointer"
        />
        <h1 className="text-3xl font-bold">burger.CO</h1>
      </div>
      {/* Navigation */}
      <div className="flex items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavItem href="" title="Menü" />
          <NavItem href="" title="Éttermek" />
          <NavItem href="" title="Kapcsolat" />
          <ShoppingCart />
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg 
              className="w-10 h-10" 
              fill="none" 
              stroke="white" 
              viewBox="0 0 24 24"
            >
              <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>      
    </div>
  )
}

export default Navbar
