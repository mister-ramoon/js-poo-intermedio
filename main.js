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

// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     twitter: undefined,
//     instagram: undefined,
//     facebook: undefined,
//   },
// };

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    email,
    age,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    approvedCourses,
    learningPaths,
    // readName() {
    //   return private._name;
    // },
    // changeName(newName) {
    //   private._name = newName;
    // },
    get name() {
      return private._name;
    },
    set name(newName) {
      if (newName.length != 0) {
        private._name = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 cáracter");
      }
    },
  };

  // Object.defineProperty(public, "readName", {
  //   configurable: false,
  //   writable: false,
  // });

  return public;
}

const juan = createStudent({
  name: "Juanito",
  email: "juan@gmail.com",
});
