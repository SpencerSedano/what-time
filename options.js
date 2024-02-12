
// Saves options to chrome.storage
const saveOptions = () => {
  const colorsSelect = document.querySelector("#color");
  const selectedColor = colorsSelect.value;
  const likesColor = document.getElementById("like").checked;

  /* setting countries time */
  const countrySelectOne = document.querySelector("#countryone").value;
  const countrySelectTwo = document.querySelector("#countrytwo").value;

  chrome.storage.sync.set(
    {
      favoriteColor: selectedColor,
      likesColor: likesColor,
      countryOne: countrySelectOne,
      countryTwo: countrySelectTwo,
    },
    () => {
      // Update status to let the user know options were saved.
      const status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(() => {
        status.textContent = "";
      }, 750);

      // Set the background color after saving the options
      if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
      }

      chrome.runtime.sendMessage({
        colorChanged: true,
        selectedColor,
        countrySelectOne,
        countrySelectTwo,
      });
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { favoriteColor: "red", likesColor: true },
    (items) => {
      document.getElementById("color").value = items.favoriteColor;
      document.getElementById("like").checked = items.likesColor;

      // Set the background color when restoring options
      if (items.favoriteColor) {
        document.body.style.backgroundColor = items.favoriteColor;
      }
    }
  );
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
