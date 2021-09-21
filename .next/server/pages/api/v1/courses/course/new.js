"use strict";
(() => {
var exports = {};
exports.id = "pages/api/v1/courses/course/new";
exports.ids = ["pages/api/v1/courses/course/new"];
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

/***/ "./pages/api/v1/courses/course/new.js":
/*!********************************************!*\
  !*** ./pages/api/v1/courses/course/new.js ***!
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

  const {
    title,
    overview,
    price,
    published,
    duration,
    lessons,
    category,
    profile,
    cover,
    preview,
    course_preview_video
  } = req.body;

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
    await _models_index__WEBPACK_IMPORTED_MODULE_3__.courses.create({
      title,
      overview,
      price,
      published,
      duration,
      lessons,
      category,
      profilePhoto: profile,
      coverPhoto: cover,
      course_preview_img: preview,
      course_preview_video,
      userId
    });
    res.send("Congratulations! Successfully created the course.");
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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/v1/courses/course/new.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL2VkZW15LWFwcC1hcGkvLi9tb2RlbHMvY291cnNlLmpzIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvLi9tb2RlbHMvZW5yb2xlZF9jb3Vyc2VzLmpzIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvLi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS8uL21vZGVscy91c2VyLmpzIiwid2VicGFjazovL2VkZW15LWFwcC1hcGkvLi9tb2RlbHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS8uL3BhZ2VzL2FwaS92MS9jb3Vyc2VzL2NvdXJzZS9uZXcuanMiLCJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZWRlbXktYXBwLWFwaS9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9lZGVteS1hcHAtYXBpL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcbi8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XG4gICAgcmV0dXJuIChyZXEsIHJlcykgPT5cbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbn0iLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gICAgTW9kZWxcbn0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgY2xhc3MgQ291cnNlIGV4dGVuZHMgTW9kZWwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXG4gICAgICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcbiAgICAgICAgLy8gICAgIC8vIGRlZmluZSBhc3NvY2lhdGlvbiBoZXJlXG4gICAgICAgIC8vICAgICBDb3Vyc2UuYmVsb25nc1RvKG1vZGVscy5Vc2VyLCB7XG4gICAgICAgIC8vICAgICAgICAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gICAgICAgIC8vICAgICAgICAgb25EZWxldGU6ICdDQVNDQURFJ1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9O1xuICAgIFxuICAgIENvdXJzZS5pbml0KHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgICAgICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBvdmVydmlldzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5GTE9BVFxuICAgICAgICB9LFxuICAgICAgICBmcmVlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTlxuICAgICAgICB9LFxuICAgICAgICBwdWJsaXNoZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBwcm9maWxlUGhvdG86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY292ZXJQaG90bzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb3VyZXNlX3ByZXZpZXdfaW1nOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvdXJzZV9wcmV2aWV3X3ZpZGVvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGxlc3NvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJJZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgICAgIG1vZGVsOiAnVXNlcnMnLFxuICAgICAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgICAgICBhczogJ3VzZXJJZCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIHNlcXVlbGl6ZSxcbiAgICAgICAgbW9kZWxOYW1lOiAnQ291cnNlJyxcbiAgICB9KTtcbiAgICByZXR1cm4gQ291cnNlO1xufTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICBjbGFzcyBFbnJvbGVkX2NvdXJzZXMgZXh0ZW5kcyBNb2RlbCB7XG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgKiBUaGUgYG1vZGVscy9pbmRleGAgZmlsZSB3aWxsIGNhbGwgdGhpcyBtZXRob2QgYXV0b21hdGljYWxseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICB9XG4gIH07XG4gIEVucm9sZWRfY291cnNlcy5pbml0KHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBwYXltZW50X2VtYWlsOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfSxcbiAgICBjb3N0OiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgIH0sXG4gICAgY291cnNlSWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdDb3Vyc2VzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ2NvdXJzZUlkJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXJJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ1VzZXJzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ3VzZXJJZCcsXG4gICAgICB9XG4gICAgfSxcbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICBtb2RlbE5hbWU6ICdFbnJvbGVkX2NvdXJzZXMnLFxuICB9KTtcbiAgcmV0dXJuIEVucm9sZWRfY291cnNlcztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gbWFpbiBtb2RlbCBmaWxlXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanNvbicpW2Vudl07XG5jb25zdCBkYiA9IHt9O1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IENvdXJzZSBmcm9tICcuL2NvdXJzZSdcbmltcG9ydCBWaWRlbyBmcm9tICcuL3ZpZGVvJ1xuaW1wb3J0IEVucm9sZWRfY291cnNlcyBmcm9tICcuL2Vucm9sZWRfY291cnNlcydcblxubGV0IHNlcXVlbGl6ZTtcbmlmIChjb25maWcudXNlX2Vudl92YXJpYWJsZSkge1xuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcbn0gZWxzZSB7XG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKTtcbn1cblxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuXG5kYi51c2VycyA9IFVzZXIoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5kYi5jb3Vyc2VzID0gQ291cnNlKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxuZGIudmlkZW9zID0gVmlkZW8oc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5kYi5lbnJvbGVkX2NvdXJzZXMgPSBFbnJvbGVkX2NvdXJzZXMoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIHVzZXIgYW5kIGNvdXJzZVxuZGIudXNlcnMuaGFzTWFueShkYi5jb3Vyc2VzLCB7IFxuICBhczogJ2NvdXJzZXMnLFxuICBmb3JlaWduS2V5OiAndXNlcklkJ1xufSlcbmRiLmNvdXJzZXMuYmVsb25nc1RvKGRiLnVzZXJzLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ3VzZXInXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCBjb3Vyc2UgYW5kIHZpZGVvc1xuZGIuY291cnNlcy5oYXNNYW55KGRiLnZpZGVvcywgeyBcbiAgYXM6ICd2aWRlb3MnLFxuICBmb3JlaWduS2V5OiAnY291cnNlSWQnXG59KVxuZGIudmlkZW9zLmJlbG9uZ3NUbyhkYi5jb3Vyc2VzLCB7XG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCcsXG4gIGFzOiAnY291cnNlJ1xufSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgdmlkZW9zXG5kYi51c2Vycy5oYXNNYW55KGRiLnZpZGVvcywgeyBcbiAgYXM6ICd2aWRlb3MnLFxuICBmb3JlaWduS2V5OiAndXNlcklkJ1xufSlcbmRiLnZpZGVvcy5iZWxvbmdzVG8oZGIuY291cnNlcywge1xuICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgYXM6ICd1c2VyJ1xufSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggY291cnNlIGFuZCBlbnJvbGVkXG5kYi5jb3Vyc2VzLmhhc01hbnkoZGIuZW5yb2xlZF9jb3Vyc2VzLCB7IFxuICBhczogJ2Vucm9sZWRfY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCdcbn0pXG5kYi5lbnJvbGVkX2NvdXJzZXMuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJyxcbiAgYXM6ICdjb3Vyc2UnXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCB1c2VyIGFuZCBlbnJvbGVkXG5kYi51c2Vycy5oYXNNYW55KGRiLmVucm9sZWRfY291cnNlcywgeyBcbiAgYXM6ICdlbnJvbGVkX2NvdXJzZXMnLFxuICBmb3JlaWduS2V5OiAndXNlcklkJ1xufSlcbmRiLmVucm9sZWRfY291cnNlcy5iZWxvbmdzVG8oZGIudXNlcnMsIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAndXNlcidcbn0pXG5cbi8vIGNvbnNvbGUubG9nKCcjIyMjIyMnLCBkYilcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgICBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXG4gICAgICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcbiAgICAgICAgLy8gICAgIC8vIGRlZmluZSBhc3NvY2lhdGlvbiBoZXJlXG4gICAgICAgIC8vICAgICBVc2VyLmhhc01hbnkobW9kZWxzLkNvdXJzZSwge1xuICAgICAgICAvLyAgICAgICAgIGZvcmVpZ25LZXk6ICd1c2VySWQnXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9XG4gICAgfTtcbiAgICBVc2VyLmluaXQoe1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaXNFbWFpbFB1YmxpYzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZGVzaWduYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIGFib3V0OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb21wYW55OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhbnlVcmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJlc3RzOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkUmVzZXRUb2tlbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSURcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmRVcGRhdGVkQXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsUmVzZXRUb2tlbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSURcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZmlsZVBob3RvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGdlbmRlcjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBmYl91cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgdHdfdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGluc3RhX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpbl91cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxDb25maXJtZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBlbWFpbENvbmZpcm1lZEF0OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX2FwcGx5OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgYXNfdGVhY2hlcl9jb25maXJtZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfY29uZmlybWVkX2F0OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX3JlcV9kZXNjOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICByb2xlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuRU5VTSxcbiAgICAgICAgICAgIHZhbHVlczogWydzdHVkZW50JywgJ2FkbWluJywgJ3RlYWNoZXInXSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ3N0dWRlbnQnXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYWdyZWVkVGVybXM6IHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc2VxdWVsaXplLFxuICAgICAgICBtb2RlbE5hbWU6ICdVc2VyJyxcbiAgICB9KTtcbiAgICByZXR1cm4gVXNlcjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgY2xhc3MgVmlkZW8gZXh0ZW5kcyBNb2RlbCB7XG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgKiBUaGUgYG1vZGVscy9pbmRleGAgZmlsZSB3aWxsIGNhbGwgdGhpcyBtZXRob2QgYXV0b21hdGljYWxseS5cbiAgICAgKi9cbiAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgIC8vICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAvLyB9XG4gIH07XG4gIFZpZGVvLmluaXQoe1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHZpZGVvX3VybDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICB9LFxuICAgIG9yZGVyOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICB9LFxuICAgIGNvdXJzZUlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAnQ291cnNlcycsXG4gICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgYXM6ICdjb3Vyc2VJZCcsXG4gICAgICB9XG4gICAgfSxcbiAgICB1c2VySWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdVc2VycycsXG4gICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgYXM6ICd1c2VySWQnLFxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICBtb2RlbE5hbWU6ICdWaWRlbycsXG4gIH0pO1xuICByZXR1cm4gVmlkZW87XG59OyIsImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgaW5pdE1pZGRsZXdhcmUgZnJvbSAnQC9saWIvaW5pdC1taWRkbGV3YXJlJ1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgeyBjb3Vyc2VzIGFzIENvdXJzZSB9IGZyb20gJ0AvbW9kZWxzL2luZGV4J1xuXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcbiAgICAvLyBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xuICAgIENvcnMoe1xuICAgICAgICAvLyBPbmx5IGFsbG93IHJlcXVlc3RzIHdpdGggR0VULCBQT1NUIGFuZCBPUFRJT05TXG4gICAgICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnT1BUSU9OUycsICdERUxFVEUnLCAnUFVUJ10sXG4gICAgfSlcbilcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcbiAgICBpZighKFwiYXV0aG9yaXphdGlvblwiIGluIHJlcS5oZWFkZXJzKSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7bWVzc2FnZTogXCJObyBhdXRvcml6YXRpb24gdG9rZW5cIn0pO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBvdmVydmlldyxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIHB1Ymxpc2hlZCxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGxlc3NvbnMsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBwcm9maWxlLFxuICAgICAgICBjb3ZlcixcbiAgICAgICAgcHJldmlldyxcbiAgICAgICAgY291cnNlX3ByZXZpZXdfdmlkZW9cbiAgICB9ID0gcmVxLmJvZHlcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcklkIH0gPSBqd3QudmVyaWZ5KHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXG4gICAgICAgIGF3YWl0IENvdXJzZS5jcmVhdGUoe1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBvdmVydmlldyxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgcHVibGlzaGVkLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBsZXNzb25zLFxuICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICBwcm9maWxlUGhvdG86IHByb2ZpbGUsXG4gICAgICAgICAgICBjb3ZlclBob3RvOiBjb3ZlcixcbiAgICAgICAgICAgIGNvdXJzZV9wcmV2aWV3X2ltZzogcHJldmlldyxcbiAgICAgICAgICAgIGNvdXJzZV9wcmV2aWV3X3ZpZGVvLFxuICAgICAgICAgICAgdXNlcklkXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzLnNlbmQoXCJDb25ncmF0dWxhdGlvbnMhIFN1Y2Nlc3NmdWxseSBjcmVhdGVkIHRoZSBjb3Vyc2UuXCIpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sIm5hbWVzIjpbImluaXRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJNb2RlbCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiU2VxdWVsaXplIiwiQ291cnNlIiwiaW5pdCIsImlkIiwidHlwZSIsIlVVSUQiLCJkZWZhdWx0VmFsdWUiLCJVVUlEVjQiLCJwcmltYXJ5S2V5IiwidGl0bGUiLCJTVFJJTkciLCJvdmVydmlldyIsIlRFWFQiLCJwcmljZSIsIkZMT0FUIiwiZnJlZSIsIkJPT0xFQU4iLCJwdWJsaXNoZWQiLCJwcm9maWxlUGhvdG8iLCJjb3ZlclBob3RvIiwiY291cmVzZV9wcmV2aWV3X2ltZyIsImNvdXJzZV9wcmV2aWV3X3ZpZGVvIiwiZHVyYXRpb24iLCJsZXNzb25zIiwiYWNjZXNzIiwiY2F0ZWdvcnkiLCJ1c2VySWQiLCJvbkRlbGV0ZSIsInJlZmVyZW5jZXMiLCJtb2RlbCIsImtleSIsImFzIiwibW9kZWxOYW1lIiwiRW5yb2xlZF9jb3Vyc2VzIiwiYXNzb2NpYXRlIiwibW9kZWxzIiwicGF5bWVudF9lbWFpbCIsImNvc3QiLCJJTlRFR0VSIiwiY291cnNlSWQiLCJmcyIsInBhdGgiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJlbnYiLCJjb25maWciLCJfX2Rpcm5hbWUiLCJkYiIsInVzZV9lbnZfdmFyaWFibGUiLCJwcm9jZXNzIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlcnMiLCJjb3Vyc2VzIiwidmlkZW9zIiwiZW5yb2xlZF9jb3Vyc2VzIiwiaGFzTWFueSIsImZvcmVpZ25LZXkiLCJiZWxvbmdzVG8iLCJVc2VyIiwibmFtZSIsImVtYWlsIiwiaXNFbWFpbFB1YmxpYyIsImRlc2lnbmF0aW9uIiwiYWJvdXQiLCJsb2NhdGlvbiIsInBob25lIiwiY29tcGFueSIsImNvbXBhbnlVcmwiLCJpbnRlcmVzdHMiLCJwYXNzd29yZFJlc2V0VG9rZW4iLCJwYXNzd29yZFVwZGF0ZWRBdCIsIkRBVEUiLCJlbWFpbFJlc2V0VG9rZW4iLCJnZW5kZXIiLCJmYl91cmwiLCJ0d191cmwiLCJpbnN0YV91cmwiLCJpbl91cmwiLCJlbWFpbENvbmZpcm1lZCIsImVtYWlsQ29uZmlybWVkQXQiLCJhc190ZWFjaGVyX2FwcGx5IiwiYXNfdGVhY2hlcl9jb25maXJtZWQiLCJhc190ZWFjaGVyX2NvbmZpcm1lZF9hdCIsImFzX3RlYWNoZXJfcmVxX2Rlc2MiLCJyb2xlIiwiRU5VTSIsInZhbHVlcyIsImFjdGl2ZSIsImFncmVlZFRlcm1zIiwiYWxsb3dOdWxsIiwiVmlkZW8iLCJ2aWRlb191cmwiLCJvcmRlciIsImRlc2NyaXB0aW9uIiwiQ29ycyIsImp3dCIsImNvcnMiLCJtZXRob2RzIiwiaGVhZGVycyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicHJvZmlsZSIsImNvdmVyIiwicHJldmlldyIsImJvZHkiLCJ2ZXJpZnkiLCJhdXRob3JpemF0aW9uIiwiSldUX1NFQ1JFVCIsImNyZWF0ZSIsImNvdXJzZV9wcmV2aWV3X2ltZyIsInNlbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9