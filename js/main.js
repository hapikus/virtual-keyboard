window.onload = function () {
  initHTML();
};

function initHTML() {
  let mainCont = document.querySelector("body");
  mainCont.innerHTML = `
    <main class="main">
      <h1 class="title">RSS Виртуальная клавиатура</h1>
      <textarea
        class="textarea"
        name="textarea-for-kb"
        id="textarea-for-kb"
        rows="8" 
        cols="80"
      ></textarea>
      <div class="kb-cont"></div>
    </main>
  `;
}
