export function getCurrencySymbol(value) {
  let symbol = "";
  switch (value) {
    case "euro":
      symbol = "€";
      break;
    case "dollar":
      symbol = "$";
      break;
    case "pound":
      symbol = "£";
      break;
    case "real":
      symbol = "R$";
      break;
    case "yen":
      symbol = "¥";
      break;
    case "yuan":
      symbol = "¥";
      break;
    case "peso":
      symbol = "$";
      break;
  }
  if (symbol.length > 0) {
    return symbol;
  }
}

export function getCurrencyValue(price, currency) {
  if (currency === "euro") {
    return price;
  } else {
    let finalPrice = 0;
    switch (currency) {
      case "dollar":
        finalPrice = parseFloat(price * 1.08).toFixed(2);
        break;
      case "pound":
        finalPrice = parseFloat(price * 0, 89).toFixed(2);
        break;
      case "real":
        finalPrice = parseFloat(price * 5, 52).toFixed(2);
        break;
      case "yen":
        finalPrice = parseFloat(price * 138, 74).toFixed(2);
        break;
      case "yuan":
        finalPrice = parseFloat(price * 7.27).toFixed(2);
        break;
      case "peso":
        finalPrice = parseFloat(price * 20.32).toFixed(2);
        break;
      default:
        finalPrice = price;
    }
    return finalPrice;
  }
}
