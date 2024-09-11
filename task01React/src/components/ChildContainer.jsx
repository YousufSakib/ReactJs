import React, { useRef } from "react";
import randColor from "./randCol";

const ChildContainer = ({
  color,
  componentTree,
  name,
  setDoSplit,
  nodeno,
  initialColor,
}) => {
  const clickHandlerV = (e) => {
    const nodeNo = e.nativeEvent.target.getAttribute("nodeno");
    // console.log(nodeNo);
    componentTree.current = reGenerateComponentsTree(
      nodeNo,
      "vertical",
      initialColor.current,
    );
    setDoSplit((pre) => !pre);
  };
  const clickHandlerH = (e) => {
    const nodeNo = e.nativeEvent.target.getAttribute("nodeno");
    // console.log(nodeNo);

    componentTree.current = reGenerateComponentsTree(
      nodeNo,
      "horizontal",
      initialColor.current,
    );

    setDoSplit((pre) => !pre);
  };
  const clickCrossHandle = (e) => {
    const nodeNo =
      e.nativeEvent.target.nextElementSibling.getAttribute("nodeno");
    componentTree.current = deleteNode(nodeNo);
  };
  // console.log(color);
  return (
    <div style={{ backgroundColor: color }} className={`child ${name}`}>
      <p onClick={clickCrossHandle} id="close">
        X
      </p>
      <input
        id="unique"
        onClick={clickHandlerV}
        type="button"
        value="V"
        nodeno={nodeno}
      />
      <input onClick={clickHandlerH} type="button" value="H" nodeno={nodeno} />
    </div>
  );
};
const nodeArr = [];

let noOfNodes = 0;

function TreeNode(
  val = 0,
  left = null,
  right = null,
  alignment = "",
  root = false,
  color = "",
) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.alignment = alignment;
  this.root = root;
  this.color = color;
}

const Pnode = new TreeNode(noOfNodes++, null, null, "", true, randColor());
nodeArr.push(Pnode);

function inorderTraverse(node) {
  // if (!node.left && node.root) return "";
  if (!node.left && node.root)
    return `
  <PanelGroup>
    <Panel>
      <ChildContainer color='${node.color}' nodeno='${node.val}' componentTree={componentTree}  setDoSplit={setDoSplit}  name="child" initialColor={initialColor}/>
    </Panel>
    </PanelGroup>`;
  if (!node.left)
    return `
        <Panel>
          <ChildContainer color='${node.color}' nodeno='${node.val}' componentTree={componentTree}  setDoSplit={setDoSplit}  name="child" initialColor={initialColor}/>
        </Panel>`;

  let ret = "";
  if (!node.root) ret += "<Panel>";
  ret += `<PanelGroup direction="${node.alignment}">`;
  ret += inorderTraverse(node.left);

  ret += `<PanelResizeHandle />`;

  ret += inorderTraverse(node.right);

  ret += `</PanelGroup>`;
  if (!node.root) ret += "</Panel>";
  return ret;
}

function reGenerateComponentsTree(nodeNo, alignment, initialColor) {
  console.log(initialColor);
  nodeArr[0].color = initialColor;
  const node = nodeArr[nodeNo];
  // console.log(node);
  const left = new TreeNode(noOfNodes++);
  const right = new TreeNode(noOfNodes++);
  left.color = randColor();
  right.color = node.color;
  node.alignment = alignment;
  node.left = left;
  node.right = right;

  nodeArr.push(left);
  nodeArr.push(right);

  const ret = inorderTraverse(Pnode);
  // console.log(ret);
  return ret;
}
function deleteNode(nodeNo) {
  console.log(nodeNo);
  console.log(nodeArr);
  delete nodeArr[nodeNo];
  for (let i = nodeNo; i < nodeArr.length - 1; i++) {
    nodeArr[i] = nodeArr[i + 1];
  }
  nodeArr.pop();
  console.log(nodeArr);

  function indt(node) {
    if (!node.left) {
      if (node.value >= nodeNo) {
        node.value = node.value - 1;
      }
      return "";
    }

    indt(node.left);
    if (node.value >= nodeNo) {
      node.value = node.value - 1;
    }
    indt(node.right);
  }

  const ret = inorderTraverse(Pnode);

  return ret;
}
export default ChildContainer;
