import { runTests } from "../utils/run_tests.js"
import { YourOrderPlease } from "./solution.js";

const tests = [
    ["4of Fo1r pe6ople g3ood th5e the2", "Fo1r the2 g3ood 4of th5e pe6ople"],
    ["is2 Thi1s T4est 3a", "Thi1s is2 3a T4est"],
    ["", ""]
]

runTests(YourOrderPlease, tests);