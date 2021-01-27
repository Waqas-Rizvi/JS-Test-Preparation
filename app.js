//alert("Hello World");

// console.log("Hello World");

// document.write("Hello World");

//  var a = 5;
//  var b = 10;
//  var c = a+b;
//  alert(c);

// var x = 10;
// var y = "ali";
// var z = x + y;
// alert(z);

// var f = "ali";
// var g = "mughal";
// var h = f + " "+ g;
// alert(h);


// var a = 5;
// var b = "10";
// var c = a+b;
// alert(c);

// var a = 5;
// var b = "10";
// var c = a/b;
// alert(c);

// var x;
// x = 15;

// var g = 22/(5+6)*3;
// alert(g);

// var a = 12;
// var b = 3;
// var c = a % 3;
// alert(c);


// var a = 5;
// var b = a--;
// alert(b);


// a++;
// a=a+1;
// a+=1;


// var x = 5;
// var y = x++ + x - --x + x-- + x - x++ + ++x - x;
// alert(y);


// var f = 10;
// var g = f + --f - --f + f-- + ++f - f + f + ++f - --f;
// alert(g);

// var a = +prompt("Enter your value","Your value is:");
// var b = 10;
// var c = a+b;
// alert(c)


// var marks = 80;
// var grade;

// if (marks < 50){
//     grade = "70%";
//     alert(grade);
// }



// var age = 15

// if (age > 18) {
//     alert('User Allowed In Stadium')
// } else if (age > 10) {
//     alert('This user is under 18 and not allowed')
// }

// var gender = prompt("Enter your gender");
// var age = +prompt("Enter your age");
// if(gender == "male" || age > 18){
//     alert("Allow for ride")
// }
// else{
//     alert("Not Allowed")
// }

// var x = 5;
// if(x !== "5"){
//     alert("True")
// }
// else{
//     alert("False");
// }


// var age = 20;
// var gender = "male";
// var height = "6";
// if(age > 15 && gender == "male" || height > 6.4){
//     alert("Eligible for Air Hostess")
// }
// else{
//     alert("not eligible");
// }


// var per = prompt("Enter your Percentage");
// if(per <=100 && per >= 80 ){
//     alert("A+")
// }
// else if(per < 80 && per >= 70){
//     alert("A")
// }
// else if(per < 70 && per >= 60){
//     alert("B")
// }
// else if(per < 60 && per >= 50){
//     alert("C")
// }
// else if(per < 50 && per >= 40){
//     alert("D")
// }
// else if(per < 40 && per >= 33){
//     alert("E")
// }
// else if(per < 33 && per >= 0){
//     alert("Fail");
// }
// else{
//     alert("You have inserted wrong percentage")
// }


// var x = 3;
// var y = 3;
// var a = 5;
// var b = 6;
// var c = 4;
// var d = 4;
// var g;
// var e;
// var h = 8;
// var f = 7;
// if ((x === y || a === b) && c === d) {
//     g = h;
//     alert(g);
// }
// else {
//     e = f;
//     alert(e);
// }


// var name1 = "Ali";
// var name2 = "Ahmed";
// var name3 = "Samad";
// var name4 = "Ayesha";
// var name5 = "Qaser";
// var name6 = "Ariba";
// document.write(name1 + "<br>" + name2 + "<br>" + name3);


// var names =["Ali","Ahmed","Samad","Ayesha"];
// console.log(names);


// var name = new Array("Sharjeel","Waqas","Qaiser");

// console.log(name);

// alert('sdhgf')

// var a =[[0,1,3,4],[0,1,3,4],[0,1,3,4]]
// var b = 4
// for(var i=0; i<b; i++){
//     document.write(a[i]+'<br />')
// }



// var a = ['karachi', 'lahore']
// var flag = false
// var b = prompt('city')
// for(var i =0; i<a.length; i++){
//     if(b == a[i]){
//         alert('found')
//         flag = true
//         break
//     }else{
//         flag = false
//     }
// }
// if(flag == false){
//     document.write('false')
// }

