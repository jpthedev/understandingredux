import React, {useEffect} from 'react'
import {fetchUser} from '../redux/user/userAction'
import {connect} from 'react-redux';


function Users({ userData, fetchUser }) {
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div>
            { userData.loading && <h2>Loading</h2> }
            { userData.error && <h2>Error</h2> }
            { userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
