import ProductCard from "./ProductCard.tsx";
import menu from '../../assets/menu.json';

interface MenuItem {
    name: string;
    ingredients: string;
    allergens: string[];
    price: number;
}

function ProductList(){
    return(
        <div>
            <h1 className="text-center font-bold text-4xl">TERMÉKEK</h1>
            <div className="flex flex-wrap justify-center gap-10 mt-6">
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

export default ProductList;