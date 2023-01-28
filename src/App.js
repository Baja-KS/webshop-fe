import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
function App() {

  return (
    <div className="App">
          <Header></Header>
           <BrowserRouter>
               <Routes>
                   <Route path="/details/:id" element={<ProductDetails/>}/>
                   <Route index element={<Shop/>} />
               </Routes>
           </BrowserRouter>
          <Footer></Footer>
    </div>
  );
}

export default App;