import React, {Component} from 'react';
import {Grid, 
        Card, 
        Typography} from '@material-ui/core';
import CardData from './card.json';
import style from './card.module.css';
import myImage from './qg-test.jpg';
import { Link } from 'react-router-dom';

class CardList extends Component {
    render(){

        return(
            <div className={style['card-outer']}>
                <Grid container>
                    {CardData.map((item, index) => {
                    return(
                        <Grid item xs>
                        <Link to="/about/member">
                            <Card style={{ padding: 60, margin: 20, backgroundColor: "#BCBCBE", color: "white"}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                              </Typography>
                            </Card>
                        </Link>
                        </Grid>
                        ) 
                    })}
                </Grid>
            </div>
        )
    };
    
}

export default CardList;


