import { avatar_url } from "./config";
import moment from "moment";
import makeToast from "./Toaster";

export const NOT_FOUND_IMAGE =
  "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
export const isArrayCheck = (arr) => {
  return Array.isArray(arr) && arr.length > 0;
};
export const checkEmptyArray = (arr) => {
  return Array.isArray(arr);
};

export const getRandomData = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export function isEmptyOrSpaces(str) {
  let EMPTY_REGEX = /^\s+$/;
  const Empty = EMPTY_REGEX.test(str);

  return str === null || str.match(/^ *$/) !== null || Empty;
}

export const countWords = (str) => {
  return str.trim().split(/\s+/).length;
};

export const formatedDate = (date) => {
  return moment(date).format("MMM DD YYYY");
};
export const formatedReportDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

export const formatedTime = (date) => {
  return moment(date).format("HH:MM:SS");
};
// "processToManufacture",
// "orderMakingDone",
// "shipped",
// "received",

export const orderStatusText = (data) => {
  if (data === "unapproved") {
    return "Order Placed";
  } else if (data === "processToManufacture") {
    return "Order Process to Manufacturer";
  } else if (data === "orderMakingDone") {
    return "Order Making Complete";
  } else if (data === "shipped") {
    return "Order Shipped";
  } else if (data === "received") {
    return "Order Received";
  }
};

export function isValidUrl(string) {
  try {
    // new URL(string);
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  } catch (_) {
    return false;
  }

  return true;
}
export const isDateEqual = (date1, date2) => {
  console.log(
    "Check",
    date1,
    date2,
    moment(formatedReportDate(date1)).isSame(formatedReportDate(date2))
  );
  return moment(formatedReportDate(date1)).isSame(formatedReportDate(date2));
};

export const getAvailabilityByDate = (availability, date) => {
  if (isArrayCheck(availability)) {
    return availability.find((val) =>
      isDateEqual(val.dateOfAvailability, date)
    );
  }
};
export function image_url(url) {
  if (url && url.includes("https")) {
    return url;
  } else {
    return avatar_url + url;
  }
}

export const addDefaultSrc = (ev) => {
  ev.target.src = "https://www.w3schools.com/html/img_avatar.png";
};

export const console_log = (key = "", value) => {
  console.log(key + " : ", value);
};

export const Log = (key = "", value) => {
  console.log(key + " : ", value);
};

export const getColorForOrderStatus = (status) => {
  if (status === "approved") {
    return "#9C5E00";
  } else if (
    status === "shipped" ||
    status === "orderMakingDone" ||
    status === "processToManufacture"
  ) {
    return "#0C9C00";
  } else if (status === "unapproved") {
    return "#9C2500";
  } else if (status === "received") {
    return "#00809C";
  }
};

export const getAvgRating = (arr) => {
  let sum = 0;
  if (isArrayCheck(arr)) {
    arr.map((data) => {
      sum += Number(data?.rating);
    });
    return sum / arr?.length;
  }
  return 0;
};

export const getProductSoldQuantity = (arr, user) => {
  let sum = 0;
  if (isArrayCheck(arr)) {
    for (let i = 0; i < arr.length; i++) {
      Log("Loop i =>", arr[i]);
      arr[i]?.products?.map((data) => {
        Log("Loop Map =>", data);
        if (user === null) {
          sum += Number(data?.quantity);
        } else {
          if (data?.designer === user?.user?._id) {
            sum += Number(data?.quantity);
            Log("IF =>", sum, data);
          }
        }
      });
    }
    return sum;
  }
  return 0;
};

export const getOrdersByStatus = (arr, status) => {
  let sum = 0;
  if (isArrayCheck(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]?.delivery?.status === status) {
        sum += 1;
      }
    }

    return sum;
  }
  return 0;
};

