import { connect } from 'react-redux';

import Header from 'src/components/Header';

import {
  openBurger,
  closeBurger,
} from 'src/actions/header';

const mapStateToProps = (state) => ({
  open: state.header.open,
});

const mapDispatchToProps = (dispatch) => ({

  openBurger: () => {
    dispatch(openBurger());
  },

  closeBurger: () => {
    dispatch(closeBurger());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
