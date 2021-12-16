import NavBar from "./NavBar";

const Header = ( {title, links} ) => {
    return (
        <header>
            <div>
                <h1>{title}</h1>
            </div>
            <NavBar links={links}/>
        </header>
    )
}

export default Header;