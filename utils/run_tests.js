import { CheckDOM } from "../Check-DOM/solution.js";

export function runTests(tests) {
    let testCount = 0;
    let passedCount = 0;
    let failedCount = 0;

    tests.map((test) => {
        const str = test[0];
        const expected = test[1];

        testCount++;
        const result = CheckDOM(str);
        const verdict = result === expected ? 'pass' : 'failed';
        result === expected ? passedCount++ : failedCount++;

        if (result !== expected) {
            console.table([
                {
                    INPUT: str,
                    EXPECTED: expected,
                    RESULT: result,
                    VERDICT: verdict
                }
            ]);
            console.log("------------------------------------------------------------------------------")
        }
    })

    console.table({
        "EXECUTED": testCount,
        "PASSED": passedCount,
        "FAILED": failedCount
    })
}