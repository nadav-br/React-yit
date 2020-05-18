import React, { useState } from 'react';

const Form = (props) =>  { 

const [image, setImage] = useState([]);

console.log('image',image)

const addImg = (src) => ({
    ...src, 
    src
})

    return (
        <div className="form">            
            <div className="upload" dir="rtl">
                <input type="text" onChange={e => setImage(e.target.value)}/>
                <button onClick={() => props.setAddImage([])}>מחק</button>
                <input type="text" onChange={e => setImage(e.target.value)}/>
                <button onClick={() => props.setAddImage([])}>מחק</button>            
            </div>
            <button onClick={() => props.setAddImage(image)} className="uploadBtn" >הוסף תמונה</button>            
            <label> צבע רקע - שם קטגוריה</label>                     
            <select dir="rtl" onChange={e => {props.setPickColor(e.target.value)}}>
                <option value="">בחר צבע</option>
                <option value="red">אדום</option>
                <option value="green">ירוק</option>
                <option value="blue">כחול</option>
                <option value="yellow">צהוב</option>
            </select>
            שם קטגוריה    
            <input                         
                type="text"                         
                onChange={e => {
                    props.setCatName(e.target.value);
            }}
            />  
            כותרת
            <textarea 
            dir="rtl"
            type="text" 
            onChange={e => props.setEditTitle(e.target.value)} />
            תת-כותרת
            <textarea 
            type="text"
            dir="rtl"
            onChange={e => props.setEditSubtitle(e.target.value)} />           
            שם המחבר
            <input 
            type="text" 
            onChange={e => props.setEditAuthor(e.target.value)} />                   
        </div>
    )
}

export default Form
