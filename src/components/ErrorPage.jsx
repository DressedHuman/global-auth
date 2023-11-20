import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>navigate('/'), 1750)
    })
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl">4<span className='text-[red]'>0</span>4 Not Found!</h2>
            <p>Redirecting to homepage...</p>
        </div>
    );
};

export default ErrorPage;