import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './components/home'
import Media from './components/media'
import Contact from './components/contact'
import './styles/styles.scss';

function App(props) {
  return (
   <BrowserRouter>
    <NavBar {...props}></NavBar>
     <Switch>
       <Route exact path ="/" render ={(props) => <Redirect {...props} to ='/home'/>}/>
       <Route path = "/home" component = {Home}/>
       <Route path = "/media" component = {Media}/>
       <Route path = "/contact" component = {Contact}/>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
