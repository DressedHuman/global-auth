import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    return <span className="flex justify-center items-center text-center">
        {
            (loading && <span className="loading loading-ball loading-lg text-[green]" />) || (user && children) || <Navigate to={'/login'} />
        }
    </span>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;