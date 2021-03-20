import React from 'react';
import '../styles/style.css';

const MainHomePage = props => {
    return (
        <>
            <div className="circle-shape">
                <img src={props.imgsrc} className="profile-pic"
                />
                <div className="threepassion">
                    <h3>passion web designer</h3>
                    <h3>front-end developer</h3>
                    <h3>coffee addict</h3>
                </div>
            </div>
        </>
    );
}
export default MainHomePage;