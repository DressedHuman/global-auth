import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const { user, loading } = useContext(AuthContext);
    return <span>
        {
            (loading && <span className="loading loading-lg loading-ball"/>) || <h2 className="text-3xl">Welcome, {user?.email || "Farhana Humayara"}!</h2>
        }
    </span>;
};

export default Home;