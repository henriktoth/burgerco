import ProductCard from "./PoductCard.tsx";

function ProductList(){
    return(
        <div>
            <h1 className="text-center font-bold text-4xl">TERMÉKEK</h1>
            <div className="flex flex-wrap justify-center gap-10 mt-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductList;