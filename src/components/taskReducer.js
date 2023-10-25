const actionTypes = {
    SET_TEXT: 'SET_TEXT',
    CONVERT_TO_UPPERCASE: 'CONVERT_TO_UPPERCASE',
    CONVERT_TO_LOWERCASE: 'CONVERT_TO_LOWERCASE',
    CLEAR_TEXT: 'CLEAR_TEXT',
    REVERSE_TEXT: 'REVERSE_TEXT',
    COPY_TEXT: 'COPY_TEXT',
    HANDLE_EXTRA_SPACES: 'HANDLE_EXTRA_SPACES',
  };
  
export default function textReducer(state, action) {
switch (action.type) {
    case actionTypes.SET_TEXT:
    return { ...state, text: action.payload };
    case actionTypes.CONVERT_TO_UPPERCASE:
    return {
        ...state,
        text: state.text.toUpperCase(),
        showAlert: { message: 'Converted to uppercase!', type: 'success' },
    };
    case actionTypes.CONVERT_TO_LOWERCASE:
    return {
        ...state,
        text: state.text.toLowerCase(),
        showAlert: { message: 'Converted to lowercase!', type: 'success' },
    };
    case actionTypes.CLEAR_TEXT:
    return {
        ...state,
        text: '',
        showAlert: { message: 'Text Cleared!', type: 'success' },
    };
    case actionTypes.REVERSE_TEXT:
    return {
        ...state,
        text: state.text.split('').reverse().join(''),
        showAlert: { message: 'Text Reversed!', type: 'success' },
    };
    case actionTypes.COPY_TEXT:
    navigator.clipboard.writeText(state.text);
    return { ...state, showAlert: { message: 'Text copied to Clipboard!', type: 'success' } };
    case actionTypes.HANDLE_EXTRA_SPACES:
    return {
        ...state,
        text: state.text.split(/[ ]+/).join(' '),
        showAlert: { message: 'Extra Spaces handled!', type: 'success' },
    };
    default:
    return state;
}
}