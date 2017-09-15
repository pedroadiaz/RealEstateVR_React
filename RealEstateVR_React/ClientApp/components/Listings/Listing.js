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
var reactstrap_1 = require("reactstrap");
var ListingEdit_1 = require("./ListingEdit");
var PropertyType;
(function (PropertyType) {
    PropertyType[PropertyType["SingleFamily"] = 10] = "SingleFamily";
    PropertyType[PropertyType["MultiFamily"] = 11] = "MultiFamily";
    PropertyType[PropertyType["Condominium"] = 12] = "Condominium";
    PropertyType[PropertyType["Townhomes"] = 13] = "Townhomes";
})(PropertyType || (PropertyType = {}));
var Listing = (function (_super) {
    __extends(Listing, _super);
    function Listing(props) {
        return _super.call(this, props) || this;
    }
    Listing.prototype.updateHouseInfo = function (updatedHouse) {
        this.setState({ houseInfo: updatedHouse });
    };
    Listing.prototype.componentWillMount = function () {
        this.state = { popoverOpen: false, houseInfo: this.props };
    };
    Listing.prototype.openPopover = function (e) {
        this.toggle();
    };
    Listing.prototype.toggle = function () {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    };
    Listing.prototype.render = function () {
        return React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-4" },
                React.createElement("button", { id: 'Popover-' + this.state.houseInfo.houseid, onClick: this.openPopover.bind(this) }, "Edit Address")),
            React.createElement("div", { className: "col-md-4" },
                React.createElement(reactstrap_1.Popover, { placement: "bottom", isOpen: this.state.popoverOpen, target: 'Popover-' + this.state.houseInfo.houseid, toggle: this.toggle.bind(this) },
                    React.createElement(reactstrap_1.PopoverTitle, null, "Popover Title"),
                    React.createElement(reactstrap_1.PopoverContent, null,
                        React.createElement(ListingEdit_1.ListingEdit, { updateHouseInfo: this.updateHouseInfo.bind(this), houseInfo: this.state.houseInfo }))),
                "Address: ",
                this.state.houseInfo.streetAddress,
                " ",
                React.createElement("br", null),
                " ",
                this.state.houseInfo.city,
                ", ",
                this.state.houseInfo.state,
                " ",
                this.state.houseInfo.zipCode),
            React.createElement("div", { className: "col-md-4" },
                "Bedrooms: ",
                this.state.houseInfo.bedrooms,
                "Bathrooms: ",
                this.state.houseInfo.bathrooms));
    };
    return Listing;
}(React.Component));
exports.Listing = Listing;
//# sourceMappingURL=Listing.js.map