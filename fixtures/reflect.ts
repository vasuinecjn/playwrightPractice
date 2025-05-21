import "reflect-metadata"
const loginData = require("../page_locators/LoginPage.json")


function getJsonValue(obj: any, path: string): any {
    return path.split(".").reduce((acc, key) => acc?.[key], obj)
}


console.log(getJsonValue(loginData, "nested.userNameTextBox"))

// class Employee {

//     getName() {
//         return "Code with vasu"
//     }
// }

// const employee = new Employee()
// // console.log(employee.getName())

// console.log(Reflect.get(employee, "getName").call(employee, "getName"))