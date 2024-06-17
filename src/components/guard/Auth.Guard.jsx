import React, { useEffect } from "react";
import { useProfileQuery } from "../../store/service/endpoints/auth.endpoint";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ check, token, children }) => {
    const nav = useNavigate();
    const { data, isError, isLoading } = useProfileQuery();

    useEffect(() => {
        if (check) {
            localStorage.setItem("token", JSON.stringify(token));
        } else if (isError) {
            localStorage.removeItem("token");
            nav("/");
        } else if (data) {
            nav("/home")
        }
    }, [check, data, isError]);

    return <>{isLoading ? <Loading /> : <>{children}</>}</>;
};

export default AuthGuard;
