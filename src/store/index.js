

import { configureStore, createReducer, createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { fetchUserRequest,fetchUserResolved,fetchUserRejected } from './actions'

const userInitialState={
    loading:false,
    user:[],
    erreur:''
}

export const  getUsers=createAsyncThunk(
    "user/getUser",
    async (dispatch,getState)=>{
        return await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>res.json())
    }
)

const userSlice=createSlice({
    name:'user',
    initialState:userInitialState,
    extraReducers:{
        [getUsers.pending]:state=>{
            state.loading=true
        },
        [getUsers.fulfilled]:(state,action)=>{
            state.loading=false;
            state.user=action.payload
            state.erreur=''
        },
        [getUsers.rejected]:(state,action)=>{
            state.loading=false;
            state.erreur=action.payload
            state.user=[]
        }
    }
    // reducers:{
    //     fetchUserRequest:state=>{
    //         state.loading=true;
    //         return
    //     },
    //     fetchUserResolved:{
    //         prepare:user=>({
    //             payload:{
    //                 ...user,
    //                 fonction:'Medecin'
    //             }
    //         }),
    //         reducer:(state,action)=>{
    //             state.loading=false;
    //             state.user=action.payload;
    //             state.erreur='';
    //             return
    //         }
    //     }
    //     },
    //     fetchUserRejected:(state,action)=>{
    //         state.loading=false;
    //     state.user=[];
    //     state.erreur=action.payload
    //     return
    //     }
    }
)

export const actions=userSlice.actions
const reducer=userSlice.reducer

export const store=configureStore({
    reducer:{
        userData:reducer
    }
})
