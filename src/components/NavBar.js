const NavBar = ( {links} ) => {
    return (
        <nav>
            {links.map((referencia, index) => {
                return <a href={`/${referencia}`}>{referencia}</a>
            })}
        </nav>
    )
}

export default NavBar;