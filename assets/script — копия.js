function selectCountry(code) {
  document.getElementById("phoneNumber").value = code;
  updateSelectedCountry(code);
  toggleCountryList();
}

function toggleCountryList() {
  let countryList = document.querySelector(".country-list");
  if (countryList.style.display === "block") {
    countryList.style.display = "none";
  } else {
    countryList.style.display = "block";
  }
}

function getPhoneNumber() {
  let countryCode = document.getElementById("phoneNumber").value;

  console.log("Выбранный код страны:", countryCode);
}

function updateSelectedCountry(code) {
  let selectedCountry = document.getElementById("selectedCountry");
  selectedCountry.innerHTML = `<img src="https://cdn.countryflags.com/thumbs/${getCountryCodeImage(
    code
  )}/flag-400.png" alt="${code} Flag">${code}`;
}

function getCountryCodeImage(code) {
  switch (code) {
    case "+1":
      return "united-states-of-america";
    case "+44":
      return "united-kingdom";
    case "+33":
      return "france";
    default:
      return "";
  }
}

//////////////////////

window.onload = function () {
  let countDownDate1 = new Date();
  countDownDate1.setHours(countDownDate1.getHours() + 6);
  countDownDate1.setMinutes(countDownDate1.getMinutes() + 30);

  let countDownDate2 = new Date();
  countDownDate2.setSeconds(countDownDate2.getSeconds() + 30);

  let x1 = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate1 - now;
    updateTimer(distance, ".time");

    if (distance < 0) {
      clearInterval(x1);
      document.querySelectorAll(".time").forEach(function (timerElement) {
        timerElement.innerHTML = "Time is up";
      });
    }
  }, 1000);

  let x2 = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate2 - now;
    updateTimer(distance, "#timer2");

    if (distance < 0) {
      clearInterval(x2);
      let timer2Element = document.getElementById("timer2");
      if (timer2Element) {
        timer2Element.innerHTML = "Time is up";
      }
    }
  }, 1000);

  function updateTimer(distance, selector) {
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let timerElements = document.querySelectorAll(selector);
    let timerString = "";

    if (hours > 0) {
      timerString += hours + "ч ";
    }

    timerString += minutes + "м " + seconds + "с ";
    timerElements.forEach(function (timerElement) {
      timerElement.innerHTML = timerString;
    });
  }
};

////////////////////
const button = document.querySelector(".burger-menu");
const accountAction = document.querySelector(".account-action-adaptive");

button.addEventListener("click", function () {
  accountAction.classList.toggle("show");
  button.classList.toggle("opened");
});

let prompt = document.querySelector(".prompt");
let container = document.querySelector(".prompt-container");

function togglePromptDisplay() {
  if (prompt.style.display === "none" || prompt.style.display === "") {
    prompt.style.display = "flex";
    container.style.display = "flex";
  } else {
    prompt.style.display = "none";
    container.style.display = "none";
  }
}

document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", function () {
    togglePromptDisplay();
  });
});

document.querySelectorAll(".prompt-icon-plus").forEach((exit) => {
  exit.addEventListener("click", () => {
    togglePromptDisplay();
  });
});

document.querySelectorAll(".btn-enter").forEach((btnEnter) => {
  btnEnter.addEventListener("click", function (e) {
    e.preventDefault();
    togglePromptDisplay();
  });
});

let arrows = document.querySelectorAll(".arrow");
let hidInfos = document.querySelectorAll(".hidden-info");

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", (e) => {
    e.preventDefault();

    let hidInfo = hidInfos[index];

    hidInfos.forEach((info, i) => {
      if (i !== index) {
        info.style.display = "none";
      }
    });

    if (hidInfo.style.display === "none" || hidInfo.style.display === "") {
      hidInfo.style.display = "flex";
    } else {
      hidInfo.style.display = "none";
    }
  });
});

///////////////////////

const promptContainer = document.querySelector(".finished");
const promptContainerLive = document.querySelector(".live");
const promptFinished = document.querySelector(".prompt");
const promptLive = document.querySelector(".prompt-live");

function showPrompt() {
  setTimeout(function () {
    if (promptFinished) {
      promptFinished.style.display = "flex";
    }
    if (promptLive) {
      promptContainerLive.style.display = "flex";
    }
    if (promptContainer) {
      promptContainer.style.display = "flex";
    }
    if (promptContainerLive) {
      promptContainerLive.style.display = "flex";
    }
  }, 2000);
}

