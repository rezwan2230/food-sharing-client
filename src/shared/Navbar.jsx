import { Link, useNavigate } from "react-router-dom";
import '../shared/Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userPic from '../assets/user.png'
import logo from '../assets/logo.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const menu = <>
        <li><Link>Home</Link></li>
        <li><Link to='/availablefood'>Available Food</Link></li>

        {
            user && <><li><Link to='/addfood'>Add Food</Link></li>
                <li><Link to='/managemyfood'>Manage My Food</Link></li>
                <li><Link to='myfoodrequest'>My Food Request</Link></li></>
        }

    </>

    const handleLogout = () => {
        logOut()
            .then(result => {
                navigate('/')
                console.log(result.user);
            })
            .then(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="w-full bg-white">
            <div className="navbar bg-base-100 mt-5 container mx-auto pb-4">
                <div className="navbar-start flex">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <div className="ml-[90px] md:ml-[250px] lg:ml-[0px]">
                        <img className="h-16 " src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>


                <div className="navbar-end">
                    {
                        user && <div className="text-lg font-semibold mr-2">{user?.displayName}</div>
                    }
                    {
                        user ? <>
                            <img className="rounded-3xl h-10 w-10" src={user?.photoURL} alt="" />
                        </> :
                            <div className="w-10 rounded-full">
                                <img src={userPic} />
                            </div>
                    }
                    {
                        user ? <button onClick={handleLogout} className="ml-2 btn btn-sm">Log Out</button> : <Link to='/login'><button className="btn btn-sm ml-2">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;