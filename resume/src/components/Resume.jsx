import React from 'react'

const Resume = () => {


    return (

        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <div ><h3>University of Phoenix</h3>
                                <p className="info">Bachelors of Science <span>&bull;</span><em className="date">September 2015</em></p>
                                <p>Criminal Justice Administration</p></div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">

                <div className="three columns header-col">
                    <h1><span>Most Recent Work</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div><h3>Force Tracker, Inc.</h3>
                        <p className="info">Software Developer<span>&bull;</span> <em className="date">March 2020 - Present</em></p>
                        <p>"Implemented Claim-based user authorization and authentication, password hashing and decryption.
                        Created several email services using Trillio's SendGrid features that emails employees when a job has been
                        assigned to them. Designed front-end components using JavaScript, React, and Bootstrap resulting in a dynamic and
                             user-friendly features so that they could be reused in other areas of the application.</p>
                    </div>
                </div>
            </div>



            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="three columns main-col">
                    <div><h3>Front End</h3>
                        <p>React</p>
                        <p>JavaScript</p>
                        <p>Ajax</p>
                        <p>Boot-Strap 4</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JQuery</p>

                    </div>


                </div>
                <div className="three columns main-col">
                    <div><h3>Middle Tier</h3>
                        <p>C#</p>
                        <p>ADO.net</p>
                        <p>ASP.Net</p>
                        <p>.Net Core</p>
                       

                    </div>


                </div>
                <div className="three columns main-col">
                    <div><h3>Back End</h3>
                        <p>Sql Server</p>
                    </div>
                    <br/>

                    <div><h3>Misc.</h3>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>TFS</p>
                    </div>


                </div>
            </div>

        </section>

    )
}



export default Resume