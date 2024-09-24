// let x = 'hello';
// console.log(x);
//
// function foo(o: number,x?:string): string{
//     return o + "";
// }
// foo(1,'asd');
// foo(2)
//
// function bar(obj:{id:number,name:string}){
//
// }
// bar({id: 1, name: 'asd'})
//
// let num:number = 100;
// let s:string = 'asd';
// let b:boolean = true;
// let obj:{id:number,status:boolean,asd?:string} = {id:123, status:false,asd:'qwe'};
// let arrS : string[] = ['xcz','qwe','asd'];
// let arrN :number[] = [11,22,33,44];
// let arrN2:Array<number> = [11,22,33,44];
// let arrObj:{name:string,age:number}[]=[{name:'Cfgh',age:23},{name:'Ch',age:13},{name:'Cfh',age:33}];
// function asd():{name:string} {
//     //...
//     return {name:'qwerty'}
// }
// function divCreator(content:string,domElementWhereToAdd:HTMLElement) {
//     let div:HTMLElement = document.createElement('div');
// }
//
// divCreator('qwe',document.body);

// function fetchData():Promise<{id:number,userId:number,title:string,body:string}[]>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(value => value.json())
//         .then((value:{id:number,userId:number,title:string,body:string}[]) => {
//             return value;
//         });

// class User {
//     private _id:number;
//     protected name: string;
//     public status:boolean;
//
//     constructor(id: number, name: string, status: boolean) {
//         this._id = id;
//         this.name = name;
//         this.status = status;
//     }
//     greeting(): void{
//         console.log("Hello World!");
//     }
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         if (value > 0){
//             this._id = value;
//         }
//     }
// }

// class User{
//     // constructor(private id:number) {
//     //     this.id = id;
//     // }
//
//     constructor(private id:number,public name:string,public status:boolean) {
//
//     }
// }
//
// let user = new User(1,'asd',true);
// console.log(user);

// let obj:User = {
//     id:1,
//     name:'kokos',
//     status:true,
//     greeting():void {
//         console.log("Hello World!");
//     }
// };

// let user = new User(2,'zxc',true);
// console.log(user.id);
// user.id = 123;

// class Customer extends User{
//
//     constructor(id: number, name: string, status: boolean,public login:string,public password:string) {
//         super(id, name, status);
//         this.login = login;
//         this.password = password;
//     }
// }
// let customer = new Customer(1,'sd',false,'login','pass');
// console.log(customer);
//
// function f(user: User){
//     if (user instanceof User){
//         console.log(user.name,user.status);
//     }
//     if (user instanceof Customer ){
//         let customer = user as Customer;
//             console.log(customer.name,customer.login,customer.password);
//     }
// }
//
// f(user);
// f(customer);

// enum Gender {
//     MALE = 0,
//     FEMALE = 1
// }
//
// class User {
//     name: string;
//     gender: Gender;
//     constructor(name: string, gender: Gender) {
//         this.name = name;
//         this.gender = gender;
//     }
//     //
//     // set gender(value: string) {
//     //     if (value === 'male' || value === 'female') {
//     //         this._gender = value;
//     //     }
//     // }
// }
//
// let user = new User('sd',Gender.MALE);
// if (user.gender === Gender.FEMALE) {
//     //...
// }

class User<ID> {
    constructor(private id: ID,private name: string) {
        this.id = id;
        this.name = name;
    }
}
let user = new User<number>(1,'asd');
let user2 = new User<string>('asdasdsa1235','asdvvfgd');

