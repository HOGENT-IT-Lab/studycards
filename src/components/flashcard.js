import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./flashcard.css";

export default function FlashCard({id, question, code, image, math, answer}) {
    const [flip, setFlip] = React.useState(false);
    return (
        <Card sx={{maxWidth: "250px"}}>
        <CardActionArea sx={{display: "flex"}} className={`card ${flip ? "flip" : ""}`} onClick={() => {
                            setFlip(!flip);}}>

            {image ?             <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="image"
            /> : ""}
            <CardContent className="front">
                <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>Quiz nr: {id}</Typography>
                <Typography variant="body2">{question}</Typography>
                {code ? <Typography variant="body2">{code}</Typography> : ""}
                {math ? <div>{math}</div> : ""}
            </CardContent> <CardContent s className="back">
                <Typography variant="body2">{answer}</Typography>
            </CardContent>
        



            </CardActionArea>
        </Card>
    )
}