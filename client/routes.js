import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import {
  UserHome,
  HomePage,
  Login,
  Signup,
  GroupList,
  Account,
  AccountSettings,
  GroceryList,
  AppCalendar,
  TaskList,
  CreateGroup,
  SingleGroup,
  GroupGroceryList,
  GroupTaskList,
  MyStats,
  Shopping,
} from "./components";
import { me } from "./store";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}

            <Route exact path={["/home", "/"]} component={UserHome} />


            <Route exact path="/account" component={Account} />
            <Route exact path="/account/settings" component={AccountSettings} />
            <Route path="/shopping" component={Shopping} />
            <Route path="/grocery" component={GroceryList} />
            <Route path="/calendar" component={AppCalendar} />
            <Route exact path="/tasks" component={TaskList} />
            <Route exact path="/groups" component={GroupList} />
            <Route exact path="/groups/create" component={CreateGroup} />
            <Route exact path="/groups/:groupId" component={SingleGroup} />
            <Route
              exact
              path="/groups/:groupId/tasks"
              component={GroupTaskList}
            />

            <Route
              path="/groups/:groupId/grocery"
              component={GroupGroceryList}
            />
            <Route exact path="/mystats" component={MyStats} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
