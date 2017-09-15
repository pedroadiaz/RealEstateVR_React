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
var events_1 = require("events");
var PermissionType;
(function (PermissionType) {
    PermissionType[PermissionType["Administrator"] = 1] = "Administrator";
    PermissionType[PermissionType["SalesPerson"] = 2] = "SalesPerson";
    PermissionType[PermissionType["Customer"] = 3] = "Customer";
})(PermissionType || (PermissionType = {}));
var UserLoginStore = (function (_super) {
    __extends(UserLoginStore, _super);
    function UserLoginStore() {
        return _super.call(this) || this;
    }
    return UserLoginStore;
}(events_1.EventEmitter));
var userStore = new UserLoginStore;
exports.default = userStore;
//# sourceMappingURL=UserLoginStore.js.map