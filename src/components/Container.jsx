import Cards from "./Card";
import eng from '../assets/desc_img.jpg'

export default function Container() {
    return (
        <>
            <Cards title="Placeholder"
                desc="Full Stack Developer"
                imgSrc={eng}
            />
            <Cards title="About me"
            />
            <Cards title="Skills"
            />
            <Cards title="Placeholder"
                desc="Sample"
                imgSrc={eng}
            /> 
             <Cards title="Placeholder"
                desc="Sample"
                imgSrc={eng}
            />
        </>
    )
}