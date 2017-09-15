import * as React from 'react';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import { ListingEdit } from './ListingEdit';

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

interface PopoverState {
    houseInfo: HouseInfo;
    popoverOpen: boolean
}


export class Listing extends React.Component<HouseInfo, PopoverState> {

    constructor(props) {
        super(props);
    }

    updateHouseInfo(updatedHouse: HouseInfo) {
        this.setState({houseInfo: updatedHouse});
    }

    componentWillMount() {
        this.state = { popoverOpen: false, houseInfo: this.props };
    }

    public openPopover(e) {
        this.toggle();
    }

    public toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    public render() {
        return <div className="row">
            <div className="col-md-4">
                <button id={'Popover-' + this.state.houseInfo.houseid} onClick={this.openPopover.bind(this)}>Edit Address</button>
            </div>
            <div className="col-md-4">
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target={'Popover-' + this.state.houseInfo.houseid} toggle={this.toggle.bind(this)}>
                    <PopoverTitle>Popover Title</PopoverTitle>
                    <PopoverContent>
                        <ListingEdit updateHouseInfo={this.updateHouseInfo.bind(this)} houseInfo={this.state.houseInfo}/>
                    </PopoverContent>
                </Popover>
                Address: {this.state.houseInfo.streetAddress} <br /> {this.state.houseInfo.city}, {this.state.houseInfo.state} {this.state.houseInfo.zipCode}
            </div>
            <div className="col-md-4">
                Bedrooms: {this.state.houseInfo.bedrooms} 
                Bathrooms: {this.state.houseInfo.bathrooms}
            </div>
        </div>
    }
}