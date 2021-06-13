import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";

export const TodoList = ({notes, onRemove}) => (
	<TransitionGroup component='ul' className="list-group">
		{notes.map(note => (
			<CSSTransition
				key={note.id}
				timeout={600}
				classNames={'note'}
			>
				<li
					className="list-group-item"
					key={note.id}
				>
					<div>
						<strong>{note.text}</strong>&nbsp;
						<small>{note.date}</small>
					</div>

					<button
						onClick={() => onRemove(note.id)}
						type='button'
						className= 'btn btn-outline-danger btn-sm'
					>
						&times;
					</button>
				</li>
			</CSSTransition>
			)
		)}
	</TransitionGroup>
)