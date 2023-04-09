import { AppBar, Box, Toolbar, Button, Link } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
    const navigate = useNavigate();

    const handleLogOut = useCallback(() => {
        navigate('/login', { replace: true });
    }, [navigate]);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <SchoolIcon sx={{margin: "16px"}}/>
            <Link href="/" underline="hover" variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            Study Cards
          </Link>
          <Link href="/quizzes" underline="hover" variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            My Quizzes
          </Link>
          <Link href="/quizzes/add" underline="hover" variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            Make quiz
          </Link>
          <Button color="inherit" onClick={handleLogOut} >Log Out</Button>

            </Toolbar>
        </AppBar>
        </Box>

    )
}