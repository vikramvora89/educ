"use strict";
(() => {
var exports = {};
exports.id = "pages/api/v1/courses/my-courses";
exports.ids = ["pages/api/v1/courses/my-courses"];
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

/***/ "./pages/api/v1/courses/my-courses.js":
/*!********************************************!*\
  !*** ./pages/api/v1/courses/my-courses.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/init-middleware */ "./lib/init-middleware.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/index */ "./models/index.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_3__);



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

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
    const courses = await _models_index__WEBPACK_IMPORTED_MODULE_3__.courses.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        userId: userId
      },
      include: [{
        model: _models_index__WEBPACK_IMPORTED_MODULE_3__.users,
        as: 'user',
        attributes: ['id', 'name', 'profilePhoto']
      }, {
        model: _models_index__WEBPACK_IMPORTED_MODULE_3__.enroled_courses,
        as: 'enroled_courses',
        attributes: ['courseId']
      }]
    });
    res.send({
      courses
    });
  } catch (error) {
    console.log(error);
  }
});

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/v1/courses/my-courses.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSDs7QUFFRCxNQUFJO0FBQ0EsVUFBTTtBQUFFN0UsTUFBQUE7QUFBRixRQUFhdUUsMERBQUEsQ0FBVzdHLEdBQUcsQ0FBQ2dILE9BQUosQ0FBWUssYUFBdkIsRUFBc0N4RCx3QkFBdEMsQ0FBbkI7QUFDQSxVQUFNSyxPQUFPLEdBQUcsTUFBTXJELDBEQUFBLENBQWU7QUFDakM2RixNQUFBQSxLQUFLLEVBQUUsQ0FDSCxDQUFDLFdBQUQsRUFBYyxNQUFkLENBREcsQ0FEMEI7QUFJakNjLE1BQUFBLEtBQUssRUFBRTtBQUNIbEYsUUFBQUEsTUFBTSxFQUFFQTtBQURMLE9BSjBCO0FBT2pDbUYsTUFBQUEsT0FBTyxFQUFFLENBQUM7QUFDTmhGLFFBQUFBLEtBQUssRUFBRStCLGdEQUREO0FBQ083QixRQUFBQSxFQUFFLEVBQUUsTUFEWDtBQUVOK0UsUUFBQUEsVUFBVSxFQUFFLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxjQUFmO0FBRk4sT0FBRCxFQUdQO0FBQ0VqRixRQUFBQSxLQUFLLEVBQUVJLDBEQURUO0FBQzBCRixRQUFBQSxFQUFFLEVBQUUsaUJBRDlCO0FBRUUrRSxRQUFBQSxVQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRmQsT0FITztBQVB3QixLQUFmLENBQXRCO0FBZ0JBekgsSUFBQUEsR0FBRyxDQUFDMEgsSUFBSixDQUFTO0FBQUN6RCxNQUFBQTtBQUFELEtBQVQ7QUFDSCxHQW5CRCxDQW1CRSxPQUFPMEQsS0FBUCxFQUFjO0FBQ1pDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0g7QUFFSixDQTdCRDs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS8uL2xpYi9pbml0LW1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS8uL21vZGVscy9jb3Vyc2UuanMiLCJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS8uL21vZGVscy9lbnJvbGVkX2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS8uL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpLy4vbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS8uL21vZGVscy92aWRlby5qcyIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpLy4vcGFnZXMvYXBpL3YxL2NvdXJzZXMvbXktY291cnNlcy5qcyIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxufSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgICBjbGFzcyBDb3Vyc2UgZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgLy8gICAgIENvdXJzZS5iZWxvbmdzVG8obW9kZWxzLlVzZXIsIHtcbiAgICAgICAgLy8gICAgICAgICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgICAgICAgLy8gICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH07XG4gICAgXG4gICAgQ291cnNlLmluaXQoe1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJ2aWV3OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkZMT0FUXG4gICAgICAgIH0sXG4gICAgICAgIGZyZWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOXG4gICAgICAgIH0sXG4gICAgICAgIHB1Ymxpc2hlZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2ZpbGVQaG90bzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb3ZlclBob3RvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvdXJlc2VfcHJldmlld19pbWc6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY291cnNlX3ByZXZpZXdfdmlkZW86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgbGVzc29uczoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBhY2Nlc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcklkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICAgICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICAgICAgbW9kZWw6ICdVc2VycycsXG4gICAgICAgICAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICAgICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc2VxdWVsaXplLFxuICAgICAgICBtb2RlbE5hbWU6ICdDb3Vyc2UnLFxuICAgIH0pO1xuICAgIHJldHVybiBDb3Vyc2U7XG59OyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgTW9kZWxcbn0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XG4gIGNsYXNzIEVucm9sZWRfY291cnNlcyBleHRlbmRzIE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgIH1cbiAgfTtcbiAgRW5yb2xlZF9jb3Vyc2VzLmluaXQoe1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHBheW1lbnRfZW1haWw6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICB9LFxuICAgIGNvc3Q6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgfSxcbiAgICBjb3Vyc2VJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ0NvdXJzZXMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAnY291cnNlSWQnLFxuICAgICAgfVxuICAgIH0sXG4gICAgdXNlcklkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAnVXNlcnMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgIH1cbiAgICB9LFxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ0Vucm9sZWRfY291cnNlcycsXG4gIH0pO1xuICByZXR1cm4gRW5yb2xlZF9jb3Vyc2VzO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyBtYWluIG1vZGVsIGZpbGVcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qc29uJylbZW52XTtcbmNvbnN0IGRiID0ge307XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgQ291cnNlIGZyb20gJy4vY291cnNlJ1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vdmlkZW8nXG5pbXBvcnQgRW5yb2xlZF9jb3Vyc2VzIGZyb20gJy4vZW5yb2xlZF9jb3Vyc2VzJ1xuXG5sZXQgc2VxdWVsaXplO1xuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xufSBlbHNlIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShjb25maWcuZGF0YWJhc2UsIGNvbmZpZy51c2VybmFtZSwgY29uZmlnLnBhc3N3b3JkLCBjb25maWcpO1xufVxuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG5cbmRiLnVzZXJzID0gVXNlcihzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLmNvdXJzZXMgPSBDb3Vyc2Uoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5kYi52aWRlb3MgPSBWaWRlbyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLmVucm9sZWRfY291cnNlcyA9IEVucm9sZWRfY291cnNlcyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgY291cnNlXG5kYi51c2Vycy5oYXNNYW55KGRiLmNvdXJzZXMsIHsgXG4gIGFzOiAnY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIuY291cnNlcy5iZWxvbmdzVG8oZGIudXNlcnMsIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAndXNlcidcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIGNvdXJzZSBhbmQgdmlkZW9zXG5kYi5jb3Vyc2VzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxuICBhczogJ3ZpZGVvcycsXG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCdcbn0pXG5kYi52aWRlb3MuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJyxcbiAgYXM6ICdjb3Vyc2UnXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCB1c2VyIGFuZCB2aWRlb3NcbmRiLnVzZXJzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxuICBhczogJ3ZpZGVvcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIudmlkZW9zLmJlbG9uZ3NUbyhkYi5jb3Vyc2VzLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ3VzZXInXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCBjb3Vyc2UgYW5kIGVucm9sZWRcbmRiLmNvdXJzZXMuaGFzTWFueShkYi5lbnJvbGVkX2NvdXJzZXMsIHsgXG4gIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJ1xufSlcbmRiLmVucm9sZWRfY291cnNlcy5iZWxvbmdzVG8oZGIuY291cnNlcywge1xuICBmb3JlaWduS2V5OiAnY291cnNlSWQnLFxuICBhczogJ2NvdXJzZSdcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIHVzZXIgYW5kIGVucm9sZWRcbmRiLnVzZXJzLmhhc01hbnkoZGIuZW5yb2xlZF9jb3Vyc2VzLCB7IFxuICBhczogJ2Vucm9sZWRfY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIuZW5yb2xlZF9jb3Vyc2VzLmJlbG9uZ3NUbyhkYi51c2Vycywge1xuICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgYXM6ICd1c2VyJ1xufSlcblxuLy8gY29uc29sZS5sb2coJyMjIyMjIycsIGRiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICAgIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgLy8gICAgIFVzZXIuaGFzTWFueShtb2RlbHMuQ291cnNlLCB7XG4gICAgICAgIC8vICAgICAgICAgZm9yZWlnbktleTogJ3VzZXJJZCdcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICB9O1xuICAgIFVzZXIuaW5pdCh7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpc0VtYWlsUHVibGljOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBkZXNpZ25hdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICAgICAgfSxcbiAgICAgICAgYWJvdXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhbnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueVVybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpbnRlcmVzdHM6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmRSZXNldFRva2VuOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRFxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZFVwZGF0ZWRBdDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxSZXNldFRva2VuOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRFxuICAgICAgICB9LFxuICAgICAgICBwcm9maWxlUGhvdG86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGZiX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICB0d191cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdGFfdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGluX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbENvbmZpcm1lZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsQ29uZmlybWVkQXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfYXBwbHk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX2NvbmZpcm1lZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU5cbiAgICAgICAgfSxcbiAgICAgICAgYXNfdGVhY2hlcl9jb25maXJtZWRfYXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfcmVxX2Rlc2M6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5FTlVNLFxuICAgICAgICAgICAgdmFsdWVzOiBbJ3N0dWRlbnQnLCAnYWRtaW4nLCAndGVhY2hlciddLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnc3R1ZGVudCdcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhZ3JlZWRUZXJtczoge1xuICAgICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBzZXF1ZWxpemUsXG4gICAgICAgIG1vZGVsTmFtZTogJ1VzZXInLFxuICAgIH0pO1xuICAgIHJldHVybiBVc2VyO1xufTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICBjbGFzcyBWaWRlbyBleHRlbmRzIE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIC8vIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgLy8gICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgIC8vIH1cbiAgfTtcbiAgVmlkZW8uaW5pdCh7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgdmlkZW9fdXJsOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgIH0sXG4gICAgb3JkZXI6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgIH0sXG4gICAgY291cnNlSWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdDb3Vyc2VzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ2NvdXJzZUlkJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXJJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ1VzZXJzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ3VzZXJJZCcsXG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ1ZpZGVvJyxcbiAgfSk7XG4gIHJldHVybiBWaWRlbztcbn07IiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICdAL2xpYi9pbml0LW1pZGRsZXdhcmUnXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IFxuICAgIGNvdXJzZXMgYXMgQ291cnNlLFxuICAgIHVzZXJzIGFzIFVzZXIsXG4gICAgZW5yb2xlZF9jb3Vyc2VzIGFzIEVucm9sZWRfY291cnNlc1xufSBmcm9tICdAL21vZGVscy9pbmRleCdcblxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gICAgLy8gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvY29ycyNjb25maWd1cmF0aW9uLW9wdGlvbnNcbiAgICBDb3JzKHtcbiAgICAgICAgLy8gT25seSBhbGxvdyByZXF1ZXN0cyB3aXRoIEdFVCwgUE9TVCBhbmQgT1BUSU9OU1xuICAgICAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ09QVElPTlMnLCAnREVMRVRFJywgJ1BVVCddLFxuICAgIH0pXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXG4gICAgaWYoIShcImF1dGhvcml6YXRpb25cIiBpbiByZXEuaGVhZGVycykpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe21lc3NhZ2U6IFwiTm8gYXV0b3JpemF0aW9uIHRva2VuXCJ9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHVzZXJJZCB9ID0gand0LnZlcmlmeShyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICAgICAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgQ291cnNlLmZpbmRBbGwoe1xuICAgICAgICAgICAgb3JkZXI6IFtcbiAgICAgICAgICAgICAgICBbJ2NyZWF0ZWRBdCcsICdERVNDJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgICAgICAgICBtb2RlbDogVXNlciwgYXM6ICd1c2VyJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2lkJywgJ25hbWUnLCAncHJvZmlsZVBob3RvJ11cbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG1vZGVsOiBFbnJvbGVkX2NvdXJzZXMsIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2NvdXJzZUlkJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzLnNlbmQoe2NvdXJzZXN9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cblxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiTW9kZWwiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIlNlcXVlbGl6ZSIsIkNvdXJzZSIsImluaXQiLCJpZCIsInR5cGUiLCJVVUlEIiwiZGVmYXVsdFZhbHVlIiwiVVVJRFY0IiwicHJpbWFyeUtleSIsInRpdGxlIiwiU1RSSU5HIiwib3ZlcnZpZXciLCJURVhUIiwicHJpY2UiLCJGTE9BVCIsImZyZWUiLCJCT09MRUFOIiwicHVibGlzaGVkIiwicHJvZmlsZVBob3RvIiwiY292ZXJQaG90byIsImNvdXJlc2VfcHJldmlld19pbWciLCJjb3Vyc2VfcHJldmlld192aWRlbyIsImR1cmF0aW9uIiwibGVzc29ucyIsImFjY2VzcyIsImNhdGVnb3J5IiwidXNlcklkIiwib25EZWxldGUiLCJyZWZlcmVuY2VzIiwibW9kZWwiLCJrZXkiLCJhcyIsIm1vZGVsTmFtZSIsIkVucm9sZWRfY291cnNlcyIsImFzc29jaWF0ZSIsIm1vZGVscyIsInBheW1lbnRfZW1haWwiLCJjb3N0IiwiSU5URUdFUiIsImNvdXJzZUlkIiwiZnMiLCJwYXRoIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiZW52IiwiY29uZmlnIiwiX19kaXJuYW1lIiwiZGIiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicHJvY2VzcyIsImRhdGFiYXNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJzIiwiY291cnNlcyIsInZpZGVvcyIsImVucm9sZWRfY291cnNlcyIsImhhc01hbnkiLCJmb3JlaWduS2V5IiwiYmVsb25nc1RvIiwiVXNlciIsIm5hbWUiLCJlbWFpbCIsImlzRW1haWxQdWJsaWMiLCJkZXNpZ25hdGlvbiIsImFib3V0IiwibG9jYXRpb24iLCJwaG9uZSIsImNvbXBhbnkiLCJjb21wYW55VXJsIiwiaW50ZXJlc3RzIiwicGFzc3dvcmRSZXNldFRva2VuIiwicGFzc3dvcmRVcGRhdGVkQXQiLCJEQVRFIiwiZW1haWxSZXNldFRva2VuIiwiZ2VuZGVyIiwiZmJfdXJsIiwidHdfdXJsIiwiaW5zdGFfdXJsIiwiaW5fdXJsIiwiZW1haWxDb25maXJtZWQiLCJlbWFpbENvbmZpcm1lZEF0IiwiYXNfdGVhY2hlcl9hcHBseSIsImFzX3RlYWNoZXJfY29uZmlybWVkIiwiYXNfdGVhY2hlcl9jb25maXJtZWRfYXQiLCJhc190ZWFjaGVyX3JlcV9kZXNjIiwicm9sZSIsIkVOVU0iLCJ2YWx1ZXMiLCJhY3RpdmUiLCJhZ3JlZWRUZXJtcyIsImFsbG93TnVsbCIsIlZpZGVvIiwidmlkZW9fdXJsIiwib3JkZXIiLCJkZXNjcmlwdGlvbiIsIkNvcnMiLCJqd3QiLCJjb3JzIiwibWV0aG9kcyIsImhlYWRlcnMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInZlcmlmeSIsImF1dGhvcml6YXRpb24iLCJKV1RfU0VDUkVUIiwiZmluZEFsbCIsIndoZXJlIiwiaW5jbHVkZSIsImF0dHJpYnV0ZXMiLCJzZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==