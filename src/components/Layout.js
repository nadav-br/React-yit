import React from 'react'
import Output from './Output';

const Layout = (props) => {

    console.log("props",props)
    return (
        <div className="layout">
            {/* <img src="../assets/left.svg" alt ="Prev" className = "prev" />             */}
            <img className="imageSlider" src={props.addImage}/*"https://media-cdn.tripadvisor.com/media/photo-s/08/4c/5e/1d/see-view-terrace.jpg"*/ height="200" width="252"></img>
            <img className="imageSlider" src={props.addImage}/*"https://r-cf.bstatic.com/images/hotel/max1280x900/207/207805647.jpg"*/ height="200" width="252"></img>
            <button id="prevBtn">Prev</button>                        
            <button id="nextBtn">Next</button>

            <p className="category" style={{backgroundColor: props.pickColor, color: "rgb(255, 255, 255)"}}>{props.catName}</p>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <p>{props.author}</p>   
        </div>
    )
}

export default Layout
