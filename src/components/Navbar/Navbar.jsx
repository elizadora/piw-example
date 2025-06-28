import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"
import Alert from "../Alert/Alert"
import { useState } from "react"

export default function Navbar() {
    // variavel e a funcao que altera a variavel
    const [openAlert, setOpenAlert] = useState(false);
    const navigate = useNavigate();

    const logout = () =>{
        navigate("/");
    }

    return (
        <>
            {openAlert && <Alert setOpen={setOpenAlert} onConfirm={logout} />}
            <header className="navbar">
                <p className="text-logo">To do List</p>
                <nav>
                    <Link to="/home">Inicio</Link>
                    <Link to="/tasks">Tarefas</Link>
                    <button onClick={() => setOpenAlert(true)}>Sair</button>
                </nav>
            </header>
        </>
    )
}