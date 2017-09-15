import * as React from 'react';
import 'isomorphic-fetch';
import { Route } from 'react-router-dom';
import UserLoginStore from '../stores/UserLoginStore';
import { Listings } from './Listings/Listings';
import { PropTypes }  from 'react';

interface FormState {
    username: string;
    password: string;
}

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

interface UserLoginProps {
    loginInfo: UserLoginInfo;
    UpdateLogin(loginInfo);
}

export class UserLogin extends React.Component<UserLoginProps, FormState> {
    userInfo: UserLoginInfo;

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.userInfo = {username: "Not set", password: "", userLoginId: 1, permissionLevel: null};
    }

    public onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //public GotoScreen(path) {
    //    this.context.router.history.push(path);
    //}

    public onSubmit(e) {
        e.preventDefault();
        fetch('/api/UserAuthentication',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {username: this.state.username, password: this.state.password} )
            })
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                
                return response.json() as Promise<UserLoginInfo>;
            })
            .then(data => {
                this.props.UpdateLogin(data);
                //this.GotoScreen('./Listings/Listings');
                
            });


    }

    public render() {
        return <div width="50%">
            <form onSubmit={this.onSubmit}>
                <h1>Sign up!</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" name="username" className="form-control" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="password" name="password" className="form-control" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <button type="submit" title="Submit" className="btn btn-primary btn-lg">
                        Submit
                    </button>
                </div>
            </form>
        </div>;
    }
}
