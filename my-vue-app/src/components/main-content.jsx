import React from 'react'
import Section from './section1'
import './main-content.css'
import Tabs from './tabs';


export default function MainContent() {
    return (
    <>
    <Section url="https://qtify-backend-labs.crio.do/albums/top" category={'Top Albums'} buttonName={'Collapse'}/>
    {/* <hr />
    <Section url="https://qtify-backend-labs.crio.do/albums/new" category={'New Albums'} buttonName={'Show all'}/>
    <hr />
    <Tabs url='https://qtify-backend-labs.crio.do/songs' category={'Songs'} /> */}
    </>
    );
        
    
}