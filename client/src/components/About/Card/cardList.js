import React, {Component} from 'react';
import {Grid, Card, CardActionArea, CardMedia, Typography} from '@material-ui/core';
import CardData from './card.json';
import style from './card.module.css';
import myImage from './qg-test.jpg';

class CardList extends Component {
    render(){

        return(
            <div className={style['card-outer']}>
                <Grid container>
                    {CardData.map((item, index) => {
                    return(
                        <Grid item xs>
                            <Card style={{ padding: 60, margin: 20, backgroundColor: "#BCBCBE", color: "white"}}>
                                <CardActionArea>
                                    <CardMedia 
                                        className="card-media"
                                        image="/qg-test.jpg"
                                        title="card-media"
                                    />
                                </CardActionArea>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                              </Typography>
                            </Card>
                        </Grid>
                        ) 
                    })}
                </Grid>
            </div>
        )
    };
    
}

export default CardList;


