import Container from "../../components/container/Container";
import TransparentBorderBox from "../../components/transparent-border-box/TransparentBorderBox";

import "./AboutUs.scss";

import about_up_cup from "../../assets/images/about-us/About us img.png";
import about_us_exclude from "../../assets/images/about-us/Exclude multiple.svg";

const AboutUs = () => {
    return(
        <section id="about-us">
                <Container>
                    <div className="about-us-main-wrapper">
                        <div className="about-us-wrapper">
                            <TransparentBorderBox className="about-us-image-wrapper" borderRadius="10px">
                                    <img src={about_up_cup} alt="Coffie cup"/>
                            </TransparentBorderBox>
                            <div className="about-us-info">
                                    <h1>About <span className="underline">us</span></h1>
                                    <h2>We provide quality coffee, and ready to deliver.</h2>
                                    <p>We are a company that makes and distributes delicious drinks.
                                        our main product is made with a secret recipe and available in stores worldwide.</p>
                                    <button>Get your coffie</button>
                            </div>
                        </div>
                        
                        {/* <div className="about-us-exclude-wrapper">
                            <img src={about_us_exclude} alt="Coffie cups" className="about-us-exclude"/>
                        </div> */}
                        {/* <img src={about_us_exclude} alt="Coffie cups" className="about-us-exclude"/> */}
                    </div>
                    <div className="about-us-exclude-wrapper">
                            <img src={about_us_exclude} alt="Coffie cups" className="about-us-exclude"/>
                    </div>
                </Container>
            </section>
    );
}

export default AboutUs;