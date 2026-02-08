import Navbar from "./components/Navbar.js"
import Search from "./components/Search.js"
import Product from "./components/Product.js"
import About from "./components/About.js"
import Footer from "./components/Footer.js"

function App()
{
  return(
    //USING DIV WHICH IS HEAVY WEIGHT COMPARED TO FRAGMENTS <>
    // <div>
    //   <Navbar> </Navbar>
    //   <Search> </Search>
    //   <Product> </Product>
    //   <About> </About>
    //   <Footer></Footer>
    // </div>


    //USING FRAGMENTS <> WHICH IS LIGHT WEIGHT COMPARED TO DIV
    <>
      <Navbar> </Navbar>
      <Search> </Search>
      <Product> </Product>
      <About> </About>
      <Footer></Footer>
    </>
  )

}

export default App