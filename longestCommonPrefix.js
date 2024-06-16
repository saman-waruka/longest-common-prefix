// Javascript
function longestCommonPrefix(stringList) {
  if (stringList.length === 0) return "";
  let longestPrefix = "";

  const firstStr = stringList.shift();

  if (firstStr === "") {
    return "";
  }

  for (let i = 0; i < firstStr.length; i++) {
    const currentCharacter = firstStr[i];
    const isCommonPrefixCharacter = isAllHasSameCharacter(
      i,
      stringList,
      currentCharacter
    );
    if (isCommonPrefixCharacter) {
      longestPrefix = longestPrefix.concat(currentCharacter);
    } else {
      break;
    }
  }
  return longestPrefix;
}

function isAllHasSameCharacter(i, stringList, character) {
  let matchCount = 0;
  for (const str of stringList) {
    if (str.charAt(i) === character) {
      matchCount = matchCount + 1;
    }
  }

  if (matchCount === stringList.length) {
    return true;
  } else {
    return false;
  }
}

const a = ["dog", "racecar", "car"];
const b = ["floower", "flow", "flooight"];
const c = [];

console.log("a", longestCommonPrefix(a));
console.log("b", longestCommonPrefix(b));
console.log("c", longestCommonPrefix(c));
