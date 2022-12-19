import React from 'react'


/************************************************
            [  On window load scripts  ]
************************************************/

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });


/************************************************
            [  Main  ]
************************************************/


export default function VL() {
  return (
    <>
    <div id="vlwrapper">
        <div id = "navbarwrap">
            <div id = "logowrap">
                <p id = "visuallylinkedp" ><span id="vlporange">Visually</span><span id="vlpdarkblue"> Linked</span></p>
            </div>
            <div id = "servicecontact">
                <ul>
                    <li id="service-tab" className='navitems' onClick={servicestab}>Services</li>
                    <div id="triangleservices" onClick={servicestab}></div>
                    <li id="contact-tab" className='navitems'>Contact us</li>
                </ul>
            </div>
            <div id="service-dropdown">
                <div id="service-dropdown-content">

                    <div id = "service-dropdown-discord">
                    </div>
                    <div id = "service-dropdown-webdev">
                    </div>
                    <div id = "service-dropdown-management">
                    </div>
                    <div id = "service-dropdown-strategy">
                    </div>
                    <div id = "service-dropdown-design">
                    </div>
                    <div id = "service-dropdown-googleads">
                    </div>
                    <div id = "service-dropdown-socialmedia">
                    </div>


                </div>
            </div>
        </div>
        <div id="homepage">
            <div id = "heroimage">
                <div id = "hero-introduction-text">
                    <h1>
                    Maximize your reach and impact with our custom solutions
                    </h1>
                </div>
                <img src="bgimg.png" alt="backgroundimage"></img>
                <div id = "hero-img-button-wrap">
                    <button class = "herobuttons" id = "hero-img-button-getstarted">Get Started</button>
                    <button class = "herobuttons" id = "hero-img-button-ourvision">Our Vision</button>
                </div>
            </div>
            <div id = "our-expertise-text">
                <h1>Our Expertise</h1>
            </div>
            <div id = "expertise">
                <div id="expertisecontainer">
                    <div id="exp-webdev" class="expertiseitem">
                        <h2>Web Development</h2>
                        <p>Our team of experienced web developers is dedicated to delivering custom, high-quality websites that help our clients achieve their business goals. We offer a range of services, including e-commerce development, responsive web design, and more, using technologies such as WordPress, Shopify, and Magento. Let us help you elevate your online presence and drive success with our expert web development services</p>
                    </div>
                    <div id="exp-dc"  class="expertiseitem">
                        <h2>Discord</h2>
                        <p>From server setup to full-scale management, our team can help you leverage Discord's marketing potential. With tens of millions of new users every year, this platform offers a wealth of untapped opportunities. We offer custom emojis, roles, and automation to fully utilize Discord's capabilities and engage with your audience. Let us help you stand out and drive success with our expert Discord services.</p>
                    </div>
                    <div id="exp-dcmanage"  class="expertiseitem">
                        <h2>Management</h2>
                        <p>Take your social media presence to the next level with our expert management services. From strategy development to content creation and community management, we have the tools and expertise to help you effectively engage with your audience and achieve your business goals. Let us help you succeed on platforms like Facebook, Instagram, and Twitter.</p>
                    </div>
                    <div id="exp-stratinsight"  class="expertiseitem">
                        <h2>Strategy & Insights</h2>
                        <p>Our team of experts in strategy and insights uses AI and data tools and strategies to help businesses optimize their online presence and drive success. From data analysis and insights to AI-powered optimization, we have the knowledge and experience to help you make informed decisions and achieve your business goals. Let us help you stay ahead of the curve and succeed in the digital landscape with our comprehensive strategy and insights services.</p>
                    </div>
                    <div id="exp-design"  class="expertiseitem">
                        <h2>Design</h2>
                        <p>Our team of talented designers is dedicated to helping businesses of all sizes elevate their brand image and stand out in the digital landscape. From logo design and website design to banner designs and business cards, we have the skills and expertise to create visually stunning and effective designs that drive success. Let us help you communicate your brand's unique identity and message with our comprehensive design services.</p>
                    </div>
                    <div id="exp-googleads"  class="expertiseitem">
                        <h2>SEO and Google ads</h2>
                        <p>Our team of SEO and Google Ads experts is dedicated to helping businesses of all sizes improve their online visibility and drive traffic and sales. From keyword research and optimization to targeted advertising campaigns, we have the skills and expertise to help you achieve your business goals. Let us help you rank higher on search engines and effectively reach your target audience with our comprehensive SEO and Google Ads services.</p>
                    </div>
                </div>
            </div>
            <div id = "digital-marketing-packages-text">
                <h1>Digital Marketing Packages</h1>
            </div>
            <div id = "packages">
                <div id="packagescontainer">

                {/*Packages: Discord*/}

                    <div id="dcpackage-setup" class="packagesitem">
                        <h2>Discord Setup</h2>
                        <p>Setup package is the perfect starting point for businesses looking to get started with Discord. This budget-friendly package includes all the essentials for setting up and configuring a Discord server for your business.</p>
                    </div>
                    <div id="dcpackage-medium"  class="packagesitem">
                        <h2>Discord Medium</h2>
                        <p>Take your Discord marketing to the next level with our medium package. This comprehensive offering includes all the essentials from our setup package, plus additional features and capabilities to help you fully leverage the marketing potential of Discord.</p>
                    </div>
                    <div id="dcpackage-advanced"  class="packagesitem">
                        <h2>Discord Advanced</h2>
                        <p>Unlock the full potential of Discord marketing with our advanced package. This comprehensive offering includes all the features and capabilities of our medium package, plus advanced community management and automated systems to help you fully leverage the marketing potential of Discord.</p>
                    </div>

                {/*Packages: Web Development*/}

                    <div id="web-setup"  class="packagesitem">
                        <h2>Web Setup</h2>
                        <p>Our Web Development - Setup package is the perfect starting point for businesses looking to get started with a professional website. This budget-friendly package includes all the essentials for setting up a basic website for your business.</p>
                    </div>
                    <div id="web-medium"  class="packagesitem">
                        <h2>Web Medium</h2>
                        <p>Take your web development to the next level with our medium package. This comprehensive offering includes all the essentials from our setup package, plus additional features and capabilities to help you fully leverage the potential of your website.</p>
                    </div>
                    <div id="web-advanced"  class="packagesitem">
                        <h2>Web Advanced</h2>
                        <p>Unlock the full potential of your website with our advanced package. This comprehensive offering includes all the features and capabilities of our medium package, plus advanced custom functionality and e-commerce integration to help you fully leverage the potential of your website.</p>
                    </div>

                {/*Packages: Strategy & Insights*/}

                    <div id="strats-setup"  class="packagesitem">
                        <h2>Strategy Setup</h2>
                        <p>Our Strategy and Insights - Setup package is the perfect starting point for businesses looking to get started with data-driven decision making. This budget-friendly package includes all the essentials for developing a basic data strategy for your business.</p>
                    </div>
                    <div id="strats-medium"  class="packagesitem">
                        <h2>Strategy Medium</h2>
                        <p>Take your data strategy to the next level with our medium package. This comprehensive offering includes all the essentials from our setup package, plus additional features and capabilities to help you fully leverage the potential of data-driven decision making.</p>
                    </div>
                    <div id="strats-advanced"  class="packagesitem">
                        <h2>Strategy Advanced</h2>
                        <p>Unlock the full potential of data-driven decision making with our advanced package. This comprehensive offering includes all the features and capabilities of our medium package, plus advanced data analysis and insights and custom AI-powered optimization to help you fully leverage the potential of data-driven decision making.</p>
                    </div>

                {/*Packages: Social Media Advertising*/}

                    <div id="ads-setup"  class="packagesitem">
                        <h2>Ad Setup</h2>
                    </div>
                    <div id="ads-medium"  class="packagesitem">
                        <h2>Ad Medium</h2>
                    </div>
                    <div id="ads-advanced"  class="packagesitem">
                        <h2>Ad Advanced</h2>
                    </div>

                {/*Packages: Top text*/}

                    <div class="packagetitle" id="packages-1row">
                        <h1>
                            Discord Marketing
                        </h1>
                    </div>
                    <div class="packagetitle" id="packages-2row">
                        <h1>
                            Web Development
                        </h1>
                    </div>
                    <div class="packagetitle" id="packages-3row">
                        <h1 id="packages-3row">
                            Strategy & Insights
                        </h1>
                    </div>
                    <div class="packagetitle" id="packages-4row">
                        <h1>
                            Social Media Ads
                        </h1>
                    </div>

                        {/*Packages: Lines*/}

                        <div id="pline1"></div>
                        <div id="pline2"></div>
                        <div id="pline3"></div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

/* Tab funcs */
let tabtoggled = "Yes"
function servicestab(){
    if (tabtoggled === "Yes") {
        tabtoggled = "No"
        document.getElementById("triangleservices").style.transform = "rotate(180deg)";
        setTimeout(() => {
            document.getElementById("service-dropdown").style.transitionDuration = "0.25s";
            document.getElementById("service-dropdown").style.visibility = "visible";
            document.getElementById("service-dropdown").style.width = "600px";
        }, 0);
        setTimeout(() => {
            document.getElementById("service-dropdown").style.height = "400px";
        }, 250);
        setTimeout(() => {
            document.getElementById("service-dropdown").style.transitionDuration = "0s";
        }, 500);
    }
    else if (tabtoggled === "No") {
        tabtoggled = "Yes"
        document.getElementById("triangleservices").style.transform = "rotate(0deg)";
        setTimeout(() => {
            document.getElementById("service-dropdown").style.transitionDuration = "0.25s";
            document.getElementById("service-dropdown").style.width = "0px";
        }, 0);
        setTimeout(() => {
            document.getElementById("service-dropdown").style.height = "0px";
        }, 250);
        setTimeout(() => {
            document.getElementById("service-dropdown").style.transitionDuration = "0s";
            document.getElementById("service-dropdown").style.visibility = "hidden";
        }, 500);
    }
    else {
        console.log("dropdown error")
    }
}