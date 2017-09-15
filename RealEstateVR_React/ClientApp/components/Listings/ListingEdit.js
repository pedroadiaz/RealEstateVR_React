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
var PropertyType;
(function (PropertyType) {
    PropertyType[PropertyType["SingleFamily"] = 10] = "SingleFamily";
    PropertyType[PropertyType["MultiFamily"] = 11] = "MultiFamily";
    PropertyType[PropertyType["Condominium"] = 12] = "Condominium";
    PropertyType[PropertyType["Townhomes"] = 13] = "Townhomes";
})(PropertyType || (PropertyType = {}));
var ListingEdit = (function (_super) {
    __extends(ListingEdit, _super);
    function ListingEdit() {
        var _this = _super.call(this) || this;
        _this.onChange = _this.onChange.bind(_this);
        _this.saveHouse = _this.saveHouse.bind(_this);
        return _this;
    }
    ListingEdit.prototype.saveHouse = function (e) {
        e.preventDefault();
        var uri = '/api/Houses/' + this.state.houseid;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
            .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response;
        });
        this.props.updateHouseInfo(this.state);
    };
    ListingEdit.prototype.componentWillMount = function () {
        this.setState(this.props.houseInfo);
    };
    ListingEdit.prototype.onChange = function (e) {
        this.setState((_a = {}, _a[e.target.name] = e.target.value, _a));
        var _a;
    };
    ListingEdit.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("form", { onSubmit: this.saveHouse },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-2" },
                        React.createElement("label", { className: "control-label" }, "Address")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("input", { type: "text", name: "streetAddress", className: "form-control", onChange: this.onChange, value: this.state.streetAddress }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-2" },
                        React.createElement("label", { className: "control-label" }, "Address 2")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("input", { type: "text", name: "streetAddress2", className: "form-control", onChange: this.onChange.bind(this), value: this.state.streetAddress2 }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-2" },
                        React.createElement("label", { className: "control-label" }, "City")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("input", { type: "text", name: "city", className: "form-control", onChange: this.onChange.bind(this), value: this.state.city }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-2" },
                        React.createElement("label", { className: "control-label" }, "State")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("input", { type: "text", name: "state", className: "form-control", onChange: this.onChange.bind(this), value: this.state.state }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-2" },
                        React.createElement("label", { className: "control-label" }, "Zip Code")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("input", { type: "text", name: "zipCode", className: "form-control", onChange: this.onChange.bind(this), value: this.state.zipCode }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-2" },
                        React.createElement("label", { className: "control-label" }, "Price")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("input", { type: "text", name: "price", className: "form-control", onChange: this.onChange.bind(this), value: this.state.price }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-2" },
                        React.createElement("label", { className: "control-label" }, "Description")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("input", { type: "text", name: "description", className: "form-control", onChange: this.onChange.bind(this), value: this.state.description }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-2" },
                        React.createElement("label", { className: "control-label" }, "Image URI")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("input", { type: "text", name: "mainImage", className: "form-control", onChange: this.onChange.bind(this), value: this.state.mainImage }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-8" },
                        React.createElement("button", { type: "submit", title: "Submit", className: "btn btn-primary btn-lg" }, "Submit")))));
    };
    return ListingEdit;
}(React.Component));
exports.ListingEdit = ListingEdit;
//# sourceMappingURL=ListingEdit.js.map