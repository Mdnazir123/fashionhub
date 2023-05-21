import './App.scss';
// react router v6
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import DownloadPage from './pages/DownloadPage/DownloadPage';
import SellerPage from './pages/SellerPage/SellerPage';
import Privacy from './pages/PrivacyPage/Privacy';
import TermOfService from './pages/TermOfService/TermOfService';
import AboutPage from './pages/AboutPage/AboutPage';
import SupportPage from './pages/SupportPage/SupportPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductSingle />} />
            {/* category wise product listing route */}
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            {/* cart */}
            <Route path = "/cart" element = {<Cart />} />
            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {<Search />} />

            <Route path = "/download" element = {<DownloadPage />} />

            <Route path = "/seller" element = {<SellerPage />} />

            <Route path = "/privacy" element = {<Privacy />} />

            <Route path = "/term-of-service" element = {<TermOfService />} />

            <Route path = "/about" element = {<AboutPage />} />
            
            <Route path = "/support" element = {<SupportPage />} />

            <Route path = "/login" element = {<LoginPage />} />

            <Route path = "/register" element = {<RegisterPage />} />
            

          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
