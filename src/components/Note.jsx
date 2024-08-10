function Note({note}){   
    // handling events
    const handleClick = () => console.log(`${note.content} clicked`);
    
    return <li onClick={handleClick}>
        {note.content} {note.important && '★'}
    </li>
  }

export default Note;