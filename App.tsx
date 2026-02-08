
import React, { useState } from 'react';
import { Canvas } from './components/ai-elements/canvas';
import { Edge } from './components/ai-elements/edge';
import {
  Node,
  NodeContent,
  NodeDescription,
  NodeFooter,
  NodeHeader,
  NodeTitle,
} from './components/ai-elements/node';

// Mock IDs for the specific example logic
const nodeIds = {
  start: 'start',
  process1: 'process1',
  decision: 'decision',
  output1: 'output1',
  output2: 'output2',
  process2: 'process2',
};

const nodes = [
  {
    data: {
      description: "Initialize workflow",
      handles: { source: true, target: false },
      label: "Start",
    },
    id: nodeIds.start,
    position: { x: 0, y: 0 },
    type: "workflow",
  },
  {
    data: {
      description: "Transform input",
      handles: { source: true, target: true },
      label: "Process Data",
    },
    id: nodeIds.process1,
    position: { x: 500, y: 0 },
    type: "workflow",
  },
  {
    data: {
      description: "Route based on conditions",
      handles: { source: true, target: true },
      label: "Decision Point",
    },
    id: nodeIds.decision,
    position: { x: 1000, y: 0 },
    type: "workflow",
  },
  {
    data: {
      description: "Handle success case",
      handles: { source: true, target: true },
      label: "Success Path",
    },
    id: nodeIds.output1,
    position: { x: 1500, y: -200 },
    type: "workflow",
  },
  {
    data: {
      description: "Handle error case",
      handles: { source: true, target: true },
      label: "Error Path",
    },
    id: nodeIds.output2,
    position: { x: 1500, y: 200 },
    type: "workflow",
  },
  {
    data: {
      description: "Finalize workflow",
      handles: { source: false, target: true },
      label: "Complete",
    },
    id: nodeIds.process2,
    position: { x: 2000, y: 0 },
    type: "workflow",
  },
];

const edges = [
  { id: 'e1', source: nodeIds.start, target: nodeIds.process1, type: "animated" as const },
  { id: 'e2', source: nodeIds.process1, target: nodeIds.decision, type: "animated" as const },
  { id: 'e3', source: nodeIds.decision, target: nodeIds.output1, type: "animated" as const },
  { id: 'e4', source: nodeIds.decision, target: nodeIds.output2, type: "temporary" as const },
  { id: 'e5', source: nodeIds.output1, target: nodeIds.process2, type: "animated" as const },
  { id: 'e6', source: nodeIds.output2, target: nodeIds.process2, type: "temporary" as const },
];

const nodeTypes = {
  workflow: ({ data }: { data: any }) => (
    <Node handles={data.handles}>
      <NodeHeader>
        <NodeTitle>{data.label}</NodeTitle>
        <NodeDescription>{data.description}</NodeDescription>
      </NodeHeader>
      <NodeContent>
        <div className="bg-black/40 p-1.5 rounded-sm border border-zinc-800">test</div>
        <div className="bg-black/40 p-1.5 rounded-sm border border-zinc-800">test</div>
      </NodeContent>
      <NodeFooter>
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
      </NodeFooter>
    </Node>
  ),
};

const edgeTypes = {
  animated: Edge.Animated,
  temporary: Edge.Temporary,
};

