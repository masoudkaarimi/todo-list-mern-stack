import React from 'react';
import Todo from './Todo';

const List = ({ list, editTodoListProp, removeTodoListProp }) => {
	const renderList = list.map((item, index) => {
		const { _id, title, completed } = item;
		return (
			<Todo
				key={index}
				title={title}
				completed={completed}
				editTodoItemProp={(updatedItem) => editTodoListProp(_id, updatedItem)}
				removeTodoItemProp={() => removeTodoListProp(_id)}
			/>
		);
	});

	return <div className='ui grid center aligned'>{renderList}</div>;
};

export default List;
