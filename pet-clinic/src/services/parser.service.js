function parse(obj, dataKeys) {
  return dataKeys.length > 1 ? denestObject(obj, dataKeys) : obj[dataKeys[0]];
}

function denestObject(obj, dataKeys) {
  let tempObj = obj;
  for (const key of dataKeys) tempObj = tempObj[key];
  return tempObj;
}

function stringToArray(string, splitter = ".") {
  return string.split(splitter);
}

export default { parse, stringToArray };
