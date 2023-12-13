import './App.css'
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './components/Orders/Orders';
import Quiz from './components/Quiz/Quiz'
import MainDash from './components/MainDash/MainDash';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

function App() {
  useEffect(() => {
    if (window.location.pathname === '/') {
      document.querySelector('.sBar').style.display = 'none';
    }
  }, []);
  return (

  
    <>


      <BrowserRouter>
        <div className="App">
          <div className="AppGlass">

          <div className="sBar">

            <Sidebar />
          </div>


            <div className="centerbody">
              <Routes>
                
         
                <Route path='/' element={<Landing />}></Route>
                <Route path='/dashboard' element={<MainDash />}></Route>
                <Route path='/orders' element={<Orders />} />
                <Route path='/quiz' element={<Quiz />} />
                {/* <Route path='/login' element={<Login />} /> */}




              </Routes>
            </div>
            

           
          </div>
        </div>


      </BrowserRouter>
    </>
  );
}

export default App;
