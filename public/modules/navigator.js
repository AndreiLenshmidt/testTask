import { showMessage } from "./modal.js";

export function findLocation(loadWeather) {
  if (!navigator.geolocation) {
    showMessage("Ошибка", "Не удалось определить геолокацию...");
    loadWeather(39.02, 45.06);
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  async function success(position) {
    const { longitude, latitude } = position.coords;
    console.log(
      "longitude:",
      longitude.toFixed(2),
      "latitude:",
      latitude.toFixed(2)
    );

    loadWeather(longitude, latitude);
  }

  function error() {
    console.log("Не получается определить вашу геолокацию :(");
    return new Error("Не получается определить вашу геолокацию :(");
  }
}
