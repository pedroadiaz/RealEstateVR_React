"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var FetchData_1 = require("./components/FetchData");
var Counter_1 = require("./components/Counter");
var RealEstateContainer_1 = require("./components/RealEstateContainer");
exports.routes = React.createElement(Layout_1.Layout, null,
    React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home_1.Home }),
    React.createElement(react_router_dom_1.Route, { path: '/counter', component: Counter_1.Counter }),
    React.createElement(react_router_dom_1.Route, { path: '/fetchdata', component: FetchData_1.FetchData }),
    React.createElement(react_router_dom_1.Route, { path: '/realestate', component: RealEstateContainer_1.RealEstate }));
//# sourceMappingURL=routes.js.map