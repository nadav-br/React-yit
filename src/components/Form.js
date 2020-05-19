import React, { useState, useRef} from 'react';

const Form = (props) =>  { 
const img1Ref = useRef(null);
const img2Ref = useRef(null);

const getImageSrcs = () => {
    const srcs = {};
    if(img1Ref.current.value) srcs.img1 = img1Ref.current.value;
    if(img2Ref.current.value) srcs.img2 = img2Ref.current.value;
    props.setImageSrcs(srcs);
}

    return (
        <div className="form">            
            <div className="upload" dir="rtl">
                <input type="text" ref={img1Ref}/>
                <button onClick={() => props.deleteImg('img1')}>מחק</button>
                <input type="text" ref={img2Ref} />
                <button onClick={() => props.deleteImg('img2')}>מחק</button>            
            </div>
            <button onClick={() => getImageSrcs()} className="uploadBtn" >הוסף תמונה</button>     
                   
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
