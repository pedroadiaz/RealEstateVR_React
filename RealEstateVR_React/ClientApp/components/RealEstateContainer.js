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
var UserLogin_1 = require("./UserLogin");
var Listings_1 = require("./Listings/Listings");
var PermissionType;
(function (PermissionType) {
    PermissionType[PermissionType["Administrator"] = 1] = "Administrator";
    PermissionType[PermissionType["SalesPerson"] = 2] = "SalesPerson";
    PermissionType[PermissionType["Customer"] = 3] = "Customer";
})(PermissionType || (PermissionType = {}));
var RealEstate = (function (_super) {
    __extends(RealEstate, _super);
    function RealEstate() {
        return _super.call(this) || this;
    }
    RealEstate.prototype.updateLogin = function (userlogin) {
        this.setState(userlogin);
    };
    //public render() {
    //    return <div>
    //        <h1>ID:{this.state? this.state.userLoginId : ""}</h1>
    //        <UserLogin loginInfo={this.state} UpdateLogin={this.updateLogin.bind(this)}/>
    //    </div>;
    //}
    RealEstate.prototype.render = function () {
        var el = null;
        if (!this.state) {
            el = React.createElement(UserLogin_1.UserLogin, { loginInfo: this.state, UpdateLogin: this.updateLogin.bind(this) });
        }
        else {
            switch (this.state.permissionLevel) {
                case PermissionType.Administrator:
                    el = React.createElement("div", null, "Administrator");
                    break;
                case PermissionType.Customer:
                    console.log(this.state.userLoginId);
                    el = React.createElement(Listings_1.Listings, { userLoginId: this.state.userLoginId });
                    break;
                case PermissionType.SalesPerson:
                    //el = <Listings userLoginId={this.state.userLoginId} />
                    el = React.createElement("div", null, "Salesperson");
                    break;
                default:
                    console.log(this.state.permissionLevel);
                    el = React.createElement(UserLogin_1.UserLogin, { loginInfo: this.state, UpdateLogin: this.updateLogin.bind(this) });
                    break;
            }
        }
        return el;
    };
    return RealEstate;
}(React.Component));
exports.RealEstate = RealEstate;
//# sourceMappingURL=RealEstateContainer.js.map