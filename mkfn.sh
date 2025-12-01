#!/usr/bin/env bash
set -e
set -u
set -o pipefail

NAME=$1
NAME_SNAKE=$(echo $1 | perl -pe 's/(-)./uc($&)/ge;s/-//g')

cat > "src/$NAME.test.ts" <<- EOF
import { $NAME_SNAKE } from "./$NAME"

describe('$NAME_SNAKE', () => {
  it('returns null', () => {
    expect($NAME_SNAKE()).toBeNull()
  })
})

EOF

cat > "src/$NAME.ts" <<- EOF
export function $NAME_SNAKE() {
  return null;
}
EOF

