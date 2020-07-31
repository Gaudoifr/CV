import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

import {
  handleChange,
  resetSubmitted,
  sumittedForm,
} from 'src/actions/contact';

const mapStateToProps = (state) => ({
  email: state.contact.email,
  content: state.contact.content,
  submitted: state.contact.submitted,
});

const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, identifier) => {
    dispatch(handleChange(value, identifier));
  },

  submittedForm: () => {
    dispatch(sumittedForm());
  },

  resetSubmitted: () => {
    dispatch(resetSubmitted());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
