import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)

    const [theme, setTheme]  = useState('light')

    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        // console.log(localTheme);
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])



    const handleToggleTheme = (e) => {
        // console.log(e.target.checked);
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
        
    }

    return (
        <div>
            <div className="navbar px-6 md:px-14 bg-base-100 mt-6 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} >Home</NavLink></li>

                            <li>
                                <NavLink to={'/all-items'}>All Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/add-craft'}>Add Item</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/my-arts'}>My Items</NavLink>
                            </li>
                            <li>
                                {/* <NavLink to={'/update-profile'}>Update Profile</NavLink> */}
                            </li>

                            {/* <li><a>Home</a></li> */}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl" href="/">ArtNest</a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {/* <li><a>Home</a></li> */}
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                                <NavLink to={'/all-items'}>All Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/add-craft'}>Add Item</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/my-arts'}>My Items</NavLink>
                            </li>

                        <li>
                            {/* <NavLink to={'/update-profile'}>Update Profile</NavLink> */}
                        </li>


                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    <ul className="menu flex justify-center menu-horizontal px-1">
                        {/* <li>
                            <NavLink to={'/update-profile'}>Update Profile</NavLink>
                        </li> */}
                        {/* <li><a>User Profile</a></li> */}
                        {/* <li>
                            <NavLink to={'/login'}>Login</NavLink>
                        </li> */}

                        <li>
                            <NavLink to={'/register'}>Register</NavLink>
                        </li>

                        {/* <li>
                            <NavLink to={'/register'}>Logout</NavLink>
                        </li> */}
                    </ul>
                    <div>
                        {user ?
                            <div className='flex justify-center items-center gap-5'>
                                <div className="text-black avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <div className="w-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>

                                </div>
                                <button onClick={() => logOut()} className='btn btn-sm btn-primary'>Logout</button>

                            </div> :

                            <button className='btn btn-xs h-9 btn-primary'>
                                <NavLink to={'/login'}>Login</NavLink>
                            </button>

                        }
                    </div>
                    <div className="pl-4">
                        <label className="cursor-pointer grid place-items-center">
                            <input onChange={handleToggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;