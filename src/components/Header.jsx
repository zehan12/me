const Header = () => {
    return (
        <header>
            {/* <!--        navigation    bar         --> */}
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <a className="navbar-brand nav-header" href="#"><span className="main-color">Zehan</span>Khan</a>
                        <p className="main-color navbar-text">Web Developer</p>
                    </div>
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home" className="active">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#contact">Contact Me</a></li>
                        </ul>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </nav>
            {/* <!--        end of nav bar    --> */}
        </header>
    )
}

export default Header;