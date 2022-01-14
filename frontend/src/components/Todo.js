import React, { useState } from 'react';

const Todo = ({ title, completed, editTodoItemProp, removeTodoItemProp }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState(title);
	const [tempValue, setTempValue] = useState(title);
	const [completedState, setCompletedState] = useState(completed);

	const handleDoubleClick = () => {
		setIsEditing(true);
	};

	const handleInputKeyDown = (e) => {
		const key = e.keyCode;
		if (key === 13) {
			editTodoItemProp({ title: tempValue });
			setValue(tempValue);
			setIsEditing(false);
		} else if (key === 27) {
			setTempValue(value);
			setIsEditing(false);
		}
	};

	const handleInputOnChange = (e) => {
		setTempValue(e.target.value);
	};

	const handleButtonClick = () => {
		setCompletedState((oldCompleted) => {
			const newState = !oldCompleted;
			editTodoItemProp({ completed: newState });
			return newState;
		});
	};

	return (
		<div className='row'>
			{isEditing ? (
				<div className='column seven wide'>
					<div className='ui input fluid'>
						<input
							type='text'
							onKeyDown={handleInputKeyDown}
							autoFocus={true}
							value={tempValue}
							onChange={handleInputOnChange}
						/>
					</div>
				</div>
			) : (
				<>
					<div className='column five wide' onDoubleClick={handleDoubleClick}>
						<h2 className={`ui header ${completedState ? 'green' : ''}`}>{value}</h2>
					</div>
					<div className='column one wide'>
						<button
							type='submit'
							className={`ui button circular icon  ${completedState ? 'green' : ''}`}
							onClick={handleButtonClick}>
							<i className='check icon white'></i>
						</button>
					</div>
					<div className='column one wide'>
						<button type='submit' className='ui button circular icon red' onClick={removeTodoItemProp}>
							<i className='remove icon white'></i>
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Todo;
