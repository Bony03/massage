import "./index.html";
import "./index.scss";

import { menuHandler } from "./js/menu";
const menuIcon = document.querySelector(".nav__icon");
menuIcon.onclick = menuHandler;
