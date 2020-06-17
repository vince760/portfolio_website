import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Header = () => {


    return (
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="responsive-headline">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    
                </ul>

            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm Vincent Vitale.</h1>
                    <br></br>
                    <h3>I'm a Temecula based <span>Software Developer</span>.
                     with a background in management and military aviation.
                    As a prior business owner I understand the pride in accomplishing and building something from the ground up.
                    I found a passion in coding. Writing clean, concise code that gives users the experience they want and deserve.
                    Being able to sit behind a computer and decipher what these thousand lines of code mean, or why is it operating a certain way blows me away,
                    it's like putting pieces to a puzzle you haven't created yet.</h3>
                    <hr />
                    <ul className="social">

                        <a href="https://github.com/vince760" target="_blank" rel="noopener noreferrer">
                            <li> <FontAwesomeIcon size={7} style={{ color: "#FFFFFF" }} icon={faGithub} /></li>
                            </a>
                        <a href="https://www.linkedin.com/in/vincent-vitale-v/" target="_blank" rel="noopener noreferrer">
                            <li>  <FontAwesomeIcon size={7} style={{ color: "#FFFFFF" }} icon={faLinkedin} /></li>
                            </a>
                        
                    </ul>
                </div>
            </div>

            <p className="scrolldown">

                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )
}

export default Header