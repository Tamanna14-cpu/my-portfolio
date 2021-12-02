import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center my-3 py-5">
            <PropagateLoader size={15} />
        </div>
    );
};

export default Loading;