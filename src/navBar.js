import React from 'react';
import './App.css';
import './style.css';



function ListNav(props){
    let listHtml=[]
    listHtml=props.ListNav.map((currentItem)=>(
    <li className="item-nav"><a href={currentItem.link}>{currentItem.item}</a>
        {!currentItem.dropdownContent?null:(<ul className="drop-down">
        {currentItem.dropdownContent.map((currentContent)=>

         <li><a className="link-drop" href={currentContent.link}>{currentContent.item}</a></li>
         
         )}
         </ul>
         )}
    </li>
    )

    
    )
      return <ul className="header-nav">{listHtml}</ul>
    }

export default ListNav;


// Element.map((el , i )=>{
//     if(true){
//         return(<h1>{el}</h1>)
//     }
//     else return (<h1>{el}</h1>)
// })