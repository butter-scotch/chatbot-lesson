import React from 'react';
import {Answer} from './index';


const AnswersList = (props) => {

  return(
    <div className="answer-list">
      {props.answers.map((value, index) => {
        return <Answer content={value.content} nextId={value.nextId} key={index.toString()} selectAnswer={props.selectAnswer} />
      })}
    </div>
  )
}

export default AnswersList