import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
   
    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=lgbt?sortBy=publishedAt&apiKey=e89e81f136f343719303e1f4d0fdf9c6')
            .then(response => {
                console.log(response);
            })
    }
    render(){
        return(
            <div>
            </div>
        )
    }
}

export default News;