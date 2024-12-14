import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/landing'
import Login from './pages/SignIn'
import SignUp  from './pages/SignUp'




const MyContext = createContext();

function App() {


  const values = {

  }




  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values} >
              <Routes>
                <Route path="/" exact={true} element={<Landing />} />
                <Route path="/login" exact={true} element={<Login />} />
                <Route path="/SignUp" exact={true} element={<SignUp />}  />
              </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };