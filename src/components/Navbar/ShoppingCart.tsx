import { useState } from 'react';

function ShoppingCart() {
    const [itemCount, setItemCount] = useState(0);

    return(
        <div className="mx-5 cursor-pointer">
            <p className="bg-amber-50 rounded-full max-w-fit text-amber-400 px-2">{itemCount}</p>
            <img 
            src="/navbar/ShoppingCartIcon.svg" 
            alt="Shopping Cart" 
            className="svg-white w-10 h-10 mx-3"
            />
        </div>
    )
}

export default ShoppingCart;