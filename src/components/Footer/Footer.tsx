function Footer(){
    return(
        <div className="flex justify-between bg-amber-400 text-white p-4">
            <p>&copy; {new Date().getFullYear()} burger.CO. All rights reserved.</p>
        </div>
    )
}

export default Footer