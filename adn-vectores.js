var search = function(char,paired) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
      return paired;
  }
function pairElement(str) {
  let value= [];
  for (var i = 0; i < str.length; i++) {
    value = search(str[i],value);
  }
  return value;
}
  

pairElement("GCG");
pairElement("TTGAG")
pairElement("CTCTA")
