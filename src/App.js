import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/user/userSlice';
import { db, auth } from './config/firebase'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/user/userSlice'
import Widgets from './components/Widgets';

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            console.log(userAuth)
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL,
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [])

    return (
        <div className="app">
            <Header />
            {!user ? <Login /> : (
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            )}
        </div>
    );
}

export default App;
