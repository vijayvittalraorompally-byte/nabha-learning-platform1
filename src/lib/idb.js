import localforage from "localforage";

localforage.config({
  name: "nabha-learning-platform",
  storeName: "offline-data",
});

export default localforage;
