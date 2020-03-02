import React, { Component } from 'react';
import Header from '../Components/Home Page/Header/Header'
import Hero from '../Components/Home Page/Hero/Hero'
import Main from '../Components/Home Page/Main/Main'
import Comment from '../Components/Home Page/Comments/Comments'
import Footer from '../Components/Home Page/Footer/Footer'
import axios from 'axios';
import '../App.css';

const url = 'http://localhost:8000/videos'

class Home extends Component {
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
                    sideVideo: response.data
                });
                
            })
        axios.get(`http://localhost:8000/videos/1af0jruup5gu`)
            .then(response => {
                this.setState({
                    mainVideo: response.data,
                })
            });
            
    }
    componentDidUpdate( prevProps){
        const {match: { params} } = this.props;
        if(prevProps.match.params.id !== this.props.match.params.id){
            axios.get(`http://localhost:8000/videos/${params.id}`)
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
        window.scrollTo(0,0)
        
    }
    
    render() {
        return (
        <React.Fragment>
            <Header />
            <Hero 
                poster={this.state.mainVideo.image}
                video={this.state.mainVideo.video}
                />
            <div className='desktopViewFlex'>
                <div>
                    <Main 
                        title={this.state.mainVideo.title}
                        channel={this.state.mainVideo.channel}
                        timestamp={this.state.mainVideo.timestamp}
                        description={this.state.mainVideo.description}
                        views={this.state.mainVideo.views}
                        likes={this.state.mainVideo.likes}
                        />
                    <Comment comments={this.state.mainVideo.comments}/>
                </div>
                <Footer subVideo={this.state.sideVideo}/>
            </div>
        </React.Fragment>
        );
    }
}

export default Home;