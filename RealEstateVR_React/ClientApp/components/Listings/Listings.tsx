import * as React from 'react';
import { Listing } from './Listing';


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

interface HouseArray {
    houses: HouseInfo[]
}

export class Listings extends React.Component<UserLoginInfo, HouseArray> {

    userId: number;
    uri: string;

    constructor() {
        super();
    }

    componentWillMount() {
        this.userId = this.props.userLoginId;
        this.uri = '/api/Agents/' + this.userId.toString() + '/Houses';
        fetch(this.uri,
            {
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
                return response.json() as Promise<HouseInfo[]>;
            })
            .then(data => {
                this.setState({houses: data});
            });
    }

    public render() {
        var houseListings;
        
        if (this.state) {
            houseListings = this.state.houses.map(
                (listing) => { return <Listing key={listing.houseid} {...listing} /> }
            );
        } else
        {
            houseListings = <div>UserId:{this.userId} URI:{this.uri}</div>
        }
        return <div>
            {houseListings}
        </div>;
    }
}