const AboutMe = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="text-center">About <span className="main-color">ME</span></h2>
                <div className="row">
                    <div className="col-lg-6 col-xs-12 wow bounceInLeft" data-wow-duration="2s" data-wow-offset="10">
                        <h3><span className="under-line">Personal Info</span></h3>
                        <div className="row">
                            <div className="col-xs-6">
                                <ul className="about-list">
                                    <li> <span className="main-color">first name :</span> <span>Zehan</span> </li>
                                    <li> <span className="main-color">last name :</span> <span >Khan</span> </li>
                                    <li> <span className="main-color">Age :</span> <span >23 Years</span> </li>
                                    <li> <span className="main-color">Nationality :</span> <span >India</span> </li>
                                    <li> <span className="main-color">Freelance :</span> <span >Available</span> </li>
                                </ul>
                            </div>
                            <div className="col-xs-6">
                                <ul className="about-list">
                                    <li> <span className="main-color">Address :</span> <span >India</span> </li>
                                    <li> <span className="main-color">phone :</span> <span >+91 9024172911</span> </li>
                                    <li> <span className="main-color">Email :</span> <span >zehan9211@gmail.com</span> </li>
                                    <li> <span className="main-color">github :</span> <span ><a href="https://github.com/zehan12">zehan12</a></span> </li>
                                    <li> <span className="main-color">langauge :</span> <span >English</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="resume col-lg-6 col-xs-12 wow bounceInRight" data-wow-duration="3s" data-wow-offset="10">
                        <h3><span className="under-line">resume</span></h3>
                        <p>An analytical and detail-oriented MERN STACK Developer who is able to come
                            up with user-centric solutions through the use of JavaScript. Collaborative,
                            team-oriented, and proficient in collaborating and executing goals-oriented
                            projects. . Can easily adapt to change, possess eagerness towards learning and
                            contributing to the organization. Looking for an organization where I could
                            improve my skills & knowledge by giving input to the organization </p>
                        <p>
                            A problem-solving
                            mindset with a goal to optimize my application
                            for better stability and speed. Always hard
                            working and looking forward to learning new
                            skills.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutMe;