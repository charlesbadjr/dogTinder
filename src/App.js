import React, {Component} from 'react';
import './App.css';


class App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
          <h1> Dog Breed </h1>
          <p> You can now find a match for your purebreed with out leaving your couch </p>
          <a> create a profile to start searching </a>
      </header>
     
      <form >
      <input
         autoFocus
         required
         value="name"
         lable="Dogs Name"
        />
         <input
         value="description"
         lable="description"
        />
         <input
         required
         value="sex"
         lable="Gender"
        />
        <input
         autoFocus
         required
         value="breed"
         lable="Breed"
        />
        <input 
          required
          value="age"
          lable="Age"
        />

      </form>
    </div>
  );
 }
}

export default App;
