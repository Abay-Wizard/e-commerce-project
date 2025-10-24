import { Routes,Route } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import TrackOrder from './pages/TrackOrder'
import ListProduct from './pages/ListProduct'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Users from './pages/Users';
import ContactUs from './pages/ContactUs';
import EditProduct from './pages/EditProduct';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<AddProduct/>} />
          <Route path='/orders' element={<TrackOrder/>} />
          <Route path='/list' element={<ListProduct/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/inquiries' element={<ContactUs/>} />
          <Route path='/update/:id' element={<EditProduct/>} />
        </Routes>
      </main>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
