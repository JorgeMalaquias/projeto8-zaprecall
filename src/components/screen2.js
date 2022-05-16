
import logoPequeno from "../assets/img/logo-pequeno.png"
import Card from "./card";
import Bottom from "./bottom";
export default function Screen2(props){
    const {deck} = props;
    return(
        <div className="screen2">
            <div className="logo-and-name">
                <img src={logoPequeno} alt="logoPequeno"/>
                <h1>ZapRecall</h1>
            </div>
            <div className="cards">
                <Card number={1} question={deck[0].question} answer={deck[0].answer}/>
                <Card number={2} question={deck[1].question} answer={deck[1].answer}/>
                <Card number={3} question={deck[2].question} answer={deck[2].answer}/>
                <Card number={4} question={deck[3].question} answer={deck[3].answer}/>
                <Card number={5} question={deck[4].question} answer={deck[4].answer}/>
                <Card number={6} question={deck[5].question} answer={deck[5].answer}/>
                <Card number={7} question={deck[6].question} answer={deck[6].answer}/>
            </div>
            <Bottom/>

        </div>
    );
}