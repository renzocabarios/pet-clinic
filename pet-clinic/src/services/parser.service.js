function parse(obj, dataKeys) {
  let tempData = "";
  Object.entries(obj).every(([key, value]) => {
    if (dataKeys[0] == key && dataKeys.length <= 1) {
      tempData = value;
      return false;
    }

    return true;
  });
  return tempData;
}

function stringToArray(string, splitter = ".") {
  return string.split(splitter);
}

export default { parse, stringToArray };
