import { useState } from "react";
import FolderNode from "./FolderNode";

import "./styles.css";

const initialData = [
  {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      { id: 2, name: "App.js", type: "file" },
      {
        id: 3,
        name: "components",
        type: "folder",
        children: [{ id: 4, name: "Header.js", type: "file" }],
      },
    ],
  },
];

const App = () => {
  const [folders, setFolders] = useState(initialData);

  const updateNode = (updatedNode) => {
    const updateTree = (nodes) =>
      nodes
        .map((node) =>
          node.id === updatedNode.id
            ? updatedNode
            : node.type === "folder"
            ? { ...node, children: updateTree(node.children || []) }
            : node
        )
        .filter(Boolean); // Remove deleted nodes

    setFolders(updateTree(folders));
  };

  return (
    <div className="app">
      <h2> File Explorer</h2>
      {folders.map((folder) => (
        <FolderNode key={folder.id} node={folder} updateNode={updateNode} />
      ))}
    </div>
  );
};

export default App;
