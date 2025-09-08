import { useDispatch, useSelector } from "react-redux"
import { addToCart, updateItemCount, removeFromCart} from "../../store/cartSlice"

interface ProductCard {
    name: string
    ingredients: string
    allergens: string[]
    price: number
}

interface CartItem {
    name: string 
    count: number 
}

interface RootState {
  cart: CartItem[]
}

function ProductCard(props: ProductCard) {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart)
    const cartItem = cart.find((item: CartItem ) => item.name === props.name)
    const amount = cartItem ? cartItem.count : 0

    const AddToCart = () => {
        if (cartItem) {
            dispatch(updateItemCount({
                name: props.name,
                count: cartItem.count + 1
            }))
        } else {
            dispatch(addToCart({
                name: props.name,
                ingredients: props.ingredients,
                allergens: props.allergens,
                price: props.price,
                count: 1
            }))
        }
    }

    const RemoveFromCart = () => {
        if (cartItem && cartItem.count > 1) {
            dispatch(updateItemCount({
                name: props.name,
                count: cartItem.count - 1
            }))
        }
        else {
            dispatch (removeFromCart({name: props.name}))
        }
    }

    return (
        <div className="w-56 flex flex-col m-2 border-white bg-neutral-50 rounded-lg shadow-xl">
            {/* Image Container */}
            <div className="flex justify-center">
                <img
                    src="/main/burger.webp"
                    alt={props.name}
                    className="h-50 object-cover rounded-t-lg"
                />
            </div>
            {/* Information & Controllers */}
            <div className="p-3 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold">{props.name}</h2>

                <div className="mt-1">
                    <p className="text-xs font-medium text-gray-700">Ingredients</p>
                    <p className="text-xs text-gray-600">{props.ingredients}</p>
                </div>

                <div className="mt-1">
                    <p className="text-xs font-medium text-gray-700">Allergens</p>
                    <ul className="list-disc list-inside text-xs text-gray-600">
                        {props.allergens.map((allergen) => (
                            <li key={allergen}>{allergen}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto pt-3 flex items-center justify-between">
                    <p className="text-lg font-bold">${props.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center 
                            justify-center text-lg leading-none hover:cursor-pointer hover:bg-neutral-100"
                            onClick={RemoveFromCart}
                        >
                            −
                        </button>
                        <span className="w-7 text-center text-base font-semibold select-none">
                            {amount}
                        </span>
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center
                             justify-center text-lg leading-none hover:cursor-pointer hover:bg-neutral-100"
                            onClick={AddToCart}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard