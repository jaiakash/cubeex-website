import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import {data1,data2,data3} from "../Config/Data.config.js"

export default function RichObjectTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} sx={{color:"white"}}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 100, flexGrow: 1, maxWidth:400,position:'relative'}}
    >
      {renderTree(data1)}
      <br/>
      {renderTree(data2)}
      <br/>
      {renderTree(data3)}
      <br/>
       

    </TreeView>
  );
}