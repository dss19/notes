import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import uuid from 'uuid';
import './App.css';
import NotesInput from './components/NotesInput';
import NotesList from './components/NotesList';

class App extends Component {
  state = {
    notes: [],
    id: uuid(),
    note: '',    
    editNote: false
  }

  handleChange = (e) => {
    this.setState({
      note: e.target.value      
    });
  }
  
  emptyInput = (e) => {
    e.preventDefault();
    return false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: this.state.id,
      title: this.state.note
    }
    const updatedNotes = [...this.state.notes, newNote];
    this.setState({
      notes: updatedNotes,
      id: uuid(),
      note: '',
      editNote: false
    });    
  }

  handleDelete = (id) => {
    const filteredNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: filteredNotes
    });
  }

  handleEdit = (id) => {
    const filteredNotes = this.state.notes.filter(note => note.id !== id);
    const selectedNote = this.state.notes.find(note => note.id === id);
    this.setState({
      notes: filteredNotes,
      note: selectedNote.title,
      editNote: true,
      id: id
    });
  }

  render() {    
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Switch>
            <Route exact path='/' render={() => <NotesList 
                notes={this.state.notes}
                handleDelete={this.handleDelete} 
                handleEdit={this.handleEdit} 
              />}/>
            <Route path='/create-note' render={() => <NotesInput 
                note={this.state.note} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editNote={this.state.editNote}
                emptyInput={this.emptyInput}           
            />}/>
          </Switch>
        </div>        
      </BrowserRouter>
    );
  }
}

export default App;

