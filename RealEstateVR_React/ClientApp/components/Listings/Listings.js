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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Listing_1 = require("./Listing");
var PropertyType;
(function (PropertyType) {
    PropertyType[PropertyType["SingleFamily"] = 10] = "SingleFamily";
    PropertyType[PropertyType["MultiFamily"] = 11] = "MultiFamily";
    PropertyType[PropertyType["Condominium"] = 12] = "Condominium";
    PropertyType[PropertyType["Townhomes"] = 13] = "Townhomes";
})(PropertyType || (PropertyType = {}));
var Listings = (function (_super) {
    __extends(Listings, _super);
    function Listings() {
        return _super.call(this) || this;
    }
    Listings.prototype.componentWillMount = function () {
        var _this = this;
        this.userId = this.props.userLoginId;
        this.uri = '/api/Agents/' + this.userId.toString() + '/Houses';
        fetch(this.uri, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
            .then(function (data) {
            _this.setState({ houses: data });
        });
    };
    Listings.prototype.render = function () {
        var houseListings;
        if (this.state) {
            houseListings = this.state.houses.map(function (listing) { return React.createElement(Listing_1.Listing, __assign({ key: listing.houseid }, listing)); });
        }
        else {
            houseListings = React.createElement("div", null,
                "UserId:",
                this.userId,
                " URI:",
                this.uri);
        }
        return React.createElement("div", null, houseListings);
    };
    return Listings;
}(React.Component));
exports.Listings = Listings;
//# sourceMappingURL=Listings.js.map