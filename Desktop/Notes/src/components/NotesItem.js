import React, { Component } from 'react';

class NotesItem extends Component {
	render() {
		const {title, handleDelete, handleEdit} = this.props
		return (
			<li className="notes-item">
				<span className="notes-item__title" onClick={handleEdit}>{title}</span>
				<i className="delete fas fa-trash" onClick={handleDelete}></i>	
			</li>
		);
	}
}

export default NotesItem;