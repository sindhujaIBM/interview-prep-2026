/**
 * Given a string code_snippet, determine if the brackets in the code snippet are properly matched.
 * The function should return 1 if the brackets are properly matched and 0 otherwise.
 *
 * Example:
 * For code_snippet = "function example() { return [1, 2, 3]; }", the output should be 1.
 * For code_snippet = "function example() { return [1, 2, 3; }", the output should be 0.
 *
 * @param {string} code_snippet - The input string containing the code snippet to check for bracket matching.
 * @return {number} - Returns 1 if the brackets are properly matched, otherwise returns 0.
 */

function areBracketsProperlyMatched(code_snippet: string): number {
    const bracket_match = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);

    const left_brackets = new Set(['(', '{', '[']);
    let stack = [];

    for (let i = 0; i < code_snippet.length; i++) {
        const char = code_snippet[i];

        if (left_brackets.has(char)) {
            stack.push(char);
        } else if (bracket_match.has(char)) {
            if (stack.length === 0) return 0;

            const top = stack.pop();
            if (top !== bracket_match.get(char)) {
                return 0;
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
}
