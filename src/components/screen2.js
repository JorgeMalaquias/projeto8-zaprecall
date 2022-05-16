
import logoPequeno from "../assets/img/logo-pequeno.png"
import Card from "./card";
import Bottom from "./bottom";
import React from "react";
function ResultIcon(iconName, index) {
    console.log(index);
    if (iconName === "close-circle") {
        return (
            <div className="wrong" key={index}>
                <ion-icon name={iconName}  ></ion-icon>
            </div>

        );
    }
    if (iconName === "help-circle") {
        return (
            <div className="dont-remember" key={index}>
                <ion-icon name={iconName}  ></ion-icon>
            </div>
        );
    }
    if (iconName === "checkmark-circle") {
        return (
            <div className="correct" key={index}>
                <ion-icon name={iconName}  ></ion-icon>
            </div>
        );
    }
}
export default function Screen2(props) {
    const [resultIcons,setResultIcons] = React.useState([]);
    const { deck } = props;
    return (
        <div className="screen2">
            <div className="logo-and-name">
                <img src={logoPequeno} alt="logoPequeno" />
                <h1>ZapRecall</h1>
            </div>
            <div className="cards">
                <Card resultIcons={resultIcons} setResultIcons={setResultIcons} number={1} question={deck[0].question} answer={deck[0].answer} />
                <Card resultIcons={resultIcons} setResultIcons={setResultIcons} number={2} question={deck[1].question} answer={deck[1].answer} />
                <Card resultIcons={resultIcons} setResultIcons={setResultIcons} number={3} question={deck[2].question} answer={deck[2].answer} />
                <Card resultIcons={resultIcons} setResultIcons={setResultIcons} number={4} question={deck[3].question} answer={deck[3].answer} />
                <Card resultIcons={resultIcons} setResultIcons={setResultIcons} number={5} question={deck[4].question} answer={deck[4].answer} />
                <Card resultIcons={resultIcons} setResultIcons={setResultIcons} number={6} question={deck[5].question} answer={deck[5].answer} />
                <Card resultIcons={resultIcons} setResultIcons={setResultIcons} number={7} question={deck[6].question} answer={deck[6].answer} />
            </div>
            <Bottom>
                <h2>{resultIcons.length}/{deck.length} CONCLUÍDOS</h2>
                <div>
                    {resultIcons.map(ResultIcon)}
                </div> 
            </Bottom>

        </div>
    );
}