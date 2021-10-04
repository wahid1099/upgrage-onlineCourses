import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/AboutUs Page/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/blog";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import ServicesComponent from "./Components/Home/ServicesComponent";
import Sercvices from "./Components/Services page/Sercvices";

function App() {
  return (
    <div className="App">

            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                           <Home></Home>
                    </Route>
                    <Route path="/about">
                       <About></About>
                    </Route>
                    <Route path="/contactus">
                        <Contact></Contact>
                    </Route>
                    <Route path="/blog">
                        <Blog></Blog>
                    </Route>
                    <Route path="/services">
                        <Sercvices></Sercvices>
                    </Route>

                    <Route path="*">
                        <Error></Error>
                    </Route>

                </Switch>


            <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
