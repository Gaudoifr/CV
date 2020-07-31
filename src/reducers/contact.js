import {
  CHANGE_VALUE_FORM,
  FORM_SUBMITTED,
  RESET_SUBMITTED,
} from 'src/actions/contact';

const initialState = {
  email: '',
  content: '',
  submitted: false,
};

const contactReducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case CHANGE_VALUE_FORM:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case FORM_SUBMITTED:
      return {
        ...state,
        submitted: true,
      };

    case RESET_SUBMITTED:
      return {
        ...state,
        submitted: false,
      };
    default: return state;
  }
};

export default contactReducer;
