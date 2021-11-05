import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const data = {
  id: 'root',
  name: 'Sports Club',
  children: [
    {
      id: '1',
      name: 'football',
      children: [
        {
          id: '4',
          name: 'Change Deadline',
        },
      ]
    },
    {
      id: '3',
      name: 'Basket Ball',
      children: [
        {
          id: '4',
          name: 'Change Deadline',
        },
      ],
    },
  ],
};

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
      sx={{ height: 110, flexGrow: 1, maxWidth:400 }}
    >
      {renderTree(data)}
    </TreeView>
  );
}