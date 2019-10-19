import Colors from "./gcode-colors";
import { Parser, Layer } from "./gcode-parser";
export { Colors };
declare type PreviewOptions = Partial<{
    limit: number;
    scale: number;
    lineWidth: number;
    rotation: number;
    rotationAnimation: boolean;
    zoneColors: boolean;
    canvas: HTMLCanvasElement | string;
    targetId: string;
}>;
export declare class Preview implements PreviewOptions {
    limit: number;
    rotation: number;
    lineWidth: number;
    rotationAnimation: boolean;
    scale: number;
    zoneColors: boolean;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    targetId: string;
    layers: Layer[];
    header: {
        slicer: string;
    };
    center: {
        x: number;
        y: number;
    };
    parser: Parser;
    maxProjectionOffset: {
        x: number;
        y: number;
    };
    constructor(opts: PreviewOptions);
    clear(): void;
    resize(): void;
    renderWithColor(l: Layer, layerIndex: number, color?: string): void;
    drawLayer(index: number, limit: number): void;
    render(): void;
    processGCode(gcode: string): void;
    animationLoop(): void;
    startAnimation(): void;
    stopAnimation(): void;
    getOuterBounds(layer: Layer): {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    };
    getCenter(layer: Layer): {
        x: number;
        y: number;
    };
    getAdjustedCenter(): {
        x: number;
        y: number;
    };
    getSize(layer?: Layer): {
        sizeX: number;
        sizeY: number;
    };
    drawBounds(layer: Layer, color: string): void;
    autoscale(): number;
    projectIso(point: {
        x: number;
        y: number;
    }, layerIndex: number): {
        x: number;
        y: number;
    };
}