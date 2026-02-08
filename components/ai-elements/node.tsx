
import React from 'react';

interface NodeProps {
  children: React.ReactNode;
  handles: { source: boolean; target: boolean };
}

export const Node: React.FC<NodeProps> = ({ children, handles }) => (
  <div className="relative bg-[#111111] border border-[#222222] rounded-md min-w-[240px] shadow-2xl overflow-hidden group hover:border-[#444444] transition-colors">
    {handles.target && (
      <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#444] border-2 border-[#111] rounded-full z-10" />
    )}
    {children}
    {handles.source && (
      <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#444] border-2 border-[#111] rounded-full z-10" />
    )}
  </div>
);

export const NodeHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-3 border-b border-[#222222] bg-[#1a1a1a]/50">
    {children}
  </div>
);

export const NodeTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xs font-semibold text-white uppercase tracking-wider">{children}</h3>
);

export const NodeDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[10px] text-zinc-500 mt-0.5">{children}</p>
);

export const NodeContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-3 space-y-1 text-[11px] text-zinc-400">
    {children}
  </div>
);

export const NodeFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-2 border-t border-[#222222] bg-[#0d0d0d] flex justify-end">
    {children}
  </div>
);
