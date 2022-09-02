export default {
  ROUTE: {
    ANIMAL_TYPE: "animal-type",
    USER: "user",
    PERSONNEL: "personnel",
    ANIMAL: "animal",
    DISEASE: "disease",
    ADD: "add",
    EDIT: "edit",
    AUTH: "auth",
    LOGIN: "login",
    REGISTER: "register",
    DASHBOARD: "dashboard",
    POSITION: "position",
    SETTING: "setting",
  },
  SLICE: {
    POSITION: "position",
    PERSONNEL: "personnel",
    ANIMAL_TYPE: "animal-type",
    ANIMAL: "animal",
  },
  DATATABLE: {
    PERSONNEL: {
      header: ["First Name", "Last Name", "Email"],
      dataName: ["firstName", "lastName", "email"],
    },
    USER: {
      header: ["First Name", "Last Name", "Email"],
      dataName: ["firstName", "lastName", "email"],
    },
    POSITION: {
      header: ["Position Name", "Description"],
      dataName: ["name", "description"],
    },
    DISEASE: {
      header: ["Position Name", "Description"],
      dataName: ["name", "description"],
    },
    ANIMAL_TYPE: {
      header: ["Position Name", "Description"],
      dataName: ["name", "description"],
    },
    ANIMAL: {
      header: ["Name", "Breed", "Age", "Sex"],
      dataName: ["name", "breed", "age", "sex"],
    },
  },
};
