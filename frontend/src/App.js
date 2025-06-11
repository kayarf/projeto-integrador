import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import teclado_banner from './Components/Assets/banner_teclado.png'
import mouse_banner from './Components/Assets/banner_mouse.png'
import mousepads_banner from './Components/Assets/banner_mousepads.png'
import mousefeet_banner from './Components/Assets/banner_mousefeet.png'
import hardware_banner from './Components/Assets/banner_hardware.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/teclados' element={<ShopCategory banner={teclado_banner} category='teclado'/>}></Route>
        <Route path='/mouses' element={<ShopCategory banner={mouse_banner} category='mouse'/>}></Route>
        <Route path='/mousepads' element={<ShopCategory banner={mousepads_banner} category='mousepad'/>}></Route>
        <Route path='/mouse feet e grips' element={<ShopCategory banner={mousefeet_banner} category='mouse feet e grip'/>}></Route>
        <Route path='/hardwares' element={<ShopCategory banner={hardware_banner} category='hardware'/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
