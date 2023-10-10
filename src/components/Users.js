import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom'
import { useRouteMatch } from "react-router-dom"

import axios from 'axios';
import User from './User';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Users() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const { path, url } = useRouteMatch();

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(response => setUsers(response.data))
            .finally(() => setLoading(false))
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {loading && <div>Loading...</div>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <NavLink activeClassName="active" to={`/${url}/${user.id}`}>{user.name}</NavLink>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User} />
            </Switch>

        </div>
    );
}

export default Users