/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

let bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];

  /*// adds a book
  const addBook = (name, author) => {
    bookList.push({title: name, author: author});
  }

  addBook("Red Queen", "Victoria Aveyard");
  console.log(bookList);
  
  // removes a book
  const removeBook = (name, author) => {
    (bookList = bookList.filter((book) => book.title != name && book.author != author));
  }

  removeBook("Red Queen", "Victoria Aveyard");
  console.log(bookList);

  // prints out the titles in the books list
  const books = () => {
    bookList.forEach((book) => console.log(book.title));
  }

  books();
  /* Intermediate Challenge */
  
  /* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
    number is positive or negative using a ternary operator (assume the number will never be zero) */
  /*const numCheck = num => {

  }*/
  
  /* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
    the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
  
  /* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */
  const numSum = num => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

  //console.log(numSum(7));
  /* Harder Challenge */
  
  /* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
      me what I should wear accordingly */
  const celFah = degree => {
    let fahren = (((9/5) * degree) + 32);

    if (fahren < 50) {
      console.log("Wear a heavy jacket")
    }
    else if (fahren < 60) {
      console.log("Wear a sweater")
    }
    else if (fahren < 70) {
      console.log("Wear a light jacket")
    }
    else {
      console.log("It's a hot day, dress light!")
    }
  }

  //celFah(16);
  /* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
    using .forEach() */
  const truthCheck = arr => {
    arr.forEach(element => { if (element) {
      console.log(element);
    } 
    });
  }
  const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
  //truthCheck(exampleArray);
  
  /* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */
  
  const attendance = [
    { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
    { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
    { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
    { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
    { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
    { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
    { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
  ];
  
  /* Hardest Challenge (Don't do this without completing harder challenges) */
  
  /* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
      an array of the path you took to make it equal four
      ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
      For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
  
  // assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
  // does not support leading zeros