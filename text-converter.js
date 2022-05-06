const [, , ...data] = process.argv;

const str = data.join(" ");

const arr = {
    a: "ф",
    r: "ы",
    s: "в",
    t: "а",
    d: "п",
    h: "р",
    n: "о",
    e: "л",
    i: "д",
    o: "ж",
    q: "й",
    w: "ц",
    f: "у",
    p: "к",
    g: "е",
    j: "н",
    l: "г",
    u: "ш",
    y: "щ",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    k: "т",
    m: "ь",
    ';': "з",
    '[': "х",
    ']': "ъ",
    "''": "э",
    ",": "б",
    ".": "ю",
    ф: "a",
    ы: "r",
    в: "s",
    а: "t",
    п: "d",
    р: "h",
    о: "n",
    л: "e",
    д: "i",
    ж: "o",
    й: "q",
    ц: "w",
    у: "f",
    к: "p",
    е: "g",
    н: "j",
    г: "l",
    ш: "u",
    щ: "y",
    я: "z",
    ч: "x",
    с: "c",
    м: "v",
    и: "b",
    т: "k",
    ь: "m",
    "з": ';',
    "х": '[',
    "ъ": ']',
    "э": "''",
    "б": ",",
    "ю": ".",
};

const output = [];

for (var i = 0; i < str.length; i++) {
    const oldChar = str.charAt(i);
    let newChar;
    if (oldChar === ' ') {
        newChar = oldChar;
    } else if (oldChar.toUpperCase() === oldChar) {
        if (!!arr[oldChar.toLowerCase()]) {
            newChar = (arr[oldChar.toLowerCase()]).toUpperCase();
        } else {
            newChar = oldChar;
        }
    } else {
        newChar = arr[oldChar] || oldChar;
    }

    output.push(newChar);
}

console.log(output.join(''));