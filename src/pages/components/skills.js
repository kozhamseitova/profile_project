import m3d from "../../assets/images/3d.webp"

function Skills() {
    return(
        <div className={"about-me"} id={"skills"}>
            <p className={"component-title"}>Skills</p>
            <div className={"row3"}>
                <p>Blender 3D modeling <br/>I started learning it in 2022 and have since written several web apps using this popular JavaScript library. <br/>The ease of use and flexibility of React make it a great tool for building complex user interfaces.</p>
                <img className={"skills-image"} src={m3d}/>
            </div>
        </div>
    )
}

export default Skills