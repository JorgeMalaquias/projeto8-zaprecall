import React from 'react';
import InitialCard from './initialCard';


function AnswerCard(props) {
    return (
        <div className="card-with-answer">
            <div>{props.answer}</div>
            <div>
                <div className="user-aswer red">Não lembrei</div>
                <div className="user-aswer orange">Quase não lembrei</div>
                <div className="user-aswer green">Zap!</div>
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
    const [answerStatus,setAnswerStatus]= React.useState(1);
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
            <AnswerCard answer={props.answer} setSelected={setSelected}/>
            </>
        );
    }
}