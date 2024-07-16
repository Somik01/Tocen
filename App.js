import './App.css';
import React from 'react';
import Header from './portfolio/header/header.jsx'
import {Menu} from './portfolio/menu/menu.jsx'
import {Footer} from './portfolio/footer/footer.jsx'
// import ReactDOM from 'react-dom';
// import PageOne from './portfolio/pageOne.jsx'
import {PageTwo} from './pageTwo/pageTwo.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import h from './Header.module.css'
// import c from './Content.module.css'
// import n from './Nav.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
          <Header/>
          <Menu/>
          <Footer/>
        <div>
            <Routes>
                <Route path='/pageTwo' element={<PageTwo/>}></Route>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
    // <BrowserRouter>
    //   <div className='portfolio'>
    //   <Header/>
    //   <Route path='/men2' component={Men2}/>
    //   <Route path='/menu'component={Menu}/>
    //   <Footer/>
    // </div>
    // </BrowserRouter>
  );
}

export default App;
