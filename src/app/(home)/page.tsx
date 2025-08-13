"use client";

import About from "./about";
import ContactPage from "./comps/contact";

import { NavbarDemo } from "./comps/navbar";
import FirstSection from "./sectionFIrst";
import SecondSection from "./sectionSecond";
import ThirdSection from "./sectionThird";

const HomePage = () => {
    return ( 
        <div className="bg-neutral-900">
            
            <NavbarDemo />
            <div>
                <FirstSection />
                {/* <AboutMeCard /> */}

                <div className="absolute inset-x-0 pointer-events-none bottom-0 h-[300px] bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                <SecondSection />
                {/* <div className="absolute inset-x-0 pointer-events-none -top-50 h-100 bg-gradient-to-t from-neutral-900 to-transparent" /> */}
            </div>
            <ThirdSection />
            {/* <About /> */}
            <ContactPage />
        </div>
     );
}
 
export default HomePage;