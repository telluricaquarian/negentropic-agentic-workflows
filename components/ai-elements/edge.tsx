
import React from 'react';

interface EdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

const Animated: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const path = `M ${sourceX} ${sourceY} C ${sourceX + 100} ${sourceY}, ${targetX - 100} ${targetY}, ${targetX} ${targetY}`;
  const pathId = `edge-path-${id}`;

  return (
    <g>
      <path
        id={pathId}
        d={path}
        fill="none"
        stroke="#333"
        strokeWidth="1.5"
      />
      <path
        d={path}
        fill="none"
        stroke="#666"
        strokeWidth="1.5"
        strokeDasharray="5,5"
        className="animate-[dash_10s_linear_infinite]"
      />
      <circle cx={sourceX} cy={sourceY} r="3" fill="#0070f3" className="animate-pulse" />
      <circle cx={targetX} cy={targetY} r="3" fill="#0070f3" />
      <circle r="4" fill="#0070f3" className="edge-traveling-dot">
        <animateMotion dur="3s" repeatCount="indefinite">
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .edge-traveling-dot { display: none; }
        }
      `}</style>
    </g>
  );
};

const Temporary: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const path = `M ${sourceX} ${sourceY} C ${sourceX + 100} ${sourceY}, ${targetX - 100} ${targetY}, ${targetX} ${targetY}`;
  const pathId = `edge-path-temp-${id}`;

  return (
    <g>
      <path
        id={pathId}
        d={path}
        fill="none"
        stroke="#444"
        strokeWidth="1.5"
        strokeDasharray="4,4"
        className="opacity-50"
      />
      <circle cx={sourceX} cy={sourceY} r="2" fill="#444" />
      <circle cx={targetX} cy={targetY} r="2" fill="#444" />
      <circle r="3" fill="#444" className="edge-traveling-dot opacity-50">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
    </g>
  );
};

export const Edge = {
  Animated,
  Temporary
};
