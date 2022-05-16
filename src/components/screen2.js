
import logoPequeno from "../assets/img/logo-pequeno.png"
import Card from "./card";
import Bottom from "./bottom";
import React from "react";
import sad from "../assets/img/sad.png";
import party from "../assets/img/party.png";

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
function BottomPlaying(props) {
    return (
        <Bottom>
            <h2>{props.resultIcons.length}/{props.deck.length} CONCLUÍDOS</h2>
            <div className="result-Icons">
                {props.resultIcons.map(ResultIcon)}
            </div>
        </Bottom>
    );
}
function BottomFinished(props) {
    if (props.resultIcons.includes("close-circle")) {
        return (
            <Bottom>
                <div>
                    <img src={sad} alt="sad"></img>
                    <h3>Putz...</h3>
                </div>
                <h2>Ainda faltam alguns...
                    Mas não desanime!</h2>
                <h2>{props.resultIcons.length}/{props.deck.length} CONCLUÍDOS</h2>
                <div className="result-Icons">
                    {props.resultIcons.map(ResultIcon)}
                </div>
            </Bottom>
        );
    } else {
        return (
            <Bottom>
                <div>
                    <img src={party} alt="party"></img>
                    <h3>Parabéns!</h3>
                </div>
                <h2>Você não esqueceu de nenhum flashcard!</h2>
                <h2>{props.resultIcons.length}/{props.deck.length} CONCLUÍDOS</h2>
                <div className="result-Icons">
                    {props.resultIcons.map(ResultIcon)}
                </div>
            </Bottom>
        );
    }

}
export default function Screen2(props) {
    const [resultIcons, setResultIcons] = React.useState([]);
    const { deck } = props;
    return (
        <div className="screen2">
            <div className="logo-and-name">
                <img src={logoPequeno} alt="logoPequeno" />
                <h1>ZapRecall</h1>
            </div>
            <div className="cards">
                {deck.map((deck, index) => <Card key={index} resultIcons={resultIcons} setResultIcons={setResultIcons} number={index + 1} question={deck.question} answer={deck.answer} />)}
            </div>
            {resultIcons.length < deck.length ? <BottomPlaying resultIcons={resultIcons} deck={deck} /> : <BottomFinished resultIcons={resultIcons} deck={deck} />}
        </div>
    );
}