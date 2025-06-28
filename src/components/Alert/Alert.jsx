import "./Alert.css";

export default function Alert({ setOpen, onConfirm}) {

    return (
        <div className="alert-background">
            <div className="alert-container">
                <div className="alert-body">
                    <h4 className="alert-title">title</h4>
                    <p className="alert-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione officia nemo ipsa! Consequuntur praesentium assumenda doloribus voluptatem, nemo aliquid minus impedit vero repellendus delectus iste autem blanditiis reprehenderit odit eum?</p>
                    <div className="alert-actions">
                        <button onClick={() => setOpen(false)} className="cancel">Cancelar</button>
                        <button onClick={onConfirm} className="confirm">Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}