import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import Modal from "../components/UI/Modal";

const Auth = (props) => {
    const [redirect , setRedirect] = useState(false);
    const {token} = useContext(AuthContext)

    useEffect(() => {
        verify()
    },)

    const verify = async() => {
        try {
            const response = await axios.get('http://localhost:3001/users/verify', {
                headers :{
                    'x-access-token':token.token
                }
            })
            if(response.status === 200) setRedirect(true)
        } catch (error) {
            setRedirect(false)
        }
    }

    return redirect? props.children : <Modal>You're not connected</Modal>
}

export default Auth