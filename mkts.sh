#!/usr/bin/env bash
set -e
set -u
set -o pipefail

mkdir src
pnpm init
pnpm add -D typescript
cat > tsconfig.json <<- EOF
{
  "compilerOptions": {
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  }
}
EOF
pnpm add -D vitest
cat > vitest.config.ts <<- EOF
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ... Specify options here.
  },
})
EOF
echo "console.log('Hiya');" >> src/index.ts


