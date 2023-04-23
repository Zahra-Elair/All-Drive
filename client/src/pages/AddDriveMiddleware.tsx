import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddDriveMiddleware() {
    const { type, access_token } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem(type as string, access_token as string);
        navigate("/");
    }, [access_token, type]);
    return <h1>Redirect</h1>;
}

export default AddDriveMiddleware;
