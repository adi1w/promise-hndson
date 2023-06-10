//A1//

function calculate(num1, num2) {
    return num1 * num2
}
console.log(calculate(20, 30))

//A2//

function printNumbersWithDelay() {
    let number = 1;

    function printNumber() {
        console.log(number);

        if (number < 7) {
            number++;
            setTimeout(printNumber, number * 1000);
        }
    }

    printNumber();
}

printNumbersWithDelay();

//A3//

function printNumbersWithDelay() {
    let number = 1;

    function printNumberWithDelay(num) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(num);
                resolve();
            }, num * 1000);
        });
    }

    function printSequentially() {
        if (number <= 7) {
            printNumberWithDelay(number)
                .then(() => {
                    number++;
                    printSequentially();
                });
        }
    }

    printSequentially();
}

printNumbersWithDelay();


//A4//
function checkArgument(arg) {
    return new Promise((resolve, reject) => {
        if (arg === "yes") {
            resolve("Promise Resolved");
        } else {
            reject(new Error("Promise Rejected"));
        }
    });
}

checkArgument("yes")
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));

checkArgument()
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));

checkArgument("no")
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));

//A5.//

///basic callback function//
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);



//asynchronouss function// 
function fetchData(callback) {
    setTimeout(function () {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Name:", data.name);
    console.log("Age:", data.age);
}

fetchData(processData);

//high order function//
function calculate(num1, num2, operation, callback) {
    let result;
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else {
        result = "Invalid operation";
    }
    callback(result);
}

function logResult(result) {
    console.log("Result:", result);
}

calculate(5, 3, "add", logResult);
calculate(10, 4, "subtract", logResult);
calculate(2, 7, "multiply", logResult);

///A6///

setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
            setTimeout(() => {
                console.log("4");
                setTimeout(() => {
                    console.log("5");
                    setTimeout(() => {
                        console.log("6");
                        setTimeout(() => {
                            console.log("7");
                        }, 7000)
                    }, 6000)
                }, 5000)
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000)


//A7//

///BASIC PROMISE///
function fetchUserData() {
    return new Promise(function (resolve, reject) {
        // Simulating an asynchronous operation
        setTimeout(function () {
            const userData = { name: "Alice", age: 25 };
            resolve(userData);
        }, 2000);
    });
}

fetchUserData()
    .then(function (userData) {
        console.log("User Data:", userData);
    })
    .catch(function (error) {
        console.error("Error:", error);
    });

///CHAINING PROMISE//
function getUserData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const userId = 123;
            resolve(userId);
        }, 2000);
    });
}

function fetchUserDetails(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const userDetails = { name: "Alice", age: 25 };
            resolve(userDetails);
        }, 2000);
    });
}

getUserData()
    .then(function (userId) {
        return fetchUserDetails(userId);
    })
    .then(function (userDetails) {
        console.log("User Details:", userDetails);
    })
    .catch(function (error) {
        console.error("Error:", error);
    });


//A8//

// basic await//
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
    await delay(1000);
    console.log("Hello!");
}

async function run() {
    console.log("Before greeting...");
    await greet();
    console.log("After greeting...");
}

run();



// error handling with async//
function performAsyncOperation() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                resolve(randomNum);
            } else {
                reject(new Error("Operation failed."));
            }
        }, 2000);
    });
}

async function run() {
    try {
        const result = await performAsyncOperation();
        console.log("Operation successful. Result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

run();

//A9//
   
 ///BASIC PROMISE ALL///
function fetchData(url) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const data = { url: url, value: Math.random() };
        resolve(data);
      }, Math.random() * 2000);
    });
  }
  
  const promises = [
    fetchData("https://api.example.com/data1"),
    fetchData("https://api.example.com/data2"),
    fetchData("https://api.example.com/data3")
  ];
  
  Promise.all(promises)
    .then(function(results) {
      console.log("Results:", results);
    })
    .catch(function(error) {
      console.error("Error:", error);
    });


/// Combining promise of diffrnt types .////
    function fetchUser() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            const user = { name: "Alice" };
            resolve(user);
          }, 1000);
        });
      }
      
      function fetchPosts() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            const posts = ["Post 1", "Post 2", "Post 3"];
            resolve(posts);
          }, 2000);
        });
      }
      
      function fetchComments() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            const comments = ["Comment 1", "Comment 2"];
            resolve(comments);
          }, 1500);
        });
      }
      
      Promise.all([fetchUser(), fetchPosts(), fetchComments()])
        .then(function(results) {
          const user = results[0];
          const posts = results[1];
          const comments = results[2];
          console.log("User:", user);
          console.log("Posts:", posts);
          console.log("Comments:", comments);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
      
  



