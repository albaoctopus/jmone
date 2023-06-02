"use strict";
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Services4)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/sections/services4.json
const services4_namespaceObject = JSON.parse('[{"id":1,"title":"Art Concept","icon":"pe-7s-gleam","content":"From idea to implementation, we transform your creative vision into unique NFT designs, bridging the gap between art and technology."},{"id":2,"title":"Tokenomics","icon":"pe-7s-phone","content":"Our team carefully tailors the token economy of your NFT project, driving maximum value and usefulness for your digital assets."},{"id":3,"title":"IT Development","icon":"pe-7s-magic-wand","content":"We offer extensive IT services, from creating secure smart contracts to developing bespoke NFT marketplaces, ensuring your project\'s success."}]');
;// CONCATENATED MODULE: ./src/components/Services4/index.jsx




const Services4 = ({ withBG , withPadding , halfBG , withOutTitle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `services ${withPadding ? "section-padding" : ""} ${withBG ? "sub-bg" : ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    !withOutTitle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            "   ",
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "OUR"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Services."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "tbg",
                                children: "Services"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: services4_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `item ${index != services4_namespaceObject.length - 1 ? "md-mb50" : ""} wow fadeInUp`,
                                    "data-wow-delay": item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `icon ${item.icon}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-left",
                                            children: item.content
                                        }),
                                        "  "
                                    ]
                                })
                            }, item.id))
                    })
                ]
            }),
            halfBG && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "half-bg bottom"
            })
        ]
    });
};
/* harmony default export */ const components_Services4 = (Services4);


/***/ })

};
;