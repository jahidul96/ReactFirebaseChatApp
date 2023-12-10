import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

function AuthPage() {
    const [login, setLogin] = useState(true);
    return (
        <>
            {login ? (
                <Login onClick={() => setLogin(!login)} />
            ) : (
                <SignUp onClick={() => setLogin(!login)} />
            )}
        </>
    );
}

export default AuthPage;
