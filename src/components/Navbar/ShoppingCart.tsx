
import ShoppingCartIcon from '../../assets/images/ShoppingCartIcon.svg';
import { useSelector } from 'react-redux';

interface CartItem {
    name: string; 
    ingredients: string; 
    allergens: string[]; 
    price: number; 
    count: number;
}

interface RootState {
  cart: CartItem[];
}

import { useState, useRef, useEffect } from 'react';

function ShoppingCart() {
  const cart = useSelector((state: RootState) => state.cart);
  const totalCount = cart.reduce((sum: number, item: CartItem) => sum + item.count, 0);
  const [open, setOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative mx-5" ref={cartRef}>
      <div className="cursor-pointer flex items-center" onClick={() => setOpen((prev) => !prev)}>
        <p className="bg-amber-50 rounded-full max-w-fit text-amber-400 px-2">{totalCount}</p>
        <img 
          src={ShoppingCartIcon}
          alt="Shopping Cart" 
          className="svg-white w-10 h-10 mx-3"
        />
      </div>
      {open && (
        <div className="absolute right-0 mt-4 w-64 bg-neutral-50 border rounded-lg shadow-lg z-50 p-4">
          <h2 className="font-bold text-lg mb-2 text-black">Kosár tartalma</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">A kosár üres.</p>
          ) : (
              <>
              <ul>
                {cart.map((item: CartItem, index: number) => (
                  <li key={index} className="flex justify-between items-center py-1 border-b last:border-b-0 text-black">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm">x{item.count}</span>
                    <span className="text-sm">{(item.price * item.count).toFixed(2)} $</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-4 font-bold text-black">
                <span>Összesen:</span>
                <span>
                  {cart.reduce((sum, item) => sum + item.price * item.count, 0).toFixed(2)} $
                </span>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded-lg hover:cursor-pointer">
                  Tovább a pénztárhoz
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;