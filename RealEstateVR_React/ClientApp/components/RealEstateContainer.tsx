import * as React from 'react';
import { UserLogin } from './UserLogin';
import UserLoginStore from '../stores/UserLoginStore';
import { Listings } from './Listings/Listings';


interface UserLoginInfo {
    userLoginId: number;
    username: string;
    password: string;
    permissionLevel: PermissionType;
}

enum PermissionType {
    Administrator = 1,
    SalesPerson = 2,
    Customer = 3
}

export class RealEstate extends React.Component<{}, UserLoginInfo > {

    updateLogin(userlogin:UserLoginInfo) {
        this.setState(userlogin);
    } 

    constructor() {
        super();
    }

    //public render() {

    //    return <div>
    //        <h1>ID:{this.state? this.state.userLoginId : ""}</h1>
    //        <UserLogin loginInfo={this.state} UpdateLogin={this.updateLogin.bind(this)}/>
    //    </div>;
    //}

    public render() {
        var el = null;
        if (!this.state) 
        {
            el = <UserLogin loginInfo={this.state} UpdateLogin={this.updateLogin.bind(this)} />
        }
        else {
            switch (this.state.permissionLevel) {
                case PermissionType.Administrator:
                    el = <div>Administrator</div>
                    break;
                case PermissionType.Customer:
                    console.log(this.state.userLoginId);
                    el = <Listings userLoginId={this.state.userLoginId} />
                    break;
                case PermissionType.SalesPerson:
                    //el = <Listings userLoginId={this.state.userLoginId} />
                    el = <div>Salesperson</div>
                    break;
                default:
                    console.log(this.state.permissionLevel);
                    el = <UserLogin loginInfo={this.state} UpdateLogin={this.updateLogin.bind(this)} />
                    break;
            }
        }
        return el;
    }
}
