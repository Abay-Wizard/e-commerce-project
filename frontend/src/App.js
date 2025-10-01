import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <main className='flex-grow'>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      </main>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
