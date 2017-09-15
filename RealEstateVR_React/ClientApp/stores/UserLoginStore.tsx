import { EventEmitter } from "events";


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

class UserLoginStore extends EventEmitter {

    constructor() {
        super();

    }

}

const userStore = new UserLoginStore;

export default userStore;