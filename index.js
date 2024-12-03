// ##1
var arr=["Alice", "Bob", "Charlie", "David"];
arr.unshift("deepika")
arr.pop()
arr.includes("Bob")
console.log(arr)

// ##2
var arr="Learn,Practice,Improve";
var i= arr.split(",");
console.log(i);
var j= i.reverse();
console.log(j)
 var k =j.join(" ")
console.log(k)
 



// ## 3 create a playlist

var a=["Song1", "Song2", "Song3"];
var b=["Song4", "Song5"];
var c=a.concat(b);
c.shift();
c.push("song6");
console.log(c)


// ##5 Extract Favorite Movies

var d=["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
var e=d.slice(1,4);
var f=e.concat(["The Matrix", "The Godfather"]);
console.log(f.reverse())


// ##String Operations on Names

var g="John,Doe,Jane,Smith";
var h=g.split(",");
h.includes("Jane")
j= h.join(",")
console.log(h.reverse())
console.log(j)


// ## Length-Based Manipulation
var de=[1, 2, 3, 4, 5];
de.shift();
de.push(6,7)
console.log(de.length)
console.log(de)

// ##9 Shopping Cart Operations
var x=["Milk", "Bread", "Eggs", "Butter"];
if(x.includes("Eggs")){
    x.pop();
    x.push("cheese","Juice");
    console.log(x)
}else{
    console.log("Items are not matched")
}

// ##10 Rearrange and Combine Names
var y=["Alice", "Bob", "Charlie"];
y.reverse()
n=y.unshift("FRank")
var z=["David", "Eve"]
var x=n.concat(z)
console.log(x)


// ##11 
var v=["Milk", "Bread", "Eggs", "Butter"];
v.indexOf("Eggs")
v.unshift("juice")
v[3]="chesee"
console.log(v)




// 1 Write a code snippet to find the length of an array.
var w=[1,2,3,4,5]
console.log(w.length)


// 2 How do you add an element to the end of an array?
var o=[1,2,3,4,5,6]
console.log(o.push(7)) 
console.log(o)

// 3 How do you delete an element to the end of an array?
var p=[1,2,3,4,5,6]
console.log(p.pop())
console.log(p)

// 4 How do you add an element at the beging of an array?
var p=[1,2,3,4,5]
console.log(p.unshift(6))
console.log(p)

// 5 How can you remove the first element from an array?
var p=[1,2,3,4,5]
console.log(p.shift())
console.log(p)

// 6 How do you reverse the elements in an array?
var p=[1,2,3,4,5]
console.log(p.reverse())
console.log(p)

// 7 How can you find the index of a specific value in an array?
var p=[1,2,3,4,5]
console.log(p.indexOf(3))
console.log(p)


// 8 How can you check if a certain value exists in an array?
var p=[1,2,3,4,5]
console.log(p.includes(3))

// 9 How can you sort the elements of an array in ascending order?
var arr=[45,60,30,10,40]
console.log(arr.sort())


// 10 How can you convert an array to a string using commas as separators?
var arr=[20,30,40]
console.log(arr.join(""))


// Write a code snippet that adds an element to the end of an array, then removes the first element.

var arr=[20,30,40,50]
arr.push(60)
arr.shift()
console.log(arr)


// How can you reverse an array and then join the elements into a string?
var arr=[20,25,30,35,40]
arr.reverse()
console.log(arr.join(""))


// Write a code that first sorts an array in ascending order, then removes the last element.
var arr=[30,10,40,20]
arr.sort()
console.log(arr.pop())
console.log(arr)


// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var arr=[20,30,40]
arr.unshift(25,45)
arr.shift()
console.log(arr.length)


// How do you combine two arrays, sort the combined array, and then remove the last element?
var arr1=[20,30,15]
var arr2=[1,2,7,4]
var arr3=arr1.concat(arr2)
console.log(arr3)
console.log(arr3.sort())
console.log(arr3.pop())
console.log(arr3)
