
import React from 'react';
import { WorkflowNode, WorkflowEdge } from '../../types';

interface CanvasProps {
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  nodeTypes: any;
  edgeTypes: any;
  fitView?: boolean;
}

export const Canvas: React.FC<CanvasProps> = ({ nodes, edges, nodeTypes, edgeTypes }) => {
  const nodeWidth = 240;
  const nodeHeight = 120; // Estimated height for coordinate calculations

  return (
    <div className="w-full h-full relative dot-grid overflow-hidden bg-black/40 border border-[#222222] rounded-lg">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        {edges.map((edge) => {
          const sourceNode = nodes.find(n => n.id === edge.source);
          const targetNode = nodes.find(n => n.id === edge.target);
          if (!sourceNode || !targetNode) return null;

          const EdgeComp = edgeTypes[edge.type];
          
          // Simplified projection of grid to viewport
          const zoom = 0.4;
          const offsetX = 50;
          const offsetY = 250;

          return (
            <EdgeComp
              key={edge.id}
              id={edge.id}
              sourceX={sourceNode.position.x * zoom + offsetX + nodeWidth * zoom}
              sourceY={sourceNode.position.y * zoom + offsetY + (nodeHeight / 2) * zoom}
              targetX={targetNode.position.x * zoom + offsetX}
              targetY={targetNode.position.y * zoom + offsetY + (nodeHeight / 2) * zoom}
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 p-4 overflow-auto scrollbar-hide">
        <div className="relative" style={{ width: '1200px', height: '600px' }}>
          {nodes.map((node) => {
            const NodeComp = nodeTypes[node.type];
            // Match layout based on zoom factor
            const zoom = 0.4;
            const offsetX = 50;
            const offsetY = 250;

            return (
              <div
                key={node.id}
                className="absolute transition-all duration-500 ease-in-out"
                style={{
                  left: `${node.position.x * zoom + offsetX}px`,
                  top: `${node.position.y * zoom + offsetY}px`,
                  transform: `scale(${zoom * 2})`, // Visual scale to match screenshot
                  transformOrigin: 'top left',
                  zIndex: 10
                }}
              >
                <NodeComp data={node.data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
