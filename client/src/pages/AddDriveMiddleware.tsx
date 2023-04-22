import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function AddDriveMiddleware() {
    const params = useParams();
    useEffect(() => {
        console.log(params);
    }, [params]);
    return <h1>Redirect</h1>;
}

export default AddDriveMiddleware;
