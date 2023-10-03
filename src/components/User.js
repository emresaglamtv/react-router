import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const { id } = useParams(); {/*  id burada string olarak durmaktadır. */}

    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => setUser(response.data))
    },[id])

    return (
        <div>
            <h1>User Detail</h1>
            {loading && <div>Loading...</div>}
            {!loading && <code>{JSON.stringify(user)}</code>} {/*  loading yoksa code lu etiketi göster demek */}

            <Link to = {`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>

        </div>
    )
}

export default User