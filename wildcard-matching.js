/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let result = false;
  let temp = p.split("");

  if (!temp.includes("*") && s.length !== p.length) {
    return (result = false);
  }
  if (p.length <= s.length) {
    let j = 0;
    for (i = 0; i < p.length; i++) {
      if (p[i] == s[j] || p[i] === "?") {
        result = true;
        // console.log(`i is ${p[i]} j is ${s[j]}`);
        j++;
        if (i === p.length) {
          break;
        } else continue;
      }
      if (p[i] === "*") {
        for (let k = i; k < s.length; k++) {
          if (p[i + 1] === s[k]) {
            j = k;
            continue;
          }
        }
      }
      if (p.length > s.length && temp.includes("*")) {
        console.log("found");
      } else {
        result = false;
        break;
      }
    }
  }
  if (p[0] === "?" && p.length <= s.length) {
    for (i = 1; i < p.length; i++) {
      if (p[i] == s[i] || p[i] === "?" || p[i] === "*") {
        result = true;
      } else result = false;
    }
  }
  if (p[0] === "*" && p.length === 1) {
    result = true;
  } else if (p.length > s.length) {
    for (i = 0; i < p.length; i++) {
      if (p[i] === "*") {
        result = true;
        continue;
      } else {
        result = false;
        break;
      }
    }
    return result;
  }
  return result;
};
console.log(isMatch("", "****"));
