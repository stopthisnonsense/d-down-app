
class User {
    userName: string;
    firstName: string;
    lastName: string;
    birthDay: Date;
    give: any;
    receive: any;
    constructor (userName?: string, firstName?: string, lastName?: string, birthDay?: Date, give?: boolean, receive?: boolean){
        this.userName = userName
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.give = give;
        this.receive = receive;
    }
}
export default User