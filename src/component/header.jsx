function Header() {
    return (
        <div class="flex flex-row border-2 border-black-600 pb-1" >
            <h1 class="text-3xl font-bold p-5 w-full text-lime-700" > Marry Rose</h1>
            <div class="p-7 flex space-x-4 ">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Header