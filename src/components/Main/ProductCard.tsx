import {useEffect, useState} from "react"

interface ProductCardProps {
    name: string
    ingredients: string
    allergens: string[]
    price: number
}

function ProductCard({
    name,
    ingredients,
    allergens,
    price
}: ProductCardProps) {
    const [amount, setAmount] = useState(0);
    const [orderData, setOrderData] = useState<{ name: string; ingredients: string; allergens: string[]; price: number; count: number }>({
        name,
        ingredients,
        allergens,
        price,
        count: 0
    });

    useEffect(() => {
        setOrderData((prevData) => ({
            ...prevData,
            count: amount
        }));
        console.log(orderData);
    }, [amount])

    return (
        <div className="w-56 flex flex-col m-2 border-white bg-neutral-50 rounded-lg shadow-lg">
            <div className="flex justify-center">
                <img
                    src="public/main/burger.webp"
                    alt={name}
                    className="h-50 object-cover rounded-t-lg"
                />
            </div>
            <div className="p-3 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold">{name}</h2>

                <div className="mt-1">
                    <p className="text-xs font-medium text-gray-700">Ingredients</p>
                    <p className="text-xs text-gray-600">{ingredients}</p>
                </div>

                <div className="mt-1">
                    <p className="text-xs font-medium text-gray-700">Allergens</p>
                    <ul className="list-disc list-inside text-xs text-gray-600">
                        {allergens.map((allergen) => (
                            <li key={allergen}>{allergen}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto pt-3 flex items-center justify-between">
                    <p className="text-lg font-bold">${price.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center 
                            justify-center text-lg leading-none hover:cursor-pointer hover:bg-neutral-100"
                            onClick={() => {
                                if (amount > 0) {
                                    setAmount(amount - 1);
                                } else {
                                    setAmount(0);
                                }
                            }}
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
                            onClick={() => {setAmount(amount + 1)}}
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