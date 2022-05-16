import Screen1 from "./screen1";
import Screen2 from "./screen2";
import React from "react";

const deck = [{ question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
{ question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
{ question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
{ question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma" },
{ question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
{ question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
{ question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }];

deck.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}



export default function App() {
    const[screenGame,setScreenGame]= React.useState(0);
    return (
        <>
            {screenGame===0 ? <Screen1 setScreenGame={setScreenGame}/>:<Screen2 deck={deck}/>};
        </>
        
    );
}