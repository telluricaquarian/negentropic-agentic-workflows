
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
  const zoom = 0.4;
  const visualScale = zoom * 1.6; // scale(0.64) applied to each node
  const offsetX = 50;
  const offsetY = 250;

  return (
    <div className="w-full h-full relative dot-grid overflow-hidden bg-black/40 border border-[#222222] rounded-lg">
      <div className="absolute inset-0 p-4 overflow-auto scrollbar-hide">
        <div className="relative" style={{ width: '1400px', height: '600px' }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {edges.map((edge) => {
              const sourceNode = nodes.find(n => n.id === edge.source);
              const targetNode = nodes.find(n => n.id === edge.target);
              if (!sourceNode || !targetNode) return null;

              const EdgeComp = edgeTypes[edge.type];

              return (
                <EdgeComp
                  key={edge.id}
                  id={edge.id}
                  sourceX={sourceNode.position.x * zoom + offsetX + nodeWidth * visualScale}
                  sourceY={sourceNode.position.y * zoom + offsetY + (nodeHeight / 2) * visualScale}
                  targetX={targetNode.position.x * zoom + offsetX}
                  targetY={targetNode.position.y * zoom + offsetY + (nodeHeight / 2) * visualScale}
                />
              );
            })}
          </svg>

          {nodes.map((node) => {
            const NodeComp = nodeTypes[node.type];

            return (
              <div
                key={node.id}
                className="absolute transition-all duration-500 ease-in-out"
                style={{
                  left: `${node.position.x * zoom + offsetX}px`,
                  top: `${node.position.y * zoom + offsetY}px`,
                  transform: `scale(${visualScale})`,
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
