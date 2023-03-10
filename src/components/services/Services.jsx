import React, { useState } from 'react';
import "./services.css";

function Services() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product <br /> Designer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}>View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className=/* "services__modal" */ {toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className='services__modal-title'>Product Designer</h3>
                            <p className="services__modal-description">
                                services with more than 1 year of experience. Providing quality work to client
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        I develop User Interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        I develop Games and Apps.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        I develop User Interface.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services