//var pera = 'Lorem ipsum dolor sit amet consectetur adipisicing dolor. Placeat unde vitae eum voluptas Areeba reprehenderit corporiscumque, samad tenetur vel sunt porro officiis cupiditate veritatis est architecto earum ducimus laboriosam consectetur!'

//charAt(index Number)
//indexOf(word)
//replace(word,second word)
//replace(/word/g,second word)
//var text = pera.replace('Areeba','Areesha')
//console.log(text)

// for (var a = 0; a < pera.length; a++) {
//     console.log(pera[a])
//     if (pera.slice(a, a + 6) === 'Areeba') {
//         var b = pera.slice(a, a + 6)
//         // alert(a)
//         alert(b)
//         var starting = pera.slice(0, a)
//         var myWord = 'Areesha'
//         var ending = pera.slice(a + 6)

//         var final = starting + myWord + ending
//         document.write(final)
//     }
// }

// var a = prompt("Enter city")
// a = a.toLowerCase()
// var b = ["karachi", "lahore"]
// for(c = 0; c < b.length; a++){
//     if(a === b [c]){
//         alert("welcome")
//     }
// }


//"Revision"

// var items = ["cake", "chips", "cookies"]
// var write = prompt("Enter item")
// var matchfound = false
// for(a = 0; a < items.length; a++){
//     if(write === items [a]){
//         matchfound = true
//         alert("Availabe")
//     }
// }
// if(matchfound === false){
//     alert("Not available")
// }

// var items = ["cake", "chips", "cookies"]
// var write = prompt("Enter item")
// write = write.toLowerCase()
// var matchfound = false
// for(a = 0; a < items.length; a++){
//     if(write === items [a]){
//         matchfound = true
//         alert("Availabe")
//     }
// }
// if(matchfound === false){
//     alert("Not available")
// }

// var items = ["Cake", "Chips", "Cookies"]
// var write = prompt("Enter item")
// first = write.slice(0,1)
// first = first.toUpperCase()
// other = write.slice(1)
// other = other.toLowerCase()
// var combine = first + other
// var matchfound = false
// for(a = 0; a < items.length; a++){
//     if(combine === items [a]){
//         matchfound = true
//         alert("Availabe")
//     }
// }
// if(matchfound === false){
//     alert("Not available")
// }

// var pera = ("My name is Waqas Altaf")
// var index = pera.indexOf("Waqas")
// if(index !== -1){
//     pera = pera.slice(0, index) + "Hassan" + pera.slice(index + 5)
// }
// alert(pera)

// var pera = ("My name is Waqas Altaf")
// var replace = pera.replace("Waqas", "Hassan")
// alert(replace)

/*var pera = ("My name is Waqas Altaf Waqas")
pera = pera.replace("Waqas", "Hassan")
alert(pera)*/

// a = "w"
// a = "s"
// alert(a)

// var a
// a = 56
// alert(a)

// var b = (2 * 4) * (4 + 2);
// alert(b)

// alert("dsad" + (2 + 2))

// var h = prompt("rewr", "rewrew")
// alert(h)

// var f = +prompt("w")
// alert(f + 2)


//"Preparation of Test Chap#01-55"

// var a = "Waqas"
// a = "Hamza"
// alert(a)

// var a = 12
// a = a + 5
// alert(a)

// var a = 2
// alert(a + 6)

// var a = 2
// var b = a++ + 2 + --a + a
// //      2   + 2 +   2 + 2
// alert(b)

// var a = 2 + 3 * (6 / 3)
// alert(a)

// var a = "Waqas"
// alert("My name is " + a + " Altaf")

// var a = Math.random()
// var c = a * 3
// var d = Math.ceil(c)
// var b = +prompt("Guess a number")
// if(d == b){
//     alert("Correct Answer")
// } else if(b > 3){
//     alert("Write 1 to 3 Number")
// } else {
//     alert("Wrong Answer")
// }

// var a = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
// var b = a[2]
// alert(b)

// var a = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
// var b = ['sun', 'mon','thurs', 'fri', 'sat']
// // a.pop()
// // a.shift()
// // a.push("saturday")
// // a.unshift('Sunday')
// // b.splice(2,0,'tue', 'wed')
// var c = a.slice(1,6)
// alert(c)

