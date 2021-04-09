import React from 'react';
import web from "../src/images/img2.svg";
import Commmon from './Common';

const Home = () => {
    return (
        <>
           <Commmon 
               heading="Grow your business with"
               name="Webster"
               h2="We are the team of talented developer making websites"
               btn="Get Started"
               link="/service"
               img={web}
           />
        </>
    )
}

export default Home;