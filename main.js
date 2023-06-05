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
console.log(Object.keys(juan)); // ["nombre", "age", "approvedCourses", "addCourse"]
console.log(Object.getOwnPropertyNames(juan)); // ["nombre", "age", "approvedCourses", "addCourse"]
console.log(Object.entries(juan)); // [["nombre", "Juan"], ["age", 18], ["approvedCourses", ["Curso 1"]], ["addCourse", f]]
console.log(Object.getOwnPropertyDescriptors(juan)); // {nombre: {…}, age: {…}, approvedCourses: {…}, addCourse: {…}}
Object.defineProperty(juan, "pruebaNASA", {
  value: "Extraterrestres",
  enumerable: true,
  writable: true,
  configurable: true,
});
