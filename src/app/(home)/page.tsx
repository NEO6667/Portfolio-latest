import { LampDemo } from "./hero";
import { TextGenerateEffectDemo } from "./hero-text";
import { MacbookScrollDemo } from "./mac-view";
import { NavbarDemo } from "./navbar";
import { TimelineDemo } from "./project-timeline";

const HomePage = () => {
    return ( 
        <div className="">
            <NavbarDemo />
            <LampDemo>
                <TextGenerateEffectDemo />
            </LampDemo>
            <MacbookScrollDemo />
            <TimelineDemo />
        </div>
     );
}
 
export default HomePage;