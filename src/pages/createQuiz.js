import { Box, Button, TextField, Typography } from "@mui/material";

export default function createQuiz() {
    const [quiz, setQuiz] = React.useState({flashcards: []});
    return (
        <Box>
            <Typography>{quiz.name ?? ""}</Typography>
            <TextField label="title"/>
            {
                quiz.flashcards.map((flashcard, index)=> {
                    return <div key={index}>card</div>
                })
            }
            <Button>Add Card</Button>
        </Box>
    )
}