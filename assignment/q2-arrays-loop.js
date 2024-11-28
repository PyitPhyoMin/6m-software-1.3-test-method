/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = [
  "Johnson",
  "Christina",
  "Michael",
  "Lina",
  "Larry",
  "Michelle",
  "Bob",
  "Wilson",
];

function printStudentNames() {
  // Add code here

  //Iterate the student list array and print the names.[PhyoMin]
  for (let i = 0; i < studentList.length; i++) {
    console.log(`Printing student name ${i + 1}: ${studentList[i]}`);
  }
}

printStudentNames();

// Ignore the code below this line
module.exports = {
  studentList,
  printStudentNames
}
