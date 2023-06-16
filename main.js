function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// class SuperObject {
//   static isObject(subject) {
//     return typeof subject == "object";
//   }

//   static deepCopy(subject) {
//     let copySubject;

//     const subjectIsArray = isArray(subject);
//     const subjectIsObject = isObject(subject);

//     if (subjectIsArray) {
//       copySubject = [];
//     } else if (subjectIsObject) {
//       copySubject = {};
//     } else {
//       return subject;
//     }

//     for (key in subject) {
//       const keyIsObject = isObject(subject[key]);

//       if (keyIsObject) {
//         copySubject[key] = deepCopy(subject[key]);
//       } else {
//         if (subjectIsArray) {
//           copySubject.push(subject[key]);
//         } else {
//           copySubject[key] = subject[key];
//         }
//       }
//     }
//   }
// }

function SuperObject() {}
SuperObject.prototype.deepCopy = function (subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
};

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //   _name: name,
  //   _courses: courses,
  // };

  // const public = {
  //   get name() {
  //     return private._name;
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private._name = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 cáracter");
  //     }
  //   },

  //   get courses() {
  //     return private._courses;
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private._learningPaths;
    },
    set(newLp) {
      if (newLp instanceof LearningPath) {
        private._learningPaths.push(newLp);
      } else {
        console.warn(
          "Alguno de los LPs no es una instancia del prototipo LearningPath"
        );
      }
    },
  });

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de WebDev",
  courses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
    "Curso de Responsive Design",
  ],
});

const juan = new Student({
  name: "Juanito",
  email: "juan@gmail.com",
  learningPaths: [escuelaWeb],
});
