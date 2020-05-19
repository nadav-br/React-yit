import React, { useState } from 'react';
import Form from './components/Form'
import Layout from './components/Layout'
import './App.css';

const App = () => {

  const [imageSrcs, setImageSrcs] = useState({});  
  const [pickColor, setPickColor] = useState('');
  const [catName, setCatName] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editSubtitle, setEditSubtitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');  

  const deleteImg = key => {    
    let newObjState = Object.assign({}, imageSrcs);
    delete newObjState[key];
    setImageSrcs(newObjState);   
  }

  return (
    <div className="App">      
      <Form 
      setImageSrcs={setImageSrcs}
      deleteImg={deleteImg}
      setPickColor={setPickColor} 
      setCatName={setCatName}
      setEditTitle={setEditTitle} 
      setEditSubtitle={setEditSubtitle} 
      setEditAuthor={setEditAuthor} />  
      <Layout 
      imageSrcs={Object.values(imageSrcs)}
      pickColor={pickColor} 
      catName={catName} 
      title={editTitle}  
      subtitle={editSubtitle} 
      author={editAuthor}
      />
    </div>
  );
}

export default App;