window.addEventListener("load", showPrompt);

//////////////////
function toggleElements() {
  const selectedWallet = document.getElementById("wallets").value;
  const addressElement = document.getElementById("walletAddress");
  const currencyButton = document.querySelector(".currency");
  const inputElement = document.querySelector(".input");
  const deposit = document.querySelector(".deposit");

  if (selectedWallet === "paypal") {
    addressElement.style.display = "none";
    currencyButton.style.display = "none";
    inputElement.style.borderRight = "1px solid #8c5b82";
    inputElement.style.borderTopRightRadius = "5px";
    inputElement.style.borderBottomRightRadius = "5px";
    deposit.style.height = "115vh";
  } else {
    addressElement.style.display = "flex";
    deposit.style.height = "auto";
    currencyButton.style.display = "block";
    inputElement.style.borderRight = "0";
    inputElement.style.borderTopRightRadius = "0";
    inputElement.style.borderBottomRightRadius = "0";
  }
}

///////////////////////// copy key

const copyButton = document.getElementById("copyButton");
const walletAddress = document.getElementById("walletAddress");

if (copyButton) {
  copyButton.addEventListener("click", () => {
    // const addressText = walletAddress.textContent
    //   .trim()
    //   .split("Wallet address :")[1]
    //   .trim();
    const addressText = walletAddress.textContent
      .trim()
      .replace("Wallet address :", "")
      .trim();

    const textarea = document.createElement("textarea");
    textarea.value = addressText;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    console.log("Address copied:", addressText);
  });
}

function selectOption(option, element) {
  const buttonDesc = element.parentElement.parentElement.querySelector(
    ".category-choose-stock .desc"
  );
  const selectedStatus = element.textContent.trim();
  let previousSelectedStatus = document.querySelector(".status.selected");

  if (previousSelectedStatus) {
    previousSelectedStatus.classList.remove("selected");
    previousSelectedStatus.classList.remove("white");
  }

  element.classList.add("selected");
  element.classList.add("white");
  buttonDesc.textContent = selectedStatus;
  filterCards(selectedStatus);
  hideMenu(element.parentElement);

  const battleroomBackground = document.querySelector(".forms");
  const formHeight = document.querySelector(".form-height");

  if (selectedStatus === "Active") {
    if (battleroomBackground) {
      battleroomBackground.classList.add("form-height");
    }

    if (formHeight) {
      formHeight.classList.add("form-height");
    }
  } else {
    if (battleroomBackground) {
      battleroomBackground.classList.remove("form-height");
    }

    if (formHeight) {
      formHeight.classList.remove("form-height");
    }
  }
}

function toggleMenu(button) {
  const optionsContainer = button.closest(".options-container");
  const options = optionsContainer.querySelector(".options");

  options.style.display =
    options.style.display === "none" || options.style.display === ""
      ? "flex"
      : "none";
}
function hideMenu(options) {
  options.style.display = "none";
}

function filterCards(status) {
  const cards = document.querySelectorAll(".battle-card");
  const screenWidth = window.innerWidth;

  cards.forEach((card) => {
    if (status === "Show all" || card.classList.contains(status)) {
      if (screenWidth < 480) {
        card.style.display = "grid";
      } else {
        card.style.display = "flex";
      }
    } else {
      card.style.display = "none";
    }
  });
}
//////////////////////
function hidePassword(input) {
  const inputValue = input.value;
  const hiddenValue = "*".repeat(inputValue.length);

  input.value = hiddenValue;
}

//////////////

const fileInput = document.querySelector("#fileInput");
const selectedFileName = document.querySelector("#selectedFileName");
if (fileInput) {
  fileInput.addEventListener("change", function () {
    const files = this.files;
    if (files.length > 0) {
      let fileName = files[0].name;
      const maxLength = 15;

      if (fileName.length > maxLength) {
        fileName = fileName.substring(0, maxLength - 3) + "...";
      }

      selectedFileName.textContent = `${fileName}`;
    } else {
      selectedFileName.textContent = "";
    }
  });
}

let arrowTrans = document.querySelectorAll(".transaction-arrow");
let hiddenTrans = document.querySelectorAll(".hidden-transaction");

