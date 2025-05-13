import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Components/Pages/ShopCategory';
import Shop from './Components/Pages/Shop';
import Product from './Components/Pages/Product';
import Login from './Components/Pages/Login';
import Cart from './Components/Pages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/teclados' element={<ShopCategory category='teclado'/>}></Route>
        <Route path='/mouses' element={<ShopCategory category='mouse'/>}></Route>
        <Route path='/mousepads' element={<ShopCategory category='mousepad'/>}></Route>
        <Route path='/mouse feet e grips' element={<ShopCategory category='mouse feet e grip'/>}></Route>
        <Route path='/hardwares' element={<ShopCategory category='hardware'/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
