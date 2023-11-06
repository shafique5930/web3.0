// Question 2
// . Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,would you like to learn some Python today?”
const hr = '*'.repeat(70)
let PersonalName = 'Muhammad Shafique'
console.log(hr)
console.log('Question No. 2:')
console.log(`Hello ${PersonalName},would you like to learn some Python today?`)
console.log(hr)
// Question 3
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Myname = 'muhammad Imran'
console.log('Question No. 3:')
console.log(Myname.toUpperCase())
console.log(Myname.toLowerCase())
function titleCase(string) {
    return string.toLowerCase().split(" ").reduce((a, x) =>
        a + "" + (x.charAt(0).toUpperCase() + x.slice(1) + " "), '');
}
console.log(titleCase(Myname));
console.log(hr)
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Question No. 4:')
let Quote = `Hazrat Muhammad (PBUH) said, "The strong person is not the one who can wrestle someone else down. The strong person"`
console.log(Quote)
console.log(hr)
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log('Question No. 5:')
let famous_person = 'Hazrat Muhammad SAW'
let message = `The strong person is not the one who can wrestle someone else down. The strong person ('Hazrat Muhammad SAW')`
console.log(`${famous_person} once said, "${message}"`)
console.log(hr)
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log('Question No. 6:')
let raw_name = '\tMuhammad   Kamran   '
console.log(raw_name)
let strip_name = raw_name.trim()
console.log(strip_name)
console.log(hr)
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
console.log('Question No. 7:')
console.log(12-4);
console.log(2*4);
console.log(4+4);
console.log(16/2);
console.log(hr)
// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.
console.log('Question No. 8:')
let sepeartor = '-'
console.log(sepeartor.repeat(50))
console.log('console.log(5+3)')
console.log(sepeartor.repeat(50))
console.log(hr)
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log('Question No. 9:')
let favNum = 5930;
let favNummsg = `Your favourite Number is ${favNum}`;
console.log(favNummsg)
console.log(hr)
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log('Question No. 10:')
// I am also adding comments in this file
console.log('The output is in comment form and not displaying in this terminal')
console.log(hr)
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log('Question No. 11:')
const names = ['Fakhar', 'Babar', 'Rizwan', 'Umar']
for (index in names){
    console.log(names[index])
}
console.log(hr)
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log('Question No. 12:')
for (i in names){
    console.log(`Welcome my dear friend ${names[i]}`)
}
console.log(hr)
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log('Question No. 13:')
const myTpt = ['Honda M/C']
const myHondaList = ['I would like to drive Honda M/C', 'I love Honda M/C']
for (tpt in myTpt){
    console.log(myTpt[tpt])    
    for (list in myHondaList){
    console.log(myHondaList[list])
    }

} 
console.log(hr)
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

console.log('Question No. 14:')
const guestList = ['Muhammad', 'Aiman', 'Bushra']
function sendInvitations(){
for (invitee in guestList){
    console.log(`Dear ${guestList[invitee]}, i would like to invite you on occassion of annual dinner at my farmhouse located at ..`)
    console.log('.'.repeat(15))
}}
sendInvitations()
console.log(hr)
console.log('Question No. 15:')
// Replaceing the guest who could not attend the dinner.
guestList[2]='Maham'
sendInvitations()
console.log(hr)
console.log('Question No. 16:')
guestList.push('Kubra')
guestList.unshift('Isfian')
console.log('After adding more invitees the list of invitees')
sendInvitations()
console.log(hr)
console.log('Question No. 17:')
console.log('I have shortage of tables and can only manage/ invite only two people for dinner.')
function trimInvitees(){
    let cancelInvitation=[]
    for (x in guestList)
    {
    if (guestList.length>2){
    cancelInvitation.push(guestList.pop())
 }   
}
// Send message to invitees that i can not manage the tables 
 for (n in cancelInvitation){
    console.log(`Sorry my dear ${cancelInvitation[n]}, i can not invite you due to non aval of tables`)
 }  
}
// trim the list and send letters to the extra members who could not be invited due to non aval of tables 
 trimInvitees()
