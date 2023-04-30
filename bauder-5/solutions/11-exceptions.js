export class ParseError extends Error {
    constructor(message) {
        super(message);
        this.name = "ParseError";
    }
}

// BEGIN
export let parseJson = (JsonFile) => {
    try {
        return JSON.parse(JsonFile);
    } catch {
        throw new ParseError("Parse Error");
    }
};
export default { ParseError, parseJson };
// END