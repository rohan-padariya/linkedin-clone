import React, { useState } from 'react'
import linkedin_main from '../icons/linkedin-main.svg'
import './Login.css'
import { db, auth } from '../config/firebase'
import { login } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const [name, setname] = useState('')
    const [photoUrl, setphotoUrl] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()
    const isLogin = false;
    const onResgister = (e) => {
        e.preventDefault();
        if (!name) {
            alert('Please enter a Full Name')
        }

        auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoUrl
            }).then(complete => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: photoUrl,
                }))
            })
        }).catch(err => {
            console.log(err)
        })
    }
    const onLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            console.log(userAuth)
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="login">
            <img src={linkedin_main} alt="" />

            <form>
                <input type="text" placeholder="Full Name (required If registering)" value={name} onChange={e => setname(e.target.value)} />
                <input type="text" placeholder="Porfile pic URL (optional)" onChange={e => setphotoUrl(e.target.value)} value={photoUrl} />
                <input type="email" placeholder="Email" onChange={e => setemail(e.target.value)} value={email} />
                <input type="password" placeholder="Password" onChange={e => setpassword(e.target.value)} value={password} />
                <button type="submit" onClick={onLogin}>SignIn</button>
            </form>

            <p>Not a Member?
                <span className="login__register" onClick={onResgister}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
