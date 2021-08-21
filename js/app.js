// total-price updating function
function UpdateTotalCost() {
  document.getElementById("coupon-button").disabled = false; //enable the button
  const memoryCost = document.getElementById("memory-cost").innerText;
  const storageCost = document.getElementById("storage-cost").innerText;
  const deliveryCharge = document.getElementById("delivery-charge").innerText;
  const grandTotal =
    parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge);
  const totalCosts = document.getElementsByClassName("total-price-class");
  for (let totalCost of totalCosts) {
    totalCost.innerText = 1299 + grandTotal;
  }
}

//memory-cost , storage-const, delivery-charge updating function
function updateCostOrCharge(costOrChargeId, costOrChargeAmount) {
  const deliveryCharge = document.getElementById(costOrChargeId); //"delivery-charge"
  deliveryCharge.innerText = costOrChargeAmount;
  UpdateTotalCost();
}

//memory section
document.getElementById("addMemory-8").addEventListener("click", function () {
  updateCostOrCharge("memory-cost", 0);
});
document.getElementById("addMemory-16").addEventListener("click", function () {
  updateCostOrCharge("memory-cost", 180);
});

// storage section
document.getElementById("storage-256GB").addEventListener("click", function () {
  updateCostOrCharge("storage-cost", 0);
});
document.getElementById("storage-512GB").addEventListener("click", function () {
  updateCostOrCharge("storage-cost", 100);
});
document.getElementById("storage-1TB").addEventListener("click", function () {
  updateCostOrCharge("storage-cost", 180);
});

// delivery  section
document
  .getElementById("delivery-without-charge")
  .addEventListener("click", function () {
    updateCostOrCharge("delivery-charge", 0);
  });
document
  .getElementById("delivery-with-charge")
  .addEventListener("click", function () {
    updateCostOrCharge("delivery-charge", 20);
  });

// apply coupon section
document.getElementById("coupon-button").addEventListener("click", function () {
  const inputCouponText = document.getElementById("coupon-input");
  const totalWithCoupon = document.getElementById("total-price");

  if (inputCouponText.value == "stevekaku") {
    totalWithCoupon.innerText =
      parseFloat(totalWithCoupon.innerText) -
      parseFloat(totalWithCoupon.innerText) * 0.2;

    document.getElementById("coupon-button").disabled = true;
  }
  inputCouponText.value = "";
});
