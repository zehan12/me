import { Fragment } from "react"
import AboutMe from "../components/AboutMe"
import Header from "../components/Header"
import Home from "../components/Home"
import MySkills from "../components/MySkills"


const Main = () => {
    return (
        <Fragment>
            <Header />
            <Home />
            <AboutMe />
            <MySkills />

        </Fragment>
    )
}

export default Main