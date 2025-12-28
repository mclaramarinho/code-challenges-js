export function runTests(method, tests) {
    let testCount = 0;
    let passedCount = 0;
    let failedCount = 0;

    tests.map((test, i) => {
        const params = typeof(test[0]) === "string" ? [test[0]] : test[0];
        const expected = test[1];

        testCount++;
        const result = method(...params);
        const verdict = result === expected ? 'pass' : 'failed';
        result === expected ? passedCount++ : failedCount++;

        if (result !== expected) {
            console.table([
                {
                    INPUT: params,
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