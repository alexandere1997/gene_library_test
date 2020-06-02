let popupShow = (one, two, blOne, blTwo) => {
  const btnOne = document.querySelector(one),
        btnTwo = document.querySelector(two),
        blockOne = document.querySelector(blOne),
        blockTwo = document.querySelector(blTwo);

  btnOne.addEventListener("click", () => {
    blockOne.classList.toggle("act");
  })
  btnTwo.addEventListener("click", () => {
    blockTwo.classList.toggle("act");
    btnTwo.classList.toggle("gift__popupMod");
  })
}

popupShow(".popup__one", ".popup__two", ".gift__information", ".gift__forms");


let inputs = (input, img) => {
  let gift__input = document.querySelectorAll(input),
      img_clear = document.querySelectorAll(img);
      gift__input.forEach((elem, ind1) => {
        img_clear.forEach((count, ind2) => {
          if(ind1 === ind2) {
            elem.addEventListener("focus", () => {
              count.style.display = "block";
            });
          }
          if(ind1 === ind2) {
            elem.addEventListener("blur", () => {
              count.style.display = "none";
              console.log(elem.value)
            });
          }
        })
      })
}

inputs("input", ".gift__inputs img");