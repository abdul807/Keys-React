
import { useState } from 'react';
import './App.css';
import ToDo from './Todos';
import UserInput from './user-input';
// import { useState } from 'react';




function App(){
  const [Score,setScore] = useState('10')
  const [Comment,setComment] = useState('');

function handleSubmit(e){
  e.preventDefault();
  if (Number(Score) <=5 && Comment.length <= 10){
    alert('Please explain better for best user experience');
    return
  }
  console.log('Form Submitted')
  setComment("")
  setScore('10')

}


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback From</h2>
          <div className="Field">
            <label htmlFor="Score">Score: {Score}</label> <br />
            <input type="range" 
            min='0' 
            max='10'
             value={Score}
             onChange= {(e)=> setScore(e.target.value)} />
          </div>
          <div className="Field">
            <label htmlFor="Comment">Comments</label> <br />
            <textarea value={Comment} onChange={(e)=> setComment(e.target.value)} ></textarea>
          </div>
          <button type="submit">Submit</button>

          
        </fieldset>
      </form>
    </div>
  )
}

// function App() {
//   const [Todos,setTodos] = useState([{
//     id:'todo1',
//     createdAt: '18:00'
//   },{
//     id:'todo2',
//     createdAt: '8:00'
//   }])
//   const [name,setName] = useState("")

//   function reverseOrder(){
//     return setTodos([...Todos].reverse())
//   }
//   return (
//     <div className="App">
//       <button value={name} onClick={reverseOrder} onChange={(e)=>setName(e.target.value)} disabled={!name} >Reverse</button>
//       <table>
//         <tbody>
//           {Todos.map(function(Todos){
//             return  <ToDo key={Todos.id} id={Todos.id} createdAt={Todos.createdAt}/>
//           })}
//         </tbody>
//       </table>
//      <UserInput />
//     </div>
//   );
// }

export default App;
