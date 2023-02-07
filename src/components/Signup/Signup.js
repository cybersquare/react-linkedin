import style from "./Signup.module.css";
import React from "react";
import Logo from "../../svg/linkedin-signup-logo.svg"; 
import footerLogo from "../../svg/footer-logo.svg"; 
import {Helmet} from "react-helmet";
import googleLogo from "../../svg/google.svg"; 


const Signup = () => {
    return (
        <div className={style.signUpMain}>
            <Helmet>
                <title>Sign Up | LinkedIn</title>
            </Helmet> 
            <div className={style.signUpContent}>
                <img src={Logo}  className={style.logo} alt="logo"/>
                <div className={style.centerContent}>
                    <div className={style.textContent}>
                        <span>Make the most of your professional life</span>
                    </div>
                    <div className={style.inputBox}>
                        <div className={style.join__form__form_body}>
                        <label className={style.input__label}  htmlFor="email-or-phone">Email or phone number</label>
                        <input className={style.input} required id="email-or-phone" type="text" name="email-or-phone" value="" onChange={()=>{}}/>
                        <label className={style.input__label} htmlFor="password">Password (6 or more characters)</label>
                        <input className={style.input} required id="password" type="password" name="password" placeholder="" value="" onChange={()=>{}}/>
                        <span className={style.join__form__form_body_agreement}>
                            By clicking Agree & Join, you agree to the LinkedIn 
                            <a target="_blank" href="https://www.linkedin.com/" className={style.join_form__form_body_agreement_item_link} rel="noopener noreferrer"> User Agreement</a>, 
                            <a target="_blank" href="https://www.linkedin.com/" className={style.join_form__form_body_agreement_item_link} rel="noopener noreferrer">Privacy Policy</a> , and 
                            <a target="_blank" href="https://www.linkedin.com/" className={style.join_form__form_body_agreement_item_link} rel="noopener noreferrer"> Cookie Policy</a>
                        </span>
                        <button type="submit" id="join-form-submit" className={style.join__form__form_body_submit_button} value="Agree &amp; Join" data-tracking-control-name="registration-frontend_join-form-submit">Agree &amp; Join</button>
                        <div className={style.third_party_join__container}>
                            <h2 className={style.h2Tag}><span className={style.spanTag}>Or</span></h2>
                        </div>
                        <div className={style.continueGoogle}>
                            <img src={googleLogo} width="25px"/>
                            <p> Continue with Google</p>
                        </div>
                        <p className={style.main__sign_in_container}>
                            Already on LinkedIn?  
                            <a href="https://www.linkedin.com/"  className={style.main__sign_in_link} rel="noopener noreferrer"> Sign in</a>
                        </p>
                    </div>
                </div>
                <p class={style.page_help_link__text}>Looking to create a page for a business? 
                    <a href="https://www.linkedin.com/" className={style.page_help_link__link} target="_blank" rel="noopener noreferrer"> Get help</a>
                </p>
            </div>
            <footer className={style.li_footer}>
                <ul className={style.li_footer__list}>
                    <img src={footerLogo} alt="footer-logo" style={{width:80}}/>
                    <li class="li_footer__item">
                        <span class="sr-only">LinkedIn</span><icon class="li-footer__copy-logo lazy-loaded" aria-hidden="true"></icon><span class="li-footer__copy-text">© 2021</span>
                    </li>
                    <li className={style.li_footer__item}>
                        <a href="https://about.linkedin.com?trk=registration_footer-about" data-tracking-control-name="registration_footer-about" data-tracking-will-navigate="" className={style.li_footer__item_link}>About</a>
                    </li>
                    <li className={style.li_footer__item}>
                        <a href="https://www.linkedin.com/accessibility?trk=registration_footer-accessibility" data-tracking-control-name="registration_footer-accessibility" data-tracking-will-navigate="" className={style.li_footer__item_link}>Accessibility</a>
                    </li>
                    <li className={style.li_footer__item}>
                        <a href="https://www.linkedin.com/legal/user-agreement?trk=registration_footer-user-agreement" data-tracking-control-name="registration_footer-user-agreement" data-tracking-will-navigate="" className={style.li_footer__item_link}>User Agreement</a>
                    </li>
                    <li className={style.li_footer__item}>
                        <a href="https://www.linkedin.com/legal/privacy-policy?trk=registration_footer-privacy-policy" data-tracking-control-name="registration_footer-privacy-policy" data-tracking-will-navigate="" className={style.li_footer__item_link}>Privacy Policy</a>
                    </li>
                    <li className={style.li_footer__item}>
                        <a href="https://www.linkedin.com/legal/cookie-policy?trk=registration_footer-cookie-policy" data-tracking-control-name="registration_footer-cookie-policy" data-tracking-will-navigate="" className={style.li_footer__item_link}>Cookie Policy</a>
                    </li>
                    <li className={style.li_footer__item}>
                        <a href="https://www.linkedin.com/legal/copyright-policy?trk=registration_footer-copyright-policy" data-tracking-control-name="registration_footer-copyright-policy" data-tracking-will-navigate="" className={style.li_footer__item_link}>Copyright Policy</a>
                    </li><li className={style.li_footer__item}>
                        <a href="https://brand.linkedin.com/policies?trk=registration_footer-brand-policy" data-tracking-control-name="registration_footer-brand-policy" data-tracking-will-navigate="" className={style.li_footer__item_link}>Brand Policy</a></li>
                    <li className={style.li_footer__item}>
                        <a href="https://www.linkedin.com/psettings/guest-controls?trk=registration_footer-guest-controls" data-tracking-control-name="registration_footer-guest-controls" data-tracking-will-navigate="" className={style.li_footer__item_link}>Guest Controls</a>
                    </li>
                    <li className={style.li_footer__item}>
                        <a href="https://www.linkedin.com/legal/professional-community-policies?trk=registration_footer-community-guide" data-tracking-control-name="registration_footer-community-guide" data-tracking-will-navigate="" className={style.li_footer__item_link}>Community Guidelines</a>
                    </li>
                                </ul>
                        
                        </footer>
        </div>
        </div>
    );
}

export default Signup;