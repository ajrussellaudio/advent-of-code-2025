#!/usr/bin/env bash
set -e
set -u
set -o pipefail

PROJECT_PATH=$1

mkdir $PROJECT_PATH
cd $PROJECT_PATH

mkdir src
pnpm init
pnpm add -D typescript
cat > tsconfig.json <<- EOF
{
  "\$schema": "https://www.schemastore.org/tsconfig",
  "_version": "22.0.0",

  "compilerOptions": {
    "lib": ["es2024", "ESNext.Array", "ESNext.Collection", "ESNext.Iterator"],
    "module": "nodenext",
    "target": "es2022",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16",

    "types": ["vitest/globals"]
  }
}
EOF
pnpm add -D vitest
cat > vitest.config.ts <<- EOF
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    // ... Specify options here.
  },
})
EOF
jq <<< $(jq '.scripts.test = "vitest"' package.json) > package.json
echo "console.log('Hiya');" >> src/index.ts


