const VARIABLE = '\'';
const POSIBLES_CASOS = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '\"': '&quot;',
    '\'': '&apos;'
}
const valor_default= 'no exite';
const switching = POSIBLES_CASOS[VARIABLE] || valor_default;

console.log(switching)