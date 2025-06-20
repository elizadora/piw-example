import "./Footer.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";


export default function Footer() {
    return (
        <footer className="footer">
            <h1>LOGO</h1>
            <div className="social-media">
                <BsLinkedin className="icon"/>
                <BsGithub className="icon"/>
                <BsInstagram className="icon"/>
            </div>
        </footer>
    )
}