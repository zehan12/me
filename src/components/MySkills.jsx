import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaGitAlt,
    FaGithubSquare,
} from "react-icons/fa";

import { SiJavascript, SiStyledcomponents, SiRedux } from "react-icons/si";

const skillData = [
    {
        id: 1,
        skill: <FaHtml5
            onMouseOver={({ target }) => (target.style.color = "red")}
            onMouseOut={({ target }) => target.style.color = "white"}
            size={100} />,
        name: "HTML5",
    },
    {
        id: 2,
        skill: <FaCss3Alt
        onMouseOver={({ target }) => (target.style.color = "blue")}
            onMouseOut={({ target }) => target.style.color = "white"}
         size = { 100} />,
    name: "CSS3",
    },
{
    id: 3,
    skill: <SiJavascript 
    onMouseOver={({ target }) => (target.style.color = "yellow")}
            onMouseOut={({ target }) => target.style.color = "white"}
        size={100} />,
        name: "JavaScript",
    },
{
id: 4,
    skill: <FaBootstrap
    onMouseOver={({ target }) => (target.style.color = "purple")}
            onMouseOut={({ target }) => target.style.color = "white"}
        size={100} />,
        name: "BootStrap",
    },
{
id: 5,
    skill: <FaReact
    onMouseOver={({ target }) => (target.style.color = "red")}
            onMouseOut={({ target }) => target.style.color = "white"}
        size={100} />,
        name: "React",
    },
{
id: 6,
    skill: <SiStyledcomponents
    onMouseOver={({ target }) => (target.style.color = "red")}
            onMouseOut={({ target }) => target.style.color = "white"}
        size={100} />,
        name: "Styled Components",
    },
{
id: 7,
    skill: <SiRedux
    onMouseOver={({ target }) => (target.style.color = "red")}
            onMouseOut={({ target }) => target.style.color = "white"}
        size={100} />,
        name: "Redux",
    },
{
id: 8,
    skill: <FaGitAlt
    onMouseOver={({ target }) => (target.style.color = "red")}
            onMouseOut={({ target }) => target.style.color = "white"}
        size={100} />,
        name: "Git",
    },
{
id: 9,
    skill: <FaGithubSquare
    onMouseOver={({ target }) => (target.style.color = "red")}
            onMouseOut={({ target }) => target.style.color = "white"}
        size={100} />,
        name: "GitHub",
    },
];

const resume = ""


const MySkills = () => {


  

return (
    <>
        <section style={{ align: "text-center" }}>
            <h1>My Skills</h1>
            <div style={{
                justifyContent: "center",
                display: "flex",
                flexWrap: "wrap",
                gridTemplateColumns: "repeat(3, 1fr)",
                GridTemplateRows: "80px",
                border: "2px solid green"

            }}>
                {
                    skillData.map((skills) =>
                        <figure

                            style={{
                                border: "2px solid red",
                                padding: "50px",
                                width: "200px",
                                margin: "60px",
                            }}
                        >
                            {skills.skill}
                            <figcaption>{skills.name}</figcaption>
                        </figure>
                    )
                }
            </div>
        </section>
    </>

)
}

export default MySkills;