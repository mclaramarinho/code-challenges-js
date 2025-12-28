import { runTests } from "../utils/run_tests.js";
import { maxSquares } from "./solution.js";

const tests = [
    [[
        10, // w
        5, // h
        [2, 5], // x
        [3, 5] // y
    ], 4],
    [[
        10, 
        5, 
        [2, 5, 9], 
        [3, 5]
    ], 4],
    [[
        10, 
        5, 
        [2, 3, 5, 9], 
        [3, 5]
    ], 6],
];

runTests(maxSquares, tests);