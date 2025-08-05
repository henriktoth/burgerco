function Main(){
    return (
        <div className="flex justify-between gap-10">  
            <div className="flex flex-col justify-center p-4 min-h-screen">
                <h2 className="text-8xl font-bold mb-4">STEAKHOUSE BURGER</h2>
                <p className="text-lg mb-6">A new addition to the burger family combining tastes from old recipes and new foundations. Make your day happier with the stakehouse burger Try it out now!</p>
                <button className="bg-amber-400 text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors">
                    Order Now
                </button>
            </div>
            <div className="flex flex-col justify-center max-w-[50%]">
                <img 
                    src="/main/burger.webp" 
                    alt="Delicious Burger" 
                    className="w-full h-auto"
                />
            </div>
        </div>
    )
}

export default Main