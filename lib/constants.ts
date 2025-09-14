import type { LngLatLike } from "maplibre-gl";

export const CENTER_BARNAUL = [83.46, 53.2] as LngLatLike;

export const LOCATION_PAGES = new Set(["dashboard", "dashboard-add"]);
export const CURRENT_LOCATION_LOG_PAGES = new Set([
  "dashboard-location-slug-id",
  "dashboard-location-slug-id-edit",
  "dashboard-location-slug-id-add",
]);
export const CURRENT_LOCATION_PAGES = new Set([
  "dashboard-location-slug",
  "dashboard-location-slug-edit",
  "dashboard-location-slug-add",
]);
export const EDIT_PAGES = new Set([
  "dashboard-add",
  "dashboard-location-slug-edit",
  "dashboard-location-slug-add",
]);
