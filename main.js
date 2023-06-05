const juan = {
  name: "Juan",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("this", this);
    console.log("this.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

//juan.addCourse("Curso 2");
//console.log(Object.keys(juan)); // ["nombre", "age", "approvedCourses", "addCourse"]
//console.log(Object.getOwnPropertyNames(juan)); // ["nombre", "age", "approvedCourses", "addCourse"]
//console.log(Object.entries(juan)); // [["nombre", "Juan"], ["age", 18], ["approvedCourses", ["Curso 1"]], ["addCourse", f]]

Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  enumerable: false,
  writable: true,
  configurable: true,
});

Object.defineProperty(juan, "pruebaNASA", {
  value: "Extraterrestres",
  enumerable: false,
  writable: false,
  configurable: false,
});

Object.defineProperty(juan, "editor", {
  value: "VS Code",
  enumerable: true,
  writable: false,
  configurable: true,
});

Object.defineProperty(juan, "terminal", {
  value: "wsl",
  enumerable: true,
  writable: true,
  configurable: false,
});

// console.log(Object.freeze(juan));
// console.log(Object.seal(juan));

console.log(Object.getOwnPropertyDescriptors(juan)); // {nombre: {…}, age: {…}, approvedCourses: {…}, addCourse: {…}}
