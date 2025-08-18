import ProductCard from "./PoductCard.tsx";

function ProductList(){
    return(
        <div>
            <h1 className="text-center font-bold text-4xl">TERMÉKEK</h1>
            <div className="flex flex-wrap justify-center gap-10 mt-6">
                <ProductCard 
                    name="Steak Burger" 
                    ingredients="Aged beef patty with gourmet toppings."
                    allergens={["Gluten", "Dairy"]}
                    price={12.99}
                />
            </div>
        </div>
    )
}

export default ProductList;