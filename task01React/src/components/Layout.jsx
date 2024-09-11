import "./Layout.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ChildContainer from "./ChildContainer";
import JSXParser from "react-jsx-parser";
import { useState } from "react";
import { useRef } from "react";
import randColor from "./randCol";

let initColor = randColor();
const tree = {
  current: `<PanelGroup>
  <Panel>
    <ChildContainer color='${initColor}' initialColor={initialColor} nodeno={0} componentTree={componentTree}  setDoSplit={setDoSplit}  name="child" />
  </Panel>
</PanelGroup>`,
};

const Layout = () => {
  const [doSplit, setDoSplit] = useState(false);
  const componentTree = useRef(tree.current);
  const initialColor = useRef(initColor);

  // console.log("rendering");
  // console.log(componentTree.current);
  return (
    <JSXParser
      components={{
        Panel,
        PanelGroup,
        PanelResizeHandle,
        ChildContainer,
      }}
      jsx={componentTree.current}
      bindings={{ setDoSplit, componentTree, initialColor }}
    />
  );
};

export default Layout;
