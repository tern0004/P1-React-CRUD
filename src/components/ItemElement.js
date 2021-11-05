import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";

function ItemElement() {
        return(
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div"> AAA </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary"> Lead by AAA </Typography>
                    <Link href="/#" underline="none"> Official Docs </Link>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="success" size="small">Edit</Button>
                    <Button variant="outlined" color="error" size="small">Delete</Button>
                </CardActions>
            </Card>
        )
} 
export default ItemElement;