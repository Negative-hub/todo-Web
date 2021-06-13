import React, {useContext, useReducer} from "react";
import axios from "axios";
import {FireBaseContext} from "./fireBaseContext";
import {fireBaseReducer} from "./fireBaseReducer";
import {ACTION_FETCH, ADD_NOTE, REMOVE_NOTE, SHOW_LOADER} from "../type";
import {AlertContext} from "../alert/alertContext";

const url = process.env.REACT_APP_DB_URL

export const FireBaseState = ({children}) => {

    const initialState = {
        notes: [],
        loading: true
    }
    const {show} = useContext(AlertContext)
    const [state, dispatch] = useReducer(fireBaseReducer, initialState)

    const showLoader = () => {dispatch({type: SHOW_LOADER})}

    const fetchNotes = async () => {
        const res = await axios.get(`${url}/notes.json`)

        try {
            const payload = Object.keys(res.data).map(key => {
                return {...res.data[key], id: key}
            })

            dispatch({payload, type: ACTION_FETCH})
        } catch (e) {
            console.log(e.message)
        }
    }

    const addNote = async (text) => {
        const note = {
            text, date: new Date().toLocaleDateString()
        }

        const res = await axios.post(`${url}/notes.json`, note)

        dispatch({
            payload: {...note, id: res.data.name},
            type: ADD_NOTE
        })


        console.log(state)

        //fetchNotes()
    }

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })

        show('Запись успешно удалена', 'primary')
    }

    return (
        <FireBaseContext.Provider value = {{
            showLoader, addNote, fetchNotes, removeNote,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FireBaseContext.Provider>
    )
}