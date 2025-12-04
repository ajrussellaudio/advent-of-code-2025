#!/usr/bin/env bash
set -e
set -u
set -o pipefail

PROJECT_PATH=$1

shift

AS_PACKAGE=false

while [ $# -gt 0 ]; do
  case $1 in
  -p | --package)
    AS_PACKAGE=true
    ;;
  --no-package)
    AS_PACKAGE=false
    ;;
  --cp)
    COPY_TARGET=$2
    shift
    ;;
  *)
    echo "Invalid option: $1" >&2
    exit 1
    ;;
  esac
  shift
done

if $AS_PACKAGE; then
  yq -i ".packages += \"$PROJECT_PATH\"" pnpm-workspace.yaml
fi

if [ -n $COPY_TARGET ]; then
  echo "Copying from: $COPY_TARGET"
  cp -r $COPY_TARGET $PROJECT_PATH
  cd $PROJECT_PATH
  jq <<<$(jq ".name = \"$PROJECT_PATH\"" package.json) >package.json
  pnpm install
else

  mkdir $PROJECT_PATH
  cd $PROJECT_PATH

  mkdir src
  pnpm init

  pnpm add -D typescript @types/node
  cat >tsconfig.json <<-EOF
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
  cat >vitest.config.ts <<-EOF
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    // ... Specify options here.
  },
})
EOF
  jq <<<$(jq '.scripts.test = "vitest"' package.json) >package.json
  echo "console.log('Hiya');" >>src/index.ts

  pnpm add -D tsx
  jq <<<$(jq '.scripts.start = "tsx ./src/index.ts"' package.json) >package.json
fi
