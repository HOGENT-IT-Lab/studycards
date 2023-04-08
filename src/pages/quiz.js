import { Box } from "@mui/material";
import { useParams } from "react-router-dom"

export default function Quiz() {
    const { quizId } = useParams();
    return (
        <Box>
            <p>This is quiz with id: {quizId}</p>
        </Box>
    )
}