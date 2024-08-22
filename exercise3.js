const reverseString = (string) => {
    if (typeof string !== "string") return "Error: Excepting strings only.";
    return string.split("").reverse().join("");
};


console.log(reverseString(90))