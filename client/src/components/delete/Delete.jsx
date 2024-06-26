import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as postService from "../../services/postService";

export default function Delete() {
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        postService
            .remove(postId)
            .then((result) => {
                navigate("/dashboard");
            })
            .catch((err) => console.log(err));
    }, []);

    return null;
}
