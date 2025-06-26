import fs from "fs";
import path from "path";
import Papa from "papaparse";

// Load existing th.ts
import thOriginal from "./th";
import en from "./en";

type AnyObject = { [key: string]: any };

// --- Step 1: Parse CSV ---
const csvText = fs.readFileSync("translation-for-test.csv", "utf8");
const parsed = Papa.parse(csvText, {
  header: true,
  skipEmptyLines: true,
});

const translations: Record<string, string> = {};
parsed.data.forEach((row: any) => {
  if (row.EN && row.TH) {
    translations[row.EN.trim()] = row.TH.trim();
  }
});

// --- Step 2: Recursively update th.ts values based on English match ---
function updateTranslations(enObj: AnyObject, thObj: AnyObject): AnyObject {
  const newThObj: AnyObject = {};

  for (const key in enObj) {
    if (typeof enObj[key] === "object" && !Array.isArray(enObj[key])) {
      newThObj[key] = updateTranslations(enObj[key], thObj?.[key] ?? {});
    } else {
      const enValue = enObj[key];
      const thValueFromCsv = translations[enValue];
      newThObj[key] = thValueFromCsv || thObj?.[key] || enValue;
    }
  }

  return newThObj;
}

const updatedTh = updateTranslations(en, thOriginal);

// --- Step 3: Write back updated th.ts ---
const output = `const th: Translations = ${JSON.stringify(
  updatedTh,
  null,
  2
)};\n\nexport default th;`;

fs.writeFileSync("updated-th.ts", output, "utf8");
console.log("✅ updated-th.ts generated successfully.");
