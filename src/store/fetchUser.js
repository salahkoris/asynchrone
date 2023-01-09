// import { fetchUserRequest,fetchUserResolved,fetchUserRejected } from './actions';
import { actions } from '.';
import axios from 'axios';

export const fetchUser=()=> (dispatch,getState)=>{
      console.log('testttt')
        dispatch(actions.fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>{
          dispatch(actions.fetchUserResolved(res.data))
        })
        .catch(err=>{
          dispatch(actions.fetchUserRejected(err.message))
        })
    }

