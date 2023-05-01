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
        "ё",
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
        "/",
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
        "{",
        "}",
        "|",
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
        ":",
        '"',
        "Enter",
      ],
      ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "▲", "Shift"],
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

let difLogicArr = [
  "Backspace",
  "Tab",
  "Delete",
  "CapsLock",
  "Enter",
  "ShiftLeft",
  "ShiftRight",
  "ControlLeft",
  "OSLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ControlRight",
];

let language = "ru";
let shift = "shiftOff";
let capsLockStatus = false;
let capsLockCurrentClick = false;
let altStatus = false;
let ctrlStatus = false;
let mouseClick = [];

window.onload = function () {
  initHTML();
  initButton();
  fillButton();
  let body = document.querySelector("body");
  body.addEventListener("keydown", (e) => keyDown(e));
  body.addEventListener("keyup", (e) => keyUp(e));
  body.addEventListener("mouseup", clickUp);
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
      <div class="lang-change-msg">
        <p>Клавиатура создана в операционной системе Windows<p>
        <p>Комбинация для переключения языка: ctrl + alt<p>
      </div>
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
      buttonDiv.onmousedown = (e) => clickDown(e);
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
      if (
        (capsLockStatus && shift === "shiftOff") ||
        (!capsLockStatus && shift === "shiftOn")
      ) {
        button.innerHTML =
          kbValue[r][c].length === 1
            ? kbValue[r][c].toUpperCase()
            : kbValue[r][c];
      } else {
        button.innerHTML = kbValue[r][c];
      }
    }
  }
}

function keyDown(event, mouse = false) {
  let textAreaElem = document.querySelector(".textarea");
  if (!mouse) event.preventDefault();
  let direction = "down";

  let checkResult = chekDifLogic(event.code, direction);
  textAreaElem.focus();
  if (checkResult) return;

  let btn = document.querySelector(`#${event.code}`);
  if (btn !== null) {
    btn.classList.add("btn-active");
    let position = textAreaElem.selectionStart;
    textAreaElem.value =
      textAreaElem.value.slice(0, position) +
      btn.innerHTML +
      textAreaElem.value.slice(position);
    textAreaElem.selectionStart = position + 1;
    textAreaElem.selectionEnd = position + 1;
  }
}

function keyUp(event, mouse = false) {
  let textAreaElem = document.querySelector(".textarea");
  if (!mouse) event.preventDefault();
  let direction = "up";

  let checkResult = chekDifLogic(event.code, direction);
  textAreaElem.focus();
  if (checkResult) return;

  let btn = document.querySelector(`#${event.code}`);
  if (btn !== null) {
    btn.classList.remove("btn-active");
  }
}

function clickDown(btn) {
  mouseClick.push(btn.target.id);
  keyDown({ code: btn.target.id }, true);
}

function clickUp() {
  mouseClick.forEach((item) => {
    keyUp({ code: item }, true);
  });
  mouseClick = [];
}

function chekDifLogic(code, direction) {
  let isDif = false;

  if (difLogicArr.includes(code)) {
    isDif = true;
    let fncName = code.toLowerCase();
    switch (fncName) {
      case "backspace":
        backspace(direction);
        break;
      case "tab":
        tab(direction);
        break;
      case "delete":
        deleteFnc(direction);
        break;
      case "capslock":
        capslock(direction);
        break;
      case "shiftleft":
        shiftLeft(direction);
        break;
      case "shiftright":
        shiftright(direction);
        break;
      case "enter":
        enter(direction);
        break;
      case "space":
        space(direction);
        break;
      case 'altleft':
        altleft(direction);
        break;
      case 'altright':
        altright(direction);
        break;
      case 'controlleft':
        controlleft(direction);
        break;
      case 'controlright':
        controlright(direction);
        break;
    }
    return isDif;
  }
}

function backspace(direction) {
  let btn = document.querySelector(`#Backspace`);

  if (direction === "down") {
    btn.classList.add("btn-active");
    let textAreaElem = document.querySelector(".textarea");
    let position = textAreaElem.selectionStart;
    textAreaElem.value =
      textAreaElem.value.slice(0, position - 1) +
      textAreaElem.value.slice(position);
    textAreaElem.selectionStart = position - 1;
    textAreaElem.selectionEnd = position - 1;
  } else {
    btn.classList.remove("btn-active");
  }
}

