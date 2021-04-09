import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="bg-light text-center">
                <p>&copy; {year} Webster. All Rights Reserved | Terms and Condtions</p>
            </footer>
        </>
    )
}


export default Footer;