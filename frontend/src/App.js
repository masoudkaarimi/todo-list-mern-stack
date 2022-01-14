import { useEffect, useState } from 'react';
import todos from './apis';
import Form from './components/Form';
import List from './components/List';
import Section from './components/Section';

let appTitle = 'To-Do App';

function App() {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const { data } = await todos.get('/todo');
			setTodoList(data['data']['message']['todos']);
		}
		fetchData();
	}, []);

	const addTodo = async (item) => {
		const { data } = await todos.post('/todo', item);
		setTodoList((oldList) => [...oldList, data['data']['message']['todo']]);
	};

	const editTodo = async (id, item) => {
		await todos.put(`/todo/${id}`, item);
	};

	const removeTodo = async (id) => {
		await todos.delete(`/todo/${id}`);
		setTodoList((oldList) => oldList.filter((item) => item._id !== id));
	};

	return (
		<div className='ui container center aligned'>
			<Section>
				<h1>{appTitle}</h1>
			</Section>
			<Section>
				<Form addTodo={addTodo} />
			</Section>
			<Section>
				<List list={todoList} editTodoListProp={editTodo} removeTodoListProp={removeTodo} />
			</Section>
		</div>
	);
}

export default App;
