/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const person = persons;

  const addNewName = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
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
        {persons.map(person => <div>{ person.name}</div>)}
        {newName}
      </div>
    </div>
  );
};

export default App;
