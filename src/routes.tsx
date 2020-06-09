import React from 'react'
import { Route , BrowserRouter} from 'react-router-dom';

 import Home from './pages/Home';
import Privacidade from './pages/Privacidade';

const Routes = () => {
    return (
         <BrowserRouter>
             <Route component={Home} path="/" exact />
             <Route component={Privacidade} path="/privacidade"  />
        </BrowserRouter>
    )
}

export default Routes