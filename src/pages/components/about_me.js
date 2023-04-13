import me from "../../assets/images/me.png"

function AboutMe() {
    return(
        <div className={"about-me"} id={"aboutme"}>
            <p className={"component-title"}>About me</p>
            <div className={"row2"}>
                <div className={"bigtext"}>
                    Hello, my name is Aisha and I am a master's student at Astana IT University. I am a passionate and driven individual with a strong interest in mobile application development and blockchain technology. As a freelancer, I have had the opportunity to create mobile apps for a variety of clients, which has allowed me to gain valuable experience and knowledge in the field.
                    <br/><br/>
                    In addition to my freelance work, I have also worked for startups in both Kazakhstan and the United States, where I was involved in developing and implementing innovative mobile app solutions. My experience in these roles has taught me the importance of staying up-to-date with the latest trends and technologies in the mobile app development industry.
                    <br/><br/>
                    One of my biggest strengths is my creativity. I love to draw and design the interfaces of applications myself, which allows me to bring a unique and personalized touch to each project I work on.
                    <br/><br/>
                    I am excited about the future of mobile app development and blockchain technology, and am eager to continue to be a part of the industry's growth and development.
                </div>
                <img src={me} alt={"me"} className={"me2"}/>
            </div>
        </div>
    )
}

export default AboutMe