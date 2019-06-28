import React, { Component } from 'react';
import {Grid, 
    Card, 
    Typography} from '@material-ui/core';
import memberData from './member-information.js';

class MemberProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: memberData
        };
    }
    render(){
        return(
            <div>
                <Grid container>
                    {
                        this.state.data.map((item, index) => {
                        return(
                            <Grid item xs>
                                <Card style={{ padding: 60, margin: 20, backgroundColor: "#BCBCBE", color: "white"}}>
                                    <img src={item.image}/>
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
} 

export default MemberProfile;