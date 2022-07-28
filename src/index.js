import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Link, HashRouter } from 'react-router-dom';
import { useContext } from 'react';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Products from './Products';

const UserContext = React.createContext(null);


function Spa(){
    const Route         =ReactRouterDOM.Route;
    const Link          =ReactRouterDOM.Link;
    const HashRouter    =ReactRouterDOM.HashRouter;
    
    return (
        <HashRouter>
            <div>
                <h1>Routing-Hello World</h1>
                <Link to="/">Home</Link> --
                <Link to="/about/">About</Link> --
                <Link to="/products">Products</Link>
                <hr/>
                <UserContext.Provider value={{users:['peter']}}>
                    <Route path="/" exact    component={Home}     />
                    <Route path="/about/"    component={About}    />
                    +<Route path="/products/" component={Products} />
                </UserContext.Provider>
            </div>
        </HashRouter>


    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)