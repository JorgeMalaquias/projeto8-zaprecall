import React from 'react';

export default function InitialCard(props) {
    if(props.answerStatus===0){
        return (
            <div className="card-with-no-question">
                <h3>Pergunta {props.number}</h3>
                <ion-icon name="play-outline" onClick={()=>props.setSelected(1)}></ion-icon>
            </div>
        );
    }
    if(props.answerStatus===1){
        return (
            <div className="card-with-no-question answered wrong">
                <h3>Pergunta {props.number}</h3>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        );
    }
    if(props.answerStatus===2){
        return (
            <div className="card-with-no-question answered dont-remember">
                <h3>Pergunta {props.number}</h3>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        );
    }
    if(props.answerStatus===3){
        return (
            <div className="card-with-no-question answered correct">
                <h3>Pergunta {props.number}</h3>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        );
    }
    
}