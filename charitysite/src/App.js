import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/About/About';
import AddPost from './components/admin/AddPost';
import Admin from './components/admin/Admin';
import AdminLogin from './components/admin/AdminLogin';
import AllBlog from './components/Blog/AllBlog';
import SingleBlog from './components/Blog/SingleBlog';
import Donate from './components/Donate/Donate';
import Paypal from './components/Donate/Paypal';
import Footer from './components/layout/Footer/Footer';
import NavbarElem from './components/layout/Header/NavbarElem';
import Team from './components/Team/Team';
import TopSection from './components/topSection/TopSection';

function App() {
    return (
      <div>
        <BrowserRouter>  
          <NavbarElem />
          <Routes>
            <Route exact path="/" element={<TopSection/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/team" element={<Team/>} />
            <Route exact path="/blog" element={<AllBlog/>} />
            <Route exact path="/blog/add" element={<AddPost/>} />
            <Route exact path="/blog/:postId" element={<SingleBlog/>} />
            <Route exact path="/donate" element={<Donate/>} />
            <Route exact path="/payment/:cost" element={<Paypal/>} />
            <Route exact path="/auth/admin" element={<AdminLogin/>} />
            <Route exact path="/adminpanel" element={<Admin/>} />
            <Route exact path="/adminpanel/post" element={<AddPost/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
}

export default App;
