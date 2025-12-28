export const CheckDOM = (strParam) => {
    const getTagName = (t) => t.replace(/(<|\/|>)/g, "");
    const tagRegex = /<(\/)?(div|em|i|b|p)>/g;

    const tags = [...strParam.matchAll(tagRegex)].map(m => m[0])

    const stack = [];
    let firstWrongTag = null;
    let errorCount = 0;

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const prevTag = stack[stack.length - 1];

        const isClosing = tag.includes('/');

        if (isClosing) {
            if (stack.length === 0) return false;

            if (tag.replace("/", "") === prevTag) {
                stack.pop();
                continue;
            }

            if (errorCount === 1) return false;
            firstWrongTag = stack.pop();
            errorCount++;
        } else {
            const divInsideTextTag = tag === '<div>' && prevTag && prevTag !== '<div>';
            if (divInsideTextTag) return false;

            stack.push(tag);
        }
    }

    if (errorCount === 0 && stack.length === 0) return true;
    if (errorCount === 0 && stack.length === 1) return getTagName(stack[0]);
    if (errorCount === 1 && stack.length === 0) return getTagName(firstWrongTag);
    return false;
}
