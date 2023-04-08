import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    const handleGoHome = useCallback(() => {
        navigate('/', { replace: true });
      }, [navigate]);
    return (
        <Box>
            <Typography variant="h1">Study Cards</Typography>
            <Typography variant="h2">Log In</Typography>
            <Box>
                <TextField label="email"/>
                <TextField label="password"/>
                <Button variant="contained" onClick={handleGoHome}>Log In</Button>
            </Box>
        </Box>
    )
}