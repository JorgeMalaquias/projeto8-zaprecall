import Screen1 from "./screen1";
import Screen2 from "./screen2";

const deck = [{ question: "quem é?", answer: "sou eu, bola de fogo" },
{ question: "quem é?", answer: "sou eu, bola de fogo" },
{ question: "tyh5yhj5yhj564yh65h56rth4r5hj4hj46?", answer: "sou eu, bola de fogo" },
{ question: "quem é?", answer: "sou eu, bola de fogo" },
{ question: "quem é?", answer: "sou eu, bola de fogo" },
{ question: "quem é?", answer: "sou eu, bola de fogo" },
{ question: "quem é?", answer: "sou eu, bola de fogo" }]




deck.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}

export default function App() {
    return (
        <Screen2 deck={deck}/>
    );
}