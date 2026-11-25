// The Tired Dark Lord — entry for make.fun bounty
// "The Tired Dark Lord: A 100-Word Villain Monologue"
// Writes one monologue to /output/entry.txt (UTF-8, <= 600 characters).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const MONOLOGUE = [
  "You want the Hollow Crown? Then take it. I have dragged it nine winters up these stairs,",
  "and I set it down on the landing like a man sitting down for good. Do not mistake that sigh",
  "for mercy. The provinces still kneel; my scheme survives me — keep the kingdom fat and slow",
  "until it forgets who stole its summer. Speak your terms quickly. I am three steps from my bed,",
  "and I have already lost the ending of this speech twice. Haul it up. Light it.",
  "I will be asleep before you reach the door.",
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
