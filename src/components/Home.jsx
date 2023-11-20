import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const { user, loading } = useContext(AuthContext);
    return <span className="flex justify-center items-center">
        {
            (loading && <span className="loading loading-lg loading-ball text-[green]"/>) || <h2 className="text-3xl">Welcome, {user?.displayName || user?.email || "User"}!</h2>
        }
    </span>;
};

export default Home;