// var a = ['cakes', 'drinks', 'burgers']
// var b = prompt('Enter name')
// for (c = 0; c <= 3; c++) {
//     if (b === a[c]) {
//         alert("Available")
//     }
// }

// var a = ['cakes', 'drinks', 'burgers']
// var b = prompt('Enter name')
// var match = "false"
// for (c = 0; c <= 3; c++) {
//     if (b === a[c]) {
//         match = "true"
//         alert("Available")
//         break
//     }
// }
// if (match === "false") {
//     alert("Not available")
// }

// var text = "My name is Waqas"
// var lower = text.toLowerCase()
// var upper = text.toUpperCase()
// var index = text.indexOf("name")
// var slice = text.slice((index + 4), 16)
// var first = text.slice(index, 7)
// var cap = first.slice(0,1).toUpperCase()
// var small = first.slice(1).toLowerCase()
// var comp = text.slice(0, index) + cap + small + slice
// alert(comp)

// var text = "My name is Waqas Altaf"
// var index = text.indexOf("Waqas")
// alert(text)
// if(index !== -1){
//     text = text.slice(0, index) + "Hassan" + text.slice((index + 5))
// } else {}

// var text = "My name is Waqas Altaf"
// var replace = text.replace("Waqas", "Hassan")
// alert(replace)

// var text = "My name is Waqas Altaf"
// var char = text.charAt(3)
// alert(char)

// var text = "To be or not to be"
// var index = text.lastIndexOf("be")
// alert(index)

// var text = "To be or not to be"
// var replace = text.replace(/be/g, "a")
// alert(replace)

// var num = +prompt()
// var round = Math.round(num)
// var ceil = Math.ceil(num)
// var floor = Math.floor(num)
// document.write(round + " " + ceil + " " + floor) 

// var random = Math.random()
// var num = random * 10
// var ceil = Math.ceil(num)
// alert(ceil)

// var a = "15.5"
// var d = parseFloat(a)
// var b = 15
// var c = d + b
// alert(c)

// var a = "15"
// var d = parseInt(a)
// var b = 15
// var c = d + b
// alert(c)

// var a = "15.3"
// var d = Number(a)
// var b = 15
// var c = d + b
// alert(c)

// var a = 15
// var b = 14
// var d = b.toString() 
// var c = a + d
// alert(c)

// var a = 15
// var b = 14
// var c = a / b
// var d = c.toFixed(2) 
// alert(d)

// var a = new Date()
// var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"]
// var b = a.getDay()
// alert(days[b])

// var a = new Date()
// a.setFullYear(1998)
// a.setMonth(8)
// a.setDate(19)
// var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"]
// var b = a.getDay()
// alert(days[b])

// function add(a, b){
//     alert(a + b)
// }
// add(8, 3)

// var day = "sun"
// switch (day) {
//     case "sun":
//         alert("waqas")
//         break
//     default:
//         alert("hamza")
// }

// var i = 1
// while (i < 5) {
//     alert(i)
//     i++
// }

// var i = 1
// do {
//     alert(i)
//     i++
//     alert(i)
// } while (i < 5)

// function more(){
//     var a = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ducimus obcaecati, impedit adipisci soluta, sapiente asperiores nostrum fuga quam architecto quis quos blanditiis laborum, dolores sunt labore dignissimos aliquid culpa?"
//     document.getElementById("pera").innerHTML = a
// }

// function invisible(){
//     document.getElementById("image").className = " hidden"
// }

// function swap(){
//     document.getElementById("image").src = "Images/Image 02.jpg"
// }

// function swap2(){
//     document.getElementById("image").src = "Images/Image 01.jpeg"
// }

// function swap(a){
//     document.getElementById("image").src = a
// }

// function swap2(a){
//     document.getElementById("image").src = a
// }

// function size(){
//     document.getElementById("name").style.fontSize = "32px"
// }

// function size2(){
//     document.getElementById("name").style.fontSize = "16px"
// }

