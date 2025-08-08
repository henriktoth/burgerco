function ProductCard() {
    return (
        <div className="w-56 flex flex-col m-2 border-white bg-neutral-50 rounded-lg shadow-lg">
            <div className="flex justify-center">
                <img
                    src="/main/burger.webp"
                    alt="Delicious Burger"
                    className="h-50 object-cover rounded-t-lg"
                />
            </div>
            <div className="p-3">
                <h2 className="text-xl font-semibold">Burger</h2>

                <div className="mt-1">
                    <p className="text-xs font-medium text-gray-700">Ingredients</p>
                    <p className="text-xs text-gray-600">
                        Beef patty, lettuce, tomato, cheddar cheese, pickles, sesame bun.
                    </p>
                </div>

                <div className="mt-1">
                    <p className="text-xs font-medium text-gray-700">Allergens</p>
                    <ul className="list-disc list-inside text-xs text-gray-600">
                        <li>Gluten</li>
                        <li>Dairy</li>
                        <li>Sesame</li>
                    </ul>
                </div>

                <div className="mt-3 flex items-center justify-center gap-3">
                    <button
                        type="button"
                        aria-label="Decrease quantity"
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-lg leading-none"
                    >
                        −
                    </button>
                    <span className="w-7 text-center text-base font-semibold select-none">1</span>
                    <button
                        type="button"
                        aria-label="Increase quantity"
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-lg leading-none"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard