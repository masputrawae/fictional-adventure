import { linkPreviewHandler } from "./module_internal/preview-link";
import { searchHandler } from "./module_internal/search";
import { sidebarHandler } from "./module_internal/sidebar";
import { themeHandler } from "./module_internal/theme";

const main = () => {
  sidebarHandler();
  themeHandler();
  linkPreviewHandler();
  searchHandler();
};

document.addEventListener("DOMContentLoaded", main);
