import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div>
            <h2 className='text-center mt-2'>Please ChackOut Your Booking</h2>
            <form className='form-cheout'>      
                <input name="name" type="text" class="feedback-input" placeholder="Name" />   
                <input name="email" type="text" class="feedback-input" placeholder="Email" />
                <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    );
};

export default Checkout;