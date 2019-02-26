import { writeFileSync } from "fs-extra";
import { gitDescribeSync } from "git-describe";
import { join, relative } from "path";

const {
  version,
  name,
  description,
  repository,
  homepage
} = require("../../package.json");

const git = gitDescribeSync({ dirtyMark: false, dirtySemver: false });

const result = {
  name,
  description,
  repository,
  homepage,
  version,
  ...git
};

const file = join(
  process.cwd(),
  "libs",
  "features",
  "demo-version",
  "data",
  "version.ts"
);

writeFileSync(
  file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
export const VERSION = ${JSON.stringify(result, null, 4)};
/* tslint:enable */
`,
  { encoding: "utf-8" }
);

console.log(
  `Wrote version info ${result.raw || "unknown"} to ${relative(
    process.cwd(),
    file
  )}`
);

export {};
