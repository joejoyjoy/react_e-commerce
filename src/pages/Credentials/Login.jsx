import React from 'react'
import './Credentials.css'

function Login() {

    return (
        <>
            <div className="login-page_container">
                <div className="login-page_div-1" style={{
                    backgroundImage: `url("https://images.pexels.com/photos/13581811/pexels-photo-13581811.jpeg?auto=compress&cs=tinysrgb&w=2048&h=1220&dpr=1")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                </div>
                <div className="login-page_div-2">
                </div>
            </div>
            <section className="login-background">

                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="user" className="login-lable">First name</label>
                    <input
                        type="text"
                        name="user"
                        id="user"
                        placeholder="Enter name"
                        className="login-input"
                        required
                    />
                    <label htmlFor="email" className="login-lable">Email address</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="login-input"
                        required
                    />
                    <label htmlFor="pswd" className="login-lable">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="pswd"
                        placeholder="Password"
                        className="login-input"
                        required
                    />
                    <button type="submit" className="login-btn pointer">SIGN UP</button>
                </form>

                {/* success ? (
                    <>
                        <h2>Congratulations</h2>
                        <p>You have logged in succesfully {user}</p>
                        <button className="login-btn pointer" onClick={() => handleLogout()}>LOGOUT</button>
                    </>
                ) : (
                    <>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
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
                            <label htmlFor="email" className="login-lable">Email address</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="login-input"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                            <label htmlFor="pswd" className="login-lable">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="pswd"
                                placeholder="Password"
                                className="login-input"
                                onChange={(e) => setPswd(e.target.value)}
                                value={pswd}
                                required
                            />
                            <button type="submit" className="login-btn pointer">SIGN UP</button>
                        </form>
                    </>
                )
                */}

            </section >
        </>
    )
}

export default Login