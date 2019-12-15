// Capitalizes the first letter of the first word in a sentence
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}