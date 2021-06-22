function myReplace(str, before, after) {
    const isUpperCase = (string) => /^[A-Z]*$/.test(string)
    if(isUpperCase(before[0])){
      return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
    }else{
      return str.replace(before, after.charAt(0).toLowerCase() + after.slice(1));
    }
    }
    myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
    