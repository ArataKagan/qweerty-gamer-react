import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
    constructor(props){
        super(props);
        this.state = { activeIndex: 0,
                        news: [],
                        author: [],
                        title: [],
                        url: [] }
        }

  
    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=lgbt&apiKey=e89e81f136f343719303e1f4d0fdf9c6')
            .then(response => {
                this.setState({
                    news: response.data.articles
                })
            })
    }

    render(){
        
        for(let i=0; this.state.news.length > i; i++){
            this.state.author.push(this.state.news[i].author);
            this.state.title.push(this.state.news[i].title);
            this.state.url.push(this.state.news[i].url);
        }

        var title = this.state.title.map((item, index) => {
            const authors = this.state.author[index];
            const urls = this.state.url[index];
            return (
                <div>
                    <a href={urls}><p>{item}</p></a>
                    <p>{authors}</p>
                </div>
            )
        })
        
        return(
            <div>
                {title}
            </div>
        )
    }
}

export default News;