import About from "./about";
import { LinkPreviewDemo } from "./comps/link-preview";
import { NavbarDemo } from "./comps/navbar";
import FirstSection from "./sectionFIrst";
import SecondSection from "./sectionSecond";
import ThirdSection from "./sectionThird";

const HomePage = () => {
    return ( 
        <>
            
            <NavbarDemo />
            <FirstSection />
            {/* <AboutMeCard /> */}
            <SecondSection />
            <ThirdSection />
            <About />
            <LinkPreviewDemo />
        </>
     );
}
 
export default HomePage;