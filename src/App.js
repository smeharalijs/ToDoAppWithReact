import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputVlue] = useState();
  const [edit, setEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState()

  function addText(){
    if(!inputValue){
      alert('Please enter any text')
    }else{
      const copyList = [...list];
      copyList.push(inputValue)
      setList(copyList)
      
      setInputVlue('')


    }
   
    
  }

  function deleteText(index){
    const copyList = [...list];
    copyList.splice(index, 1)
    setList(copyList)
  }

  function editText(index){
    const itemValue = list[index];
    setInputVlue(itemValue)    
    setEdit(true)
    setCurrentIndex(index)
  }

  function updateText(){
    const copyList = [...list]
    copyList[currentIndex] = inputValue
    setList(copyList)
    setEdit(false)

    setInputVlue("")

  }



function deleteAll(){
  setList([]);
  setInputVlue("");

}






  function eventsText(event){
    const value = event.target.value;
    setInputVlue(value);
  }




  return (
    <div className="App">
      <header className="App-header">

        <h1>ToDo-App</h1>

  <input onChange={eventsText} placeholder='Enter Text Here.......' value={inputValue} />
  {!edit ?
      <button onClick={addText}>Add</button>:
      <button onClick={updateText}>Update</button>
  }


  <ul>
    {list.map(function(data, index){
      return <li className={edit && currentIndex === index ? "editColor" : ''}>
        {data}
        <button id='editBtn' onClick={()=>editText(index)}>Edit</button>
        <button onClick={()=>deleteText(index)}>Delete</button>
      </li>

    })}
  </ul>


  <button id='deleteAll' onClick={deleteAll}>Delete All Text</button>
    </header>
    </div>
  );
}

export default App;
