export const YourOrderPlease = (str) => {
    str = str.trim();
    const words = str.split(" ");

    words.sort((w1, w2) => {
        const digitsW1 = [...w1.matchAll(/[0-9]/g)].map((n) => n[0]);
        const num1 = +(digitsW1.join(""));
        const digitsW2 = [...w2.matchAll(/[0-9]/g)].map((n) => n[0]);
        const num2 = +(digitsW2.join(""));

        return num1 - num2;
    })

    return words.join(" ");
}