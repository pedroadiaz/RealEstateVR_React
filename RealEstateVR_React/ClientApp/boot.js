"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/site.css");
require("bootstrap");
var React = require("react");
var ReactDOM = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
var react_router_dom_1 = require("react-router-dom");
var RoutesModule = require("./routes");
var routes = RoutesModule.routes;
function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(react_router_dom_1.BrowserRouter, { children: routes })), document.getElementById('react-app'));
}
renderApp();
// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', function () {
        routes = require('./routes').routes;
        renderApp();
    });
}
//# sourceMappingURL=boot.js.map