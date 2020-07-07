import React, {Component} from 'react';
import './components/Contact.css';
import ContactList from './components/ContactList';
import data from './data';

class App extends Component {
  render(){
    return (
      <div>
        <ContactList {...data} />
      </div>
    );
  }
}

export default App;
