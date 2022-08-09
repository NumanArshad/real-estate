const sortObjectKeys = (obj) =>
  Object.entries(obj)
    .sort()
    .reduce((o, [k, v]) => ((o[k] = v), o), {});

export const isEqual = (val1, val2) => {
  if (typeof val1 === "number" && typeof val2 === "number")
    return val1 === val2;
  if (typeof val1 === "string" && typeof val2 === "string")
    return val1 === val2;
  if (Array.isArray(val1) && Array.isArray(val2)) {
    return JSON.stringify(val1) === JSON.stringify(val2);
  }
  if (typeof val1 === "object" && typeof val2 === "object") {
    return (
      JSON.stringify(sortObjectKeys(val1)) ===
      JSON.stringify(sortObjectKeys(val2))
    );
  }
  return false;
};


export const plainObjectToFormData = (object) => {
  const formData = new FormData()
  for (let key in object) {
    if (key === "files") {
      const filesData = object[key]
      for (var i = 0; i < filesData.length; i++) {
        formData.append('files', filesData[i])
      }
    }
    else {
      formData.append(key, object[key])
    }
  }

  return formData
}
