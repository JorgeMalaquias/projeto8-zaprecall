import React from 'react';
import InitialCard from './initialCard';


function ResetCard(number, setAnswerStatus, setSelected){
    setAnswerStatus(number);
    setSelected(0);
}

function AnswerCard(props) {
    return (
        <div className="card-with-answer">
            <div>{props.answer}</div>
            <div>
                <div className="user-aswer red" onClick={()=>ResetCard(1,props.setAnswerStatus,props.setSelected)}>Não lembrei</div>
                <div className="user-aswer orange"  onClick={()=>ResetCard(2,props.setAnswerStatus,props.setSelected)}>Quase não lembrei</div>
                <div className="user-aswer green" onClick={()=>ResetCard(3,props.setAnswerStatus,props.setSelected)}>Zap!</div>
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
    console.log(answerStatus+"fora do if");
    const [selected, setSelected] = React.useState(0);
    if(selected===0){
        console.log("resetand");
        console.log(answerStatus);
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
            <AnswerCard answer={props.answer} setSelected={setSelected} setAnswerStatus= {setAnswerStatus}/>
            </>
        );
    }
}