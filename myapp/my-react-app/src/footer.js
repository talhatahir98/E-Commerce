import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import './footer.css'
const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <img src="./img/logo.svg" alt="logo"></img>
                    </div>
                    <div className="detail">
                        <p> we are a team of designers and developers that create high quality Websites</p>
                        <div className="icon">
                            <li><RiFacebookFill /></li>
                            <li><AiOutlineInstagram  /></li>
                            <li><AiOutlineTwitter /></li>
                            <li><BsYoutube /></li>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className="page">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Term & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer