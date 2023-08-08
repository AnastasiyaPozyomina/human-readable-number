let n1 = [
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eighteen",
	"nineteen"
];

let n2 = [
	"",
	"ten",
	"twenty",
	"thirty",
	"forty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety",
	"hundred"
];

module.exports = function toReadable(number) {
    let str = String(number);
	let str1 = str[1];
	let str2 = str[2];
	let p = str1 + str2;
	return str.length === 1 && str.length < 9
		? n1[number] //two
		: number > 9 && number < 20
		? n1[number] //"fifteen"
		: number >= 20 && str.length === 2 && str[1] !== "0"
		? n2[str[0]] + " " + n1[str[1]] //"fifty six"
		: number >= 20 && str.length === 2 && str[1] === "0"
		? n2[str[0]] //"fifty"
		: str.length === 3 &&
		  str[1] !== "0" &&
		  str[2] !== "0" &&
		  number > str[0] + "19" 
		? n1[str[0]] + " " + "hundred" + " " + n2[str[1]] + " " + n1[str[2]]
		: str.length === 3 && str[1] === "0" && str[2] === "0"
		? n1[str[0]] + " " + "hundred" //"five hundred"
		: str.length === 3 && str[1] !== "0" && str[2] === "0"
		? n1[str[0]] + " " + "hundred" + " " + n2[str[1]] //"three hundred twenty"
		: str.length === 3 &&
		  str[1] !== "0" &&
		  str[2] !== "0" &&
		  number < str[0] + "20"
		? n1[str[0]] + " " + "hundred" + " " + n1[p]
		: str.length === 3 &&
		  str[1] === "0" &&
		  str[2] !== "0" &&
		  number > str[0] + "00" &&
		  number < str[0] + "10"
		? n1[str[0]] + " " + "hundred" + " " + n1[str[2]] 
		: "Enter from 0 to 999";
}