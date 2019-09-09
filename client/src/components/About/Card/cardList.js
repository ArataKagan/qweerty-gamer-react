import React, {Component} from 'react';
import {Grid, 
        Card, 
        Typography} from '@material-ui/core';
import style from './card.module.css';
import { Link } from 'react-router-dom';

class CardList extends Component {
    render(){

        return(
            <div className={style['card-outer']}>
                <Grid container>
                        <Grid item xs>
                            <Link to="/member">
                                <Card style={{ minWidth: 275,padding: 60, margin: 20, borderStyle: "solid", borderColor: "white", backgroundColor: "#393f4d", color: "white"}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <p>Member</p>
                                    </Typography>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link to="#">
                                <Card style={{ minWidth: 275, padding: 60, margin: 20, borderStyle: "solid", borderColor: "white", backgroundColor: "#393f4d", color: "white"}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <p>Partner</p>
                                    </Typography>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link to="#">
                                <Card style={{ minWidth: 275, padding: 60, margin: 20, borderStyle: "solid", borderColor: "white", backgroundColor: "#393f4d", color: "white"}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <p>Volunteer</p>
                                    </Typography>
                                </Card>
                            </Link>
                        </Grid>
                </Grid>
            </div>
        )
    };
    
}

export default CardList;


