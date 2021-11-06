import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";

function ItemElement({id, frameworkName, leadBy, docs}) {

    function handleClick() {
        let frameworks = JSON.parse(localStorage.getItem('frameworks'))
        if (frameworks != null) {
            frameworks.splice(id,1)
            //frameworks = newFrameworks
            console.log(frameworks)
        }
    }

        return(
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div"> {frameworkName} </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary"> Lead by {leadBy} </Typography>
                    <Link href={docs} underline="none"> Official Docs </Link>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="success" size="small" href={`/edit/${id}`}>Edit</Button>
                    <Button variant="outlined" color="error" size="small" onClick={(event) => {handleClick()}}>Delete</Button>
                </CardActions>
            </Card>
        )
} 
export default ItemElement;