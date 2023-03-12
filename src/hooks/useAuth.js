import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useAuth() {
    const { token } = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        // const token = localStorage.getItem('token')


        if (!token) navigate('/signin')
    }, [navigate, token])

    return {token}
}