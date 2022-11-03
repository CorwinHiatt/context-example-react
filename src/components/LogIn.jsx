import { useContext } from "react";
import { UserContext } from "../App";

export default function LogIn(){
    const {user , setUser } = useContext(UserContext)
    return (
        <>
        {!user
        ? <button onClick={() => setUser('Corwin')}>Log-In</button>
        : null 
    }
        </>

    )
}