import { useState } from 'react'
import styles from './Form.module.css'
export default function Form({todos, setTodos}) {
	const [todo, setTodo] = useState({name: '', done: false})
	
	function handleSubmit(e) {
		e.preventDefault()
		setTodos([...todos, todo])
		setTodo({ name: '', done: false })
	}
	return (
		<form className={styles.todoForm} onSubmit={handleSubmit}>
			<div className={styles.inputCon}>
				<input
					className={styles.modernInput}
					onChange={(e) => setTodo({name: e.target.value, done: false})}
					value={todo.name}
					type="text"
					placeholder="Enter Todo Item"
				/>
				<button className={styles.mordernButton} type="submit">
					Add
				</button>
			</div>
		</form>
	)
}
