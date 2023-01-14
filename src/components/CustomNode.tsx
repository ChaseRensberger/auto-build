"use client";
import { Handle, Position, useStore } from "reactflow";

const connectionNodeIdSelector = (state: any) => state.connectionNodeId;

export default function CustomNode({ id }: any) {
	const connectionNodeId = useStore(connectionNodeIdSelector);
	const isTarget = connectionNodeId && connectionNodeId !== id;

	const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };

	return (
		<div className="customNode">
			<div
				className="customNodeBody flex flex-col justify-between align-center"
				style={{
					borderStyle: isTarget ? "dashed" : "solid",
					backgroundColor: isTarget ? "#83ff73" : "#ccd9f6",
				}}
			>
				<Handle
					className="targetHandle"
					style={{ zIndex: 2 }}
					position={Position.Right}
					type="source"
				/>
				<Handle
					className="targetHandle"
					style={targetHandleStyle}
					position={Position.Left}
					type="target"
				/>
				<p>Enter Prompt</p>
				<textarea className="textarea textarea-bordered z-50"></textarea>
				<button className="btn z-50">Send</button>
			</div>
		</div>
	);
}
