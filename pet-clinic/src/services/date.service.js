function getStringDate(dateString) {
  const date = new Date(dateString);
  return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
}

export default { getStringDate };
