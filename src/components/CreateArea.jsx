import React, {useState} from "react";

function CreateArea(props) {
  const [note, setInput] = useState(
    {
      title: "",
      content: ""
    }
  )

  function handleInput(event) {
    const {name,value} = event.target
    setInput({...note, [name]: value})
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleInput} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleInput} />
        <button onClick={(e)=>{props.addItem(note);e.preventDefault();setInput({title:"",content:""})}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
