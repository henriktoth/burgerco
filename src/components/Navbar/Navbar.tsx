import NavItem from "./NavItem"
import ShoppingCart from "./ShoppingCart"

function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-amber-400 text-white p-4cl">
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
      <div className="flex items-center ">
        <NavItem href="" title="Menü" />
        <NavItem href="" title="Éttermek" />
        <NavItem href="" title="Kapcsolat" />
        <ShoppingCart />
      </div>      
    </div>
  )
}

export default Navbar
