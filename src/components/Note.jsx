function Note({note}){
    //conditionl rendering

    //using if - else statement
    // if(note.important){
    //     return <li>{note.content}{'★'}</li>
    // }
    // else{
    //     return <li>{note.content}</li>
    // }

    //using ternary operaor
   // return note.important ?  <li>{note.content}{'★'}</li> :  <li>{note.content}</li>
    
    // using logical &&
    return <li>
        {note.content} {note.important && '★'}
    </li>
  }

export default Note;