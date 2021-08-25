/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
const Person = props => {
  return (
    <div>
      {props.name}
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [personExists, setPersonExists] = useState(true);

  const names = persons.map(person => {
    return person.name.toLocaleLowerCase()
  })

  const personsList = persons.map(person => {
  return <Person key={person.name} name={person.name} />
})

  const addNewName = (event) => {
    event.preventDefault();
    // const personObj = {
    //   name: newName,
    //   // important: Math.random() < 0.5,
    //   // id: persons.length + 1,
    // };
    if (names.includes(newName.toLocaleLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const replacePerson = (equal, person1, person2) => {
        return person1.toUpperCase() + person2.toLocaleLowerCase()
      }

      const NameCase = newName.replace(/\b([a-zA-Z])(\w+)/g, replacePerson)

      const personObj = {
        name: NameCase
      }
      setPersons([...persons].concat(personObj));
    }
    
    setNewName("");
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <ul>
        <li>
          {persons.map((person) => {
            return (person = { person });
          })}
        </li>
      </ul> */}
      <div>
        {/* {persons.map((person) => (
          <div key={person.id}>{person.name}</div>
        ))}
        {newName} */}
        {personsList}
      </div>
    </div>
  );
};

export default App;
