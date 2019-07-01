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
                                    <div className='d-flex flex-row bd-highlight mb-3'>
                                        <div>
                                            <img src={item.image} style={{width: '150px'}}/>
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p >{item.title}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
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