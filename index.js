// Question 2
const hr = "*".repeat(70);
var sepeartor = "-".repeat(50);
let PersonalName = "Muhammad Shafique";
console.log(hr);
console.log("Question No. 2:");
console.log(`Hello ${PersonalName},would you like to learn some Python today?`);
console.log(hr);
// Question 3
let Myname = "muhammad Imran";
console.log("Question No. 3:");
console.log(Myname.toUpperCase());
console.log(Myname.toLowerCase());
function titleCase(string) {
  return string
    .toLowerCase()
    .split(" ")
    .reduce(
      (a, x) => a + "" + (x.charAt(0).toUpperCase() + x.slice(1) + " "),
      ""
    );
}
console.log(titleCase(Myname));
console.log(hr);
// Question 4
console.log("Question No. 4:");
let Quote = `Hazrat Muhammad (PBUH) said, "The strong person is not the one who can wrestle someone else down. The strong person"`;
console.log(Quote);
console.log(hr);
// Question 5
console.log("Question No. 5:");
let famous_person = "Hazrat Muhammad SAW";
let message = `The strong person is not the one who can wrestle someone else down. The strong person ('Hazrat Muhammad SAW')`;
console.log(`${famous_person} once said, "${message}"`);
console.log(hr);
// Question 6
console.log("Question No. 6:");
let raw_name = "\tMuhammad   Kamran   ";
console.log(raw_name);
let strip_name = raw_name.trim();
console.log(strip_name);
console.log(hr);
// Question 7
console.log("Question No. 7:");
console.log(12 - 4);
console.log(2 * 4);
console.log(4 + 4);
console.log(16 / 2);
console.log(hr);
// Question 8
console.log("Question No. 8:");

console.log(sepeartor);
console.log("console.log(5+3)");
console.log(sepeartor);
console.log(hr);
// Question 9
console.log("Question No. 9:");
let favNum = 5930;
let favNummsg = `Your favourite Number is ${favNum}`;
console.log(favNummsg);
console.log(hr);
// Question 10
console.log("Question No. 10:");
// I am also adding comments in this file
console.log(
  "The output is in comment form and not displaying in this terminal"
);
console.log(hr);
// Question 11
console.log("Question No. 11:");
const names = ["Fakhar", "Babar", "Rizwan", "Umar"];
for (index in names) {
  console.log(names[index]);
}
console.log(hr);
// Question 12
console.log("Question No. 12:");
for (person in names) {
  console.log(`Welcome my dear friend ${names[person]}`);
}
console.log(hr);
// Question 13
console.log("Question No. 13:");
const myTpt = ["Honda M/C"];
const myHondaList = ["I would like to drive Honda M/C", "I love Honda M/C"];
for (tpt in myTpt) {
  console.log(myTpt[tpt]);
  for (list in myHondaList) {
    console.log(myHondaList[list]);
  }
}
console.log(hr);
// Question 14
console.log("Question No. 14:");
const guestList = ["Muhammad", "Aiman", "Bushra"];
function sendInvitations() {
  for (invitee in guestList) {
    console.log(
      `Dear ${guestList[invitee]}, i would like to invite you on occassion of annual dinner at my farmhouse located at ..`
    );
    console.log(sepeartor);
  }
}
sendInvitations();
console.log(hr);
console.log("Question No. 15:");
// Replaceing the guest who could not attend the dinner.
guestList[2] = "Maham";
sendInvitations();
console.log(hr);
// Question 16
console.log("Question No. 16:");
guestList.push("Kubra");
guestList.unshift("Isfian");
console.log("After adding more invitees the list of invitees");
sendInvitations();
console.log(hr);
// Question 17
console.log("Question No. 17:");
console.log(
  "I have shortage of tables and can only manage/ invite only two people for dinner."
);
function trimInvitees() {
  let cancelInvitation = [];
  for (x in guestList) {
    if (guestList.length > 2) {
      cancelInvitation.push(guestList.pop());
    }
  }
  // Send message to invitees that i can not manage the tables
  for (n in cancelInvitation) {
    console.log(
      `Sorry my dear ${cancelInvitation[n]}, i can not invite you due to non aval of tables`
    );
  }
}
// trim the list and send letters to the extra members who could not be invited due to non aval of tables
trimInvitees();
//  send invitations to remaning members of the team
console.log("Sending @@@@invitations again.");
sendInvitations();
console.log(hr);