arrowTrans.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    if (
      hiddenTrans[index].style.display === "none" ||
      hiddenTrans[index].style.display === ""
    ) {
      hiddenTrans[index].style.display = "flex";
    } else {
      hiddenTrans[index].style.display = "none";
    }
  });
});
// }

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    const dropdownBtn = dropdown.querySelector(".transaction-filter-btn");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    dropdownBtn.addEventListener("click", function () {
      dropdownContent.classList.toggle("show");
    });

    dropdownContent.addEventListener("click", function (event) {
      const selectedItems = dropdownContent.querySelectorAll("li");
      selectedItems.forEach(function (item) {
        item.classList.remove("active");
      });

      const selectedItem = event.target;
      if (selectedItem.tagName === "LI") {
        selectedItem.classList.add("active");
        const btnText = dropdownBtn.querySelector(".btn-text");
        btnText.textContent = selectedItem.textContent;
        dropdownContent.classList.remove("show");
      }
    });
  });
});

/////////////////////////

function showNextPopup(popupId) {
  let currentPopup = document.getElementById(popupId);
  let promptContent = currentPopup.querySelector(".prompt-content");

  currentPopup.style.display = "flex";
  promptContent.style.display = "flex";
}
document.addEventListener("DOMContentLoaded", function () {
  let plusIcons = document.querySelectorAll(".prompt-icon-plus-ver");

  plusIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      let container = this.closest(".prompt-container-verification");
      if (container) {
        container.style.display = "none";
      }
    });
  });
});

function hidePopup(popupId) {
  let popup = document.getElementById(popupId);
  popup.style.display = "none";
}

//////////////////////////
const firstRound = document.querySelector(".first-round");
const secondRound = document.querySelector(".second-round");
const thirdRound = document.querySelector(".third-round");
const fourthRound = document.querySelector(".fourth-round");
const fifthRound = document.querySelector(".fifth-round");
const sixthRound = document.querySelector(".sixth-round");

const callBtn = document.getElementById("callBtn");

if (callBtn) {
  callBtn.addEventListener("click", function () {
    if (firstRound.style.display !== "none") {
      firstRound.style.display = "none";
      secondRound.style.display = "flex";
    } else if (secondRound.style.display !== "none") {
      secondRound.style.display = "none";
      thirdRound.style.display = "flex";
    } else if (thirdRound.style.display !== "none") {
      thirdRound.style.display = "none";
      fourthRound.style.display = "flex";
    } else if (fourthRound.style.display !== "none") {
      fourthRound.style.display = "none";
      fifthRound.style.display = "flex";
    } else if (fifthRound.style.display !== "none") {
      fifthRound.style.display = "none";
      sixthRound.style.display = "flex";
      setTimeout(function () {
        showCongratulations();
      }, 2000);
    }
  });
  function showCongratulations() {
    const promptContainer = document.querySelector(
      ".prompt-container.congratulation"
    );
    if (promptContainer) {
      promptContainer.style.display = "flex";
    }
  }
}

////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const plusButton = document.querySelector(".stockvsstock-button-item .right");
  const minusButton = document.querySelector(".stockvsstock-button-item .left");
  const amountDisplay = document.querySelector(
    ".stockvsstock-button-item .center p.white"
  );

  if (!plusButton || !minusButton || !amountDisplay) {
    return;
  }

  let amount = 100;

  function updateAmount() {
    amountDisplay.textContent = `$${amount}`;
  }

  plusButton.addEventListener("click", function () {
    amount += 10;
    updateAmount();
  });

  minusButton.addEventListener("click", function () {
    if (amount >= 10) {
      amount -= 10;
      updateAmount();
    }
  });

  updateAmount();
});

/////////////
const sendButton = document.querySelector(".prompt-chat-btn");
const chatContainer = document.querySelector(".prompt-center");

function addMessage(message, isClient) {
  const messageClass = isClient ? "message-client" : "message-assistant";
  const messageDate = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  const messageHTML = `
    <div class="${messageClass}">
      <p class="message-text desc ${isClient ? "white" : ""}">
        ${message}
      </p>
      <p class="message-date">${messageDate}</p>
    </div>
  `;

  chatContainer.insertAdjacentHTML("beforeend", messageHTML);
}

if (sendButton) {
  sendButton.addEventListener("click", function () {
    const inputField = document.querySelector(".send");
    const message = inputField.value.trim();
    if (message !== "") {
      addMessage(message, true);
      inputField.value = "";
    }
  });
}

let message = document.querySelector(".message");
let chat = document.querySelector(".chat");
if (message) {
  message.addEventListener("click", () => {
    chat.style.display = "flex";
    container.style.display = "flex";
  });
}
