import { runTests } from "../utils/run_tests.js";
import { CheckDOM } from "./solution.js";

const tests = [
  ["<div><b><p>hello world</p></b></div>", true],
  ["<div><i>hello</i>world</b>", "div"],
  ["</div><p></p><div>", false],
  ["<em></em><em></em><p></b>", "p"],
  ["<em><div></div></em><em></em><p></b>", false],
  ["< div>< p></p>< b><p></div>", false],

  ["<div><p><em></em></p><div><p></p></div></div>", true],
  ["<div><p></b></div>", "p"],
  ["<div><p></b></div></em>", false],
  ["<div><p></p></div><b></b>", true],

  ["<b>text</b>", true],
  ["<div><b><i><em>hello</em></i></b></div>", true],
  ["<div><p>one</p><p>two</p></div>", true],
  ["hello <b>world</b>", true],
  ["<div><p></p><b></b></div>", true],

  ["<div><p>hello</div>", false],
  ["<div><b><i>text</b></i></div>", false],
  ["<p>hello</p></b>", false],
  ["<div><i>hello</i></b>", "div"],
  ["<div><p></p><b></div>", false],
  ["<div>hello<i>world</div>", false],
  ["<div><p>hello</b></div>", "p"],

  ["</div><div></div>", false],
  ["<div><b><p></b></div>", false],
  ["<div><div><p></div>", false],
  ["<b><i></p></b>", "i"],
  ["<div><p></div></p>", false],
  ["</b></i></div>", false],

  ["just plain text", true],
  ["< div><p></p></div>", false],
  ["<div><b></p></div>", "b"],
  ["<div><p>ok</p></div></i>", false],

  ["<div><b><p>hello world</p></b></div>", true],
  ["<div><i>hello</i>world</b>", "div"],
  ["</div><p></p><div>", false],
  ["<em></em><em></em><p></b>", "p"],
  ["< div>< p></p>< b><p></div>", false]
];

runTests(CheckDOM, tests);