export const getAvgProfitDesigner = (arr) => {
  let sum = 0;
  if (isArrayCheck(arr)) {
    for (let i = 0; i < arr.length; i++) {
      Log("Loop i =>", arr[i]);
      for (let j = 0; j < arr[i]?.products?.length; j++) {
        Log("Loop J =>", arr[i]?.products[j]);
        if (arr[i]?.delivery?.status === "received") {
          // let shippingFee = Number(arr[i]?.products[j]?.shippingFee) > 0 ? Number(arr[i]?.products[j]?.shippingFee) : 0;
          let shippingFee = 0;
          let qty =
            Number(arr[i]?.products[j]?.quantity) > 0
              ? Number(arr[i]?.products[j]?.quantity)
              : 1;
          let designerPrice =
            Number(arr[i]?.products[j]?.designerPrice) > 0
              ? Number(arr[i]?.products[j]?.designerPrice)
              : 0;
          sum += qty * designerPrice;
        }
      }
    }
    return sum;
  }
  return 0;
};

export const getRevenueForProduct = (data) => {
  console.log(
    "Revenue",
    data?.name,
    Number(data?.makerPrice),
    Number(data?.totalPrice),
    Number(data?.shipping),
    Number(data?.saleCount),
    (Number(data?.makerPrice) + Number(data?.totalPrice)) *
      Number(data?.saleCount) +
      Number(data?.shipping) * Number(data?.saleCount)
  );
  return (
    (Number(data?.makerPrice) + Number(data?.totalPrice)) *
      Number(data?.saleCount) +
    Number(data?.shipping) * Number(data?.saleCount)
  );
};

export const getProfitForProduct = (data) => {
  console.log(
    "Profit",
    data?.name,
    Number(data?.makerPrice),
    Number(data?.totalPrice),
    Number(data?.shipping),
    Number(data?.saleCount),
    (Number(data?.makerPrice) + Number(data?.totalPrice)) *
      Number(data?.saleCount) +
      Number(data?.shipping) * Number(data?.saleCount) -
      Number(data?.makerPrice) * Number(data?.saleCount)
  );
  return (
    (Number(data?.makerPrice) +
      Number(data?.totalPrice) +
      Number(data?.shipping)) *
      Number(data?.saleCount) -
    (Number(data?.makerPrice) + Number(data?.shipping)) *
      Number(data?.saleCount)
  );
};

export const getCostForProduct = (data) => {
  console.log(
    "Cost",
    data?.name,
    Number(data?.makerPrice),
    Number(data?.shipping),
    Number(data?.saleCount),
    Number(data?.makerPrice) * Number(data?.saleCount) +
      Number(data?.shipping) * Number(data?.saleCount)
  );
  return (
    Number(data?.makerPrice) * Number(data?.saleCount) +
    Number(data?.shipping) * Number(data?.saleCount)
  );
};

// orderStutus: [
//     "unapproved",
//     "processToManufacture",
//     "orderMakingDone",
//     "shipped",
//     "received",
//     "cancelled",
//   ]
export const getOrderStatusText = (status) => {
  if (status === "processToManufacture") {
    return "Process To Manufacture";
  } else if (status === "shipped") {
    return "Shipped";
  } else if (status === "received") {
    return "Received";
  } else if (status === "orderMakingDone") {
    return "Order Making Done";
  } else if (status === "cancelled") {
    return "Cancelled";
  } else if (status === "unapproved") {
    return "Placed";
  }
};
export const addMethodArray = (arrayData, objectToAdd) => {
  let arr = arrayData ? arrayData : [];
  arr.push(objectToAdd);
  Log("Add Method ==>", arr);
  return arr;
};
export const removeMethodArray = (arrayData, objectToRemoved) => {
  let arr = arrayData ? arrayData : [];
  arr = arr?.filter((data) => data?._id != objectToRemoved?._id);
  Log("Remove Method Before==>", arrayData);
  Log("Remove Method After==>", arr);

  return arr;
};

export const removeMethodArrayUsingStringData = (arrayData, index) => {
  Log("Remove Method Before==>", arrayData);
  let arr = arrayData ? arrayData : [];
  arr = arr.filter((dat) => String(dat) !== String(index));
  Log("Remove Method After==>", arr);

  return arr;
};

