const KB_VALUE = {
  ru: {
    shiftOff: [
      [
        "ё",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "Backspace",
      ],
      [
        "Tab",
        "й",
        "ц",
        "у",
        "к",
        "е",
        "н",
        "г",
        "ш",
        "щ",
        "з",
        "х",
        "ъ",
        "\\",
        "Del",
      ],
      [
        "CapsLock",
        "ф",
        "ы",
        "в",
        "а",
        "п",
        "р",
        "о",
        "л",
        "д",
        "ж",
        "э",
        "Enter",
      ],
      ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
      ["Ctrl", "Win", "Alt", "", "Alt", "◀", "▼", "▶", "Ctrl"],
    ],
    shiftOn: [
      [
        "Ё",
        "!",
        '"',
        "№",
        ";",
        "%",
        ":",
        "?",
        "*",
        "(",
        ")",
        "_",
        "+",
        "Backspace",
      ],
      [
        "Tab",
        "Й",
        "Ц",
        "У",
        "К",
        "Е",
        "Н",
        "Г",
        "Ш",
        "Щ",
        "З",
        "Х",
        "Ъ",
        "/",
        "Del",
      ],
      [
        "CapsLock",
        "Ф",
        "Ы",
        "В",
        "А",
        "П",
        "Р",
        "О",
        "Л",
        "Д",
        "Ж",
        "Э",
        "Enter",
      ],
      ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
      ["Ctrl", "Win", "Alt", "", "Alt", "◀", "▼", "▶", "Ctrl"],
    ],
  },
  en: {
    shiftOff: [
      [
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "Backspace",
      ],
      [
        "Tab",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "[",
        "]",
        "\\",
        "Del",
      ],
      [
        "CapsLock",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "Enter",
      ],
      ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
      ["Ctrl", "Win", "Alt", "", "Alt", "◀", "▼", "▶", "Ctrl"],
    ],
    shiftOn: [
      [
        "~",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "+",
        "Backspace",
      ],
      [
        "Tab",
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "{",
        "}",
        "|",
        "Del",
      ],
      [
        "CapsLock",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        ":",
        '"',
        "Enter",
      ],
      ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
      ["Ctrl", "Win", "Alt", "", "Alt", "◀", "▼", "▶", "Ctrl"],
    ],
  },
};

const keyID = [
  [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
  ],
  [
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "Delete",
  ],
  [
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
  ],
  [
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ArrowUp",
    "ShiftRight",
  ],
  [
    "ControlLeft",
    "OSLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
    "ControlRight",
  ],
];

let language = "ru";
let shift = "shiftOff";

window.onload = function () {
  initHTML();
  initButton();
  fillButton();
  let body = document.querySelector("body");
  body.addEventListener("keydown", (e) => keyDown(e));
  body.addEventListener("keyup", (e) => keyUp(e));
};

function initHTML() {
  let mainCont = document.querySelector("body");
  mainCont.innerHTML = `
    <main class="main">
      <h1 class="title">Виртуальная клавиатура</h1>
      <textarea
        class="textarea"
        name="textarea-for-kb"
        id="textarea-for-kb"
        rows="8" 
        cols="92"
      ></textarea>
      <div class="kb-cont"></div>
    </main>
  `;
}

function initButton() {
  let kbCont = document.querySelector(".kb-cont");
  keyID.forEach((kbLineArray) => {
    var kbLineDiv = document.createElement("div");
    kbLineDiv.className = "kb-line";
    kbLineArray.forEach((kbElem) => {
      var buttonDiv = document.createElement("div");
      buttonDiv.className = "button";
      buttonDiv.id = kbElem;
      buttonDiv = checkWidth(buttonDiv, kbElem);
      buttonDiv = checkColor(buttonDiv, kbElem);
      kbLineDiv.appendChild(buttonDiv);
    });
    kbCont.appendChild(kbLineDiv);
  });
}

function checkWidth(buttonDiv, kbElem) {
  const extraWide = ["CapsLock", "Enter", "ShiftLeft", "ShiftRight"];
  if (extraWide.includes(kbElem)) {
    buttonDiv.classList.add("btn-extra-width");
  } else {
    buttonDiv.classList.add("btn-regular-width");
  }
  return buttonDiv;
}

function checkColor(buttonDiv, kbElem) {
  const darkBtn = [
    "Backspace",
    "Tab",
    "Delete",
    "CapsLock",
    "Enter",
    "ShiftLeft",
    "ArrowUp",
    "ShiftRight",
    "ControlLeft",
    "OSLeft",
    "AltLeft",
    "AltRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
    "ControlRight",
  ];
  if (darkBtn.includes(kbElem)) {
    buttonDiv.classList.add("btn-dark");
  }
  return buttonDiv;
}

function fillButton() {
  let kbValue = KB_VALUE[language][shift];
  for (let r = 0; r < keyID.length; r++) {
    let rowLength = keyID[r].length;
    for (let c = 0; c < rowLength; c++) {
      let button = document.querySelector(`#${keyID[r][c]}`);
      button.innerHTML = kbValue[r][c];
    }
  }
}

function keyDown(event) {
  console.log(event.code);

  let btn = document.querySelector(`#${event.code}`);
  let textAreaElem = document.querySelector('.textarea');
  textAreaElem.innerHTML = textAreaElem.innerHTML + btn.innerHTML;
  btn.classList.add('btn-active');
}

function keyUp(event) {
  console.log(event.code);

  let btn = document.querySelector(`#${event.code}`);
  btn.classList.remove('btn-active');
}
