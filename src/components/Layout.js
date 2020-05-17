import React from 'react'
import Output from './Output';

const Layout =(props) => {

    
    return (
        <div className="layout">            
                        <img src={props.addImage} height="200" width="252"></img>                        
                        <p className="category" style={{backgroundColor: props.pickColor, color: "rgb(255, 255, 255)"}}>{props.catName}</p>
                        <h3>{props.title}</h3>
                        <p>{props.subtitle}</p>
                        <p>{props.author}</p>
                   
            
                      
        </div>
    )
}

export default Layout