function tab(direction) {
  let btn = document.querySelector(`#Tab`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    let textAreaElem = document.querySelector(".textarea");
    let position = textAreaElem.selectionStart;
    textAreaElem.value =
      textAreaElem.value.slice(0, position) +
      "    " +
      textAreaElem.value.slice(position);
    textAreaElem.selectionStart = position + 4;
    textAreaElem.selectionEnd = position + 4;
  } else {
    btn.classList.remove("btn-active");
  }
}

function deleteFnc(direction) {
  let btn = document.querySelector(`#Delete`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    let textAreaElem = document.querySelector(".textarea");
    let position = textAreaElem.selectionStart;
    textAreaElem.value =
      textAreaElem.value.slice(0, position) +
      textAreaElem.value.slice(position + 1);
    textAreaElem.selectionStart = position;
    textAreaElem.selectionEnd = position;
  } else {
    btn.classList.remove("btn-active");
  }
}

function capslock(direction) {
  let btn = document.querySelector(`#CapsLock`);
  if (direction === "down") {
    if (capsLockCurrentClick) return;
    if (!capsLockStatus) {
      btn.classList.add("btn-active");
      capsLockStatus = true;
      capsLockCurrentClick = true;
    } else {
      btn.classList.remove("btn-active");
      capsLockStatus = false;
    }
    fillButton();
  }
  if (direction === "up") {
    capsLockCurrentClick = false;
  }
}

function shiftLeft(direction) {
  let btn = document.querySelector(`#ShiftLeft`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    shift = "shiftOn";
  } else {
    btn.classList.remove("btn-active");
    shift = "shiftOff";
  }
  fillButton();
  if (shift === "shiftOff") {
    shiftRemoveActive();
  }
}

function shiftright(direction) {
  let btn = document.querySelector(`#ShiftRight`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    shift = "shiftOn";
  } else {
    btn.classList.remove("btn-active");
    shift = "shiftOff";
  }
  fillButton();
  if (shift === "shiftOff") {
    shiftRemoveActive();
  }
}

function shiftRemoveActive() {
  let shiftL = document.querySelector(`#ShiftLeft`);
  let shiftR = document.querySelector(`#ShiftRight`);
  shiftL.classList.remove("btn-active");
  shiftR.classList.remove("btn-active");
}

function enter(direction) {
  let btn = document.querySelector(`#Enter`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    let textAreaElem = document.querySelector(".textarea");
    let position = textAreaElem.selectionStart;
    textAreaElem.value =
      textAreaElem.value.slice(0, position) +
      "\r\n" +
      textAreaElem.value.slice(position);
    textAreaElem.selectionStart = position + 1;
    textAreaElem.selectionEnd = position + 1;
  } else {
    btn.classList.remove("btn-active");
  }
}

function space(direction) {
  let btn = document.querySelector(`#Space`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    let textAreaElem = document.querySelector(".textarea");
    let position = textAreaElem.selectionStart;
    textAreaElem.value =
      textAreaElem.value.slice(0, position) +
      " " +
      textAreaElem.value.slice(position);
    textAreaElem.selectionStart = position + 1;
    textAreaElem.selectionEnd = position + 1;
  } else {
    btn.classList.remove("btn-active");
  }
}

function altleft(direction) {
  let btn = document.querySelector(`#AltLeft`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    altStatus = true;
    checkLanguage();
  } else {
    btn.classList.remove("btn-active");
    altStatus = false;
  }
}

function altright(direction) {
  let btn = document.querySelector(`#AltRight`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    altStatus = true;
    checkLanguage();
  } else {
    btn.classList.remove("btn-active");
    altStatus = false;
  }
}

function controlleft(direction) {
  let btn = document.querySelector(`#ControlLeft`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    ctrlStatus = true;
    checkLanguage();
  } else {
    btn.classList.remove("btn-active");
    ctrlStatus = false;
  }
}

function controlright(direction) {
  let btn = document.querySelector(`#ControlRight`);
  if (direction === "down") {
    btn.classList.add("btn-active");
    ctrlStatus = true;
    checkLanguage();
  } else {
    btn.classList.remove("btn-active");
    ctrlStatus = false;
  }
}

function checkLanguage() {
  if (ctrlStatus && altStatus) {
    language = language === "ru" ? 'en' : 'ru';
  }
  fillButton();
}