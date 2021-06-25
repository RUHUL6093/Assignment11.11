import React from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';
import Footer from '../Footer/Footer';
import HandleCar from '../HandleCar/HandleCar';
import Header from '../Header/Header';
import HomeContent from '../HomeContent/HomeContent';
import ImageSlider from '../ImageSlider/ImageSlider';
import MessageBox from '../MessageBox/MessageBox';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeContent></HomeContent>
            <Service></Service>
            <ImageSlider></ImageSlider>
            <HandleCar></HandleCar>
            <DisplayReview></DisplayReview>
            <MessageBox></MessageBox>
            <Footer></Footer>
        </div>
    );
};

export default Home;