// function callback() {
//     console.log("콜백 함수가 호출됨");
// }
// setTimeout(callback, 1000);
// console.log("작업을 수행함")

// function getUsers(callback) {
//     let users = [];
//     setTimeout (() => {
//         callback([
//             {name: "Kim", email: "Kim@gamil.com"},
//             {name: "Lee", email: "Lee@gamil.com"},
//             {name: "Park", email: "Park@gamil.com"},
//         ]);
//     }, 1000)
// }

// function findUser(name, callback){
//     getUsers (users => {
//         const user = users.find(user => user.name === name);
//         callback(user, email);
//     });
// }
// let user = findUser("Kim", user => {
//     console.log(user);
// });

// let greeting = document.querySelector('#greeting');
// greeting.addEventListener("click", sayHello);
// function sayHello() {
//     alert("안녕하세요");
// }


// let success = true;
// function getUser() {
//     return new Promise((resolve, reject) => {
//         if (success) {
//             setTimeout(() => {
//                 resolve(
//                     [
//                         {name: "Kim", email: "Kim@gamil.com"},
//                         {name: "Lee", email: "Lee@gamil.com"},
//                         {name: "Park", email: "Park@gamil.com"},
//                     ]
//                 )
//             }, 1000);
//         } else {
//             reject("실패");
//         }
       
//     })
// }
// let promise = getUser();
// promise.then(users.find(user => user.name === "Kim"))
// .then(users => console.log(user.email))
// .catch(error => console.log(error))
// .finally(() => console.log("작업완료"));


// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => resolve(30), 3000));
// let promises = [p1, p2, p3]

// Promise.all(promises)
// .then(results => {
//     const total = results.reduce((s, r) => s + r);
//     console.log(`결과: ${results}`);
//     console.log(`합계: ${total}`)
// });

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject("실패함"), 3000));
// let promises = [p1, p2, p3]

// Promise.allSettled(promises)
// .then(results => {
//     const fulfilledResults = results
//     .filter(results => results.status === "fulfilled")
//     .map(results => results.value);
//     const total = fulfilledResults.reduce((sum, value) => sum + value, 0);
//     console.log(`결과: ${fulfilledResults}`);
//     console.log(`합계: ${total}`)
// });

// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {name: "Kim", email: "Kim@gamil.com"},
//                 {name: "Lee", email: "Lee@gamil.com"},
//                 {name: "Park", email: "Park@gamil.com"}
//             ])
//         }, 2000);
//     });
// }
// function findUser(users) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(users.find(user => user.name === "Kim"))
//         }, 1000);
//     });
// }
// function getEmail(user) {
//     return new Promise((resolve, reject) => {
//         console.log(user);
//         setTimeout(() => {
//             resolve(user.email);
//         }, 3000);
//     });
// }
// getUser()
// .then(findUser)
// .then(getEmail)
// .then(console.log)

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("A") 
//     },1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("B")
//     }, 2000);
// });
// let promises = [p1, p2]
// Promise.allSettled(promises)
// .then(results => {
//     console.log("완료!", results);
// })


// let success = true;
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(success){
//             resolve(5)
//         } else (
//             reject("에러!")
//         )
//     }, 1000)
// });
// Promise.then(
//     num => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(5*1.5)
//             }, 1500)
//         });
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });



// let sayHello = async ()=> "안녕";
// sayHello()
// .then(console.log)

// class Greeter {
//     async sayHello() {
//         return '안녕'
//     }
// }
// const greeter = new Greeter();
// greeter.sayHello()
// .then(console.log)

// async function sayHello() {
//     return Promise.resolve("안녕");
// }
// sayHello()
// .then(console.log);

// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("안녕"), 1000);
//     })
// }
// sayHello()
// .then(console.log)

// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("거부"), 1000);
//     })
// }
// async function display() {
//     try{
//         let result = await sayHello();
//         console.log(result);
//     } catch(e) {
//         console.log(e)
//     }
//     display();


// function getUser() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//                 resolve(
//                     [
//                         {name: "Kim", email: "Kim@gamil.com"},
//                         {name: "Lee", email: "Lee@gamil.com"},
//                         {name: "Park", email: "Park@gamil.com"}
//                     ]
//                 )
//          }, 2000);
//      })
//  }
//  function findUser(users, name) {
//     return new Promise((resolve, reject) => {
//         console.log(users);
//         setTimeout(() => {
//             resolve(users.find(user.find(user => user.name === name)));
//         }, 3000);
//     })
//  }
//  function getEmail(user) {
//     return new Promise((resolve, reject) => {
//         console.log(user);
//         setTimeout(() => {
//             resolve(user.email);
//         }, 3000);
//     });
//  }
//  async function getUserEmail(name) {
//     let users = await getUser();
//     let user = await findUser(users, name);
//     let email = await getUserEmail(user);
//     return email;
//  }
// async function displayUserEmail() {
//     let email = await getUserEmail("Kim");
//     console.log(email);
// }
// displayUserEmail();

// const myPromise = () => new Promise((resolve) => {
//     resolve("Value is...")
// });
// function* gen() {
//     let result = "";
//     yield myPromise().then(data => [result = data]);
//     yield result + '2';
// }
// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);
// val1.value.then(() => {
//     console.log(asyncFunc.next());
// });

// async function* asyncSquence(from = 0, to = Infinity, interval = 1, timeout = 1000) {
//     let next = from;
//     while(next <= to) {
//         yield new Promise((resolve, reject) => {
//             setTimeout(() => resolve(next), timeout);
//         })
//         next += interval;
//     }
// }
// (async() => {
//     let seq = asyncSquence(2, 10, 2);
//     for await (let value of seq)
//     console.log(value);
// })();



// function* taskGenerator() {
//     yield new Promise((resolve) => setTimeout(() => resolve("1완료"), 2000));
//     yield new Promise((resolve) => setTimeout(() => resolve("2완료"), 2000));
//     yield new Promise((resolve) => setTimeout(() => resolve("3완료"), 2000));
// }
// const tasksDisplay = async() => {
//     for(let task of tasks) {
//         const result = await task;
//         console.log(result);
//     }
// }
// tasksDisplay();


// function getUser() {
//     return new Promise((resolve, reject) => {
//         resolve(
//             [
//                 {name: 'Kim', age: '25'},
//                 {name: 'Lee', age: '30'},
//                 {name: 'Jung', age: '35'}
//             ]
//         )
//     })
// }
// function findUser(users, name) {
//     return new Promise ((resolve, reject) => {
//         console.log(users);
//     })
// }

// async function getUserAge(name) {
//     let users =  await getUser();
//     let user = await findUser(users, name);
//     let age = await getUserAge(user);
//     return age;
// }
// async function displayUserAge() {
//     let age = await getUserAge("Kim");
//     console.log(age);
// }
// displayUserAge();