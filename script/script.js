const card0 = document.getElementById("card0");
const card1 = document.getElementById("card1");

const details0 = `<div class="details-content">
        <div class="title-image">
          <p>
            Himpunan Mahasiswa Teknik Informatika<br />Universitas Brawijaya
          </p>
          <img src="assets/img/EMIF.png" />
        </div>
        <img src="asd" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nobis,
          illo vero laboriosam magnam nostrum a quasi facilis. Doloribus, unde
          aspernatur. Dolore architecto sit dolorum quos rem! Earum, quae cum.
        </p>
      </div>`;

const details1 = `<div class="details-content">
        <div class="title-image">
          <p>tes1</p>
          <img src="assets/img/EMIF.png" />
        </div>
        <img src="asd" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nobis,
          illo vero laboriosam magnam nostrum a quasi facilis. Doloribus, unde
          aspernatur. Dolore architecto sit dolorum quos rem! Earum, quae cum.
        </p>
      </div>`;

const detailsArray = [details0, details1];

const overlay = document.getElementById("overlay");
const back = document.getElementById("back");
const next = document.getElementById("next");
const content = document.getElementById("content");
let count = null;

card0.addEventListener("click", () => {
  count = 0;
  refresh();
});

card1.addEventListener("click", () => {
  count = 1;
  refresh();
});

overlay.addEventListener("click", () => {
  count = null;
  refresh();
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    count = null;
    refresh();
  }
});

function refresh() {
  if (count !== null) {
    overlay.innerHTML = detailsArray[count];
    overlay.classList.remove("hidden");
    content.classList.add("hidden");
  } else {
    overlay.classList.add("hidden");
    content.classList.remove("hidden");
  }
}
