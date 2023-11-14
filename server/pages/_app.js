/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/Navbar.module.css":
/*!**********************************!*\
  !*** ./styles/Navbar.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Navbar_header__NDFlY\",\n\t\"nav\": \"Navbar_nav__1oBjZ\",\n\t\"logo1\": \"Navbar_logo1__DbmFQ\",\n\t\"mainNav\": \"Navbar_mainNav__f9d2T\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Mi8uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzcz81ZTU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIk5hdmJhcl9oZWFkZXJfX05ERmxZXCIsXG5cdFwibmF2XCI6IFwiTmF2YmFyX25hdl9fMW9CalpcIixcblx0XCJsb2dvMVwiOiBcIk5hdmJhcl9sb2dvMV9fRGJtRlFcIixcblx0XCJtYWluTmF2XCI6IFwiTmF2YmFyX21haW5OYXZfX2Y5ZDJUXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Navbar.module.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navbar */ \"./pages/components/Navbar.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n//import Navbar from '../components/Navbar.js'\n\n\n\n\n\n\n//import MailOutlineIcon from '@mui/icons-material/MailOutline';\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const transition = {\n        type: \"spring\",\n        duration: 3\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_5__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    x: 100\n                },\n                whileInView: {\n                    opacity: 1,\n                    x: 0\n                },\n                exit: {\n                    opacity: 0,\n                    x: -100\n                },\n                transition: transition,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 27\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 27\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 19\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\_app.js\",\n            lineNumber: 16,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n} // import '@/styles/globals.css'\n // //import Navbar from '../components/Navbar'\n // //import '../components/Navbar.css'\n // export default function App({ Component, pageProps }) {\n //   return <Component {...pageProps} />\n // }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQThDOztBQUNOO0FBQ1Y7QUFDSztBQUNFO0FBRWU7QUFDcEQsZ0VBQWdFO0FBRUY7QUFDL0MsU0FBU00sSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLEdBQUdELFdBQVcsRUFBRztJQUMxRSxNQUFNRSxTQUFPVCxzREFBU0E7SUFDdEIsTUFBTVUsYUFBWTtRQUFDQyxNQUFLO1FBQVNDLFVBQVM7SUFBQztJQUMvQyxxQkFDRSw4REFBQ1QsNERBQWVBO1FBQUNLLFNBQVNBO2tCQUNkLDRFQUFDTiwwREFBZUE7c0JBQ2QsNEVBQUNELGlEQUFNQSxDQUFDWSxHQUFHO2dCQUNaQyxTQUFTO29CQUFDQyxTQUFRO29CQUFFQyxHQUFFO2dCQUFHO2dCQUN6QkMsYUFBYTtvQkFBQ0YsU0FBUTtvQkFBRUMsR0FBRTtnQkFBQztnQkFDNUJFLE1BQU07b0JBQUNILFNBQVE7b0JBQUVDLEdBQUUsQ0FBQztnQkFBRztnQkFDdEJOLFlBQVlBOztrQ0FFSCw4REFBQ1gsMERBQU1BOzs7OztrQ0FDUCw4REFBQ087d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsRCxFQUVBLGdDQUFnQztDQUNoQyw4Q0FBOEM7Q0FDOUMsc0NBQXNDO0NBRXRDLDBEQUEwRDtDQUUxRCx3Q0FBd0M7Q0FFeEMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQyLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci5qcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcydcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHttb3Rpb24sQW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuLy9pbXBvcnQgTWFpbE91dGxpbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWFpbE91dGxpbmUnO1xuXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSwgfSkge1xuICAgICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9e3R5cGU6J3NwcmluZycsZHVyYXRpb246M31cbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTowLHg6MTAwfX1cbiAgICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3tvcGFjaXR5OjEseDowfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7b3BhY2l0eTowLHg6LTEwMH19XG4gICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XG4gICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICBcbiAgXG4gIClcbiAgXG59XG5cbi8vIGltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG4vLyAvL2ltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG4vLyAvL2ltcG9ydCAnLi4vY29tcG9uZW50cy9OYXZiYXIuY3NzJ1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbi8vICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgXG4vLyB9XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlUm91dGVyIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiU2Vzc2lvblByb3ZpZGVyIiwidXNlU2Vzc2lvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJyb3V0ZXIiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImR1cmF0aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4Iiwid2hpbGVJblZpZXciLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/Navbar.js":
