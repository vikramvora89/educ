"use strict";
self["webpackHotUpdate_N_E"]("pages/teacher/course/create",{

/***/ "./pages/teacher/course/create.js":
/*!****************************************!*\
  !*** ./pages/teacher/course/create.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Common/PageBanner */ "./components/Common/PageBanner.js");
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\xampp\\htdocs\\udemy\\admin-dashboard-with-api\\pages\\teacher\\course\\create.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var INIT_COURSE = {
  title: '',
  overview: '',
  price: 0.00,
  profilePhoto: '',
  published: true,
  coverPhoto: '',
  course_preview_img: '',
  course_preview_video: '',
  duration: '',
  lessons: '',
  category: ''
};

var Create = function Create() {
  _s();

  var _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(),
      token = _parseCookies.token;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(INIT_COURSE),
      _React$useState2 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      course = _React$useState2[0],
      setCourse = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(''),
      _React$useState4 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      profilePreview = _React$useState4[0],
      setProfilePreview = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(''),
      _React$useState6 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),
      coverPhotoPreview = _React$useState6[0],
      setCoverPhotoPreview = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(''),
      _React$useState8 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState7, 2),
      coursePreviewImg = _React$useState8[0],
      setCoursePreviewImg = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false),
      _React$useState10 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState9, 2),
      imageUploading = _React$useState10[0],
      setImageUploading = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false),
      _React$useState12 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState11, 2),
      loading = _React$useState12[0],
      setLoading = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(true),
      _React$useState14 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState13, 2),
      disabled = _React$useState14[0],
      setDisabled = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(),
      _React$useState16 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState15, 2),
      error = _React$useState16[0],
      setError = _React$useState16[1];

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function () {
    var isCourse = Object.values(course).every(function (el) {
      return Boolean(el);
    });
    isCourse ? setDisabled(false) : setDisabled(true);
  }, [course]);

  var handleChange = function handleChange(e) {
    // console.log(d.value)
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        files = _e$target.files;

    if (name === 'profilePhoto') {
      var profilePhotoSize = files[0].size / 1024 / 1024;

      if (profilePhotoSize > 2) {
        addToast('The profile photo size greater than 2 MB. Make sure less than 2 MB.', {
          appearance: 'error'
        });
        e.target.value = null;
        return;
      }

      setCourse(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          profilePhoto: files[0]
        });
      });
      setProfilePreview(window.URL.createObjectURL(files[0]));
    } else if (name === 'coverPhoto') {
      var coverPhotoSize = files[0].size / 1024 / 1024;

      if (coverPhotoSize > 2) {
        addToast('The cover photo size greater than 2 MB. Make sure less than 2 MB.', {
          appearance: 'error'
        });
        e.target.value = null;
        return;
      }

      setCourse(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          coverPhoto: files[0]
        });
      });
      setCoverPhotoPreview(window.URL.createObjectURL(files[0]));
    } else if (name === 'course_preview_img') {
      var course_preview_img = files[0].size / 1024 / 1024;

      if (course_preview_img > 2) {
        addToast('The course preview omage size greater than 2 MB. Make sure less than 2 MB.', {
          appearance: 'error'
        });
        e.target.value = null;
        return;
      }

      setCourse(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          course_preview_img: files[0]
        });
      });
      setCoursePreviewImg(window.URL.createObjectURL(files[0]));
    } else {
      setCourse(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value));
      });
    } // console.log(course);

  };

  var handleProfilePhotoUpload = /*#__PURE__*/function () {
    var _ref = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var data, response, profilePhotoUrl;
      return C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setImageUploading(true); // console.log(post.file_url)

              data = new FormData();
              data.append('file', course.profilePhoto);
              data.append('upload_preset', 'cik8fmg0');
              data.append('cloud_name', 'dgybc86l6');

              if (!course.profilePhoto) {
                _context.next = 9;
                break;
              }

              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().post("https://api.cloudinary.com/v1_1/dgybc86l6/image/upload", data);

            case 8:
              response = _context.sent;

            case 9:
              profilePhotoUrl = response.data.url;
              return _context.abrupt("return", profilePhotoUrl);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleProfilePhotoUpload() {
      return _ref.apply(this, arguments);
    };
  }();

  var handlecoverPhotoUpload = /*#__PURE__*/function () {
    var _ref2 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
      var data, response, cover_photo_url;
      return C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setImageUploading(true); // console.log(post.file_url)

              data = new FormData();
              data.append('file', course.coverPhoto);
              data.append('upload_preset', 'cik8fmg0');
              data.append('cloud_name', 'dgybc86l6');

              if (!course.coverPhoto) {
                _context2.next = 9;
                break;
              }

              _context2.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().post("https://api.cloudinary.com/v1_1/dgybc86l6/image/upload", data);

            case 8:
              response = _context2.sent;

            case 9:
              cover_photo_url = response.data.url;
              return _context2.abrupt("return", cover_photo_url);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handlecoverPhotoUpload() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handlePreviewPhotoUpload = /*#__PURE__*/function () {
    var _ref3 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
      var data, response, preview_photo_response_url;
      return C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setImageUploading(true); // console.log(post.file_url)

              data = new FormData();
              data.append('file', course.course_preview_img);
              data.append('upload_preset', 'cik8fmg0');
              data.append('cloud_name', 'dgybc86l6');

              if (!course.course_preview_img) {
                _context3.next = 9;
                break;
              }

              _context3.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().post("https://api.cloudinary.com/v1_1/dgybc86l6/image/upload", data);

            case 8:
              response = _context3.sent;

            case 9:
              preview_photo_response_url = response.data.url;
              setImageUploading(false);
              setLoading(true);
              return _context3.abrupt("return", preview_photo_response_url);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handlePreviewPhotoUpload() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleCourseSubmit = /*#__PURE__*/function () {
    var _ref4 = (0,C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(e) {
      var profile, cover, preview, url, title, overview, price, published, duration, lessons, category, course_preview_video, payload, response;
      return C_xampp_htdocs_udemy_admin_dashboard_with_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              _context4.prev = 1;
              profile = '';
              cover = '';
              preview = '';

              if (!(course.profilePhoto && course.coverPhoto && course.course_preview_img)) {
                _context4.next = 18;
                break;
              }

              _context4.next = 8;
              return handleProfilePhotoUpload();

            case 8:
              profile = _context4.sent;
              _context4.next = 11;
              return handlecoverPhotoUpload();

            case 11:
              cover = _context4.sent;
              _context4.next = 14;
              return handlePreviewPhotoUpload();

            case 14:
              preview = _context4.sent;
              profile = profile.replace(/^http:\/\//i, 'https://');
              cover = cover.replace(/^http:\/\//i, 'https://');
              preview = preview.replace(/^http:\/\//i, 'https://');

            case 18:
              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__.default, "/api/v1/courses/course/new");
              title = course.title, overview = course.overview, price = course.price, published = course.published, duration = course.duration, lessons = course.lessons, category = course.category, course_preview_video = course.course_preview_video;
              payload = {
                title: title,
                overview: overview,
                price: price,
                published: published,
                duration: duration,
                lessons: lessons,
                category: category,
                profile: profile,
                cover: cover,
                preview: preview,
                course_preview_video: course_preview_video
              };
              _context4.next = 23;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().post(url, payload, {
                headers: {
                  Authorization: token
                }
              });

            case 23:
              response = _context4.sent;
              // console.log(response.data)
              setLoading(false);
              setCourse(INIT_COURSE);
              setProfilePreview('');
              setCoverPhotoPreview('');
              setCoursePreviewImg('');
              react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.default.success(response.data);
              router.replace('/teacher/course/upload-course-video');
              _context4.next = 37;
              break;

            case 33:
              _context4.prev = 33;
              _context4.t0 = _context4["catch"](1);
              (0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_10__.default)(_context4.t0, setError);
              react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.default.error(error);

            case 37:
              _context4.prev = 37;
              setLoading(false);
              return _context4.finish(37);

            case 40:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 33, 37, 40]]);
    }));

    return function handleCourseSubmit(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_11__.default, {
      pageTitle: "Teacher Course Create",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Teacher Course Create"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "ptb-100",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: "col-md-4 col-lg-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: "td-sidebar",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_12__.default, {
                    href: "/teacher/courses",
                    activeClassName: "active",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
                      children: "My Courses"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_12__.default, {
                    href: "/teacher/course/create",
                    activeClassName: "active",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
                      children: "Create A Course"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_12__.default, {
                    href: "/teacher/courses/course-edit",
                    activeClassName: "active",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
                      children: "Edit My Course"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_12__.default, {
                    href: "/teacher/course/upload-course-video",
                    activeClassName: "active",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
                      children: "Upload Course Video"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: "col-md-8 col-lg-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: "border-box",
              children: [imageUploading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h3", {
                className: "loading-spinner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "d-table",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                    className: "d-table-cell",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__.Spinner, {
                      color: "primary"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 49
                    }, _this), " Image Uploading...."]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 37
              }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h3", {
                className: "loading-spinner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "d-table",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                    className: "d-table-cell",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__.Spinner, {
                      color: "success"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 49
                    }, _this), " Wait...."]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("form", {
                onSubmit: handleCourseSubmit,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: "Course Title"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "text",
                    placeholder: "Enter course title",
                    className: "form-control",
                    name: "title",
                    value: course.title,
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: "Course Overview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("textarea", {
                    type: "text",
                    placeholder: "Enter course overview",
                    className: "form-control",
                    name: "overview",
                    rows: "10",
                    value: course.overview,
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: "Course Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "number",
                    placeholder: "Enter course price",
                    className: "form-control",
                    name: "price",
                    value: course.price,
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: "Course Lessons"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 300,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "text",
                    placeholder: "30 Lessons",
                    className: "form-control",
                    name: "lessons",
                    value: course.lessons,
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: "Course Duration (Whole numbers of hours & minutes)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 312,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "text",
                    placeholder: "10 hours 30 minutes",
                    className: "form-control",
                    name: "duration",
                    value: course.duration,
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: "Categories"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "text",
                    placeholder: "React, Ruby, Rails",
                    className: "form-control",
                    name: "category",
                    value: course.category,
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: ["Course Profile (", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("i", {
                      children: "Image less than 2 MB & size 750x500"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 336,
                      columnNumber: 64
                    }, _this), ")"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 336,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "file",
                    name: "profilePhoto",
                    accept: "image/*",
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 340,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
                    src: profilePreview,
                    className: "mxw-200 mt-20"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 349,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 335,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: ["Course Cover Photo (", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("i", {
                      children: "Image less than 2 MB & size 1920x500"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 353,
                      columnNumber: 68
                    }, _this), ")"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 355,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "file",
                    name: "coverPhoto",
                    accept: "image/*",
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 364,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
                    src: coverPhotoPreview,
                    className: "mxw-200 mt-20"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: "Course Preview Video URL"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "text",
                    placeholder: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
                    className: "form-control",
                    name: "course_preview_video",
                    value: course.course_preview_video,
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 371,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
                    children: ["Course Preview Image (", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("i", {
                      children: "Image less than 2 MB & size 750x500"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 382,
                      columnNumber: 70
                    }, _this), ")"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 382,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
                    type: "file",
                    name: "course_preview_img",
                    accept: "image/*",
                    onChange: handleChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 386,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 393,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
                    src: coursePreviewImg,
                    className: "mxw-200 mt-20"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 395,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 381,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
                  className: "default-btn",
                  disabled: imageUploading || disabled || loading,
                  type: "submit",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("i", {
                    className: "flaticon-right-chevron"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 403,
                    columnNumber: 41
                  }, _this), "Create", imageUploading || loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__.Spinner, {
                    color: "success"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 405,
                    columnNumber: 72
                  }, _this) : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 9
  }, _this);
};

_s(Create, "p0Khl59t3u7dfGxRRdAbF3OL5b8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];
});

_c = Create;
/* harmony default export */ __webpack_exports__["default"] = (Create);

var _c;

$RefreshReg$(_c, "Create");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVhY2hlci9jb3Vyc2UvY3JlYXRlLmE1ZmYwMjc5OWE0NjRmNmQyY2ZhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1VLFdBQVcsR0FBRztBQUNoQkMsRUFBQUEsS0FBSyxFQUFFLEVBRFM7QUFFaEJDLEVBQUFBLFFBQVEsRUFBRSxFQUZNO0FBR2hCQyxFQUFBQSxLQUFLLEVBQUUsSUFIUztBQUloQkMsRUFBQUEsWUFBWSxFQUFFLEVBSkU7QUFLaEJDLEVBQUFBLFNBQVMsRUFBRSxJQUxLO0FBTWhCQyxFQUFBQSxVQUFVLEVBQUUsRUFOSTtBQU9oQkMsRUFBQUEsa0JBQWtCLEVBQUUsRUFQSjtBQVFoQkMsRUFBQUEsb0JBQW9CLEVBQUUsRUFSTjtBQVNoQkMsRUFBQUEsUUFBUSxFQUFFLEVBVE07QUFVaEJDLEVBQUFBLE9BQU8sRUFBRSxFQVZPO0FBV2hCQyxFQUFBQSxRQUFRLEVBQUU7QUFYTSxDQUFwQjs7QUFjQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCLHNCQUFrQnJCLHFEQUFZLEVBQTlCO0FBQUEsTUFBUXNCLEtBQVIsaUJBQVFBLEtBQVI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHbkIsc0RBQVMsRUFBeEI7O0FBRUEsd0JBQTRCTCxxREFBQSxDQUFlVSxXQUFmLENBQTVCO0FBQUE7QUFBQSxNQUFPZ0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EseUJBQTRDM0IscURBQUEsQ0FBZSxFQUFmLENBQTVDO0FBQUE7QUFBQSxNQUFPNEIsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0EseUJBQWtEN0IscURBQUEsQ0FBZSxFQUFmLENBQWxEO0FBQUE7QUFBQSxNQUFPOEIsaUJBQVA7QUFB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QUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdOSCxDQXZZRDs7R0FBTWQ7VUFFYWpCOzs7S0FGYmlCO0FBeVlOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RlYWNoZXIvY291cnNlL2NyZWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYmFzZVVybCBmcm9tICdAL3V0aWxzL2Jhc2VVcmwnXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSAnQC91dGlscy9jYXRjaEVycm9ycydcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJ0AvY29tcG9uZW50cy9Db21tb24vUGFnZUJhbm5lcidcbmltcG9ydCBMaW5rIGZyb20gJ0AvdXRpbHMvQWN0aXZlTGluaydcblxuY29uc3QgSU5JVF9DT1VSU0UgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIG92ZXJ2aWV3OiAnJyxcbiAgICBwcmljZTogMC4wMCxcbiAgICBwcm9maWxlUGhvdG86ICcnLFxuICAgIHB1Ymxpc2hlZDogdHJ1ZSxcbiAgICBjb3ZlclBob3RvOiAnJyxcbiAgICBjb3Vyc2VfcHJldmlld19pbWc6ICcnLFxuICAgIGNvdXJzZV9wcmV2aWV3X3ZpZGVvOiAnJyxcbiAgICBkdXJhdGlvbjogJycsXG4gICAgbGVzc29uczogJycsXG4gICAgY2F0ZWdvcnk6ICcnXG59XG5cbmNvbnN0IENyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBbY291cnNlLCBzZXRDb3Vyc2VdID0gUmVhY3QudXNlU3RhdGUoSU5JVF9DT1VSU0UpXG4gICAgY29uc3QgW3Byb2ZpbGVQcmV2aWV3LCBzZXRQcm9maWxlUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbY292ZXJQaG90b1ByZXZpZXcsIHNldENvdmVyUGhvdG9QcmV2aWV3XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtjb3Vyc2VQcmV2aWV3SW1nLCBzZXRDb3Vyc2VQcmV2aWV3SW1nXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtpbWFnZVVwbG9hZGluZywgc2V0SW1hZ2VVcGxvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoKVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNDb3Vyc2UgPSBPYmplY3QudmFsdWVzKGNvdXJzZSkuZXZlcnkoZWwgPT4gQm9vbGVhbihlbCkpXG4gICAgICAgIGlzQ291cnNlID8gc2V0RGlzYWJsZWQoZmFsc2UpIDogc2V0RGlzYWJsZWQodHJ1ZSlcbiAgICB9LCBbY291cnNlXSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkLnZhbHVlKVxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXRcblxuICAgICAgICBpZihuYW1lID09PSAncHJvZmlsZVBob3RvJyl7XG4gICAgICAgICAgICBjb25zdCBwcm9maWxlUGhvdG9TaXplID0gZmlsZXNbMF0uc2l6ZSAvIDEwMjQgLyAxMDI0XG4gICAgICAgICAgICBpZihwcm9maWxlUGhvdG9TaXplID4gMil7XG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoJ1RoZSBwcm9maWxlIHBob3RvIHNpemUgZ3JlYXRlciB0aGFuIDIgTUIuIE1ha2Ugc3VyZSBsZXNzIHRoYW4gMiBNQi4nLCB7IFxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IG51bGxcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENvdXJzZShwcmV2U3RhdGUgPT4gKHsgLi4ucHJldlN0YXRlLCBwcm9maWxlUGhvdG86IGZpbGVzWzBdfSkpXG4gICAgICAgICAgICBzZXRQcm9maWxlUHJldmlldyh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NvdmVyUGhvdG8nKXtcbiAgICAgICAgICAgIGNvbnN0IGNvdmVyUGhvdG9TaXplID0gZmlsZXNbMF0uc2l6ZSAvIDEwMjQgLyAxMDI0XG4gICAgICAgICAgICBpZihjb3ZlclBob3RvU2l6ZSA+IDIpe1xuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCdUaGUgY292ZXIgcGhvdG8gc2l6ZSBncmVhdGVyIHRoYW4gMiBNQi4gTWFrZSBzdXJlIGxlc3MgdGhhbiAyIE1CLicsIHsgXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gbnVsbFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Q291cnNlKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIGNvdmVyUGhvdG86IGZpbGVzWzBdfSkpXG4gICAgICAgICAgICBzZXRDb3ZlclBob3RvUHJldmlldyh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NvdXJzZV9wcmV2aWV3X2ltZycpe1xuICAgICAgICAgICAgY29uc3QgY291cnNlX3ByZXZpZXdfaW1nID0gZmlsZXNbMF0uc2l6ZSAvIDEwMjQgLyAxMDI0XG4gICAgICAgICAgICBpZihjb3Vyc2VfcHJldmlld19pbWcgPiAyKXtcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCgnVGhlIGNvdXJzZSBwcmV2aWV3IG9tYWdlIHNpemUgZ3JlYXRlciB0aGFuIDIgTUIuIE1ha2Ugc3VyZSBsZXNzIHRoYW4gMiBNQi4nLCB7IFxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IG51bGxcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENvdXJzZShwcmV2U3RhdGUgPT4gKHsgLi4ucHJldlN0YXRlLCBjb3Vyc2VfcHJldmlld19pbWc6IGZpbGVzWzBdfSkpXG4gICAgICAgICAgICBzZXRDb3Vyc2VQcmV2aWV3SW1nKHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldENvdXJzZShwcmV2U3RhdGUgPT4gKHsgLi4ucHJldlN0YXRlLCBbbmFtZV06IHZhbHVlIH0pKVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdXJzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZVBob3RvVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRJbWFnZVVwbG9hZGluZyh0cnVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3N0LmZpbGVfdXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBjb3Vyc2UucHJvZmlsZVBob3RvKVxuICAgICAgICBkYXRhLmFwcGVuZCgndXBsb2FkX3ByZXNldCcsICdjaWs4Zm1nMCcpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdjbG91ZF9uYW1lJywgJ2RneWJjODZsNicpXG4gICAgICAgIGxldCByZXNwb25zZVxuICAgICAgICBpZihjb3Vyc2UucHJvZmlsZVBob3RvKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5DTE9VRElOQVJZX1VSTCwgZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9maWxlUGhvdG9VcmwgPSByZXNwb25zZS5kYXRhLnVybFxuXG4gICAgICAgIHJldHVybiBwcm9maWxlUGhvdG9VcmxcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVjb3ZlclBob3RvVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRJbWFnZVVwbG9hZGluZyh0cnVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3N0LmZpbGVfdXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBjb3Vyc2UuY292ZXJQaG90bylcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3VwbG9hZF9wcmVzZXQnLCAnY2lrOGZtZzAnKVxuICAgICAgICBkYXRhLmFwcGVuZCgnY2xvdWRfbmFtZScsICdkZ3liYzg2bDYnKVxuICAgICAgICBsZXQgcmVzcG9uc2VcbiAgICAgICAgaWYoY291cnNlLmNvdmVyUGhvdG8pe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY292ZXJfcGhvdG9fdXJsID0gcmVzcG9uc2UuZGF0YS51cmxcblxuICAgICAgICByZXR1cm4gY292ZXJfcGhvdG9fdXJsXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJldmlld1Bob3RvVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRJbWFnZVVwbG9hZGluZyh0cnVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3N0LmZpbGVfdXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBjb3Vyc2UuY291cnNlX3ByZXZpZXdfaW1nKVxuICAgICAgICBkYXRhLmFwcGVuZCgndXBsb2FkX3ByZXNldCcsICdjaWs4Zm1nMCcpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdjbG91ZF9uYW1lJywgJ2RneWJjODZsNicpXG4gICAgICAgIGxldCByZXNwb25zZVxuXG4gICAgICAgIGlmKGNvdXJzZS5jb3Vyc2VfcHJldmlld19pbWcpe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmlld19waG90b19yZXNwb25zZV91cmwgPSByZXNwb25zZS5kYXRhLnVybFxuICAgICAgICBzZXRJbWFnZVVwbG9hZGluZyhmYWxzZSlcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICByZXR1cm4gcHJldmlld19waG90b19yZXNwb25zZV91cmxcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDb3Vyc2VTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcHJvZmlsZSA9ICcnXG4gICAgICAgICAgICBsZXQgY292ZXIgPSAnJ1xuICAgICAgICAgICAgbGV0IHByZXZpZXcgPSAnJ1xuICAgICAgICAgICAgaWYoY291cnNlLnByb2ZpbGVQaG90byAmJiBjb3Vyc2UuY292ZXJQaG90byAmJiBjb3Vyc2UuY291cnNlX3ByZXZpZXdfaW1nKXtcbiAgICAgICAgICAgICAgICBwcm9maWxlID0gYXdhaXQgaGFuZGxlUHJvZmlsZVBob3RvVXBsb2FkKClcbiAgICAgICAgICAgICAgICBjb3ZlciA9IGF3YWl0IGhhbmRsZWNvdmVyUGhvdG9VcGxvYWQoKVxuICAgICAgICAgICAgICAgIHByZXZpZXcgPSBhd2FpdCBoYW5kbGVQcmV2aWV3UGhvdG9VcGxvYWQoKVxuXG4gICAgICAgICAgICAgICAgcHJvZmlsZSA9IHByb2ZpbGUucmVwbGFjZSgvXmh0dHA6XFwvXFwvL2ksICdodHRwczovLycpO1xuICAgICAgICAgICAgICAgIGNvdmVyID0gY292ZXIucmVwbGFjZSgvXmh0dHA6XFwvXFwvL2ksICdodHRwczovLycpO1xuICAgICAgICAgICAgICAgIHByZXZpZXcgPSBwcmV2aWV3LnJlcGxhY2UoL15odHRwOlxcL1xcLy9pLCAnaHR0cHM6Ly8nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL3YxL2NvdXJzZXMvY291cnNlL25ld2BcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICBvdmVydmlldyxcbiAgICAgICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZWQsXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgbGVzc29ucyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBjb3Vyc2VfcHJldmlld192aWRlb1xuICAgICAgICAgICAgfSA9IGNvdXJzZVxuXG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIG92ZXJ2aWV3LFxuICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICBsZXNzb25zLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgICAgICAgY292ZXIsXG4gICAgICAgICAgICAgICAgcHJldmlldyxcbiAgICAgICAgICAgICAgICBjb3Vyc2VfcHJldmlld192aWRlb1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBwYXlsb2FkLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge0F1dGhvcml6YXRpb246IHRva2VufVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBzZXRDb3Vyc2UoSU5JVF9DT1VSU0UpXG4gICAgICAgICAgICBzZXRQcm9maWxlUHJldmlldygnJylcbiAgICAgICAgICAgIHNldENvdmVyUGhvdG9QcmV2aWV3KCcnKVxuICAgICAgICAgICAgc2V0Q291cnNlUHJldmlld0ltZygnJylcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL3RlYWNoZXIvY291cnNlL3VwbG9hZC1jb3Vyc2UtdmlkZW8nKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNhdGNoRXJyb3JzKGVyciwgc2V0RXJyb3IpXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFBhZ2VCYW5uZXIgXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlPVwiVGVhY2hlciBDb3Vyc2UgQ3JlYXRlXCIgXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VVcmw9XCIvXCIgXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiSG9tZVwiIFxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2VUZXh0PVwiVGVhY2hlciBDb3Vyc2UgQ3JlYXRlXCIgXG4gICAgICAgICAgICAvPiBcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdGItMTAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRkLXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVhY2hlci9jb3Vyc2VzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk15IENvdXJzZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlYWNoZXIvY291cnNlL2NyZWF0ZVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DcmVhdGUgQSBDb3Vyc2U8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlYWNoZXIvY291cnNlcy9jb3Vyc2UtZWRpdFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5FZGl0IE15IENvdXJzZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVhY2hlci9jb3Vyc2UvdXBsb2FkLWNvdXJzZS12aWRlb1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5VcGxvYWQgQ291cnNlIFZpZGVvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VVcGxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImxvYWRpbmctc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJwcmltYXJ5XCIgLz4gSW1hZ2UgVXBsb2FkaW5nLi4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlLWNlbGxcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cInN1Y2Nlc3NcIiAvPiBXYWl0Li4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUNvdXJzZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291cnNlIFRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY291cnNlIHRpdGxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y291cnNlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdXJzZSBPdmVydmlldzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGNvdXJzZSBvdmVydmlld1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm92ZXJ2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjEwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2Uub3ZlcnZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291cnNlIFByaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBjb3Vyc2UgcHJpY2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2UucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291cnNlIExlc3NvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIzMCBMZXNzb25zXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGVzc29uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2UubGVzc29uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3Vyc2UgRHVyYXRpb24gKFdob2xlIG51bWJlcnMgb2YgaG91cnMgJiBtaW51dGVzKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwIGhvdXJzIDMwIG1pbnV0ZXNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2UuZHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcmllczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlYWN0LCBSdWJ5LCBSYWlsc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdXJzZS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3Vyc2UgUHJvZmlsZSAoPGk+SW1hZ2UgbGVzcyB0aGFuIDIgTUIgJiBzaXplIDc1MHg1MDA8L2k+KTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2ZpbGVQaG90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGVQcmV2aWV3fSBjbGFzc05hbWU9XCJteHctMjAwIG10LTIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291cnNlIENvdmVyIFBob3RvICg8aT5JbWFnZSBsZXNzIHRoYW4gMiBNQiAmIHNpemUgMTkyMHg1MDA8L2k+KTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdmVyUGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y292ZXJQaG90b1ByZXZpZXd9IGNsYXNzTmFtZT1cIm14dy0yMDAgbXQtMjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3Vyc2UgUHJldmlldyBWaWRlbyBVUkw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUtlOTBUamU3VlMwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291cnNlX3ByZXZpZXdfdmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y291cnNlLmNvdXJzZV9wcmV2aWV3X3ZpZGVvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdXJzZSBQcmV2aWV3IEltYWdlICg8aT5JbWFnZSBsZXNzIHRoYW4gMiBNQiAmIHNpemUgNzUweDUwMDwvaT4pPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291cnNlX3ByZXZpZXdfaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvdXJzZVByZXZpZXdJbWd9IGNsYXNzTmFtZT1cIm14dy0yMDAgbXQtMjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpbWFnZVVwbG9hZGluZyB8fCBkaXNhYmxlZCB8fCBsb2FkaW5nfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZsYXRpY29uLXJpZ2h0LWNoZXZyb24nPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGltYWdlVXBsb2FkaW5nIHx8IGxvYWRpbmcpID8gPFNwaW5uZXIgY29sb3I9XCJzdWNjZXNzXCIgLz4gOiAnJ31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZSJdLCJuYW1lcyI6WyJSZWFjdCIsInBhcnNlQ29va2llcyIsImF4aW9zIiwiU3Bpbm5lciIsInRvYXN0IiwidXNlUm91dGVyIiwiYmFzZVVybCIsImNhdGNoRXJyb3JzIiwiUGFnZUJhbm5lciIsIkxpbmsiLCJJTklUX0NPVVJTRSIsInRpdGxlIiwib3ZlcnZpZXciLCJwcmljZSIsInByb2ZpbGVQaG90byIsInB1Ymxpc2hlZCIsImNvdmVyUGhvdG8iLCJjb3Vyc2VfcHJldmlld19pbWciLCJjb3Vyc2VfcHJldmlld192aWRlbyIsImR1cmF0aW9uIiwibGVzc29ucyIsImNhdGVnb3J5IiwiQ3JlYXRlIiwidG9rZW4iLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImNvdXJzZSIsInNldENvdXJzZSIsInByb2ZpbGVQcmV2aWV3Iiwic2V0UHJvZmlsZVByZXZpZXciLCJjb3ZlclBob3RvUHJldmlldyIsInNldENvdmVyUGhvdG9QcmV2aWV3IiwiY291cnNlUHJldmlld0ltZyIsInNldENvdXJzZVByZXZpZXdJbWciLCJpbWFnZVVwbG9hZGluZyIsInNldEltYWdlVXBsb2FkaW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsImlzQ291cnNlIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJlbCIsIkJvb2xlYW4iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZmlsZXMiLCJwcm9maWxlUGhvdG9TaXplIiwic2l6ZSIsImFkZFRvYXN0IiwiYXBwZWFyYW5jZSIsInByZXZTdGF0ZSIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvdmVyUGhvdG9TaXplIiwiaGFuZGxlUHJvZmlsZVBob3RvVXBsb2FkIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX1VSTCIsInJlc3BvbnNlIiwicHJvZmlsZVBob3RvVXJsIiwidXJsIiwiaGFuZGxlY292ZXJQaG90b1VwbG9hZCIsImNvdmVyX3Bob3RvX3VybCIsImhhbmRsZVByZXZpZXdQaG90b1VwbG9hZCIsInByZXZpZXdfcGhvdG9fcmVzcG9uc2VfdXJsIiwiaGFuZGxlQ291cnNlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwcm9maWxlIiwiY292ZXIiLCJwcmV2aWV3IiwicmVwbGFjZSIsInBheWxvYWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9