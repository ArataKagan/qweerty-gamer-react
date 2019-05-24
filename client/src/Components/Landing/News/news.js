import React, { Component } from 'react';
import axios from 'axios';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import TextLoop from 'react-text-loop';
import styled, { css } from 'styled-components';

class News extends Component {
    constructor(props){
        super(props);
        this.state = { activeIndex: 0,
                        news: [] 
                    }
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
        const title = [];
        const url = [];
        const author = [];
        

        // const Container = styled.div`
        //     border: 1px solid red;
        //     position: relative;
        //     overflow: hidden;
        //     width: 300px;
        //     height: 150px;
        //     `;
        // const CarouselUI = ({ children }) => <Container>{children}</Container>
        // const Carousel = makeCarousel(CarouselUI);
        
        for(let i=0; this.state.news.length > i; i++){
            author.push(this.state.news[i].author);
            title.push(this.state.news[i].title);
            url.push(this.state.news[i].url);
        }

        const anchorStyle= {
            color: 'white',
            fontSize: '30px'
        }

        return(
            this.state.news ?
            <div className="newsArticles"> 
            <TextLoop>
                <div><a href={url[0]} style={anchorStyle}>{title[0]}</a> {author[0]}</div>
                <div><a href={url[1]} style={anchorStyle}>{title[1]}</a> {author[1]}</div>
                <div><a href={url[2]} style={anchorStyle}>{title[2]}</a> {author[2]}</div>
                <div><a href={url[3]} style={anchorStyle}>{title[3]}</a> {author[3]}</div>
                <div><a href={url[4]} style={anchorStyle}>{title[4]}</a> {author[4]}</div>
                <div><a href={url[5]} style={anchorStyle}>{title[5]}</a> {author[5]}</div>
                <div><a href={url[6]} style={anchorStyle}>{title[6]}</a> {author[6]}</div>
            </TextLoop> </div> : null
        )
    }
}

export default News;