/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [personExists, setPersonExists] = useState(true);

  const addNewName = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      // important: Math.random() < 0.5,
      // id: persons.length + 1,
    };

    setPersons(persons.concat(personObj));
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
        {persons.map((person) => (
          <div key={person.id}>{person.name}</div>
        ))}
        {newName}
      </div>
    </div>
  );
};

export default App;
