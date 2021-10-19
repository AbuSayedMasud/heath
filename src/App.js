
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Contact/Contact';

import Shops from './Pages/Shops/Shops';
import Login from './Pages/Login/Login/Login'
import Registration from './Pages/Registration/Registration';
import Detail from './Pages/Detail/Detail';
import AuthProvider from './Context/AuthProvider';
import PrivateRouter from './Pages/Login/PrivateRouter/PrivateRouter';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Home></Home>
            </Route>
            <PrivateRouter path="/detail/:id">
              <Detail></Detail>
            </PrivateRouter>
            <PrivateRouter path='/contact'>
              <Contact></Contact>
            </PrivateRouter>
            <PrivateRouter path='/shops'>
              <Shops></Shops>
            </PrivateRouter>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
