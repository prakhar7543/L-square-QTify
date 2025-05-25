import React from 'react';
import './feedBack.css';
import close from '../assets/close.png';

export default function FeedBack({isOpen, onClose}){

    

    if(!isOpen) return null;
    
    return (
        <div className='feedBack-Container'>
            <div className='feedBack-Content'>
                <div>
                <h2>Feedback</h2>
                <img src={close} alt="icon" onClick={onClose} /> 
                </div>
                <form>
                    <input type="text" placeholder='Enter Your Full Name' />
                    <input type="email" placeholder='Enter Your Email' />
                    <input type="text" placeholder='Enter Subject' />
                    <textarea name="feedback" id="feedback" placeholder='Give your feedback'></textarea>
                </form>
                <button onClick={onClose}>Submit Feedback</button>
            </div>
        </div>
    )
}