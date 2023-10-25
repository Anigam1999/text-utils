import React, { useState, useReducer } from 'react';
import textReducer from './taskReducer.js';

const initialState = {
  text: '',
  showAlert: { message: '', type: '' },
};

const actionTypes = {
    SET_TEXT: 'SET_TEXT',
    CONVERT_TO_UPPERCASE: 'CONVERT_TO_UPPERCASE',
    CONVERT_TO_LOWERCASE: 'CONVERT_TO_LOWERCASE',
    CLEAR_TEXT: 'CLEAR_TEXT',
    REVERSE_TEXT: 'REVERSE_TEXT',
    COPY_TEXT: 'COPY_TEXT',
    HANDLE_EXTRA_SPACES: 'HANDLE_EXTRA_SPACES',
};

export default function TextForm(props) {
  const [state, dispatch] = useReducer(textReducer, initialState);
  
  const handleOnChange = (event) => {
      dispatch({ type: actionTypes.SET_TEXT, payload: event.target.value });
    };
    
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={state.text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="myBox"
            rows="10"
            ></textarea>
        </div>
        <button disabled={state.text.length === 0} className="btn btn-primary mx-1 my-1" onClick={async () => {
            // all other function can be modified for status
            await dispatch({ type: actionTypes.CONVERT_TO_UPPERCASE })
            props.showAlert(state.showAlert.message, state.showAlert.type)
        }}>
          Convert to Uppercase
        </button>
        <button disabled={state.text.length === 0} className="btn btn-primary mx-1 my-1" onClick={() => dispatch({ type: actionTypes.CONVERT_TO_LOWERCASE })}>
          Convert to Lowercase
        </button>
        <button disabled={state.text.length === 0} className="btn btn-primary mx-1 my-1" onClick={() => dispatch({ type: actionTypes.CLEAR_TEXT })}>
          Clear Text
        </button>
        <button disabled={state.text.length === 0} className="btn btn-primary mx-1 my-1" onClick={() => dispatch({ type: actionTypes.REVERSE_TEXT })}>
          Reverse Text
        </button>
        <button disabled={state.text.length === 0} className="btn btn-primary mx-1 my-1" onClick={() => dispatch({ type: actionTypes.COPY_TEXT })}>
          Copy Text
        </button>
        <button disabled={state.text.length === 0} className="btn btn-primary mx-1 my-1" onClick={() => dispatch({ type: actionTypes.HANDLE_EXTRA_SPACES })}>
          Handle Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{state.text === '' ? 0 : state.text.trim().split(/\s+/).length} words, {state.text.length} characters</p>
        <p>{state.text === '' ? 0 : state.text.trim().split(' ').length * 0.008} to read.</p>
        <h2>Preview</h2>
        <p>{state.text.length > 0 ? state.text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
}
