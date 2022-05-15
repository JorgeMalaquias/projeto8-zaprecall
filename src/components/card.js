import React from 'react';



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
function InitialCard(props) {
    return (
        <div className="card-with-no-question">
            <h3>Pergunta {props.number}</h3>
            <ion-icon name="play-outline" onClick={()=>props.setSelected(1)}></ion-icon>
        </div>
    );
}

export default function Card(props) {
    const [selected, setSelected] = React.useState(0);
    if(selected===0){
        return(
            <>
            <InitialCard number={props.number} setSelected={setSelected}/>
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
    /*if(selected===2){
        return(
            <>
            <AnswerCard question={props.question} setSelected={setSelected}/>
            </>
        );
    }*/
}