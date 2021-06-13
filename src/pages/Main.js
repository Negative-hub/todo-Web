import React, {Fragment, useContext, useEffect} from 'react';
import { Form } from '../components/Form';
import { TodoList } from '../components/TodoList';
import {FireBaseContext} from "../context/fireBase/fireBaseContext";
import {Loader} from "../components/Loader";

export const Main = () => {

	const {loading, fetchNotes, notes, removeNote} = useContext(FireBaseContext)

	useEffect(() => {
		fetchNotes()
		// eslint-disable-next-line
	}, [])

	return (
		<Fragment>
			<h1 className='main__title'><strong>TODO's App</strong></h1>
			<Form />

			<hr />

			{ loading
				? <Loader />
				: <TodoList notes={notes} onRemove={removeNote}/>
			}
		</Fragment>
	)
}