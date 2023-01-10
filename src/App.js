import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch,useStore} from 'react-redux'
import { fetchUser } from './store/fetchUser';
import { getUsers } from './store';



function App() {
  // const dispatch=useDispatch()
  const nom=useSelector(state=>state.userData.user.name)
  const email=useSelector(state=>state.userData.user.email)
  const store=useStore()
  return (
    <div className="App">
      <h1>Asynchrone exemple</h1>
      <hr />
      <h1>nom: {nom}</h1>²
      <h1>Email: {email}</h1>
      <hr />
      <button onClick={()=>{store.dispatch(getUsers())}}>Charger Données</button>
    </div>
  );
}

export default App;
