export const syntaxScore = (input) => {
    // PART 1 - Calculate the score syntax
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

    let lines = input.split("\n");

    const illegalTokens = [];
    const corruptedLines = [];
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
                    corruptedLines.push(i)
                    break;
                }
            }
            tokenCount++;
        }
        openingTokensForCurrentLine = []
    }

    let score = 0;
    illegalTokens.map(t => score += pointsPerIllegalToken[t])
    // END OF PART 1

    // PART 2 - Calculate the completion score
    lines = lines.filter((l, index) => {
        const corruptedLine = corruptedLines.findIndex((el) => el === index);
        if (corruptedLine === -1) return l;
        corruptedLines.splice(corruptedLine, 1);
    });

    let completionScores = [];
    const completionScorePoints = {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4,
    }

    for (let i = 0; i < lines.length; i++) {
        let currentLine = lines[i];
        completionScores[i] = 0;
        const unclosedTokens = []
        for (let j = 0; j < currentLine.length; j++) {
            const token = currentLine[j];
            openingTokens.includes(token) ? unclosedTokens.unshift(j) : unclosedTokens.shift();
        }
        for (let j = 0; j < unclosedTokens.length; j++) {
            const unclosed = currentLine[unclosedTokens[j]];
            const expected = expectedTokens[unclosed];

            completionScores[i] *= 5;
            completionScores[i] += completionScorePoints[expected];

            currentLine += expected;
        }
        lines[i] = currentLine;
    }
    completionScores.sort((a, b) => a - b);
    const middleIndex = Math.floor((completionScores.length - 1) / 2);
    // END OF PART 2

    return completionScores[middleIndex];
}

