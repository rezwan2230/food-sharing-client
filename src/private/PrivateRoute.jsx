
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <span className="loading loading-spinner text-warning"></span>
    }
    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>


};

export default PrivateRoute;