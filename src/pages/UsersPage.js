import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../store/usersSlice";
import User from "../components/User";


export default function UsersPage() {

    const {users, error, loading} = useSelector(state => state.usersReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, []);


    return (
        <>
            <h2>users</h2>

            {
                loading
                    ?
                    <p>loading...</p>
                    :
                    error
                        ?
                        <h4>{error}</h4>
                        :
                        users.map(user => <User user={user}/>)
            }
        </>
    )
}