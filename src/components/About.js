import React from 'react'
import me from '../images/cvbuboy1.png'
import html5 from '../images/html5.png'
import reactjs from '../images/reactlogo.png'
import css3 from '../images/css3.png'

export default function About(){
    return(
        <div>
            <div className='card_container'>
                <div className='card first'>
                    <img className='profile_image' src={me} />
                    <p className='card_name'>MICHAEL JAY O. DIAZ</p>
                    <p className='card_prof'>WEB DEVELOPER</p>
                    <p className='card_skills'>SKILLS</p>
                    <ul>
                        <li className='skills'>HTML</li>
                        <li className='skills'>CSS</li>
                        <li className='skills'>PHP</li>
                        <li className='skills'>REACTJS</li>
                        <li className='skills'>JAVASCRIPT</li>
                        <li className='skills'>PHOTOSHOP/FIGMA</li>
                    </ul>
                </div>
                <div className='card second'>
                    <h1 className='card_about'>ABOUT ME</h1>
                    <p>I am a fresh graduate student from Cavite State University - Tanza.</p>
                    <p>To be honest, I have no idea why I took my course (Information Technology), aside from me thinking that it is about computer that I am familiar with. That’s how I think until one day it just blows my mind, how a simple interaction, designing and making everything work is fun.</p>
                    <p>It took me years to realize what I really want to be, it might be late for the perspective of others but for me it is not since everything in the world of Technology is continuously evolving.</p>
                    <p>WEB DEVELOPING IS FUN!</p>
                </div>
            </div>
            <h1 className='text'>SKILLS</h1>
            <section className='card_showskill'>
                <div className='card showskill html'>
                    <img className='logo' src={html5} />
                </div>
                <div className='card showskill css'>
                    <img className='logo' src={css3} /> 
                </div>
                <div className='card showskill reactjs'>
                    <img className='logo' src={reactjs} />    
                </div>
            </section>
        </div>   
        )
}