import heroImage from "../../assets/heroImage.svg";
import "./HeroSection.css"

export default function HeroSection() {
    return (
        <section className="hero-container">
            <div className="text-section">
                <h2>Bem-vindo à sua nova Lista de Tarefas!</h2>
                <p>A maneira mais simples e eficiente de organizar seu dia a dia. Com a nossa ferramenta, você pode criar tarefas rapidamente, definir prazos, priorizar suas atividades e acessar sua lista de qualquer lugar.</p>
            </div>
            <div className="image">
                <img src={heroImage} width="500px" />
                <p>Lorem Ipsum</p>
            </div>
        </section>
    )
}