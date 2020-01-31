import React, { Component } from 'react';
import NotesItem from './NotesItem';
import { Link } from 'react-router-dom';

class NotesList extends Component {
	render() {
		const {notes, handleDelete, handleEdit} = this.props
		return (
			<div>
				<h1 className="title">Notes List</h1>
				<ul className="notes-list">						
					{notes.map(note => {
						return <NotesItem 
							key={note.id} 
							title={note.title}
							handleDelete={() => handleDelete(note.id)}	
							handleEdit={() => handleEdit(note.id)}	
						/>
					})}											
				</ul>
				<Link to="/create-note" className="notes-create">create note</Link>
			</div>	
		);
	}
}

export default NotesList;