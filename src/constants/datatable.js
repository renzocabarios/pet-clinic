export default {
  PERSONNEL: {
    header: ["First Name", "Last Name", "Email", "Position"],
    dataName: ["firstName", "lastName", "email", "position.name"],
  },
  ADOPTER: {
    header: ["First Name", "Last Name", "Email"],
    dataName: ["firstName", "lastName", "email"],
  },
  USER: {
    header: ["First Name", "Last Name", "Email", "Type"],
    dataName: ["firstName", "lastName", "email", "type"],
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
  ADOPTION: {
    header: ["Animal", "Adopter First Name", "Adopter Last Name", "Status"],
    dataName: [
      "animal.name",
      "adopter.firstName",
      "adopter.lastName",
      "status",
    ],
  },
};
