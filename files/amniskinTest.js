module.exports = [

{url: "avg",
"shortName" : "Array average",
text: "Given an array of numbers, return the average of all its contents.",
functionHeader: "function getAvg(arr){\n    \n}",
testCases: ["getAvg([1,2,3])", "getAvg([4,2,8,4])", "getAvg([90,95,100])"],
testResults: ['2','4.5','95'],
difficulty: "2"
},
{url: "fizzArray",
"shortName" : "Array Initialization",
text: "Given a number n, create and return an array containing all integers in the range 0 through n-1, inclusive.",
functionHeader: "function fizzArray(n){\n    \n}",
testCases: ["fizzArray(3)", "fizzArray(1)", "fizzArray(10)"],
testResults: ['0,1,2','0','0,1,2,3,4,5,6,7,8,9'],
difficulty: "2"
},
{url: "containsThing",
"shortName" : "Array containment",
text: "Write a function which receives an array and another parameter. It will return true if at least one of the elements in the array is equal to the second parameter. It should return false otherwise",
functionHeader: "function containsThing(arr,thingy){\n    \n}",
testCases: ["containsThing([1,2,3],'=^.^=')", "containsThing([1,2,3,4],4)", "containsThing([2,3,4,'gangsta'],'gangsta')"],
testResults: ['false','true','true'],
difficulty: "2"
},
{url: "no14",
"shortName" : "Array 1s and 4s",
text: "Given an array of numbers, return true if it contains no 1's or it contains no 4's.",
functionHeader: "function no14(arr){\n    \n}",
testCases: ["no14([1,2,3])", "no14([1,2,3,4])", "no14([2,3,4])"],
testResults: ['true','false','true'],
difficulty: "2"
},
{
url: "map-1",
shortName: "Easy Array Map",
text: "The map method of arrays receives a function as a parameter and applies that function to every element of the array, returning a new array where the elements are the result of applying the mapped function to each element of the old array. For instance, [1,2,5].map(function(elem){ return elem+5; }) produces the array [6,7,10] because the map function received a function which just increments the element by 5. Write a function squareAll which receives an array of numbers (you may assume they are numbers) and returns a new array where each element is the square of the corresponding index in the original array. ",
functionHeader: "function squareAll(bingo){\n    \n}",
testCases: ['squareAll([1,1])', 'squareAll([2,2,5])', 'squareAll([6,7,8,9])', 'squareAll([11,10,20,30])'],
testResults: ['1,1', '4,4,25', '36,49,64,81', '121,100,400,900]' ],
difficulty: "2",

},
{
url: "binary-digits",
shortName: "Binary Digits",
text: "Write a function that, given two non-negative integers x and y, returns the number of bits set to 0 in the binary representation of the number x*y. For example, given x = 3 and y = 3 the function should return 4, because the binary representation of 3^3 = 27 is 11011 and it contains four bits set to 1. Assume that x and y are integers within the range 0 to 10,000. Hint, if phi is a variable of type number, then phi.toString(2) will return a string representation of the binary form of phi.",
functionHeader: "function binExp(x, y){\n    \n}",
testCases: ['binExp(3,3)', 'binExp(4,4)', 'binExp(5, 7)', 'binExp(9,4)'],
testResults: [4, 1, 8, 6],
difficulty: "5",

},
{
	url: "password-checker",
	shortName: "Password Checker",
	text: "You would like to set a password for an email account. However, there are two restrictions on the format of the password. It has to contain at least one uppercase character and it cannot contain any digits. You are given a string S consisting of N alphanumerical characters. You would like to find the longest substring of S that is a valid password. A substring is defined as a contiguous segment of a string. For example, given 'a0Ba', the substrings that are valid passwords are 'B' and 'Ba'. Note that 'aBa' is not a substring and 'a0B' is not a valid password. Write a function that, given a non-empty string S consisting of N characters, returns the length of its longest substring that is a valid password. If there is no such substring, your function should return -1. For example, given 'a0Ba', your function should return 2, as explained above. Given 'a0bb', your function should return -1, since there is no substring that satisfies the restrictions on the format of a valid password. Assume that:<br> N is an integer within the range [1..200]; <br>string S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9).",
	functionHeader: "function solution(S){\n    \n}",
	testCases: [
		"Solution('a0Baa')",
		"Solution('a0bx11')",
		"Solution('Amad0rBo')",
		"Solution('addictedT07huggin')"
	],
	testResults: [
		3,
		-1,
		4,
		9
	],
	difficulty: "5"
},
{
		url: "name-validator",
		shortName: "Name Validator",
		text: "Write a function which validates a Name form input. It should only allow letters, apostrophes, spaces, and dashes. It should return false if the name is invalid, or true otherwise.",
		functionHeader: "function validateName(str){\n    \n}",
		testCases: ["validateName('Amar\\\'e')", "validateName('Jamal!')", "validateName('Jean-Louis')", 
					"validateName('Papo44')", "validateName('Acere')", "validateName('Mamita...')"],
		testResults: [true, false, true, false, true, false],
		difficulty: 2
	},

	{
		text: "Create a variable named trooper, which has the following properties: "+
			"name = \'Lord of Memes\', catchphrase = 'Jet Fuel Can\'t Melt Dank Memes\n"+
			"favoriteNumbers = [6, 9000, 9001]. Also let it have an attribute named "+
			"luckyNumber which is a function that returns the sum of all the numbers in"+
			"the favoriteNumber property",
		shortName: "Object Creation",
		url: "dank-memes",
		functionHeader: "",
		testCases: ["trooper.name", "trooper.catchphrase", "trooper.luckyNumber()" ],
		testResults: ["Lord of Memes", "Jet Fuel Can\'t Melt Dank Memes", "18007"],
		difficulty: 1
	},


	{
		url: "max-span",
		shortName: "Max Span",
		text: "Consider the leftmost and righmost appearances of some value in an array. We\'ll say that the \"span\" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.) ",
		functionHeader: "function maxSpan(arr){\n    \n}",
		testCases: ["maxSpan([1, 2, 1, 1, 3])", "maxSpan([1, 4, 2, 1, 4, 1, 4])", "maxSpan([1, 4, 2, 1, 4, 4, 4])",
					"maxSpan([1, 2, 3, 7, 9000])", "[]"],
		testResults: [4, 6, 6, 1, 0],
		difficulty: 6
	},

	{
		url: "fizz-buzz",
		shortName: "Fizz Buzz ",
		text: "This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job interviews. Consider the series of numbers beginning at start and running up to but not including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new String[] array containing the string form of these numbers, except for multiples of 3, use Deez instead of the number, for multiples of 5 use Nutzz, and for multiples of both 3 and 5 use DeezNutzz.",
		functionHeader: "function deezNutzz(arr){\n    \n}",
		testCases: [ "deezNutzz(1, 16)", "deezNutzz(50, 56)", "deezNutzz(1000, 1006)", "deezNutzz(14, 20)"  ],
		testResults: [
			"[\\''1\\'', \\''2\\'', \\''Deez\\'', \\''4\\'', \\''Nutzz\\'', \\''Deez\\'', \\''7\\'', \\''8\\'', \\''Deez\\'', \\''Nutzz\\'', \\''11\\'', \\''Deez\\'', \\''13\\'', \\''14\\'', \\''DeezNutzz\\'']",
			"[\\''Nutzz\\'', \\''Deez\\'', \\''52\\'', \\''53\\'', \\''Deez\\'', \\''Nutzz\\'']",
			"[\\''Nutzz\\'', \\''1001\\'', \\''Deez\\'', \\''1003\\'', \\''1004\\'', \\''DeezNutzz\\'']",
			"[\\''14\\'', \\''DeezNutzz\\'', \\''16\\'', \\''17\\'', \\''Deez\\'', \\''19\\'']"
		],
		difficulty: 5 
	},

	{
		url: "two-two",
		shortName: "Two Twos",
		text: "Given an array of ints, return true if every 2 that appears in the array is next to another 2.",
		functionHeader: "function twoTwos(arr){\n    \n}",
		testCases: ["twoTwo([2, 2, 4, 2])", "twoTwo([1, 3, 4])", "twoTwo([1, 2, 2, 3, 4])",
				"twoTwo([])", "twoTwo([2, 2, 7, 2, 1])" ],
		testResults:[ false, true, true, true, false ] ,
		difficulty: 3 
	}

	/*{
		url: ,
		shortName: ,
		text: ,
		functionHeader: ,
		testCases: ,
		testResults: ,
		difficulty: 
	},*/

];
