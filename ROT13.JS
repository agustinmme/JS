const chars = {
    '.': '.',
    '!': '!',
    '?': '?',
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M',
  };
  
  function rot13(str) {
  
  for(let i = 0; i < str.length; i++)
  {
      str = str.split('');
      str[i] = chars[str[i]] || ' ';
      str = str.join('');
  }
    return str;
  }
  rot13("SERR PBQR PNZC")
  rot13("SERR CVMMN!")
  rot13("SERR YBIR?")