export const removeMethodArrayForSlider = (arrayData, objectToRemoved) => {
  let arr = arrayData ? arrayData : [];
  arr = arr?.filter((data) => data?.image != objectToRemoved?.image);
  Log("Remove Method Before==>", arrayData);
  Log("Remove Method After==>", arr);

  return arr;
};

export const updateMethodArray = (arrayData, objectToUpdated, updatedValue) => {
  return arrayData.map((data) =>
    data?._id === objectToUpdated?._id ? { ...data, ...updatedValue } : data
  );
};

export const getTotalPriceForProducts = (products) => {
  let value = 0;
  let data =
    isArrayCheck(products) &&
    products?.map((x) => {
      value += Number(x.totalPrice);
    });
  return value;
};
export const getTotalOfPlainArray = (arr) => {
  let value = 0;
  let data =
    isArrayCheck(arr) &&
    arr?.map((x) => {
      value += Number(x);
    });
  return value;
};

export const getTotalPriceForSelectedProducts = (products) => {
  let value = 0;
  let data =
    isArrayCheck(products) &&
    products?.map((x) => {
      value += Number(x.total);
    });
  console.log("Redux Total Price", value);
  return value;
};
export const getTotalShippingForSelectedProducts = (products) => {
  let value = 0;
  let data =
    isArrayCheck(products) &&
    products?.map((x) => {
      value += Number(x.shippingCost);
    });
  console.log("Redux Total Shipping", value);
  return value;
};

export const checkValueInArray = (arr, keyValue, valueToBeChecked) => {
  return (
    isArrayCheck(arr) &&
    arr.find((data) => String(data[keyValue]) === String(valueToBeChecked))
  );
};
export const checkValueInArrayCart = (arr, valueToBeChecked) => {
  return (
    isArrayCheck(arr) &&
    arr.find((data) => data?.productId?._id === valueToBeChecked)
  );
};
export const getTotalPriceForProductsCheckout = (products) => {
  let value = 0;
  let data =
    isArrayCheck(products) &&
    products?.map((x) => {
      value += Number(x.price);
    });
  return value;
};

export const setPriceLocally = (value, type) => {
  const price = localStorage.getItem("@price");
  try {
    if (type === "add") {
      localStorage.setItem("@price", Number(price) + Number(value));
    } else if (type === "minus") {
      localStorage.setItem("@price", Number(price) - Number(value));
    } else {
      localStorage.setItem("@price", Number(value));
    }
  } catch (error) {
    Log("Error Add Price", error);
  }
};

export const getPriceLocally = () => {
  const price = localStorage.getItem("@price");
  if (price) {
    return price;
  } else {
    return 0;
  }
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const CheckEmail = (email) => {
  if (!validateEmail(email)) {
    makeToast("error", "Email is not valid");
  }
  return true;
};

export const graphSeriesMethod = (data, selField) => {
  if (isArrayCheck(data)) {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < data?.length; i++) {
      if (data[i]?._id?.month) {
        arr[data[i]?._id?.month - 1] = Math.round(data[i]?.[selField]);
      }
    }
    return arr;
  }
  return null;
};

export const getGraphSeriestotal = (arr) => {
  let value = 0;
  isArrayCheck(arr) &&
    arr?.map((x) => {
      value += Number(x);
    });
  return value;
};

export const getRecieverId = (arr, myId) => {
  console.log(arr, myId);
  if (isArrayCheck(arr)) {
    return arr.filter((x) => String(x) != String(myId))[0];
  }
  return null;
};

export const onlyUniqueArrayData = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const downloadCSV = (array) => {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
};

export const convertArrayOfObjectsToCSV = (array) => {
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
};

export const getRandomIdForkanva = () => {
  return "Id" + Math.floor(Math.random() * 99999);
};

export const checkObjectKeys = (object) => {
  const isEmpty = Object.values(object).every((x) => x === null || x === "");
  return isEmpty;
};

export const validateString = (
  string,
  character = 25,
  placeholder = "Dummy"
) => {
  if (!string) {
    return placeholder;
  }
  if (
    string &&
    String(string).length > 0 &&
    String(string).length < character
  ) {
    return string;
  } else {
    return String(string).substring(0, character) + "...";
  }
};

export const makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
