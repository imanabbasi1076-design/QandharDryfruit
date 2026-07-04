import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

function Protectedroute({ children }) {
const { isAdmin } = useContext(AuthContext);
if (isAdmin == true) {
    return children;
}
return <Navigate to="/login" />;
}

export default Protectedroute;
