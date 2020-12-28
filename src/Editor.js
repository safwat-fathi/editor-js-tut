import React, { useEffect, useRef, useState } from "react";
// editor.js components
import { EDITOR_JS_TOOLS } from "./constants";
import EditorJs from "react-editor-js";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";

const Editor = (props) => {
  const { data } = props;

  let editor = useRef(null);

  const [savedData, setSavedData] = useState(data);

  // useEffect(() => {
  // 	console.log(savedData);
  // }, [savedData])

  const handleSave = async () => {
    let savedData;
    if (!editor.current) {
      savedData = await editor.save();
      return savedData;
    }

    savedData = await editor.current.instance.save();
    return savedData;
  };

  return (
    <>
      <EditorJs
        ref={editor}
        instanceRef={(instance) => (editor = instance)}
        data={savedData}
        tools={EDITOR_JS_TOOLS}
        onReady={() => {
          new DragDrop(editor);
          const undo = new Undo({ editor });
          undo.initialize(savedData);
        }}
        onChange={async () => {
          handleSave()
            .then((data) => {
              setSavedData(data);
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      />
    </>
  );
};

export default Editor;
