import React, { Component } from 'react';
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Main from '../Components/Main/Main'
import Comment from '../Components/Comments/Comments'
import Footer from '../Components/Footer/Footer'
import axios from 'axios';
import '../App.css';

const url = 'https://project-2-api.herokuapp.com/videos?api_key={API_KEY}'

class Main3 extends Component {
    state = {
        mainVideo:{
            comments:[],
        },
        sideVideo:[]
    }
    componentDidMount(){
        axios.get(url)
            .then(response => {
                this.setState({
                    sideVideo: response.data.splice(1,8) 
                });
            })
        axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=fb10f9c7-b9a0-40ea-80dd-f041fcb27729`)
            .then(response => {
                this.setState({
                    mainVideo: response.data,
                })
            });
    }
    componentDidUpdate( prevProps){
        const {match: { params} } = this.props;
        if(prevProps.match.params.id !== this.props.match.params.id){
            axios.get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=fb10f9c7-b9a0-40ea-80dd-f041fcb27729`)
                .then(response => {
                    this.setState({
                        mainVideo: response.data,
                    })
                });
        }
        if(prevProps.match.params.id !== this.props.match.params.id){
        axios.get(url)
            .then(response => {
                this.setState({
                    sideVideo: response.data.filter(function(person) {
                        return person.id!== params.id;
                    })
                })
            });
        }
    }
    render() {
        return (
        <React.Fragment>
            <Header />
            <Hero 
                poster={this.state.mainVideo.image}
                video={this.state.mainVideo.video}
                />
            <div className='mainTest'>
                <div>
                    <Main 
                        title={this.state.mainVideo.title}
                        channel={this.state.mainVideo.channel}
                        timestamp={this.state.mainVideo.timestamp}
                        description={this.state.mainVideo.description}
                        
                        views={this.state.mainVideo.views}
                        likes={this.state.mainVideo.likes}
                        />
                    <Comment
                        comments={this.state.mainVideo.comments}
                        />
                </div>
                <Footer 
                    Hello={this.state.sideVideo}
                    />
            </div>
        </React.Fragment>
        );
    }
}

export default Main3;