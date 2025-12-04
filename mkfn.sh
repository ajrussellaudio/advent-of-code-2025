#!/usr/bin/env bash
set -e
set -u
set -o pipefail

FN_PATH=$1 || "."
NAME=$(basename $FN_PATH)
NAME_SNAKE=$(echo $NAME | perl -pe 's/(-)./uc($&)/ge;s/-//g')

shift 

WITH_TEST=false

while [ $# -gt 0 ]; do
  case $1 in
    -t | --test)
      WITH_TEST=true
      ;;
    --no-test)
      WITH_TEST=false
      ;;
    *)
      echo "Invalid option: $1" >&2
      exit 1
      ;;
  esac
  shift
done

echo "Creating $FN_PATH"
mkdir $FN_PATH

FN_FILE="$FN_PATH/$NAME.ts"
echo "Creating $FN_FILE"
cat > "$FN_FILE" <<- EOF
export function $NAME_SNAKE() {
  return null;
}
EOF

if $WITH_TEST; then
TEST_FILE="$FN_PATH/$NAME.test.ts"
echo "Creating $TEST_FILE"
cat > "$TEST_FILE" <<- EOF
import { $NAME_SNAKE } from "./$NAME"

describe('$NAME_SNAKE', () => {
  it('returns null', () => {
    expect($NAME_SNAKE()).toBeNull()
  })
})
EOF
fi


INDEX_FILE="$FN_PATH/index.ts"
echo "Creating $INDEX_FILE"
cat > "$INDEX_FILE" <<- EOF
export { $NAME_SNAKE } from "./$NAME";
EOF

