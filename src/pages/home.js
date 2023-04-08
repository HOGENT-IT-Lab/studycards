import { Box, TextField, Typography } from "@mui/material";
import quizzes from "../data/quizzes.json";
import QuizCard from "../components/quizcard";

export default function Home() {
    return (
        <Box>
            <Typography variant="h1">Home</Typography>
            <Typography variant="h2">Content</Typography>
            <Box display="flex" gap="8px">
            {quizzes.map((quiz, _) => {
                 return <QuizCard key={quiz.id} name={quiz.name} id={quiz.id} tags={quiz.tags}/>
            })}
            </Box>
        </Box>
    )
}