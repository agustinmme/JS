function convertHTML(str) {
  const POSIBLES_CASOS = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '\"': '&quot;',
    '\'': '&apos;'
}
return str.split("")
          .map(value => POSIBLES_CASOS[value] || value)
          .join("");
}
convertHTML("Dolce & Gabbana");