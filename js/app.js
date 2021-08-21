function clearData(id) {
  const data = (document.getElementById(id).innerText = "0");
  addTotalCost(data);
}

//memory section
document.getElementById("addMemory-16").addEventListener("click", function () {
  const memoryCost = document.getElementById("memory-cost");
  const baseMemoryCost = parseInt(memoryCost.innerText);
  const extraMemoryCost = baseMemoryCost + 180;
  if (baseMemoryCost == 0) {
    memoryCost.innerText = extraMemoryCost;
    addTotalCost(extraMemoryCost);
  }
});

document.getElementById("addMemory-8").addEventListener("click", function () {
  clearData("memory-cost");
});

// storage section
document.getElementById("storage-256GB").addEventListener("click", function () {
  clearData("storage-cost");
});

function updateStorage(cost) {
  const storageCost = document.getElementById("storage-cost");
  storageCost.innerText = 0;
  const baseStorageCost = parseInt(storageCost.innerText);
  const extraStorageCost = baseStorageCost + cost;
  if (baseStorageCost == 0) {
    storageCost.innerText = extraStorageCost;
  }
}

document.getElementById("storage-512GB").addEventListener("click", function () {
  updateStorage(100);
});
document.getElementById("storage-1TB").addEventListener("click", function () {
  updateStorage(180);
});

//Choose your delivery option section
document
  .getElementById("delivery-without-charge")
  .addEventListener("click", function () {
    clearData("delivery-charge");
  });
document
  .getElementById("delivery-with-charge")
  .addEventListener("click", function () {
    const deliveryCharge = document.getElementById("delivery-charge");
    const baseDeliveryCharge = parseInt(deliveryCharge.innerText);

    if (baseDeliveryCharge == 0) {
      const extraDeliveryCharge = baseDeliveryCharge + 20;
      deliveryCharge.innerText = extraDeliveryCharge;
    }

    /////////////////////////////////////update total
    const basePrice = document.getElementById("base-price").innerText;
    const totalPrice = document.getElementById("total-price");

    totalPrice.innerText = parseInt(basePrice) + 20;
  });

// function addTotalCost(charge) {
//     for (let totalPrice of totalPrices) {
//       console.log(totalPrice.innerText);
//       //   if (totalPrice.innerText == 1299) {
//       const total = parseInt(totalPrice.innerText) + parseInt(charge);
//       totalPrice.innerText = total;
//       //   }
//     }
// }
