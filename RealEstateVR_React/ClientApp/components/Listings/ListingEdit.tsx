import * as React from 'react';


interface UserLoginInfo {
    userLoginId: number;
}

interface HouseInfo {
    houseid: number,
    propertyTypeId: PropertyType,
    mls: string,
    streetAddress: string,
    streetAddress2: string,
    city: string,
    state: string,
    zipCode: string,
    price: number,
    description: string,
    mainImage: string,
    bedrooms?: number,
    bathrooms?: number,
    agentId?: number,
    houseUrl: string,
    latitude?: number,
    longitude?: number
}

enum PropertyType {
    SingleFamily = 10,
    MultiFamily = 11,
    Condominium = 12,
    Townhomes = 13
}

interface HouseProp {
    houseInfo: HouseInfo,
    updateHouseInfo(houseInfo)
}

export class ListingEdit extends React.Component<HouseProp, HouseInfo> {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.saveHouse = this.saveHouse.bind(this);
    }

    saveHouse(e) {
        e.preventDefault();
        let uri = '/api/Houses/' + this.state.houseid;
        fetch(uri,
            {
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
    }

    componentWillMount() {
        this.setState(this.props.houseInfo);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    public render() {
        return <div>
            <form onSubmit={this.saveHouse}>
                <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">Address</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="streetAddress" className="form-control" onChange={this.onChange} value={this.state.streetAddress} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">Address 2</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="streetAddress2" className="form-control" onChange={this.onChange.bind(this)} value={this.state.streetAddress2} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">City</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="city" className="form-control" onChange={this.onChange.bind(this)} value={this.state.city} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">State</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="state" className="form-control" onChange={this.onChange.bind(this)} value={this.state.state} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">Zip Code</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="zipCode" className="form-control" onChange={this.onChange.bind(this)} value={this.state.zipCode} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">Price</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="price" className="form-control" onChange={this.onChange.bind(this)} value={this.state.price} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">Description</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="description" className="form-control" onChange={this.onChange.bind(this)} value={this.state.description} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">Image URI</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="mainImage" className="form-control" onChange={this.onChange.bind(this)} value={this.state.mainImage} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <button type="submit" title="Submit" className="btn btn-primary btn-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>;
    }
}
