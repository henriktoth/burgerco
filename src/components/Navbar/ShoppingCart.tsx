
import ShoppingCartIcon from '../../assets/images/ShoppingCartIcon.svg';
import { useSelector } from 'react-redux';

interface CartItem {
  count: number;
}

interface RootState {
  cart: CartItem[];
}

function ShoppingCart() {

    const cart = useSelector((state: RootState) => state.cart);
    const totalCount = cart.reduce((sum: number, item: CartItem) => sum + item.count, 0);

    return(
        <div className="mx-5 cursor-pointer">
            <p className="bg-amber-50 rounded-full max-w-fit text-amber-400 px-2">{totalCount}</p>
            <img 
            src={ShoppingCartIcon}
            alt="Shopping Cart" 
            className="svg-white w-10 h-10 mx-3"
            />
        </div>
    )
}

export default ShoppingCart;