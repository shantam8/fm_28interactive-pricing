let slider = document.querySelector("#mySlider");
let btnToggleBillingRate = document.querySelector("#btnToggle");
let textPageview = document.querySelector("#pageviewSpan");
let textPrice = document.querySelector("#priceSpan");
let textPricingRate = document.querySelector("#pricingRate");

let pageviewCategoryArray = ["10k", "50k", "100k", "500k", "1M"];
let monthlyPriceArray = [8, 12, 16, 24, 36];

let currentMonthlyPrice;
let color;

function sliderChange() {
  switch (slider.value) {
    case "1":
      color =
        "linear-gradient(90deg, hsl(174, 86%, 45%) 0%, hsl(224, 65%, 95%) 0%)";
      break;
    case "2":
      color =
        "linear-gradient(90deg, hsl(174, 86%, 45%) 25%, hsl(224, 65%, 95%) 25%)";
      break;
    case "3":
      color =
        "linear-gradient(90deg, hsl(174, 86%, 45%) 50%, hsl(224, 65%, 95%) 50%)";
      break;
    case "4":
      color =
        "linear-gradient(90deg, hsl(174, 86%, 45%) 75%, hsl(224, 65%, 95%) 75%)";
      break;
    case "5":
      color =
        "linear-gradient(90deg, hsl(174, 86%, 45%) 100%, hsl(224, 65%, 95%) 100%)";
      break;
  }
  setSliderAriaLabelAndValuetext();
  slider.style.background = color;
  textPageview.innerHTML = pageviewCategoryArray[slider.value - 1];
  displayCurrentPrice();
}

function togglePrice() {
  if (btnToggleBillingRate.classList.contains("active")) {
    btnToggleBillingRate.classList.remove("active");
    btnToggleBillingRate.setAttribute("title", "switch to yearly billing rate");
    btnToggleBillingRate.setAttribute(
      "aria-label",
      "switch to yearly billing rate"
    );

    textPricingRate.innerText = "/month";
  } else {
    btnToggleBillingRate.classList.add("active");
    btnToggleBillingRate.setAttribute(
      "title",
      "switch to monthly billing rate"
    );
    btnToggleBillingRate.setAttribute(
      "aria-label",
      "switch to monthly billing rate"
    );

    textPricingRate.innerText = "/year";
  }
  displayCurrentPrice();
}

function displayCurrentPrice() {
  if (btnToggleBillingRate.classList.contains("active")) {
    textPrice.innerHTML =
      monthlyPriceArray[slider.value - 1] * 12 * 0.75 + ".00";
  } else {
    textPrice.innerHTML = monthlyPriceArray[slider.value - 1] + ".00";
  }
}

function setDiscountText() {
  if (window.screen.width > 640) {
    document.querySelector(".discount").innerText = "25% discount";
  } else {
    document.querySelector(".discount").innerText = "25%";
  }
}

function setSliderAriaLabelAndValuetext() {
  slider.setAttribute("aria-valuenow", slider.value - 1);
  slider.setAttribute(
    "aria-valuetext",
    pageviewCategoryArray[slider.value - 1] + " pageviews"
  );
}

function init() {
  textPageview.innerHTML = pageviewCategoryArray[2];
  displayCurrentPrice();
  setSliderAriaLabelAndValuetext();
  slider.addEventListener("input", sliderChange);
  btnToggleBillingRate.addEventListener("click", togglePrice);
  setDiscountText();
  window.addEventListener("resize", setDiscountText);
}

window.onload = init();
