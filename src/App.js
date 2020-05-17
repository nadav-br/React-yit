import React, { useState } from 'react';
import Form from './components/Form'
import Layout from './components/Layout'
import './App.css';

const App = () => {
  const [addImage, setAddImage] = useState(null);
  const [pickColor, setPickColor] = useState('');
  const [catName, setCatName] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editSubtitle, setEditSubtitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');
  console.log("img to layout",addImage) 
  return (
    <div className="App">      
      <Form 
      setAddImage={setAddImage}
      setPickColor={setPickColor} 
      setCatName={setCatName}
      setEditTitle={setEditTitle} 
      setEditSubtitle={setEditSubtitle} 
      setEditAuthor={setEditAuthor} />  
      <Layout 
      addImage={addImage}
      pickColor={pickColor} 
      catName={catName} 
      title={editTitle}  
      subtitle={editSubtitle} 
      author={editAuthor} />
    </div>
  );
}

export default App;
