export function convertBytesToGiga(size: number): string {
    return (size / 1e9).toFixed(2);
}
export function getPercentage(portion: number, all: number) {
    return ((portion * 100) / all).toFixed(0);
}
