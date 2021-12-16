import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {

    const title = 'Climbx';
    const menu = ['Inicio', 'Tienda', 'Carrito'];

    return (
        <>
            <Header title={title} links={menu}/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App;