import React, {useState} from "react";

function CreateArea(props) {
  const [inputText, setInput] = useState(
    {
      title: "",
      content: ""
    }
  )

  function handleInput(event) {
    const {name,value} = event.target
    setInput({...inputText, [name]: value})
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={inputText.title} onChange={handleInput} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={inputText.content} onChange={handleInput} />
        <button onClick={(e)=>{props.addItem(inputText);e.preventDefault();setInput({title:"",content:""})}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
