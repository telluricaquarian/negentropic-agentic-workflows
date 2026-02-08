
export interface NodeData {
  label: string;
  description: string;
  handles: {
    source: boolean;
    target: boolean;
  };
  content?: string[];
}

export interface NodePosition {
  x: number;
  y: number;
}

export interface WorkflowNode {
  id: string;
  type: string;
  position: NodePosition;
  data: NodeData;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  type: 'animated' | 'temporary';
}
