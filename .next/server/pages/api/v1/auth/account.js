"use strict";
(() => {
var exports = {};
exports.id = "pages/api/v1/auth/account";
exports.ids = ["pages/api/v1/auth/account"];
exports.modules = {

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initMiddleware)
/* harmony export */ });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
//
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./models/course.js":
/*!**************************!*\
  !*** ./models/course.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //     // define association here
    //     Course.belongsTo(models.User, {
    //         foreignKey: 'userId',
    //         onDelete: 'CASCADE'
    //     });
    // }
  }

  ;
  Course.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    overview: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.FLOAT
    },
    free: {
      type: Sequelize.BOOLEAN
    },
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    profilePhoto: {
      type: Sequelize.STRING
    },
    coverPhoto: {
      type: Sequelize.STRING
    },
    courese_preview_img: {
      type: Sequelize.STRING
    },
    course_preview_video: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    lessons: {
      type: Sequelize.STRING
    },
    access: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Course'
  });
  return Course;
};

/***/ }),

/***/ "./models/enroled_courses.js":
/*!***********************************!*\
  !*** ./models/enroled_courses.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Enroled_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here
    }

  }

  ;
  Enroled_courses.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    payment_email: {
      type: Sequelize.STRING
    },
    cost: {
      type: Sequelize.INTEGER
    },
    courseId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Courses',
        key: 'id',
        as: 'courseId'
      }
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Enroled_courses'
  });
  return Enroled_courses;
};

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

 // main model file

var _user = _interopRequireDefault(__webpack_require__(/*! ./user */ "./models/user.js"));

var _course = _interopRequireDefault(__webpack_require__(/*! ./course */ "./models/course.js"));

var _video = _interopRequireDefault(__webpack_require__(/*! ./video */ "./models/video.js"));

var _enroled_courses = _interopRequireDefault(__webpack_require__(/*! ./enroled_courses */ "./models/enroled_courses.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

const basename = path.basename(__filename);
const env = "development" || 0;

const config = __webpack_require__(/*! ./config/config.json */ "./config/config.json")[env];

const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = (0, _user.default)(sequelize, Sequelize);
db.courses = (0, _course.default)(sequelize, Sequelize);
db.videos = (0, _video.default)(sequelize, Sequelize);
db.enroled_courses = (0, _enroled_courses.default)(sequelize, Sequelize); // hasMany relationshipt with user and course

db.users.hasMany(db.courses, {
  as: 'courses',
  foreignKey: 'userId'
});
db.courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
}); // hasMany relationshipt with course and videos

db.courses.hasMany(db.videos, {
  as: 'videos',
  foreignKey: 'courseId'
});
db.videos.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
}); // hasMany relationshipt with user and videos

db.users.hasMany(db.videos, {
  as: 'videos',
  foreignKey: 'userId'
});
db.videos.belongsTo(db.courses, {
  foreignKey: 'userId',
  as: 'user'
}); // hasMany relationshipt with course and enroled

db.courses.hasMany(db.enroled_courses, {
  as: 'enroled_courses',
  foreignKey: 'courseId'
});
db.enroled_courses.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
}); // hasMany relationshipt with user and enroled

db.users.hasMany(db.enroled_courses, {
  as: 'enroled_courses',
  foreignKey: 'userId'
});
db.enroled_courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
}); // console.log('######', db)

