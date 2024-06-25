import './App.css';
import Header from './portfolio/header/header.jsx'
import Menu from './portfolio/menu/menu.jsx'
import Footer from './portfolio/footer/footer.jsx'
// import Men2 from './portfolio/men2.jsx';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';

// import h from './Header.module.css'
// import c from './Content.module.css'
// import n from './Nav.module.css'

function App() {
  return (

    <div className='app'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>

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
