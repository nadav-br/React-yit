import React, { useState } from 'react'
import Output from './Output';

const Layout = (props) => {   

    
    const isMoreThen1Image = () => {
        console.log(props.imageSrcs);        
        return props.imageSrcs.length > 1;
    }

    const [moveX, setMoveX] = useState(0);

    const prevBtn = () => {
        console.log(moveX)
        moveX === 0 ? setMoveX(moveX -100) : setMoveX(moveX)
    };

    const nextBtn = () => {
        console.log(moveX)
        moveX === -100 ? setMoveX(moveX +100) : setMoveX(moveX)
    };

    return (
        <div className="layout">            
            <div className="image-section">
            <div className="image-container" style={{transform: `translateX(${moveX}%)`}}>
                {props.imageSrcs.map((url, i) => {
                    if(!url) return;
                    return <img key={i} className="image-slider" src={url} />})
                }
            </div>
            { isMoreThen1Image() &&
                <>
                    <button id="prevBtn" onClick={prevBtn}>
                    <i class="fas fa-chevron-left"></i>
                    
                    </button> 
                    
                    <button id="nextBtn" onClick={nextBtn}>
                    <i class="fas fa-chevron-right"></i>
                    </button>
                    
                </>
            }
            </div>
            <p className="category" style={{backgroundColor: props.pickColor, color: "rgb(255, 255, 255)"}}>{props.catName}</p>
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
            <p class="author">{props.author}</p>   
        </div>
    )
}


export default Layout
