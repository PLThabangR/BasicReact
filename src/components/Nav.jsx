

function Navbar() {
    const getRandomNumber =() =>{ return Math.floor(Math.random()*10)+1  }
    console.log(getRandomNumber())
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
            <h1>{  getRandomNumber ()>= 5 ? "Over 5" : "Under 5"}</h1>
        </nav>
    );
};

export default Navbar;