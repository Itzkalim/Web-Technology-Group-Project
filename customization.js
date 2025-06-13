// Initial JSON data for the customization
const coffeeData = {
  milk: 60,
  sugar: 40,
  coffee: 70,
};

// Update UI function to reflect JSON values
function updateUI() {
  $(".control-group").each(function () {
    const item = $(this).data("item");
    const value = coffeeData[item];
    $(this)
      .find(".slider-fill")
      .css("height", value + "%");
  });
}


function clamp(value, min = 0, max = 100) {
  return Math.min(Math.max(value, min), max);
}

$(document).ready(function () {
  updateUI();

  $(".btn").click(function () {
    const isPlus = $(this).hasClass("plus");
    const controlGroup = $(this).closest(".control-group");
    const item = controlGroup.data("item");
    let currentValue = coffeeData[item];

    if (isPlus) {
      currentValue = clamp(currentValue + 10);
    } else {
      currentValue = clamp(currentValue - 10);
    }
    coffeeData[item] = currentValue;
    updateUI();
  });
});


document.getElementById("backBtn").onclick = function () {
  window.history.back();
};

document.getElementById("okBtn").onclick = function () {
  window.location.href = "paymentPage.html";
};
