import React from 'react'

const About = () => {
    return (

        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={require("../images/profilepic.jpg")} alt="Vincent Vitale Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>"My specialties include quickly learning new skills and programming languages, problem solving, responsive design principles,
                    website optimization so far I have REACT, C#, SQL database management, HTML, CSS, Javascript, JQuery, Bootstrap, and
                    Git/Github under my belt. I am always looking for ways to further my education in these languages, frameworks, and
                        libraries so I can further my knowledge and integrate them into the coding web in my head."</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Vincent Vitale</span><br />
                                <span>43469 Brewster Ct<br />
                                    Temecula CA, 92592
                                </span><br />
                                <span>760-421-2936</span><br />
                                <span>Vincent.Vitale87@Gmail.Com</span>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>

    )
}

export default About