// Question 18
console.log("Question No. 18:");
let favPlaces = ["Zhob", "Islamabad", "Banu", "Murree", "Karachi", "Dubai"];
console.log("Original Arr");
console.log(favPlaces);
let SortedArr = favPlaces.sort();
console.log("Sorted");
console.log(SortedArr);
let revArr = favPlaces.reverse();
console.log("Reversed");
console.log(revArr);
console.log("Original Arr");
console.log(favPlaces);
console.log(hr);

// Question 19
console.log("Question No. 19 :");
console.log(`I am inviting total ${guestList.length}x guests`);
console.log(hr);
console.log("Question No. 20 :");

let countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "France",
  "Germany",
  "Japan",
  "Australia",
];
console.log("List of Countries:");
for (i in countries) {
  console.log(countries[i]);
}
console.log(hr);
// Question 23
console.log("Question 23");
let car = "subaru";
console.log(`Is car == 'sabaru'? I predict True.`);
console.log(car == "subaru");
let myName = "Muhammad  Shafique";
console.log(`Is Name == 'Muhammad Shafique'? I predict False.`);
console.log(myName == "Muhammad Shafique");
let grade = "b";
console.log(`Is grade === 'B'? I predict True.`);
console.log(grade === "B");
let marks = "80%" ? true : false;
console.log("Is marks == 50%, i predict false");
console.log(marks == "50%");
let [w, y] = [10, 20];
console.log("w>y, I predict False");
console.log(w > y);
console.log(hr);
// Question 25, 26 & 27
console.log("Question 25, 26 & 27");
const PointsDetector = (AlienColor = "") => {
  AlienColor = AlienColor.toLowerCase();
  if (AlienColor == "green") {
    console.log("The player have just earned 5 points for shooting the alien");
  } else if (AlienColor == "yellow") {
    console.log("The player have just earned 10 points for shooting the alien");
  } else if (AlienColor == "red") {
    console.log("The player have just earned 15 points for shooting the alien");
  } else {
    console.log("The player have just earned 10 points for shooting the alien");
  }
  //  Question 27
};
PointsDetector("GREEN");
console.log(hr);
// Question 28
console.log("Question No. 28 :");
const PersonStage = (personStage) => {
  if (personStage <= 2) {
    console.log("the person is a baby");
  } else if (personStage == 4 && personStage < 13) {
    console.log("the person is a kids");
  } else if (personStage == 13 && personStage < 20) {
    console.log("The person is a teenager");
  } else if (personStage == 20 && personStage < 65) {
    console.log("The person is an adult");
  } else if (personStage >= 65) {
    console.log("The person is an elder");
  }
};
PersonStage(65);
console.log(hr);

