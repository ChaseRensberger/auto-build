"use client";
import { useCallback } from "react";

import ReactFlow, {
	addEdge,
	useNodesState,
	useEdgesState,
	MarkerType,
	Controls,
	Background,
} from "reactflow";

import CustomNode from "../components/CustomNode";
import FloatingEdge from "../components/FloatingEdge";
import CustomConnectionLine from "../components/CustomConnectionLine";

import "reactflow/dist/style.css";

const initialNodes: any[] = [
	{
		id: "1",
		type: "custom",
		position: { x: 0, y: 0 },
	},
	{
		id: "2",
		type: "custom",
		position: { x: 250, y: 320 },
	},
	{
		id: "3",
		type: "custom",
		position: { x: 40, y: 300 },
	},
	{
		id: "4",
		type: "custom",
		position: { x: 300, y: 0 },
	},
];

const initialEdges: any[] = [];

const connectionLineStyle = {
	strokeWidth: 3,
	stroke: "black",
};

const nodeTypes = {
	custom: CustomNode,
};

const edgeTypes = {
	floating: FloatingEdge,
};

const defaultEdgeOptions = {
	style: { strokeWidth: 3, stroke: "black" },
	type: "floating",
	markerEnd: {
		type: MarkerType.ArrowClosed,
		color: "black",
	},
};

const App = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params: any) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<main className="w-screen h-screen">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				defaultEdgeOptions={defaultEdgeOptions}
				connectionLineComponent={CustomConnectionLine}
				connectionLineStyle={connectionLineStyle}
			>
				<Controls />
				<Background />
			</ReactFlow>
		</main>
	);
};

export default App;
