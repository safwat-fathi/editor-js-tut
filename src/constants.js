import CheckList from "@editorjs/checklist";
import Header from "@editorjs/header";
import Table from "@editorjs/table";
import Image from "@editorjs/image";
import linkTool from "@editorjs/link";

export const EDITOR_JS_TOOLS = {
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  header: Header,
  table: Table,
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
        byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
      },
    },
  },
  linkTool: {
    class: linkTool,
    config: {
      endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching
    },
  },
};
