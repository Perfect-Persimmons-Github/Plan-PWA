// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {
//   Login,
//   Signup,
// } from './components';
// // import {me} from './store';

// /**
//  * COMPONENT
//  */
// class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData();
//   }

//   render() {
//     const {isLoggedIn, role} = this.props;

//     return (
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/home" component={UserHome} />
//         <Route path="/signup" component={Signup} />
//       </Switch>
//     );
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = (state) => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id,
//     role: state.user.role,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes));

// /**
//  * PROP TYPES
//  */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// };