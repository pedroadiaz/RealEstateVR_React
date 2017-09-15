"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("isomorphic-fetch");
var react_1 = require("react");
var PermissionType;
(function (PermissionType) {
    PermissionType[PermissionType["Administrator"] = 1] = "Administrator";
    PermissionType[PermissionType["SalesPerson"] = 2] = "SalesPerson";
    PermissionType[PermissionType["Customer"] = 3] = "Customer";
})(PermissionType || (PermissionType = {}));
var UserLogin = (function (_super) {
    __extends(UserLogin, _super);
    function UserLogin() {
        var _this = _super.call(this) || this;
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.userInfo = { username: "Not set", password: "", userLoginId: 1, permissionLevel: null };
        return _this;
    }
    UserLogin.prototype.onChange = function (e) {
        this.setState((_a = {}, _a[e.target.name] = e.target.value, _a));
        var _a;
    };
    //public GotoScreen(path) {
    //    this.context.router.history.push(path);
    //}
    UserLogin.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        fetch('/api/UserAuthentication', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        })
            .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
            .then(function (data) {
            _this.props.UpdateLogin(data);
            //this.GotoScreen('./Listings/Listings');
        });
    };
    UserLogin.prototype.render = function () {
        return React.createElement("div", { width: "50%" },
            React.createElement("form", { onSubmit: this.onSubmit },
                React.createElement("h1", null, "Sign up!"),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { className: "control-label" }, "Username"),
                    React.createElement("input", { type: "text", name: "username", className: "form-control", onChange: this.onChange })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { className: "control-label" }, "Password"),
                    React.createElement("input", { type: "password", name: "password", className: "form-control", onChange: this.onChange })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("button", { type: "submit", title: "Submit", className: "btn btn-primary btn-lg" }, "Submit"))));
    };
    UserLogin.contextTypes = {
        router: react_1.PropTypes.object.isRequired,
    };
    return UserLogin;
}(React.Component));
exports.UserLogin = UserLogin;
//# sourceMappingURL=UserLogin.js.map