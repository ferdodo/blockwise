import * as fs from "node:fs";
import * as d3 from "d3";
import { JSDOM } from "jsdom";
import type { Block } from "blockwise";

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
const document = dom.window.document as unknown as Document;

export function generateExampleSvg(
	blocks: {
		block: Block;
		isBold: boolean;
		isColored: boolean;
		name: string;
	}[],
): void {
	// Get the caller's filename from the stack trace
	const stack = new Error().stack || "";
	const stackLines = stack.split("\n");
	const callerLine = stackLines[2]; // 0 = Error, 1 = this function, 2 = caller
	const match = callerLine?.match(/\((.+?)\:/);
	const callerFile = match ? match[1] : "";

	if (!callerFile) {
		throw new Error("Could not determine caller filename");
	}

	// Replace .ts/.js with .example.svg
	const outputFile = callerFile.replace(/\.(ts|js)$/, ".svg");

	// Calculate SVG dimensions
	const padding = 20;
	const maxX = Math.max(...blocks.map((b) => b.block.x + b.block.w), 0);
	const maxY = Math.max(...blocks.map((b) => b.block.y + b.block.h), 0);
	const width = maxX * 50 + padding * 2;
	const height = maxY * 50 + padding * 2;

	// Create SVG root
	const svg = d3
		.select(document.body)
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("xmlns", "http://www.w3.org/2000/svg");

	// Add background
	svg
		.append("rect")
		.attr("width", width)
		.attr("height", height)
		.attr("fill", "#ffffff");

	// Draw blocks
	svg
		.selectAll("rect.block")
		.data(blocks)
		.enter()
		.append("rect")
		.attr("class", "block")
		.attr("x", (d) => d.block.x * 50 + padding)
		.attr("y", (d) => d.block.y * 50 + padding)
		.attr("width", (d) => d.block.w * 50)
		.attr("height", (d) => d.block.h * 50)
		.attr("fill", (d) => (d.isColored ? "#3498db" : "#ecf0f1"))
		.attr("fill-opacity", 0.8)
		.attr("stroke", (d) => (d.isBold ? "#000000" : "#95a5a6"))
		.attr("stroke-width", (d) => (d.isBold ? 3 : 1));

	// Draw labels
	svg
		.selectAll("text.label")
		.data(blocks)
		.enter()
		.append("text")
		.attr("class", "label")
		.attr("x", (d) => d.block.x * 50 + padding + (d.block.w * 50) / 2)
		.attr("y", (d) => d.block.y * 50 + padding + (d.block.h * 50) / 2)
		.attr("text-anchor", "middle")
		.attr("dominant-baseline", "middle")
		.attr("font-size", "12")
		.attr("font-family", "monospace")
		.attr("fill", "#333333")
		.text((d) => d.name);

	// Write SVG to file
	const svgString = svg.node()?.outerHTML || "";
	fs.writeFileSync(outputFile, svgString, "utf-8");
}
