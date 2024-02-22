import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../App";
import Modal from "../components/UI/Modal";
import { Box, TextField, Button } from "@mui/material";

const LoginRegister = ({page}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

    const {setToken} = useContext(AuthContext);
    const navigate = useNavigate()

    const loginregister = async() => {
        if(page === 'Login'){
            try {
                const response = await axios.post('http://localhost:3001/users/login', {
                    email, password
                });
                    if(response.status === 200){
                        setToken(response.data);
                        setMessage('');
                        navigate("/");
                    }
            } catch (error) {
                console.log(error);
                setMessage(error.response.data.msg);
            }

        }else{
                try {
                    const response = await axios.post('http://localhost:3001/users/register', {
                        email, password
                    });
                        if(response.status === 200){
                            setToken(response.data);
                            setMessage('');
                            navigate("/login");
                        }
                } catch (error) {
                    console.log(error);
                    setMessage(error.response.data.msg);
                }

        }
    }

    return (
        <Modal>
            <div>
            <Box component={"form"} sx={{m:1}} noValidate autoComplete="off">
                <TextField 
                    sx={{m:1}} 
                    id="email" 
                    type="email" 
                    label="Enter your email" 
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    sx={{m:1}} 
                    id="password" 
                    type="password" 
                    label="Enter your password" 
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>
            <Button variant="container" onClick={loginregister}>{page}</Button>
            <div>{message}</div>
            {
                page === 'Login'?(<>
                <Button variant="container" onClick={() => navigate('/Register')}>Register</Button></>
                ):(<></>
            )}
        </div>
        </Modal>
      );
}

export default LoginRegister;