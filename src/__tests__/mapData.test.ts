import { describe, it, expect } from "vitest";
import { createFlowNode, createFlowEdge, convertTreeToGraph, findRootNode, buildGraphMaps } from "../utils/mapData";

describe("Map Utilities & Graph Converters", () => {
  it("should create a flow node with custom node type", () => {
    const node = createFlowNode({
      id: "node_1",
      label: "Kubernetes",
      description: "Container orchestration platform",
      type: "concept",
    });

    expect(node.id).toBe("node_1");
    expect(node.type).toBe("custom");
    expect(node.data.label).toBe("Kubernetes");
  });

  it("should convert a nested tree to graph nodes and edges with custom node type", () => {
    const tree = {
      name: "Root Concept",
      description: "Root level item",
      children: [
        {
          name: "Child Concept 1",
          description: "Sub-branch 1",
        },
        {
          name: "Child Concept 2",
          description: "Sub-branch 2",
        },
      ],
    };

    const graph = convertTreeToGraph(tree);
    expect(graph.nodes).toHaveLength(3);
    expect(graph.edges).toHaveLength(2);
    expect(graph.nodes[0].type).toBe("custom");
  });

  it("should find the root node correctly", () => {
    const nodes = [
      { id: "root", type: "custom", position: { x: 0, y: 0 }, data: { label: "Root" } },
      { id: "child_1", type: "custom", position: { x: 0, y: 0 }, data: { label: "Child 1" } },
    ];
    const edges = [
      { id: "root-child_1", source: "root", target: "child_1" },
    ];

    const root = findRootNode(nodes, edges);
    expect(root?.id).toBe("root");
  });

  it("should build graph metadata and depth maps", () => {
    const nodes = [
      { id: "root", type: "custom", position: { x: 0, y: 0 }, data: { label: "Root" } },
      { id: "c1", type: "custom", position: { x: 0, y: 0 }, data: { label: "Child 1" } },
      { id: "c2", type: "custom", position: { x: 0, y: 0 }, data: { label: "Child 2" } },
    ];
    const edges = [
      { id: "root-c1", source: "root", target: "c1" },
      { id: "root-c2", source: "root", target: "c2" },
    ];

    const maps = buildGraphMaps(nodes, edges);
    expect(maps.root?.id).toBe("root");
    expect(maps.childrenMap["root"]).toEqual(["c1", "c2"]);
    expect(maps.parentMap["c1"]).toBe("root");
  });
});