// Question 29
console.log("Question No. 29 :");
let fruitsList = ["apple", "orange", "mango", "banana", "grapes", "kiwi"];
let fav_fruits = ["apple", "orange", "mango", "kiwi"];
for (fruit in fruitsList) {
  for (fav in fav_fruits) {
    if (fruitsList[fruit] == fav_fruits[fav]) {
      console.log(`Your really liked ${fruitsList[fruit]}`);
    }
  }
}
console.log(hr);
// Question 30
console.log("Question No. 30 :");
let userName = [
  "shafique5930",
  "hassan25",
  "arif809",
  "saleem67",
  "babar320",
  "admin",
];
for (user in userName) {
  if (userName[user].length <= 0) {
    console.log("we need to find some users");
  } else if (userName[user] == "admin") {
    console.log(
      `Hello ${userName[user]}, would you like to see a status report?`
    );
  } else {
    console.log(`Hello ${userName[user]}, thank you for logging in again`);
  }
}
console.log(hr);
// Question 31
console.log("Question No. 31 :");
if (userName.length == 0) {
  console.log("We find some more users");
}
// Question 32
console.log("Question No. 32 :");
const current_users = ["shafique5930", "babar320", "admin"];
const new_users = ["shafique5930", "saifi"];
let userNameAval = true;
for (nuser in new_users) {
  for (user in current_users) {
    if (new_users[user] == current_users[user]) {
      userNameAval = false;
    } else {
      console.log(`Welcome ${new_users[user]}`);
    }
  }
}
console.log(
  `${current_users[user]} has already been used, please select new user name`
);
console.log(hr);
// Question 33
console.log("Question No.33 :");
const ordinalNumber = [];
const OrdinalNumberPrint = (...arr) => {
  for (i = 1; i <= 9; i++) {
    arr.push(i);
  }
  for (num in arr) {
    if (arr[num] <= 2) {
      console.log(`${arr[num]}st`);
    } else if (arr[num] == 3) {
      console.log(`${arr[num]}rd`);
    } else {
      console.log(`${arr[num]}th`);
    }
  }
};
OrdinalNumberPrint(ordinalNumber);
console.log(hr);
// Question 34
console.log("Question No. 34:");
const pizzaVariety = ["Chicken Tikka", "Fajita", "Smoky Grill"];
const pizzaDetail = (arr) => {
  for (pizza in arr) {
    console.log(arr[pizza]);
  }
  // Question 35
  for (pizza in arr) {
    console.log(`I like ${arr[pizza]} pizza flavour`);
  }
  console.log(
    "I like pizza and i mostly visits Cheezious pizza \n for best and delicious pizza. They have many variety \nand flavours and i really loved their pizza"
  );
};
pizzaDetail(pizzaVariety);
console.log(hr);
// Question 36
console.log("Question No.36 :");
const animals = ["Dog", "Cat", "Rabbit"];
const animalNames = () => {
  console.log("Names of Animals:");
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
  console.log("\nStatements about Animals:");
  for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
  }
  console.log("\nWhat these animals have in common:");
  console.log("Any of these animals would make a great pet!");
};
animalNames();
console.log(hr);
// Question 36
console.log("Question No.36 :");
const make_shirt_customize = (size, textMsg) => {
  return `Hello sir your shirt size is ${size} and your desired message is "${textMsg}"`;
};
console.log(make_shirt_customize("Large", "I love Pakistan!"));
console.log(hr);
// Question 37
console.log("Question No.37 :");
const make_shirt = (size = "Large" && "Medium", textMsg) => {
  if (size == "Large" || size == "Medium") {
    return `Hello sir your shirt size is ${size} and your desired message is "I love TypeScript"`;
  } else {
    return `Hello sir your shirt size is ${size} and your desired message is "${textMsg}"`;
  }
};
console.log(make_shirt("Large", "I love Pakistan!"));
console.log(
  make_shirt("small", "Type script is a great programming Language!")
);
console.log(hr);
// Question 38
console.log("Question No. 38 :");
const describe_city = (city, country = "Pakistan") => {
  return `${city} is in ${country}`;
};
console.log(describe_city("Multan"));
console.log(describe_city("Faisalabad"));
console.log(describe_city("New York", "USA"));
console.log(hr);
// Question 39
console.log("Question No.39 :");
function city_country(city, country) {
  return `"${city}, ${country}"`;
}
console.log(city_country("Islamabad", "Pakistan"));
console.log(hr);
// Question 40
console.log("Question No.40 :");
const make_album = (artist, title, tracks) => {
  let album = {
    artist: artist,
    title: title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
};
let album1 = make_album("Artist1", "Album 1");
let album2 = make_album("Artist2", "Album 2", 4);
let album3 = make_album("Artist3", "Album 3");
console.log(album1);
console.log(album2);
console.log(album3);
console.log(hr);
// Question 41
console.log("Question No.41 :");
let Magicians = ["Umroo", "Hamoon"];
function show_magicians(arr) {
  for (i in arr) {
    console.log(arr[i]);
  }
}
console.log(show_magicians(Magicians));
console.log(hr);
// Question 42
console.log("Question No.42 :");
function make_great(magicinas) {
  for (let i = 0; i < magicinas.length; i++) {
    magicinas[i] = "The Great " + magicinas[i];
  }
}
console.log("No output - just changed the original Array of Magicians");
console.log(hr);
// Question 43
console.log("Question No.43:");
console.log(show_magicians(Magicians));
let cp_magicians = Magicians;
make_great(cp_magicians);
console.log(cp_magicians);
console.log(hr);
// Question 44
console.log("Question No.44 :");
function makeSandwich(...items) {
  console.log("Sandwich order:");
  for (i in items) {
    console.log("* " + items[i]);
  }
  console.log("Enjoy your sandwich!\n");
}
console.log(makeSandwich("Cheese", "Mayo"));
console.log(makeSandwich("Lattice", "Cabbage", "Finger Fish"));
console.log(makeSandwich("Peanut Butter"));
console.log(hr);
// Question 45
console.log("Question No.45 :");
function createCar(manufacturer, modelName, ...options) {
  var car = {
    manufacturer: manufacturer,
    model: modelName,
  };
  for (var i = 0; i < options.length; i += 2) {
    var key = options[i];
    var value = options[i + 1];
    car[key] = value;
  }
  return car;
}
var myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
console.log(myCar);
console.log(hr);
