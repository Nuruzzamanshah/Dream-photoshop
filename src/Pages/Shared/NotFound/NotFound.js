import React from 'react';
import notFound from '../../../images/NotFound..webp'

const NotFound = () => {
    
    return (
        <div>
            <h2 className='text-primary text-center mt-5'>NotFound</h2>
            <div className='text-center'>
             <img className='rounded mx-auto' src={notFound} alt=''/>
            </div>
        </div>
    );
};

export default NotFound;