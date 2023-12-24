import React from "react";
import { Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import EditProfile from "./EditProfile";

const Users = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.url}/edit-profile/:userId`} component={EditProfile} />
			<Route path={`${match.url}`} component={UserList} />
		</Switch>
	)
}

export default Users