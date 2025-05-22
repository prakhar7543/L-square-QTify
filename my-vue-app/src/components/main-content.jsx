import React from 'react'
import Section from './section1'
import './main-content.css'
import Tabs from './tabs';


export default function MainContent() {
    return (
    <div className='mainContentContainer'>
    <Section url="https://qtify-backend-labs.crio.do/albums/top" category={'Top Albums'} buttonName={'Show All'}/>
    
    <Section url="https://qtify-backend-labs.crio.do/albums/new" category={'New Albums'} buttonName={'Show All'}/>
    <hr />
    <Tabs url='https://qtify-backend-labs.crio.do/songs' category={'Songs'} />
   <hr /> 
    </div>
    );
        
    
}