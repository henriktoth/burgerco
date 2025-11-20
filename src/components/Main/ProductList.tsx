import ProductCard from "./ProductCard.tsx"
import menu from '../../assets/menu.json'

interface MenuItem {
    name: string
    ingredients: string
    allergens: string[]
    price: number
}

function ProductList(){
    return(
        <div id="menu" className="bg-amber-400 pb-10">
            <h1 className="text-center text-white font-bold text-5xl p-10">PRODUCTS</h1>
            <div className="flex flex-wrap justify-center gap-10">
                {menu.map((item: MenuItem) => (
                    <ProductCard
                        key={item.name}
                        name={item.name}
                        ingredients={item.ingredients}
                        allergens={item.allergens}
                        price={item.price}
                    />
                ))}
            </div>
            </div>
    )
}

export default ProductList