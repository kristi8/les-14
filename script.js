// 1

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

// 2

let names = [ 'eka', 'maka', 'mari', 'saba', 'gaga'];

for(let i=0; i< names.length; i++){
    console.log(names[i]);
};

let y = 0;
while (y < names.length){
    console.log(names[y]);
    y++;
};

// 3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i=0; i<numbers.length; i++){
   if (numbers[i]>5)  {
    console.log(numbers[i]);
   }
};
// 4

let user2 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
if (user2.age < 18 && user2.studentstatus === "active") {
    console.log("hello");
} else if (user2.name === "levan") {
    console.log("hello levan");
} else if (user2.studentstatus === "active" && user2.age < 25) {
    console.log("hello world");
} else {
    console.log("error");
}
// 5
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
        if (array[i][x] > 0) {
            console.log(array[i][x]);
        }
    }
};



// 6
let array2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// ლუწი
for (let x of array2) {
    if (x % 2 == 0){
        console.log(x);
    }

    // კენტი
} for (let x of array2)
{
    if (x % 2 == 1){
        console.log(x);
    }
}


// 10
let array3 = [1,2,4,10,34,5,7,87]
for(let item of array3){
    if ( item > 0  &&  item < 10){
        console.log(item);
    }
}



// 11
let numbers2 =[1,2,3,4,5,6,7,8,9,10];

for( let item of numbers2){
    if (item === 5){
       break;
    }
    console.log(item);
}
