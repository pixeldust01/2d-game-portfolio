import kaboom from "kaboom";
import { scaleFactor } from "./constants";

export const k = kaboom({
  global: false,
  touchToMouse: true,         // enable touch to mouse; on phone, touch events are used instead of mouse events
  canvas: document.getElementById("game"), // Kaboom configuration property that binds the game to this specific canvas element called canvas
  debug: false,   // debug mode
});
