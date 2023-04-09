import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";

export default function FlashCard({id, question, code, image, math, answer}) {
    const [flip, setFlip] = React.useState(false);
    return (
        <Card className={`${flip ? "flip" : ""}`}
        sx={{width: "160px",
        transform: "rotateY(var(--rotate-y, 0))",
        transformStyle: "preserve-3d",
        transition: "1500ms",
        cursor: "pointer",
        transform: "perspective(5000px) rotateY(var(--rotate-y, 0)) translateY(var(--translate-y, 0))",
        "&:active": {
            translate: "-2px",
            boxShadow: "0 0 5px 2px rgba(0, 0, 0, .5)"
        },
        "&.flip": {
            rotate: "y 180deg",
        }
        }}>
                        <CardActionArea onClick={() => {
                            setFlip(!flip);}}>

            {image ?             <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="image"
            /> : ""}
            { flip ?             <CardContent sx={{ backfaceVisibility: "hidden",
  transform: "rotateX(0deg)"}} className="flashcard-front">
                <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>Quiz nr: {id}</Typography>
                <Typography variant="body2">{question}</Typography>
                {code ? <Typography variant="body2">{code}</Typography> : ""}
                {math ? <div>{math}</div> : ""}
            </CardContent> :             <CardContent sx={{
                
                  transform: "rotateY(180deg)"
            }} className="flashcard-back">
                <Typography variant="body2">{answer}</Typography>
            </CardContent>
            }



            </CardActionArea>
        </Card>
    )
}