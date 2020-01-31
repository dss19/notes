import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NotesItem extends Component {
	render() {
		const {title, handleDelete, handleEdit} = this.props
		return (
			<li className="notes-item">
				<Link to="/create-note" className="notes-item__title" onClick={handleEdit}>{title}</Link>
				<i className="delete fas fa-trash" onClick={handleDelete}></i>	
			</li>
		);
	}
}

export default NotesItem;