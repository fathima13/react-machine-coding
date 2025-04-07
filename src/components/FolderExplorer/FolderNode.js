import { useState } from "react";

const FolderNode = ({ node, updateNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(node.name);

  const handleRename = () => {
    updateNode({ ...node, name: newName });
    setIsEditing(false);
  };

  const addNewItem = (type) => {
    const newItem = {
      id: Date.now(),
      name: type === "folder" ? "New Folder" : "New File",
      type,
      children: type === "folder" ? [] : undefined,
    };
    updateNode({ ...node, children: [...(node.children || []), newItem] });
  };

  const deleteNode = () => updateNode(null);

  return (
    <div className="folder-node">
      <div className="node">
        {node.type === "folder" && (
          <span onClick={() => setIsOpen(!isOpen)} className="toggle">
            {isOpen ? "📂" : "📁"}
          </span>
        )}
        {isEditing ? (
          <>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="rename-input"
            />
            <button onClick={handleRename}>✔</button>
          </>
        ) : (
          <span onDoubleClick={() => setIsEditing(true)} className="node-name">
            {node.type === "folder" ? node.name : `📄 ${node.name}`}
          </span>
        )}
        {node.type === "folder" && (
          <>
            <button onClick={() => addNewItem("folder")}>+ 📁</button>
            <button onClick={() => addNewItem("file")}>+ 📄</button>
          </>
        )}
        <button onClick={deleteNode} className="delete-btn">
          ❌
        </button>
      </div>

      {isOpen && node.children && (
        <div className="children">
          {node.children
            .filter((child) => child !== null) // Remove deleted items
            .map((child) => (
              <FolderNode
                key={child.id}
                node={child}
                updateNode={(updated) => {
                  updateNode({
                    ...node,
                    children: node.children
                      .map((c) => (c.id === child.id ? updated : c))
                      .filter(Boolean),
                  });
                }}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default FolderNode;
