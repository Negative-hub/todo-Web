import {ACTION_FETCH, ADD_NOTE, REMOVE_NOTE, SHOW_LOADER} from "../type";

const handlers = {
    DEFAULT: state => state,
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [payload, ...state.notes],
        loading: false}),
    [ACTION_FETCH]: (state, {payload}) => ({
      ...state, notes: payload, loading: false
    }),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note =>
            note.id !== payload
        )
    }),
}

export const fireBaseReducer = (state, action) => {
    const handle = handlers[action.type] || action.DEFAULT
    return handle(state, action)
}