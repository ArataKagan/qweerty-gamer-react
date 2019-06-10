import React, {Component} from 'react';
import {Grid, Card} from '@material-ui/core';
import CardData from './card.json';

class CardList extends Component {
    render(){

        return(
            <div>
                <Grid container>
                    {CardData.map((item, index) => {
                    return(
                        <Grid item xs>
                            <Card style={{ padding: 60, margin: 20, backgroundColor: "#BCBCBE", color: "white"}}>
                            {item.title}
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


