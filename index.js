import { initLight, switchLight } from "./traffic-light.js";

const btnNode = document.querySelector(".js-btn");
const trafficLightNode = document.querySelector(".js-traffic-light");

initLight(trafficLightNode);

btnNode.addEventListener('click', () => {
    switchLight(trafficLightNode);
});