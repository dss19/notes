import React, { Component } from 'react';

class NotesInput extends Component {
	render() {
		const {note, handleChange, emptyInput, handleSubmit, editNote} = this.props;
		return (
			<div className="input">
				<form onSubmit={(note !== '') ? handleSubmit : emptyInput}>
					<input 
						className="input__title" 
						placeholder="Add your note" 
						value={note} 
						onChange={handleChange} 
					/>
					<button 
						className="input__btn" 
						type="submit"											
					>{editNote ? 'edit note' : 'save note'}</button>
				</form>								                
			</div>
		);
	}
}

export default NotesInput;