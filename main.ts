// The Tired Dark Lord - entry for the make.fun bounty
// "The Tired Dark Lord: A 100-Word Villain Monologue".
// The program writes one monologue to /output/entry.txt (UTF-8, 1 to 600 characters).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const MONOLOGUE = [
  "Stop at the threshold. Yes, you. The crown's herald is three days behind me,",
  "and I have no wish to meet him. You want the valley's oath? Take it. I signed",
  "it in blood the year the river froze, and it cost less than a lawyer.",
  "Don't look for the iron in my hand; it melted when I cursed the bridge.",
  "Your grandfather's tax is still nailed to that post - burn it, it irks me",
  "more than you do. Leave the grey door open. Come at dusk, when the sun has",
  "done all the work, and I will have the map spread out and no patience left.",
].join(" ");

function writeEntry(text: string): void {
  const targets = ["/output/entry.txt", resolve(process.cwd(), "output/entry.txt")];
  for (const target of targets) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, text, "utf8");
      return;
    } catch {
      // try the next location
    }
  }
  throw new Error("could not write entry.txt");
}

const text = MONOLOGUE.trim();
writeEntry(text);
process.stdout.write(text + "\n");
