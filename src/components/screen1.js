import logo from "../assets/img/logo.png"

export default function Screen1(){
    return (
        <div className="screen1">
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button>Inicir Recall!</button>
        </div>
    );
}