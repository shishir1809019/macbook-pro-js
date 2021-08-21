// function totalCost() {
//   const memoryCost = document.getElementById("memory-cost").innerText;
//   const storageCost = document.getElementById("storage-cost").innerText;
//   const deliveryCharge = document.getElementById("delivery-charge").innerText;
//   console.log(memoryCost, storageCost, deliveryCharge);
//   const grandTotal =
//     parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge);
//   document.getElementById("total-price").innerText = 1299 + grandTotal;
// }

//total function
function totalCost() {
  document.getElementById("coupon-button").disabled = false;
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

function updateMemory(cost) {
  const memoryCost = document.getElementById("memory-cost");
  const baseMemoryCost = parseInt(memoryCost.innerText);
  const extraMemoryCost = 0 + cost;
  memoryCost.innerText = extraMemoryCost;
  totalCost();
}

// storage function
function updateStorage(cost) {
  const storageCost = document.getElementById("storage-cost");
  const extraStorageCost = 0 + cost;
  storageCost.innerText = extraStorageCost;
  totalCost();
}

// delivery function

function updateDelivery(cost) {
  const deliveryCharge = document.getElementById("delivery-charge");
  const extraDeliveryCharge = 0 + cost;
  deliveryCharge.innerText = extraDeliveryCharge;
  totalCost();
}

//memory section
document.getElementById("addMemory-8").addEventListener("click", function () {
  updateMemory(0);
});
document.getElementById("addMemory-16").addEventListener("click", function () {
  updateMemory(180);
});

// storage section

document.getElementById("storage-256GB").addEventListener("click", function () {
  updateStorage(0);
});

document.getElementById("storage-512GB").addEventListener("click", function () {
  updateStorage(100);
});
document.getElementById("storage-1TB").addEventListener("click", function () {
  updateStorage(180);
});

// delivery  section
document
  .getElementById("delivery-without-charge")
  .addEventListener("click", function () {
    updateDelivery(0);
  });
document
  .getElementById("delivery-with-charge")
  .addEventListener("click", function () {
    updateDelivery(20);
  });

// apply coupon
document.getElementById("coupon-button").addEventListener("click", function () {
  const inputCouponText = document.getElementById("coupon-input");
  const totalWithCoupon = document.getElementById("total-price");
  if (inputCouponText.value == "stevekaku") {
    totalWithCoupon.innerText =
      parseFloat(totalWithCoupon.innerText) -
      parseFloat(totalWithCoupon.innerText) / 20;
    console.log(2 + 3);
    document.getElementById("coupon-button").disabled = true;
  }
});
