const Header = () => {
    return (
        <header>
            {/* <!--        navigation    bar         --> */}
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <a class="navbar-brand nav-header" href="#"><span class="main-color">Zehan</span>Khan</a>
                        <p class="main-color navbar-text">Web Developer</p>
                    </div>
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#home" class="active">Home</a></li>
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