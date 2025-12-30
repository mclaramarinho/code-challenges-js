export const syntaxScore = (input) => {
    const expectedTokens = {
        '(': ')',
        '{': '}',
        '[': ']',
        '<': '>',
    };
    const pointsPerIllegalToken = {
        ')': 3,
        ']': 57,
        '}': 1197,
        '>': 25137
    }

    const openingTokens = [...Object.keys(expectedTokens)];

    const lines = input.split("\n");

    const illegalTokens = [];
    let openingTokensForCurrentLine = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        let tokenCount = 0;
        while (tokenCount < line.length) {
            const token = line[tokenCount];
            if (openingTokens.includes(token)) {
                openingTokensForCurrentLine.push(token)
            } else {
                const tokenToBeClosed = openingTokensForCurrentLine.pop();
                if (!tokenToBeClosed || expectedTokens[tokenToBeClosed] !== token) {
                    illegalTokens.push(token);
                    break;
                }
            }
            tokenCount++;
        }
        openingTokensForCurrentLine = []
    }

    let score = 0;
    illegalTokens.map(t => score += pointsPerIllegalToken[t])
    
    return score;
}

