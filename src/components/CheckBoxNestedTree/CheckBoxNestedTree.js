import { useState } from "react";
import "./styles.css";
const CheckboxTree = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [treeData, setTreeData] = useState(data);

  const handleChange = (id, checked, children = []) => {
    const newCheckedItems = { ...checkedItems, [id]: checked };

    const updateChildren = (nodes, parentChecked) => {
      nodes.forEach((node) => {
        newCheckedItems[node.id] = parentChecked;
        if (node.children) {
          updateChildren(node.children, parentChecked);
        }
      });
    };

    if (children.length) {
      updateChildren(children, checked);
    }

    const updateParents = (nodes, parentId) => {
      nodes.forEach((node) => {
        if (node.children) {
          if (node.children.every((child) => newCheckedItems[child.id])) {
            newCheckedItems[node.id] = true;
          } else {
            newCheckedItems[node.id] = false;
          }
          updateParents(node.children, node.id);
        }
      });
    };
    updateParents(treeData, null);

    setCheckedItems(newCheckedItems);
  };

  const addChild = (parentId) => {
    const newTreeData = [...treeData];
    const addNode = (nodes) => {
      nodes.forEach((node) => {
        if (node.id === parentId) {
          if (!node.children) node.children = [];
          node.children.push({
            id: `${parentId}-${node.children.length + 1}`,
            label: `Child ${parentId}-${node.children.length + 1}`,
          });
        } else if (node.children) {
          addNode(node.children);
        }
      });
    };
    addNode(newTreeData);
    setTreeData(newTreeData);
  };

  const renderTree = (nodes) => {
    return nodes.map((node) => {
      const isChecked = checkedItems[node.id] || false;
      const allChildrenChecked =
        node.children && node.children.every((child) => checkedItems[child.id]);

      return (
        <div key={node.id} className="ml-4">
          <label>
            <input
              type="checkbox"
              checked={node.children ? allChildrenChecked : isChecked}
              onChange={(e) =>
                handleChange(node.id, e.target.checked, node.children || [])
              }
            />
            {node.label}
          </label>
          <button
            onClick={() => addChild(node.id)}
            className="ml-2 p-1 bg-blue-500 text-white rounded"
          >
            Add
          </button>
          {node.children && (
            <div className="ml-4">{renderTree(node.children)}</div>
          )}
        </div>
      );
    });
  };

  return <div>{renderTree(treeData)}</div>;
};

export default CheckboxTree;
