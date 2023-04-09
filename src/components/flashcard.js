import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function FlashCard({id, question, code, image, math,  }) {
    const [flip, setFlip] = React.useState(false);
    return (
        <Card sx={{width: "160px"}}>
            {image ?             <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="image"
            /> : ""}
            <CardContent className="flashcard-front">
            <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>Quiz nr: {id}</Typography>
            <Typography variant="body2">{question}</Typography>
            {code ? <Typography variant="body2">{code}</Typography> : ""}
            {math ? <div>{math}</div> : ""}
            </CardContent>
            <CardContent className="flashcard-back">

            </CardContent>
            <CardActionArea>

            </CardActionArea>
        </Card>
    )
}