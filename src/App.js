import React, { useEffect, useState } from 'react';
import data from './data';
import Single from './singleQuestione';
function App() {
  const [questions, setQuestions] = useState(data);

  if(questions.length === 0) {
    return  <main className='container'>
    <section className="box">
        <div className="stop">
       <h1 className="title"> Questions And Answers About Login</h1>
        <button className="btn1" >
          refresh
        </button>

        </div>
       </section>
  </main>
  }

  return (
   <main className='container'>
     <section className="box">
         <div className="stop">
           
        <h1 className="title"> Questions And Answers About Login</h1>
         <button className="btn1" onClick={()=> setQuestions([])}>
           stop
         </button>
         </div>
        <section >
          {questions.map((question) => {
            return  <Single key={question.id} {...question}/>;
          })}
        </section>
     </section>
   </main>
  );
}

export default App;
