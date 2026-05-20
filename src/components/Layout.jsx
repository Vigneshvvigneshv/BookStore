import { MainContainer } from "../styles/layout.styles"
import Footer from "./Footer"
import Header from "./Header"

function Layout({children}) {

    return (
        <>
        <Header></Header>
        <MainContainer>
            {children}
        </MainContainer>
        <Footer></Footer>
       </>
    )
}

export default Layout