function Main(){
    return (
        <div className="flex flex-col-reverse items-center md:flex-row md:gap-10 gap-0">  
            <div className=" flex flex-col justify-start md:justify-center p-4 min-h-screen max-w-[60%]">
                <h2 className="text-4xl md:text-8xl font-bold mb-4 chewy-regular tracking-wider text-center ">STEAKHOUSE BURGER</h2>
                <p className="text-lg mb-6 roboto-condensed text-center">Our stakehouse burger represents the culmination of decades of culinary expertise, where time-honored techniques meet contemporary flavors. We start with a hand-formed patty crafted from premium aged beef, seasoned with our grandmother's secret blend of herbs and spices that has been passed down through three generations.</p>
                <button className="bg-amber-400 text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors">
                    Order Now
                </button>
            </div>
            <div className="flex flex-col justify-start max-w-[50%]">
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