//  send invitations to remaning members of the team
console.log('Sending invitations again..............')
sendInvitations()
console.log(hr)

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
console.log('Question No. 18:')
let favPlaces = ['Zhob', 'Islamabad', 'Banu', 'Murree', 'Karachi', 'Dubai']
console.log('Original Arr')
console.log(favPlaces)
let SortedArr = favPlaces.sort()
console.log('Sorted')
console.log(SortedArr)
let revArr = favPlaces.reverse()
console.log('Reversed')
console.log(revArr)
console.log('Original Arr')
console.log(favPlaces)
console.log(hr)

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log('Question No. 19 :')
console.log(`I am inviting total ${guestList.length}x guests`)
console.log(hr)
console.log('Question No. 20 :')

let countries = ["United States", "Canada", "United Kingdom", "France", "Germany", "Japan", "Australia"];
console.log("List of Countries:");
for (i in countries) {
  console.log(countries[i]);
}
console.log(hr)
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
console.log('Question No. 25 :')
let AlienColor = 'red';
if (AlienColor == 'green'){
    console.log('The player have just earned 5 points')
}
AlienColor = 'Green';
if (AlienColor == 'green'){
    console.log('The player have just earned 5 points')
} else {
    console.log('The player have just earned 10 points')
} 

if (AlienColor == 'green'){
    console.log('The player have just earned 5 points')
} else if (AlienColor == 'Yellow'){
    console.log('The player have just earned 10 points')
}
 else if (AlienColor == 'Red'){
    console.log('The player have just earned 15 points')
}
console.log(hr)
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

console.log('Question No. 21 :')

console.log(hr)
console.log('Question No. 28 :')
let personStage = 2;
if (personStage<=2){
  console.log('the person is a baby')  
}
else if (personStage==4 && personStage<13){
console.log('the person is a kids')
}
else if (personStage==13 && personStage<20){
    console.log('the person is a teenager')}
else if (personStage==20 && personStage<65){
console.log('the person is a adult')}
else if (personStage>= 65){
console.log('the person is a elder')}
console.log(hr)

// 

console.log('Question No. 29 :')
let fruitsList = ['apple', 'orange', 'mango', 'banana', 'grapes', 'kiwi']
let fav_fruits = ['apple', 'orange', 'mango', 'kiwi' ]
for (fruit in fruitsList){
    for (fav in fav_fruits){
        if (fruitsList[fruit] == fav_fruits[fav]){
            console.log(`Your really liked ${fruitsList[fruit]}`)
        }
    }
}
console.log(hr)
//  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
console.log('Question No. 30 :') 
let userName = ['shafique5930', 'hassan25', 'arif809', 'saleem67', 'babar320', 'admin']
for (user in userName){
    if (userName[user].length<=0){
        console.log('we need to find some users')
    }
    else if (userName[user]=='admin'){
        console.log(`Hello ${userName[user]}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${userName[user]}, thank you for logging in again`)
    }
}
console.log(hr)
console.log('Question No. 31 :') 
if (userName.length==0){
    console.log('We find some more users')
}
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

console.log('Question No. 32 :') 
const current_users = ['shafique5930','babar320', 'admin']
const new_users = ['shafique5930',  'saifi']
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
let userNameAval = true
for (nuser in new_users){
    for (user in current_users){
if (new_users[user]== current_users[user]){
    userNameAval = false
} 
else {
    console.log(`Welcome ${new_users[user]}`)
    }
}      
    }
    console.log(`${current_users[user]} has already been used, please select new user name`)
console.log(hr)
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. 

// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
console.log('Question No.33 :') 
const ordinalNumber = []
// • Store the numbers 1 through 9 in a array.
for (i=1; i<=9; i++){
    ordinalNumber.push(i)
}
// • Loop through the array.
for (num in ordinalNumber){
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
if (ordinalNumber[num]<=2){
    console.log(`${ordinalNumber[num]}st`)
}
else if (ordinalNumber[num] == 3){
    console.log(`${ordinalNumber[num]}rd`)
}
else {
    console.log(`${ordinalNumber[num]}th`)
}
}
console.log(hr)
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
console.log('Question No. 34:') 
const pizzaVariety = ['Chicken Tikka', 'Fajita', 'Smoky Grill']
for (pizza in pizzaVariety){
    console.log(pizzaVariety[pizza])
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (pizza in pizzaVariety){
    console.log(`I like ${pizzaVariety[pizza]} pizza flavour`)
}

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log('I like pizza and i mostly visits Cheezious pizza \n for best and delicious pizza. They have many variety \nand flavours and i really loved their pizza')
console.log(hr)
// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log('Question No.35 :') 
const animals = ["Dog", "Cat", "Rabbit"];
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
console.log(hr)

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log('Question No.36 :') 
function make_shirt(size, textMsg){
return `Hello sir your shirt size is ${size} and your desired message is "${textMsg}"`
}
console.log(make_shirt('Large', 'I love Pakistan!'))
console.log(hr)
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log('Question No.37 :') 
function make_shirt(size = 'Large' && 'Medium', textMsg){
    if (size == 'Large' || size == 'Medium'){
        return `Hello sir your shirt size is ${size} and your desired message is "I love TypeScript"`
    }
     else {
        return `Hello sir your shirt size is ${size} and your desired message is "${textMsg}"`
    }
     }
    console.log(make_shirt('Large', 'I love Pakistan!'))
    console.log(make_shirt('small', 'Type script is a great programming Language!'))
    console.log(hr)
// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log('Question No. 38 :') 
function describe_city(city, country='Pakistan'){
return `${city} is in ${country}`
}
console.log(describe_city('Multan'))
console.log(describe_city('Faisalabad'))
console.log(describe_city('New York', 'USA'))
console.log(hr)
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log('Question No.39 :') 
function city_country(city, country){
return `"${city}, ${country}"`
}
console.log(city_country('Islamabad', 'Pakistan'))
console.log(hr)
// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log('Question No.40 :') 
function make_album(artist, title, tracks) {
    let album = {
      artist: artist,
      title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
      }
    
    return album;
  }
let album1 = make_album("Artist1", "Album 1");
let album2 = make_album("Artist2", "Album 2", 4);
let album3 = make_album("Artist3", "Album 3");
console.log(album1)
console.log(album2)
console.log(album3)
console.log(hr)
  


console.log('Question No.41 :') 
let Magicians = ['Umroo', 'Hamoon']
function show_magicians(arr){
    for (i in arr){
        console.log(arr[i])
    }
}
console.log(show_magicians(Magicians))
console.log(hr)
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log('Question No.42 :') 
function make_great(magicinas){
for (let i=0; i<magicinas.length; i++){
    magicinas[i]= "The Great " + magicinas[i]
}
}
console.log('No output - just changed the original Array of Magicians')
console.log(hr)
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log('Question No.43:') 
console.log(show_magicians(Magicians))
let cp_magicians = Magicians
make_great(cp_magicians)
console.log(cp_magicians)
console.log(hr)
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

console.log('Question No.44 :') 
function makeSandwich(...items) {
    console.log("Sandwich order:");
    for (i in items) {
      console.log("* " + items[i]);
    }
    console.log("Enjoy your sandwich!\n");
  }
  console.log(makeSandwich( "Cheese", "Mayo"));
  console.log(makeSandwich("Lattice", "Cabbage", "Finger Fish"));
  console.log(makeSandwich("Peanut Butter"));
  console.log(hr)

  console.log('Question No.45 :') 
  function createCar(manufacturer, modelName, ...options) {
    var car = {
      manufacturer: manufacturer,
      model: modelName
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
  console.log(hr)