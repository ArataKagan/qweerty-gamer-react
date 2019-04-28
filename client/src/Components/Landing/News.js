import React, { Component } from 'react';
import axios from 'axios';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

class News extends Component {
    constructor(props){
        super(props);
        this.state = { activeIndex: 0,
                        news: [],
                        newsObj: {} }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex(this);
        this.onExiting = this.onExiting(this);
        this.onExited = this.onExited(this);
    }

    onExiting(){
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.newsObj.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.newsObj.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
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
           this.state.newsObj[i] = {"author": this.state.news[i].author,
                         "title": this.state.news[i].title,
                         "url": this.state.news[i].url
                        }
        }
        console.log(this.state.newsObj);
        

        // const slides = this.state.newsObj.map((item) => {
        //     return (
        //         <Carousel
        //         activeIndex={this.state.activeIndex}
        //         next={this.next}
        //         previous={this.previous}
        //         >
        //             <CarouselIndicators items={this.state.newsObj} onClickHandler={this.goToIndex} />
        //             <CarouselItem
        //                 onExiting={this.onExiting}
        //                 onExited={this.onExited}
        //                 key={item.url}
        //             >
        //                 <CarouselCaption captionText={item.title} captionHeader={item.author} />
        //             </CarouselItem>
        //             <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        //             <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        //         </Carousel>
        //     )
        // })

        return(
            <div className="newsAPI">
                {/* {slides} */}
            </div>
        )
    }
}

export default News;