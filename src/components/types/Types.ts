const getTypesClass = (type: string) => {
  return `${type}-chip`;
}

const getTypeNameJa = (type: string) => {
  switch (type) {
    case 'normal':
      return 'ノーマル';
    case 'fire':
      return 'ほのお';
    case 'water':
      return 'みず';
    case 'electric':
      return 'でんき';
    case 'grass':
      return 'くさ';
    case 'ice':
      return 'こおり';
    case 'fighting':
      return 'かくとう';
    case 'poison':
      return 'どく';
    case 'ground':
      return 'じめん';
    case 'flying':
      return 'ひこう';
    case 'psychic':
      return 'エスパー';
    case 'bug':
      return 'むし';
    case 'rock':
      return 'いわ';
    case 'ghost':
      return 'ゴースト';
    case 'dragon':
      return 'ドラゴン';
    case 'dark':
      return 'あく';
    case 'steel':
      return 'はがね'
    case 'fairy':
      return 'フェアリー';
  }
}

export {getTypesClass, getTypeNameJa};