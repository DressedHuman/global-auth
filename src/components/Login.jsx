import { Link } from "react-router-dom";

const Login = () => {


    const handleLogin = e => {
        e.preventDefault();
        const [email, password] = [e.target.email.value, e.target.password.value];
        console.log(name, email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm p-3 bg-base-100">
                    <form onSubmit={handleLogin} className="grid grid-cols-1 gap-3">
                        <div className="flex">
                            <span className="w-[125px] bg-[green] rounded-lg rounded-r-none flex justify-center items-center text-lg font-semibold text-white px-2">Email</span>
                            <input type="email" name="email" placeholder="Your email" className="input border-2 border-[#5f5f5f5f] focus:outline-none rounded-l-none w-full" autoFocus required />
                        </div>
                        <div>
                            <span className="flex">
                                <span className="w-[125px] bg-[green] rounded-lg rounded-r-none flex justify-center items-center text-lg font-semibold text-white px-2">Password</span>
                                <input type="password" name="password" placeholder="Your password" className="input rounded-l-none border-2 border-[#5f5f5f5f] w-full focus:outline-none" required />
                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center my-2">New to Global Auth? Register <Link to={'/register'} className="btn-link">here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;