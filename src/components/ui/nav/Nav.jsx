import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { useLogoutMutation } from '../../../store/service/endpoints/auth.endpoint';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const nav = useNavigate();;
    const [logoutFun] = useLogoutMutation();

    const handleLogout = async (value) => {
        await logoutFun(value);
        localStorage.removeItem("token");
        nav("/");
        toast.success("Logout Successfully");
    };

    return (
        <div className=' w-full h-20 bg-white px-52 flex mx-auto items-center border-b'>
            <div className=' flex items-center justify-between w-full'>
                <h1 className=' text-xl font-semibold tracking-wider'>Contact App</h1>
                <div className=' flex justify-center items-center gap-5'>
                    <button onClick={handleLogout} className=' font-semibold text-lg text-gray-500'>Logout</button>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Nav