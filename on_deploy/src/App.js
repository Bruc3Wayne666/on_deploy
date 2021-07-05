import './App.css';
import Header from "./components/header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from "./components/profile/Profile.jsx";
import Dialogs from "./components/dialogs/Dialogs";
import classes from "./App.css";
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

// component
const App = props => {
    const ShowDialogs = () => <DialogsContainer />
    const ShowUsers = () => <UsersContainer />
    const ShowProfile = () => <Profile />

    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ShowDialogs}/>
                <Route path='/users' render={ShowUsers}/>
                <Route exact path='/profile' render={ShowProfile}/>
            </div>
        </div>
    )
}


export default App;
