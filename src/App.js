import React from 'react';
import './App.css';
import './style.css';
import ListNav from './navBar.js'

let listNav=[
  {
    item : "Home",
    link : "home.html",
    
  },
  {
  item : "About",
  link : "about.html",
},{
  item : "Service",
  link : "service.html",
  dropdownContent:[{item:"For Student", link:"#"},{item:"For entrepreneur",link:"#"},{item:"For hobbyists",link:"#"}]
},
{
  item : "Contact",
  link : "Contact.html",
}]


function App() {
  return (
    <div className="App">
    <header>
    <ListNav ListNav={listNav}></ListNav>
    </header>
    </div>
  );
}

export default App;