module.exports = db;

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //     // define association here
    //     User.hasMany(models.Course, {
    //         foreignKey: 'userId'
    //     })
    // }
  }

  ;
  User.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    isEmailPublic: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    password: {
      type: Sequelize.STRING
    },
    designation: {
      type: Sequelize.TEXT
    },
    about: {
      type: Sequelize.TEXT
    },
    location: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    companyUrl: {
      type: Sequelize.STRING
    },
    interests: {
      type: Sequelize.STRING
    },
    passwordResetToken: {
      type: Sequelize.UUID
    },
    passwordUpdatedAt: {
      type: Sequelize.DATE
    },
    emailResetToken: {
      type: Sequelize.UUID
    },
    profilePhoto: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    fb_url: {
      type: Sequelize.STRING
    },
    tw_url: {
      type: Sequelize.STRING
    },
    insta_url: {
      type: Sequelize.STRING
    },
    in_url: {
      type: Sequelize.STRING
    },
    emailConfirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    emailConfirmedAt: {
      type: Sequelize.DATE
    },
    as_teacher_apply: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    as_teacher_confirmed: {
      type: Sequelize.BOOLEAN
    },
    as_teacher_confirmed_at: {
      type: Sequelize.DATE
    },
    as_teacher_req_desc: {
      type: Sequelize.TEXT
    },
    role: {
      type: Sequelize.ENUM,
      values: ['student', 'admin', 'teacher'],
      defaultValue: 'student'
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    agreedTerms: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};

/***/ }),

/***/ "./models/video.js":
/*!*************************!*\
  !*** ./models/video.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }

  ;
  Video.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    video_url: {
      type: Sequelize.TEXT
    },
    order: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    courseId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Courses',
        key: 'id',
        as: 'courseId'
      }
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Video'
  });
  return Video;
};

/***/ }),

/***/ "./pages/api/v1/auth/account.js":
/*!**************************************!*\
  !*** ./pages/api/v1/auth/account.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/init-middleware */ "./lib/init-middleware.js");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator/lib/isLength */ "validator/lib/isLength");
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/index */ "./models/index.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_5__);





 // Initialize the cors middleware

const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__.default)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  await cors(req, res);

  if (!("authorization" in req.headers)) {
    return res.status(401).json({
      message: "No autorization token"
    });
  }

  switch (req.method) {
    case "POST":
      await handlePostRequest(req, res);
      break;

    case "GET":
      await handleGetRequest(req, res);
      break;

    case "PUT":
      await handlePutRequest(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
  }
});

const handlePostRequest = async (req, res) => {
  const {
    currentPassword,
    newPassword,
    newConfirmPassword
  } = req.body;

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf"); // check email, name, password format

    if (!currentPassword) {
      return res.status(422).send({
        message: "Must be provide current Password!"
      });
    } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4___default()(newPassword, {
      min: 6,
      max: 12
    })) {
      return res.status(422).send({
        message: "New Password must be 6-12 characters long!"
      });
    } else if (newPassword != newConfirmPassword) {
      return res.status(422).json({
        message: "Confirm password doesn't matched!"
      });
    }

    const newPasswordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(newPassword, 10);
    const user = await _models_index__WEBPACK_IMPORTED_MODULE_5__.users.findOne({
      attributes: ['password'],
      where: {
        id: userId
      }
    });
    const match = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(currentPassword, user.password);

    if (!match) {
      return res.status(422).send({
        message: "Current Password doesn't match!"
      });
    }

    await _models_index__WEBPACK_IMPORTED_MODULE_5__.users.update({
      password: newPasswordHash
    }, {
      where: {
        id: userId
      }
    });
    res.status(200).json({
      "message": "Successfully updated the password!"
    });
  } catch (error) {
    console.error(error);
    res.status(403).json({
      message: "Invalid token"
    });
  }
};

const handlePutRequest = async (req, res) => {
  const {
    name,
    designation,
    location,
    description
  } = req.body;

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
    await _models_index__WEBPACK_IMPORTED_MODULE_5__.users.update({
      name: name,
      designation: designation,
      description: description,
      location: location
    }, {
      where: {
        id: userId
      }
    });
    res.status(200).json({
      "message": "Successfully updated the profile!"
    });
  } catch (error) {
    res.status(403).json({
      message: "Invalid token"
    });
  }
};

