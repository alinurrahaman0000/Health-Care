import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import ProvateRoute from './PrivateRoute/ProvateRoute';
import Footer from './Components/Footer/Footer';
import Services from './Components/services/Services';
import NoFound from './Components/NoFound/NoFound';
import Contact from './Components/Contact/Contact';
import Booking from './Components/services/booking/Booking';
import About from './Components/About us/About';






function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
       
        <Switch>
        <Route  exact path ="/">
           <Home>
          </Home>
        </Route>
           <Route path ="/home">
           <Home></Home>
          </Route>
          <Route path ="/login">
          <Login></Login>
          </Route>
          <Route path ="/registar">
            <Register></Register>
          </Route>
          <Route path ="/contact">
            <Contact></Contact>
          </Route>
          <Route path ="/services">
            <Services></Services>
          </Route>
          <Route path ="/placeOrder">
           <About></About>
          </Route>
          <ProvateRoute path ="/booking/:cartId">
            <Booking></Booking>
          </ProvateRoute>
          <Route path ="*">
            <NoFound></NoFound>
          </Route>
          
           </Switch>
         
           <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
       </div>
  );
}


export default App;
