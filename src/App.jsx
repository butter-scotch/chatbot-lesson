import React, {useState, useCallback, useEffect} from 'react';
import './assets/styles/styles.css';
import {AnswersList, Chats} from './components/index';
import FormDialog from './components/Forms/FormDialog';
import {db} from './firebase/index';

const App = () => {

  const [dataset, setDataset] = useState({})
  const [currentId, setCurrentId] = useState("init")
  const [answers, setAnswers] = useState([])
  const [chats, setChats] = useState([])
  const [open, setOpen] = useState(false)

  const addChats = useCallback((chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  },[setChats])

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: "question"
    })

    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  }

  const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
    switch(true){
      case(nextQuestionId === 'contact'):
        handleClickOpen();
        break;
      case(/^https:*/.test(nextQuestionId)):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.rel = "noopener";
        a.click();
        break;
      default:
        addChats({
          text: selectedAnswer,
          type: "answer"
        })

        setTimeout(() => displayNextQuestion(nextQuestionId,dataset[nextQuestionId]),750);
        break;
      
    }
  },[answers])

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  },[setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  },[setOpen]);

  useEffect(() => {
    (async() => {
      const initDataset = {};


      await db.collection('question').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          initDataset[id] = data
        })
      });

      setDataset(initDataset)
      displayNextQuestion(currentId,initDataset[currentId])

    })()
  },[])

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  return (
    <div>
      <section className="section">
        <div className="box">
          <Chats chats={chats} />
          <AnswersList answers={answers} selectAnswer={selectAnswer} />
          <FormDialog open={open} handleClose={handleClose} />
        </div>
      </section>
    </div>
  );
}

export default App;
