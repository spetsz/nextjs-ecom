import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children}) {
    // this should be coming from an external API
    const links = [
        {
            link: "/",
            title: "home"
        },
        {
            link: "/products",
            title: "products"
        },
        {
            link: "/cart",
            title: "cart"
        },
        {
            link: "/dummy",
            title: "placeholder"
        },
    ]
    return (
        <>
            <Navbar links={links} />
            {children}
            <Footer/>

        </>
    )
}