const workflowOptions = [
  'Automated Lead Scraping & Enrichment',
  'Cold Outreach Agent (Email / LinkedIn)',
  'Follow-Up & Reply Handling Agent',
  'Lead Qualification & Scoring Agent',
  'CRM Sync / Lead Routing Agent',
  'Proposal Generator',
  'Contract / SOP Generator',
  'Market / Competitor Research Agent',
  'Knowledge Base / RAG Agent',
  'Content Repurposing Agent',
  'Multi-Agent Orchestration System',
  'Self-Healing (Self-Annealing) Workflow',
  'Not sure yet \u2014 want guidance',
];

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', site: '' });
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, workflows: selectedWorkflows });
  };

  const toggleWorkflow = (option: string) => {
    setSelectedWorkflows(prev =>
      prev.includes(option) ? prev.filter(w => w !== option) : [...prev, option]
    );
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      {/* Background radial gradient for subtle depth */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Workflow Visuals */}
          <div className="space-y-16 order-2 lg:order-1">
            <div className="space-y-4">
              <img src="/images/tts-logo.png" alt="TTS" className="h-6 w-auto" />
              <h2 className="text-2xl font-light">Building & designing anew.</h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-zinc-300">Lead Generation Workflow</h3>
              <div className="h-[400px] w-full relative group">
                <Canvas
                  edges={edges}
                  edgeTypes={edgeTypes}
                  fitView
                  nodes={nodes}
                  nodeTypes={nodeTypes}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black pointer-events-none" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-zinc-300">Document Generation Workflow</h3>
              <div className="h-[400px] w-full relative group">
                <Canvas
                  edges={edges}
                  edgeTypes={edgeTypes}
                  fitView
                  nodes={nodes}
                  nodeTypes={nodeTypes}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy and CTA */}
          <div className="space-y-12 lg:sticky lg:top-24 order-1 lg:order-2">
            <div className="space-y-6">
              <h1 className="flex flex-col">
                <span className="text-[#EFFF00] font-redaction-italic text-3xl md:text-4xl lg:text-5xl tracking-tight">Negentropic</span>
                <span className="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mt-2">Agentic Workflows</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl font-light">
                Self-Annealing Agentic Workflows built and designed by Llewellyn to make operations frictionless and seamless,
                simply open the workflows up in your I.D.E and enter the provided prompts and Voilà the work is done for you
                in almost and instant by via typing or simply dictating toward it (speech) your desired flow.
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-500 font-medium uppercase tracking-widest">See how below:</span>
                <span className="text-xs font-bold uppercase bg-[#EFFF00] text-black px-3 py-1 rounded-full">Coming Soon</span>
              </div>
              <div className="aspect-video w-full rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden relative">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/video/placeholder.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Waitlist Section */}
            <div className="space-y-8 pt-8 border-t border-zinc-900">
              <div className="space-y-4">
                <h2 className="text-[#EFFF00] font-redaction-italic text-3xl">Join the waitlist</h2>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-lg">
                  Your Website, alongside the workflows you selected and being needed and other business assets such as your social media will be inspected and appraised to identify how we may be able to provide value via the production and implementation of agentic workflows to relegate such flows to be able to work on those, thus saving you time, money & mental bandwidth.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Name:"
                      className="w-full bg-black border border-zinc-800 rounded-full px-6 py-4 text-sm focus:border-[#EFFF00] focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email:"
                      className="w-full bg-black border border-zinc-800 rounded-full px-6 py-4 text-sm focus:border-[#EFFF00] focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Site:"
                      className="w-full bg-black border border-zinc-800 rounded-full px-6 py-4 text-sm focus:border-[#EFFF00] focus:outline-none transition-colors"
                      value={formData.site}
                      onChange={e => setFormData({...formData, site: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-zinc-400 text-sm font-medium">
                    Which agentic workflows are you interested in building? (Select all that apply)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {workflowOptions.map(option => (
                      <label
                        key={option}
                        className="flex items-start gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedWorkflows.includes(option)}
                          onChange={() => toggleWorkflow(option)}
                          className="mt-1 accent-[#EFFF00] w-4 h-4 shrink-0"
                        />
                        <span className="text-zinc-400 text-sm group-hover:text-zinc-200 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="md:hidden w-full bg-[#EFFF00] text-black font-bold py-4 px-12 rounded-full hover:bg-white transition-colors duration-300">
                  Join Waitlist
                </button>
                <button type="submit" className="hidden md:block w-fit bg-[#EFFF00] text-black font-bold py-4 px-12 rounded-full hover:bg-white transition-colors duration-300">
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-[#EFFF00] text-[10px] uppercase tracking-widest max-w-2xl font-medium">
            This site is not a part of Meta, the Facebook website or Facebook, Inc. Additionally this website is NOT endorsed by Facebook in any way. Facebook is a trademark of FACEBOOK, INC.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default App;
