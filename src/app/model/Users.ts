export class UserData {
    //     id: string = "";
    //     firstName: string = "";
    //     lastName: string = "";
    //    // email: string = "";
    //     dob: string = "";
    //     department: string = "";
    //     salary: number = 0;

    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    //email: string = "";
    dob: string = "";
    department: string = "";
    salary: number = 0;

    constructor(id: number, firstName: string, lastName: string, dob: string, department: string, salary: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        //this.email = email;
        this.dob = dob;
        this.department = department;
        this.salary = salary;
    }
}