/*!************************************!*\
  !*** ./pages/components/Navbar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Navbar() {\n    console.log(process.env.GOOGLE_ID);\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    console.log(status);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo1),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    children: \"Next Auth\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                    lineNumber: 13,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainNav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/dashboard\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n                                children: \"dashboard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/blog\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n                                children: \"blog\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    status === \"unauthenticated\" && !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/api/auth/signin\",\n                            onClick: (e)=>{\n                                e.preventDefault();\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)();\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this),\n                    session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/api/auth/signout\",\n                            onClick: (e)=>{\n                                e.preventDefault();\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n                                children: \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                        lineNumber: 45,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sagar Anumala\\\\Desktop\\\\Projects\\\\NextJsAuth\\\\next2\\\\pages\\\\components\\\\Navbar.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUM2QjtBQUNOO0FBRXBDLFNBQVNNO0lBQ3BCQyxRQUFRQyxHQUFHLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUNoQyxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdWLDJEQUFVQTtJQUM1Q0csUUFBUUMsR0FBRyxDQUFDTTtJQUNmLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXWCx5RUFBYTs7MEJBQ3ZCLDhEQUFDYTtnQkFBR0YsV0FBV1gsd0VBQVk7MEJBQ3hCLDRFQUFDZTtvQkFBRUMsTUFBSzs4QkFBSTs7Ozs7Ozs7Ozs7MEJBR2pCLDhEQUFDQztnQkFBR04sV0FBV1gsMEVBQWM7O2tDQUN6Qiw4REFBQ21CO2tDQUNHLDRFQUFDdkIsa0RBQUlBOzRCQUFDb0IsTUFBSztzQ0FDUCw0RUFBQ0k7Z0NBQUtULFdBQVdYLHNFQUFVOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUdyQyw4REFBQ21CO2tDQUNHLDRFQUFDdkIsa0RBQUlBOzRCQUFDb0IsTUFBSztzQ0FDUCw0RUFBQ0k7Z0NBQUtULFdBQVdYLHNFQUFVOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUdyQyw4REFBQ21CO2tDQUNHLDRFQUFDdkIsa0RBQUlBOzRCQUFDb0IsTUFBSztzQ0FDWCw0RUFBQ0k7Z0NBQUtULFdBQVdYLHNFQUFVOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7O29CQUk3QlMsV0FBUyxxQkFBcUIsQ0FBQ0QseUJBQzNCLDhEQUFDVztrQ0FDTCw0RUFBQ3ZCLGtEQUFJQTs0QkFBQ29CLE1BQUs7NEJBQW1CTSxTQUFTQyxDQUFBQTtnQ0FDbkNBLEVBQUVDLGNBQWM7Z0NBQ2hCM0IsdURBQU1BOzRCQUNWO3NDQUNJLDRFQUFDdUI7Z0NBQUtULFdBQVdYLHNFQUFVOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7O29CQUtuQ1EseUJBQ0QsOERBQUNXO2tDQUNFLDRFQUFDdkIsa0RBQUlBOzRCQUFDb0IsTUFBSzs0QkFBb0JNLFNBQVNDLENBQUFBO2dDQUNwQ0EsRUFBRUMsY0FBYztnQ0FDaEIxQix3REFBT0E7NEJBQ1g7c0NBQ0ksNEVBQUNzQjtnQ0FBS1QsV0FBV1gsc0VBQVU7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Mi8uL3BhZ2VzL2NvbXBvbmVudHMvTmF2YmFyLmpzPzk0ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7c2lnbkluLHNpZ25PdXQsdXNlU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuR09PR0xFX0lEKTtcclxuICAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcbiAgICAgY29uc29sZS5sb2coc3RhdHVzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubG9nbzF9PlxyXG4gICAgICAgICAgICAgPGEgaHJlZj0nIyc+TmV4dCBBdXRoPC9hPlxyXG4gICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tYWluTmF2fT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5Ib21lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZGFzaGJvYXJkJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PmRhc2hib2FyZDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ibG9nJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+YmxvZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cz09PVwidW5hdXRoZW50aWNhdGVkXCIgJiYgIXNlc3Npb24gJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FwaS9hdXRoL3NpZ25pbicgb25DbGljaz17ZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzaWduSW4oKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5TaWduIEluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT4pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIHtzZXNzaW9uICYmKFxyXG4gICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FwaS9hdXRoL3NpZ25vdXQnIG9uQ2xpY2s9e2U9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbk91dCgpXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlNpZ24gT3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwic3R5bGVzIiwiTmF2YmFyIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwibG9nbzEiLCJhIiwiaHJlZiIsInVsIiwibWFpbk5hdiIsImxpIiwic3BhbiIsIm5hdiIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Navbar.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();