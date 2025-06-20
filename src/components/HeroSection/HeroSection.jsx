import heroImage from "../../assets/heroImage.svg";
import "./HeroSection.css"

export default function HeroSection() {
    return (
        <section className="hero-container">
            <div className="text-section">
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
            <div className="image">
                <img src={heroImage} width="500px" />
                <p>Lorem Ipsum</p>
            </div>
        </section>
    )
}