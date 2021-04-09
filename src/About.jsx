import React from 'react';
import web from "../src/images/img3.svg";
import Commmon from './Common';

const About = () => {
    return (
        <>
           <Commmon 
               heading="Welcome to About page"
               name="Webster"
               h2="We are the team of talented developer making websites"
               btn="Contact"
               link="/contact"
               img={web}
           />
        </>
    )
}

export default About;