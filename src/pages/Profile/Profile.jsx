import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContext'

function Profile() {
    const { logout, user, setUser, email, setEmail, pswd, setPswd, setAvatar } = useAuthContext();

    function handleChange(e) {
        e.preventDefault()
        setAvatar(user);
    }

    function handleLogout(e) {
        e.preventDefault()
        setUser('');
        setEmail('');
        setPswd('');
        setAvatar('');

        logout()
    }

    return (
        <>
            <div className="profile-page_container">
                <div className="profile-page_div-1" style={{
                    backgroundImage: `url("https://images.pexels.com/photos/13581811/pexels-photo-13581811.jpeg?auto=compress&cs=tinysrgb&w=2048&h=1220&dpr=1")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                </div>
                <div className="profile-page_div-2">
                </div>
            </div>
            <section className="profile-background">

                <h3>Profile</h3>
                <p>Change your information</p>

                <form onSubmit={handleChange}>
                    <label htmlFor="user" className="login-lable">First name</label>
                    <input
                        type="text"
                        name="user"
                        id="user"
                        placeholder="Enter name"
                        className="login-input"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor="email" className="login-lable">Email address &#40;Not editable&#41;</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="login-input"
                        readOnly
                        value={email}
                        required
                    />
                    <label htmlFor="pswd" className="login-lable">Password</label>
                    <input
                        type="text"
                        name="password"
                        id="pswd"
                        placeholder="Password"
                        className="login-input"
                        onChange={(e) => setPswd(e.target.value)}
                        value={pswd}
                        required
                    />
                    <button type="submit" className="login-btn pointer">APPLY CHANGES</button>
                </form>
                <Link to={'/profile/logout'} onClick={handleLogout} className="profile-btn pointer">LOGOUT</Link>

            </section >
        </>
    )
}

export default Profile