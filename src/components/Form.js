import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FireBaseContext} from "../context/fireBase/fireBaseContext";

export const Form = ({add}) => {
	const [value, setValue] = useState('')
	const alert = useContext(AlertContext)
	const fireBase = useContext(FireBaseContext)

	const submitHandler = (event) => {
		event.preventDefault()

		if (value.trim()) {
			fireBase.addNote(value).then(() => {
				alert.show('Заметка успешно создана', 'success')
			}).catch(() => {
				alert.show('Что-то пошло не так', 'danger')
			})
			setValue('')
		} else alert.show('Введите название заметки')
	}

	return (
		<form className='form' onSubmit={submitHandler}>
			<input 
				className="form-control" 
				placeholder='Enter some task'
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
			<select>
				<option>All</option>
				<option>All</option>
				<option>All</option>
			</select>
		</form>
	)
}