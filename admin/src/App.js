import { Routes,Route } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import TrackOrder from './pages/TrackOrder'
import ListProduct from './pages/ListProduct'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<AddProduct/>} />
          <Route path='/track' element={<TrackOrder/>} />
          <Route path='/list' element={<ListProduct/>} />
        </Routes>
      </main>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
