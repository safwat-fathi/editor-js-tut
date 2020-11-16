import React, { useRef, useEffect, useState } from "react";
import { EDITOR_JS_TOOLS } from "./constants";
import EditorJs from "react-editor-js";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";

const App = () => {
  let editor = useRef(null);

  const [savedData, setSavedData] = useState({});

  const handleSave = async () => {
    let savedData;
    if (!editor.current) {
      savedData = await editor.save();
      return savedData;
    }

    savedData = await editor.current.instance.save();
    return savedData;
  };

  const data = {
    time: 0,
    blocks: [
      {
        type: "header",
        data: {
          text: "header",
          level: 1,
        },
      },
    ],
  };

  console.log(savedData);

  return (
    <div className="App">
      <EditorJs
        ref={editor}
        instanceRef={(instance) => (editor = instance)}
        data={data}
        tools={EDITOR_JS_TOOLS}
        onReady={() => {
          new DragDrop(editor);
          const undo = new Undo({ editor });
          undo.initialize(data);
        }}
        onChange={async () => {
          handleSave()
            .then((data) => {
              setSavedData(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      />
    </div>
  );
};

export default App;
