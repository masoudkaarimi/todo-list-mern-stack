import React, { useState } from 'react';

const Form = ({ addTodo }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim() === '') return;

		addTodo({ title: inputValue, completed: false });
		setInputValue('');
	};

	return (
		<form className='ui form' onSubmit={handleFormSubmit}>
			<div className='ui grid center aligned'>
				<div className='row'>
					<div className='column five wide'>
						<input
							type='text'
							placeholder='Enter something to do...'
							value={inputValue}
							onChange={handleInputChange}
						/>
					</div>
					<div className='column one wide'>
						<button
							type='submit'
							className='ui button circular icon green'
							style={{ cursor: inputValue.trim() === '' ? 'not-allowed' : 'pointer' }}
							disabled={inputValue.trim() === '' ? true : false}>
							<i className='plus icon white'></i>
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Form;
