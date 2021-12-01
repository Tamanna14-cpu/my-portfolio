import React from 'react';
import notfound from '../../image/notfound.png';

const Notfound = () => {
    return (
        <div className="d-flex align-items-center">
            <img src={notfound} alt="" className=" w-50" />
            <h2 className="ms-5">oops your searched page not found !! <br />Please search again.</h2>
        </div>
    );
};

export default Notfound;