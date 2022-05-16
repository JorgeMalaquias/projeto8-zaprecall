import React from 'react';
import InitialCard from './initialCard';


function resetCard(number, setAnswerStatus, setSelected, setResultIcons,resultIcons){
    setAnswerStatus(number);
    setSelected(0);
    if(number===1){
        setResultIcons([...resultIcons,"close-circle"]);
    }
    if(number===2){
        setResultIcons([...resultIcons,"help-circle"]);
    }
    if(number===3){
        setResultIcons([...resultIcons,"checkmark-circle"]);
    }
}

function AnswerCard(props) {
    return (
        <div className="card-with-answer">
            <div>{props.answer}</div>
            <div>
                <div className="user-aswer red" onClick={()=>resetCard(1,props.setAnswerStatus,props.setSelected,props.setResultIcons, props.resultIcons)}>Não lembrei</div>
                <div className="user-aswer orange"  onClick={()=>resetCard(2,props.setAnswerStatus,props.setSelected,props.setResultIcons, props.resultIcons)}>Quase não lembrei</div>
                <div className="user-aswer green" onClick={()=>resetCard(3,props.setAnswerStatus,props.setSelected,props.setResultIcons, props.resultIcons)}>Zap!</div>
            </div>
        </div>
    );
}
function QuestionCard(props) {
    return (
        <div className="card-with-question">
            <div>{props.question}</div>
            <div>
                <ion-icon name="reload-outline" onClick={()=>props.setSelected(2)}></ion-icon>
            </div>
        </div>
    );
}


export default function Card(props) {
    const [answerStatus,setAnswerStatus]= React.useState(0);
    const [selected, setSelected] = React.useState(0);
    if(selected===0){
        return(
            <>
            <InitialCard number={props.number} setSelected={setSelected} answerStatus={answerStatus}/>
            </>
        );
    }
    if(selected===1){
        return(
            <>
            <QuestionCard question={props.question} setSelected={setSelected}/>
            </>
        );
    }
    if(selected===2){
        return(
            <>
            <AnswerCard resultIcons={props.resultIcons} setResultIcons={props.setResultIcons} answer={props.answer} setSelected={setSelected} setAnswerStatus= {setAnswerStatus}/>
            </>
        );
    }
}