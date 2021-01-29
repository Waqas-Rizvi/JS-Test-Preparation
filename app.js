//"Preparation of Test Chap#01-57"

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
// for (c = 0; c < 3; c++) {
//     if (b === a[c]) {
//         alert("Available")
//     }
// }

// var a = ['cakes', 'drinks', 'burgers']
// var b = prompt('Enter name')
// var match = "false"
// for (c = 0; c < 3; c++) {
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
// if (index !== -1) {
//     text = text.slice(0, index) + "Hassan" + text.slice((index + 5))
// } else { }
// alert(text)

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