const handleGetRequest = async (req, res) => {
  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
    const user = await _models_index__WEBPACK_IMPORTED_MODULE_5__.users.findOne({
      attributes: {
        exclude: ['password']
      },
      where: {
        id: userId
      },
      include: [{
        model: _models_index__WEBPACK_IMPORTED_MODULE_5__.enroled_courses,
        as: 'enroled_courses',
        attributes: ['courseId']
      }]
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(403).send("Invalid token");
  }
};

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "validator/lib/isLength":
/*!*****************************************!*\
  !*** external "validator/lib/isLength" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("validator/lib/isLength");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"development":{"username":"postgres","password":"postgre","database":"edemy_db_dev2","host":"127.0.0.1","dialect":"postgres"},"test":{"username":"postgres","password":"","database":"edemy_db_test","host":"127.0.0.1","dialect":"postgres"},"production":{"username":"username","password":"password","database":"edemy_database_production","host":"127.0.0.1","dialect":"postgres"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/v1/auth/account.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLFVBQU07QUFBQ3FDLE1BQUFBO0FBQUQsUUFBV3dFLDBEQUFBLENBQVc5RyxHQUFHLENBQUNrSCxPQUFKLENBQVljLGFBQXZCLEVBQXNDbkUsd0JBQXRDLENBQWpCO0FBQ0EsVUFBTXlFLElBQUksR0FBRyxNQUFNOUQsd0RBQUEsQ0FBYTtBQUM1QmdFLE1BQUFBLFVBQVUsRUFBRTtBQUNSTyxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxVQUFEO0FBREQsT0FEZ0I7QUFJNUJOLE1BQUFBLEtBQUssRUFBRTtBQUFFMUgsUUFBQUEsRUFBRSxFQUFFdUI7QUFBTixPQUpxQjtBQUs1QjBHLE1BQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ052RyxRQUFBQSxLQUFLLEVBQUVJLDBEQUREO0FBQ2tCRixRQUFBQSxFQUFFLEVBQUUsaUJBRHRCO0FBRU42RixRQUFBQSxVQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRk4sT0FBRDtBQUxtQixLQUFiLENBQW5COztBQVVBLFFBQUdGLElBQUgsRUFBUTtBQUNKckksTUFBQUEsR0FBRyxDQUFDa0gsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCa0IsSUFBckI7QUFDSCxLQUZELE1BRU87QUFDSHJJLE1BQUFBLEdBQUcsQ0FBQ2tILE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixnQkFBckI7QUFDSDtBQUNKLEdBakJELENBaUJFLE9BQU9tQixLQUFQLEVBQWM7QUFDWjVJLElBQUFBLEdBQUcsQ0FBQ2tILE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixlQUFyQjtBQUNIO0FBQ0osQ0FyQkQ7Ozs7Ozs7Ozs7QUN4R0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpLy4vbW9kZWxzL2NvdXJzZS5qcyIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpLy4vbW9kZWxzL2Vucm9sZWRfY291cnNlcy5qcyIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvLi9tb2RlbHMvdXNlci5qcyIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpLy4vbW9kZWxzL3ZpZGVvLmpzIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvLi9wYWdlcy9hcGkvdjEvYXV0aC9hY2NvdW50LmpzIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpL2V4dGVybmFsIFwidmFsaWRhdG9yL2xpYi9pc0xlbmd0aFwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhlbHBlciBtZXRob2QgdG8gd2FpdCBmb3IgYSBtaWRkbGV3YXJlIHRvIGV4ZWN1dGUgYmVmb3JlIGNvbnRpbnVpbmdcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXG4vL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1pZGRsZXdhcmUobWlkZGxld2FyZSkge1xuICAgIHJldHVybiAocmVxLCByZXMpID0+XG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG59IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICAgIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGNsYXNzIENvdXJzZSBleHRlbmRzIE1vZGVsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgZm9yIGRlZmluaW5nIGFzc29jaWF0aW9ucy5cbiAgICAgICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAgICAgKiBUaGUgYG1vZGVscy9pbmRleGAgZmlsZSB3aWxsIGNhbGwgdGhpcyBtZXRob2QgYXV0b21hdGljYWxseS5cbiAgICAgICAgICovXG4gICAgICAgIC8vIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgICAgIC8vICAgICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgICAgICAvLyAgICAgQ291cnNlLmJlbG9uZ3NUbyhtb2RlbHMuVXNlciwge1xuICAgICAgICAvLyAgICAgICAgIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICAgICAgICAvLyAgICAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERSdcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfTtcbiAgICBcbiAgICBDb3Vyc2UuaW5pdCh7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcnZpZXc6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuRkxPQVRcbiAgICAgICAgfSxcbiAgICAgICAgZnJlZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU5cbiAgICAgICAgfSxcbiAgICAgICAgcHVibGlzaGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZmlsZVBob3RvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvdmVyUGhvdG86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY291cmVzZV9wcmV2aWV3X2ltZzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb3Vyc2VfcHJldmlld192aWRlbzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBsZXNzb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGFjY2Vzczoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICB1c2VySWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICAgICAgICBtb2RlbDogJ1VzZXJzJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgYXM6ICd1c2VySWQnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBzZXF1ZWxpemUsXG4gICAgICAgIG1vZGVsTmFtZTogJ0NvdXJzZScsXG4gICAgfSk7XG4gICAgcmV0dXJuIENvdXJzZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgY2xhc3MgRW5yb2xlZF9jb3Vyc2VzIGV4dGVuZHMgTW9kZWwge1xuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgZm9yIGRlZmluaW5nIGFzc29jaWF0aW9ucy5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXG4gICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICovXG4gICAgc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcbiAgICAgIC8vIGRlZmluZSBhc3NvY2lhdGlvbiBoZXJlXG4gICAgfVxuICB9O1xuICBFbnJvbGVkX2NvdXJzZXMuaW5pdCh7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcGF5bWVudF9lbWFpbDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgIH0sXG4gICAgY29zdDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICB9LFxuICAgIGNvdXJzZUlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAnQ291cnNlcycsXG4gICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgYXM6ICdjb3Vyc2VJZCcsXG4gICAgICB9XG4gICAgfSxcbiAgICB1c2VySWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdVc2VycycsXG4gICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgYXM6ICd1c2VySWQnLFxuICAgICAgfVxuICAgIH0sXG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgbW9kZWxOYW1lOiAnRW5yb2xlZF9jb3Vyc2VzJyxcbiAgfSk7XG4gIHJldHVybiBFbnJvbGVkX2NvdXJzZXM7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIG1haW4gbW9kZWwgZmlsZVxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xuY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpO1xuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzb24nKVtlbnZdO1xuY29uc3QgZGIgPSB7fTtcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcidcbmltcG9ydCBDb3Vyc2UgZnJvbSAnLi9jb3Vyc2UnXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi92aWRlbydcbmltcG9ydCBFbnJvbGVkX2NvdXJzZXMgZnJvbSAnLi9lbnJvbGVkX2NvdXJzZXMnXG5cbmxldCBzZXF1ZWxpemU7XG5pZiAoY29uZmlnLnVzZV9lbnZfdmFyaWFibGUpIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudltjb25maWcudXNlX2Vudl92YXJpYWJsZV0sIGNvbmZpZyk7XG59IGVsc2Uge1xuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGNvbmZpZy5kYXRhYmFzZSwgY29uZmlnLnVzZXJuYW1lLCBjb25maWcucGFzc3dvcmQsIGNvbmZpZyk7XG59XG5cbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcblxuZGIudXNlcnMgPSBVc2VyKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxuZGIuY291cnNlcyA9IENvdXJzZShzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLnZpZGVvcyA9IFZpZGVvKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxuZGIuZW5yb2xlZF9jb3Vyc2VzID0gRW5yb2xlZF9jb3Vyc2VzKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCB1c2VyIGFuZCBjb3Vyc2VcbmRiLnVzZXJzLmhhc01hbnkoZGIuY291cnNlcywgeyBcbiAgYXM6ICdjb3Vyc2VzJyxcbiAgZm9yZWlnbktleTogJ3VzZXJJZCdcbn0pXG5kYi5jb3Vyc2VzLmJlbG9uZ3NUbyhkYi51c2Vycywge1xuICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgYXM6ICd1c2VyJ1xufSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggY291cnNlIGFuZCB2aWRlb3NcbmRiLmNvdXJzZXMuaGFzTWFueShkYi52aWRlb3MsIHsgXG4gIGFzOiAndmlkZW9zJyxcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJ1xufSlcbmRiLnZpZGVvcy5iZWxvbmdzVG8oZGIuY291cnNlcywge1xuICBmb3JlaWduS2V5OiAnY291cnNlSWQnLFxuICBhczogJ2NvdXJzZSdcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIHVzZXIgYW5kIHZpZGVvc1xuZGIudXNlcnMuaGFzTWFueShkYi52aWRlb3MsIHsgXG4gIGFzOiAndmlkZW9zJyxcbiAgZm9yZWlnbktleTogJ3VzZXJJZCdcbn0pXG5kYi52aWRlb3MuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAndXNlcidcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIGNvdXJzZSBhbmQgZW5yb2xlZFxuZGIuY291cnNlcy5oYXNNYW55KGRiLmVucm9sZWRfY291cnNlcywgeyBcbiAgYXM6ICdlbnJvbGVkX2NvdXJzZXMnLFxuICBmb3JlaWduS2V5OiAnY291cnNlSWQnXG59KVxuZGIuZW5yb2xlZF9jb3Vyc2VzLmJlbG9uZ3NUbyhkYi5jb3Vyc2VzLCB7XG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCcsXG4gIGFzOiAnY291cnNlJ1xufSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgZW5yb2xlZFxuZGIudXNlcnMuaGFzTWFueShkYi5lbnJvbGVkX2NvdXJzZXMsIHsgXG4gIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcbiAgZm9yZWlnbktleTogJ3VzZXJJZCdcbn0pXG5kYi5lbnJvbGVkX2NvdXJzZXMuYmVsb25nc1RvKGRiLnVzZXJzLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ3VzZXInXG59KVxuXG4vLyBjb25zb2xlLmxvZygnIyMjIyMjJywgZGIpXG5cbm1vZHVsZS5leHBvcnRzID0gZGI7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gICAgTW9kZWxcbn0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgY2xhc3MgVXNlciBleHRlbmRzIE1vZGVsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgZm9yIGRlZmluaW5nIGFzc29jaWF0aW9ucy5cbiAgICAgICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAgICAgKiBUaGUgYG1vZGVscy9pbmRleGAgZmlsZSB3aWxsIGNhbGwgdGhpcyBtZXRob2QgYXV0b21hdGljYWxseS5cbiAgICAgICAgICovXG4gICAgICAgIC8vIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgICAgIC8vICAgICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgICAgICAvLyAgICAgVXNlci5oYXNNYW55KG1vZGVscy5Db3Vyc2UsIHtcbiAgICAgICAgLy8gICAgICAgICBmb3JlaWduS2V5OiAndXNlcklkJ1xuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfVxuICAgIH07XG4gICAgVXNlci5pbml0KHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgICAgICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGlzRW1haWxQdWJsaWM6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2lnbmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICBhYm91dDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb21wYW55VXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGludGVyZXN0czoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZFJlc2V0VG9rZW46IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlEXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkVXBkYXRlZEF0OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxuICAgICAgICB9LFxuICAgICAgICBlbWFpbFJlc2V0VG9rZW46IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlEXG4gICAgICAgIH0sXG4gICAgICAgIHByb2ZpbGVQaG90bzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBnZW5kZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZmJfdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHR3X3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpbnN0YV91cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaW5fdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsQ29uZmlybWVkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxDb25maXJtZWRBdDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgICAgfSxcbiAgICAgICAgYXNfdGVhY2hlcl9hcHBseToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfY29uZmlybWVkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTlxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX2NvbmZpcm1lZF9hdDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgICAgfSxcbiAgICAgICAgYXNfdGVhY2hlcl9yZXFfZGVzYzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICAgICAgfSxcbiAgICAgICAgcm9sZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkVOVU0sXG4gICAgICAgICAgICB2YWx1ZXM6IFsnc3R1ZGVudCcsICdhZG1pbicsICd0ZWFjaGVyJ10sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdzdHVkZW50J1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFncmVlZFRlcm1zOiB7XG4gICAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIHNlcXVlbGl6ZSxcbiAgICAgICAgbW9kZWxOYW1lOiAnVXNlcicsXG4gICAgfSk7XG4gICAgcmV0dXJuIFVzZXI7XG59OyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgTW9kZWxcbn0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XG4gIGNsYXNzIFZpZGVvIGV4dGVuZHMgTW9kZWwge1xuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgZm9yIGRlZmluaW5nIGFzc29jaWF0aW9ucy5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXG4gICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICovXG4gICAgLy8gc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcbiAgICAvLyAgIC8vIGRlZmluZSBhc3NvY2lhdGlvbiBoZXJlXG4gICAgLy8gfVxuICB9O1xuICBWaWRlby5pbml0KHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICB2aWRlb191cmw6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgfSxcbiAgICBvcmRlcjoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfSxcbiAgICBjb3Vyc2VJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ0NvdXJzZXMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAnY291cnNlSWQnLFxuICAgICAgfVxuICAgIH0sXG4gICAgdXNlcklkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAnVXNlcnMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgbW9kZWxOYW1lOiAnVmlkZW8nLFxuICB9KTtcbiAgcmV0dXJuIFZpZGVvO1xufTsiLCJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGluaXRNaWRkbGV3YXJlIGZyb20gJ0AvbGliL2luaXQtbWlkZGxld2FyZSdcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgaXNMZW5ndGggZnJvbSAndmFsaWRhdG9yL2xpYi9pc0xlbmd0aCdcbmltcG9ydCB7IFxuICAgIHVzZXJzIGFzIFVzZXIsXG4gICAgZW5yb2xlZF9jb3Vyc2VzIGFzIEVucm9sZWRfY291cnNlcyxcbiAgICBjb3Vyc2VzIGFzIENvdXJzZVxufSBmcm9tICdAL21vZGVscy9pbmRleCdcblxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gICAgLy8gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvY29ycyNjb25maWd1cmF0aW9uLW9wdGlvbnNcbiAgICBDb3JzKHtcbiAgICAgICAgLy8gT25seSBhbGxvdyByZXF1ZXN0cyB3aXRoIEdFVCwgUE9TVCBhbmQgT1BUSU9OU1xuICAgICAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ09QVElPTlMnLCAnREVMRVRFJywgJ1BVVCddLFxuICAgIH0pXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXG4gICAgaWYoIShcImF1dGhvcml6YXRpb25cIiBpbiByZXEuaGVhZGVycykpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe21lc3NhZ2U6IFwiTm8gYXV0b3JpemF0aW9uIHRva2VuXCJ9KTtcbiAgICB9XG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgaGFuZGxlUG9zdFJlcXVlc3QocmVxLCByZXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZUdldFJlcXVlc3QocmVxLCByZXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQVVRcIjpcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZVB1dFJlcXVlc3QocmVxLCByZXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNSkuc2VuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgKTtcbiAgICB9XG59XG5cbmNvbnN0IGhhbmRsZVBvc3RSZXF1ZXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge2N1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIG5ld0NvbmZpcm1QYXNzd29yZH0gPSByZXEuYm9keVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHt1c2VySWR9ID0gand0LnZlcmlmeShyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICAgICAgICAvLyBjaGVjayBlbWFpbCwgbmFtZSwgcGFzc3dvcmQgZm9ybWF0XG4gICAgICAgIGlmICghY3VycmVudFBhc3N3b3JkKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuc2VuZCh7bWVzc2FnZTogXCJNdXN0IGJlIHByb3ZpZGUgY3VycmVudCBQYXNzd29yZCFcIn0pXG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTGVuZ3RoKG5ld1Bhc3N3b3JkLCB7bWluOiA2LCBtYXg6IDEyfSkpe1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5zZW5kKHttZXNzYWdlOiBcIk5ldyBQYXNzd29yZCBtdXN0IGJlIDYtMTIgY2hhcmFjdGVycyBsb25nIVwifSlcbiAgICAgICAgfSBlbHNlIGlmIChuZXdQYXNzd29yZCAhPSBuZXdDb25maXJtUGFzc3dvcmQpe1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHttZXNzYWdlOiBcIkNvbmZpcm0gcGFzc3dvcmQgZG9lc24ndCBtYXRjaGVkIVwifSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Bhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1Bhc3N3b3JkLCAxMClcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ3Bhc3N3b3JkJ10sXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZClcblxuICAgICAgICBpZighbWF0Y2gpe1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5zZW5kKHttZXNzYWdlOiBcIkN1cnJlbnQgUGFzc3dvcmQgZG9lc24ndCBtYXRjaCFcIn0pXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBVc2VyLnVwZGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogbmV3UGFzc3dvcmRIYXNoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7aWQ6IHVzZXJJZH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgIFxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XCJtZXNzYWdlXCI6IFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgdGhlIHBhc3N3b3JkIVwifSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVzc2FnZTogXCJJbnZhbGlkIHRva2VuXCJ9KTtcbiAgICB9XG59XG5cbmNvbnN0IGhhbmRsZVB1dFJlcXVlc3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7bmFtZSwgZGVzaWduYXRpb24sIGxvY2F0aW9uLCBkZXNjcmlwdGlvbn0gPSByZXEuYm9keVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHt1c2VySWR9ID0gand0LnZlcmlmeShyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcbiAgICAgICAgYXdhaXQgVXNlci51cGRhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkZXNpZ25hdGlvbjogZGVzaWduYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aGVyZToge2lkOiB1c2VySWR9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1wibWVzc2FnZVwiOiBcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkIHRoZSBwcm9maWxlIVwifSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVzc2FnZTogXCJJbnZhbGlkIHRva2VuXCJ9KTtcbiAgICB9XG59XG5cbmNvbnN0IGhhbmRsZUdldFJlcXVlc3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7dXNlcklkfSA9IGp3dC52ZXJpZnkocmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBleGNsdWRlOiBbJ3Bhc3N3b3JkJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiBbe1xuICAgICAgICAgICAgICAgIG1vZGVsOiBFbnJvbGVkX2NvdXJzZXMsIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2NvdXJzZUlkJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICAgIGlmKHVzZXIpe1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIlVzZXIgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoXCJJbnZhbGlkIHRva2VuXCIpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yL2xpYi9pc0xlbmd0aFwiKTsiXSwibmFtZXMiOlsiaW5pdE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsIk1vZGVsIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXF1ZWxpemUiLCJTZXF1ZWxpemUiLCJDb3Vyc2UiLCJpbml0IiwiaWQiLCJ0eXBlIiwiVVVJRCIsImRlZmF1bHRWYWx1ZSIsIlVVSURWNCIsInByaW1hcnlLZXkiLCJ0aXRsZSIsIlNUUklORyIsIm92ZXJ2aWV3IiwiVEVYVCIsInByaWNlIiwiRkxPQVQiLCJmcmVlIiwiQk9PTEVBTiIsInB1Ymxpc2hlZCIsInByb2ZpbGVQaG90byIsImNvdmVyUGhvdG8iLCJjb3VyZXNlX3ByZXZpZXdfaW1nIiwiY291cnNlX3ByZXZpZXdfdmlkZW8iLCJkdXJhdGlvbiIsImxlc3NvbnMiLCJhY2Nlc3MiLCJjYXRlZ29yeSIsInVzZXJJZCIsIm9uRGVsZXRlIiwicmVmZXJlbmNlcyIsIm1vZGVsIiwia2V5IiwiYXMiLCJtb2RlbE5hbWUiLCJFbnJvbGVkX2NvdXJzZXMiLCJhc3NvY2lhdGUiLCJtb2RlbHMiLCJwYXltZW50X2VtYWlsIiwiY29zdCIsIklOVEVHRVIiLCJjb3Vyc2VJZCIsImZzIiwicGF0aCIsImJhc2VuYW1lIiwiX19maWxlbmFtZSIsImVudiIsImNvbmZpZyIsIl9fZGlybmFtZSIsImRiIiwidXNlX2Vudl92YXJpYWJsZSIsInByb2Nlc3MiLCJkYXRhYmFzZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VycyIsImNvdXJzZXMiLCJ2aWRlb3MiLCJlbnJvbGVkX2NvdXJzZXMiLCJoYXNNYW55IiwiZm9yZWlnbktleSIsImJlbG9uZ3NUbyIsIlVzZXIiLCJuYW1lIiwiZW1haWwiLCJpc0VtYWlsUHVibGljIiwiZGVzaWduYXRpb24iLCJhYm91dCIsImxvY2F0aW9uIiwicGhvbmUiLCJjb21wYW55IiwiY29tcGFueVVybCIsImludGVyZXN0cyIsInBhc3N3b3JkUmVzZXRUb2tlbiIsInBhc3N3b3JkVXBkYXRlZEF0IiwiREFURSIsImVtYWlsUmVzZXRUb2tlbiIsImdlbmRlciIsImZiX3VybCIsInR3X3VybCIsImluc3RhX3VybCIsImluX3VybCIsImVtYWlsQ29uZmlybWVkIiwiZW1haWxDb25maXJtZWRBdCIsImFzX3RlYWNoZXJfYXBwbHkiLCJhc190ZWFjaGVyX2NvbmZpcm1lZCIsImFzX3RlYWNoZXJfY29uZmlybWVkX2F0IiwiYXNfdGVhY2hlcl9yZXFfZGVzYyIsInJvbGUiLCJFTlVNIiwidmFsdWVzIiwiYWN0aXZlIiwiYWdyZWVkVGVybXMiLCJhbGxvd051bGwiLCJWaWRlbyIsInZpZGVvX3VybCIsIm9yZGVyIiwiZGVzY3JpcHRpb24iLCJDb3JzIiwiYmNyeXB0Iiwiand0IiwiaXNMZW5ndGgiLCJjb3JzIiwibWV0aG9kcyIsImhlYWRlcnMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm1ldGhvZCIsImhhbmRsZVBvc3RSZXF1ZXN0IiwiaGFuZGxlR2V0UmVxdWVzdCIsImhhbmRsZVB1dFJlcXVlc3QiLCJzZW5kIiwiY3VycmVudFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJuZXdDb25maXJtUGFzc3dvcmQiLCJib2R5IiwidmVyaWZ5IiwiYXV0aG9yaXphdGlvbiIsIkpXVF9TRUNSRVQiLCJtaW4iLCJtYXgiLCJuZXdQYXNzd29yZEhhc2giLCJoYXNoIiwidXNlciIsImZpbmRPbmUiLCJhdHRyaWJ1dGVzIiwid2hlcmUiLCJtYXRjaCIsImNvbXBhcmUiLCJ1cGRhdGUiLCJlcnJvciIsImNvbnNvbGUiLCJleGNsdWRlIiwiaW5jbHVkZSJdLCJzb3VyY2VSb290IjoiIn0=