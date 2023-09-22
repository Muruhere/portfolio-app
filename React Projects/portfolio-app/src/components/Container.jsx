import Card from "./Card";
import eng from '../assets/desc_img.jpg'

export default function Container() {
    const links = [{
        link: 'https://github.com/Muruhere/Add-notes-FE',
        value: 'Add-notes'
    },
    {
        link: 'https://github.com/Muruhere/weather-app',
        value: 'Weather-app'
    },
    {
        link: 'https://github.com/Muruhere/Student-details-service',
        value: 'Student-details'
    }
    ];

    const skills = ["Java 11", "Angular 12", "React.js", "Spring boot", "AWS", "Git"];

    return (
        <>
            <Card title="Placeholder"
                desc="Full Stack Developer"
                imgSrc={eng}
            />
            <Card title="About me" isPreview={true} />
            <Card title="Skills" skills={skills} />
            <Card title="Projects"
                desc=""
                links={links}
            />
        </>
    )
}