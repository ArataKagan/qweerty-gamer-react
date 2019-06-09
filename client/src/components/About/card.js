import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

export default function FullWidthGrid(){

    return(
        <div>
            <Grid item xs={6} sm={3}>
                <Card>Hello</Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>Hello</Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>Hello</Card>
            </Grid>
        </div>

    )
}

