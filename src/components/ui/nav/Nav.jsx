import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { useLogoutMutation } from '../../../store/service/endpoints/auth.endpoint';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const nav = useNavigate();;
    const [logoutFun] = useLogoutMutation();

    const handleLogout = async (value) => {
        localStorage.removeItem("token");
        await logoutFun(value);
        nav("/");
        toast.success("Logout Successfully");
    };

    return (
        <div className=' w-full h-20 bg-white px-52 flex mx-auto items-center border-b'>
            <div className=' flex items-center justify-between w-full'>
                <h1 className=' text-xl font-bold tracking-widest'>Contact App</h1>
                <div className=' flex justify-center items-center gap-5'>
                    <button onClick={handleLogout} className=' font-semibold text-lg text-gray-700'>Logout</button>
                    <Avatar>
                        <AvatarImage src="/images/profile1.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Nav