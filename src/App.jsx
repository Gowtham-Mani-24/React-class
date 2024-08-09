import React from 'react'

function App({notes}) {
  // console.log(props);
  // let noteList = [];
  // for (let i=0;i<notes.length;i++){
  //   noteList.push(<li>{notes[i].content}</li>);
  // }
  // console.log(noteList);
  return (
    // <div>
    //   <h1>Notes</h1>
    //  <ul>
    //   {/* <li>{notes[0].content}</li>
    //   <li>{notes[1].content}</li>
    //   <li>{notes[2].content}</li> */}
    //   {/* for dynamically get the data use for loop */}
    //     {
    //       noteList
    //     }
    //  </ul>
    // </div>
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map((note)=>{
            return <li>{note.content}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
