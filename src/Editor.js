import React, { useRef, useState } from "react";
// editor.js components
import { EDITOR_JS_TOOLS } from "./constants";
import EditorJs from "react-editor-js";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";

const Editor = () => {
  let editor = useRef(null);

  const [savedData, setSavedData] = useState({
    time: Date.now(),
    blocks: [
      {
        type: "header",
        data: {
          text: "header",
          level: 1,
        },
      },
      // {
      //   type: "image",
      //   data: {
      //     file: {
      //       url:
      //         "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
      //     },
      //     caption: "Roadster // tesla.com",
      //     withBorder: true,
      //     withBackground: false,
      //     stretched: false,
      //   },
      // },
      // {
      //   type: "linkTool",
      //   data: {
      //     link: "https://codex.so",
      //     meta: {
      //       title: "CodeX Team",
      //       site_name: "CodeX",
      //       description:
      //         "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
      //       image: {
      //         url: "https://codex.so/public/app/img/meta_img.png",
      //       },
      //     },
      //   },
      // },
    ],
  });

  console.log(savedData);

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
