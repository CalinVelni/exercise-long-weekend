import { useState } from 'react'
import './App.css'
import CustomList from './Components/CustomList'

function App() {

  const [allLists, setAllLists] = useState([
    {
      title: "Guests",
      type: "ul",
      list: ["Alex", "Laura", "Manuel"],
      inpValue: '',
    },
    {
      title: "Animals",
      type: "ul",
      list: ["Lion", "Hippo", "Elefant"],
      inpValue: '',
    },
    {
      title: "Shop List",
      type: "ol",
      list: ["Milk", "Sugar", "Flour"],
      inpValue: '',
    }
  ])

  return (<>

    {allLists.map((elem, i) => {

      const {title, type, list, inpValue} = elem;

      return (
        <div key={`wrapper${i}`}>

          <div key={`divAdd${i}`}>
            <input 
              key={`inp${i}`} 
              type="text"
              value={inpValue}
              onChange={e => {
                elem.inpValue = e.target.value;
                setAllLists([
                ...allLists,
              ])}}
            />
            <button
              key={`btn${i}`}
              onClick={() => {
                elem.list = [...list, inpValue];
                setAllLists([...allLists]);
                elem.inpValue = '';
                setAllLists([
                ...allLists,
              ])
              }}
            >Add</button>
          </div>

          <div key={`divList${i}`}>
            <h2>{title}</h2>
            <CustomList
              type={type}
              list={list}
              buttons={['Delete', 'Edit']}
              remove={(index) => {
                const newLists = structuredClone(allLists);
                newLists[i].list.splice(index, 1);
                setAllLists(newLists);}}
              edit={(index) => {
                if(!inpValue){return};
                const newLists = structuredClone(allLists);
                newLists[i].list[index] = newLists[i].inpValue;
                setAllLists(newLists);
              }}
            />
          </div>  

        </div>
      )
    })}


    
  </>)
}

export default App
