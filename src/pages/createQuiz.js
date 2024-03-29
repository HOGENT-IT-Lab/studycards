import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useCallback } from 'react';
import FlashCard from "../components/flashcard";
import flashcards from '../data/flashcards.json';


export default function CreateQuiz() {
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
            <FlashCard {...flashcards[0]}/>
        </Box>
    )
}