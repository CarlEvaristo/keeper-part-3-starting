import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [keeperItems, setKeeperItem] = useState([])

  function addItem(item) {
    if (item.title === "" && item.content === "") alert("Please fill in all fields!")
    else setKeeperItem([...keeperItems, item])
  }

  function deleteItem(id) {
    setKeeperItem(keeperItems.filter((item,index) => index !== id))
  }

  return (
    <div>
      <Header />
      <CreateArea 
        addItem={addItem}
      />
      {keeperItems.map((item,index) => 
        <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteItem}/>
      )}
      <Footer />
    </div>
  );
}

export default App;
