
import {configureStore, createReducer, createSlice} from '@reduxjs/toolkit'
import { fetchUserRequest,fetchUserResolved,fetchUserRejected } from './actions'

const userInitialState={
    loading:false,
    user:[],
    erreur:''
}
const userSlice=createSlice({
    name:'user',
    initialState:userInitialState,
    reducers:{
        fetchUserRequest:state=>{
            state.loading=true;
            return
        },
        fetchUserResolved:{
            prepare:user=>({
                payload:{
                    ...user,
                    fonction:'Medecin'
                }
            }),
            reducer:(state,action)=>{
                state.loading=false;
                state.user=action.payload;
                state.erreur='';
                return
            }
        }
        },
        fetchUserRejected:(state,action)=>{
            state.loading=false;
        state.user=[];
        state.erreur=action.payload
        return
        }
    }
)

export const actions=userSlice.actions
const reducer=userSlice.reducer



export const store=configureStore({
    reducer:{
        userData:reducer
    }
})