import React from 'react'
import Ceo from "../../../assets/images/ceo.jpg";
import Director from "../../../assets/images/director.jpg";
import Director2 from "../../../assets/images/director2.jpg";

function Index() {
  return (
    <React.Fragment>
        <div className="aboutUs">
        <div className="topBanner">
            <div className="container">
                <h1>About US</h1>
            </div>
        </div>
        <div className="ourVision">
            <div className="container">
                <h3>Our Vision</h3>
                <p><strong>Ali Saqlain &amp; Builders</strong> was established in <strong>2000</strong>, considering the rapidly-rising property demands of people and their constant dream of living in their own house with their ideal lifestyle. Capturing such dreams and requirements, there is no one operating more efficiently than we do! Having spent fifteen years of accomplishment in the commercial real estate business, <strong>Ali Saqlain</strong> had a vision of expanding their line of services beyond facilitating traditional sales and investments, incorporating a complete range of plots, commercial and residential property, apartments, consultation and management services and projects.</p>
                <p>Our team of highly specialized agents and professionals have uplifted <strong>Ali Saqlain’s real estate</strong> <strong>market</strong> drastically due to their driving ambition to constantly better themselves and improve the quality of real estate experience. Properties whether for a landlord or a tenant are all handled with the most skillful and dedicated approach. We strive to deliver an ability to stand out in marketplace. Our agency excels with its three departments, each specializing in their particular field. The residential sales team holds expertise in different aspects of sales process for ensuring all the requirements are fully established and met.</p>
            </div>
        </div>
        <div className="ceos">
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Ceo} alt="ceo" />
                        </div>
                        <div className="col-md-8">
                            <h1>Muhammad Shahid Qadri</h1>
                            <h2>CEO</h2>
                            <p>Real estate, being the most promising investment area, has gathered mass with the passage of time. Pakistan’s real estate industry had been running in a traditional way when, in 1996, Bahria Town reshaped the market with premier housing and commercial solutions for affordable prices. Ali Saqlain Estate & Builders is the first authorized property company in Bahria Town, and it took me around twenty years to make Ali Saqlain Estate a responsible investment consultancy in real estate sector. Today, Ali Saqlain has tens of its own residential and commercial initiatives – SQ projects – in Bahria Town Lahore and Karachi. This is because we have won the trust of the investors and residents</p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Director} alt="Director" />
                        </div>
                        <div className="col-md-8">
                            <h1>Muhammad Shakir Qadri</h1>
                            <h2>Director</h2>
                            <p>I always feel pleased at being a part of Ali Saqlain Estate & Builders. This is because the company has served thousands of clients in the categories of selling and purchasing plots, shops, apartments and showrooms. Ali Saqlain Estate’s seasoned experience has enabled it to launch its personally developed skyscraper projects in Bahria Town Lahore and Karachi. With a range of property inventories, Ali Saqlain has extended its professionalism to the overseas Pakistanis as well. Pakistan’s real estate industry has regained its momentum and the investors are taking genuine interest in the property business. I invite you to come visit us at our Head Office in Bahria Town Lahore.</p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Director2} alt="Director2" />
                        </div>
                        <div className="col-md-8">
                            <h1>Muhammad Saqib Qadri</h1>
                            <h2>Director</h2>
                            <p>My long held association with Ali Saqlain Estate & Builders has seen many challenges. When it comes to serving the clients in residential and commercial sector, Ali Saqlain Estate comes one step forward to safeguard interest of its clients with integrity and responsibility. My message to the people is to come to us if you want to book, buy or sell a prime location plot, a customized commercial shop or a luxury apartment in Bahria Town Lahore and Karachi. You would see the difference in terms of excellence in customer service and transparency in dealings Ali Saqlain Estate delivers across the board. Safety of your investments and earning you high ROI are always our top priorities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Index