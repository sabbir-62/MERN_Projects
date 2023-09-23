import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<HomePage />}></Route>
      <Route exact path='/about' element={<AboutPage />}></Route>
      <Route exact path='/contact' element={<ContactPage />}></Route>
      <Route exact path='/login' element={<LoginPage />}></Route>
      <Route exact path='/registration' element={<RegistrationPage />}></Route>
    </Routes>
   </Router>
  )     
}

export default App;





