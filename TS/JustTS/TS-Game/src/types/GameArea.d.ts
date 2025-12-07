type GameArea = {
    canvas: HTMLCanvasElement;
    interval: ReturnType<typeof setInterval>;
    start(): void;
    context?: CanvasRenderingContext2D | null;
    clear(): void;
};
export default GameArea;
//# sourceMappingURL=GameArea.d.ts.map