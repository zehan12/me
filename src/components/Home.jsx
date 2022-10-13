const Home = ( ) => {
    return (
        <section className="home" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-sm-4 col-sm-offset-1">
                        <p className="lead">Hi there</p>
                        <h1>I'm <span className="main-color">Zehan <br/>Khan</span></h1>
                        <h3><span id="typed"></span></h3>
                        <p className="lead">I'm a result-oriented full-stack web developer, passionate about developing user-friendly web applications with the ability to write clean, reusable and optimized code. Excellent problem-solving skills and the ability to perform well in a team.</p>
                        <button className="btn more-info wow bounceInUp" data-wow-duration="3s">More About Me</button>
                    </div>
                    <div id="my-img" className="col-lg-4 col-lg-offset-2 col-sm-4 col-sm-offset-1 hidden-xs">
                        <img className="img-responsive my-img" alt="myPhoto" src="https://avatars.githubusercontent.com/u/73664886?s=400&u=b2b3a13e16fc7e6af8a5cdcfe2ab86bd9ffd6d56&v=4" width="300px" height="350px" />
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </section>
    )
}

export default Home;