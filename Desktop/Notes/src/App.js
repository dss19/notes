import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import uuid from 'uuid';
import './App.css';
import NotesInput from './components/NotesInput';
import NotesList from './components/NotesList';
 

class App extends Component {
  // Начальное состояние
  state = {
    notes: [],
    id: uuid(),
    note: '',    
    editNote: false
  }
  // Метод получения данных из поля ввода
  handleChange = (e) => {
    this.setState({
      note: e.target.value      
    });
  }
  
  // Проверка на пустое поле ввода
  emptyInput = (e) => {
    e.preventDefault();
    return false
  }

  // Метод создания новой заметки
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
    this.props.history.push('/');
    // window.location.href = '/';       
  }   

  // Метод удаления заметки
  handleDelete = (id) => {
    const filteredNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: filteredNotes
    });
  }

  // Метод редакторования заметки
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

  // Хранение данных в LocalStorage
  userNotes;
  componentDidMount() {
    this.userNotes = JSON.parse(localStorage.getItem('notes'))
    if (localStorage.getItem('notes')) {
      this.setState({
        notes: this.userNotes.notes
      })
    }
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('notes', JSON.stringify(nextState))
  }  

  // Отрисовка компонент
  render() {    
    return (      
      <div className="wrapper">          
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
      </div> 
    );
  }
}

export default withRouter(App);