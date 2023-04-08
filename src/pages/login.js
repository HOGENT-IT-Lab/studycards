import { BottomNavigation, BottomNavigationAction, Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';


export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [emailErrorText, setEmailErrorText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordErrorText, setPasswordErrorText] = React.useState("");

    const handleGoHome = useCallback(() => {
        console.log(password);
        if (email === "test@email.com" && password === "test") {
        navigate('/', { replace: true });
        } else if (email.length < 1) {
            setEmailErrorText("Please fill in your email")
        } else if (password.length < 1) {
            setPasswordErrorText("Please fill in your password")
        } else {
            setPasswordErrorText("Credentials incorrect")
        }
      }, [navigate, email, password]);
    return (
        <Box display="flex" sx={{padding: "32px"}} gap={8}>
            <Box sx={{"& img":{borderRadius: "16px"}, display: {xs: "none", md: "inherit"}}}> <img src="https://media.istockphoto.com/id/1158413597/photo/composition-with-books-on-the-table.jpg?b=1&s=612x612&w=0&k=20&c=1Cj1VvIOj9oR26x5MNu5EceO9JY00wCFO4qJPeCfcLY="/></Box>
            <Box display="flex" flexDirection="column" alignItems="center" gap="16px">
            <Box>
            <Typography variant="h3">Welcome to Study Cards!</Typography>
            </Box>

            <Box sx={{border:"1px solid grey", borderRadius:"16px", padding:"16px"}} display="flex" flexDirection="column" alignItems="center" gap="8px">
                <Typography variant="h5">Please log in first</Typography>

                <TextField helperText={emailErrorText} error={!!(emailErrorText.length > 0)} label="email" onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailErrorText("");
                    }}/>
                <TextField helperText={passwordErrorText} error={!!(passwordErrorText.length > 0)} type="password" label="password" onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordErrorText("");
                    }}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                          handleGoHome();
                          ev.preventDefault();
                        }
                      }}/>
                <Box sx={{display:"flex", gap:"8px", alignItems:"center", justifyContent:"center" }}>
                    <Button variant="contained" onClick={handleGoHome}>Log In</Button>
                    <Link>Forgot email or password?</Link>
                </Box>
            </Box>
            <BottomNavigation>
                <BottomNavigationAction icon={<SchoolIcon/>}/>
            </BottomNavigation>
        </Box>
        </Box>

    )
}