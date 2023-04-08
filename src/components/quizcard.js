import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function QuizCard({id, name, tags}) {
    return (
    <Card>
        <CardContent>
            <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>Quiz nr: {id}</Typography>
            <Typography variant="h5">{name}</Typography>
            {tags.map((tag) => {
               return <Typography variant="body2">{tag}</Typography>
            })
            }
        </CardContent>
        <CardActions>
            <Button size="small">Take Quiz</Button>
            <Button size="small">Edit</Button>
            <Button size="small">Remove</Button>
        </CardActions>
    </Card>
    )
}