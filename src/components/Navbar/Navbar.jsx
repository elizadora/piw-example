import "./Navbar.css"

export default function Navbar(){
    return(
        <header className="navbar">
            <p className="text-logo">LOGO</p>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Tarefas</a>
                <button>Sair</button>
            </nav>
        </header>
    )
}