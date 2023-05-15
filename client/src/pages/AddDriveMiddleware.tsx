import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { toast } from "react-toastify";
function AddDriveMiddleware() {
    const { type, access_token } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (!type || !access_token) return;

        localStorage.setItem(type as string, access_token as string);
        api.post(
            "/user-drive",
            {
                driveName: type,
                token: access_token,
            },

            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )
            .then((res) => {
                toast.success("Drive added successfully");
                navigate("/");
            })
            .catch((err) => {
                toast.error("Something went wrong");
                navigate("/");
            });
    }, [access_token, type]);
    return <h1>Redirect</h1>;
}

export default AddDriveMiddleware;
