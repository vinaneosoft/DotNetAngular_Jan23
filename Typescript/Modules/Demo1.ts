

export let companyName="Neosoft";

export function changeName(newName:string){
    companyName=newName;
}

class Company{
    cid:number;
    constructor(cid:number){
        this.cid=cid;
    }
    showId(){
        
    }
}

export default Company;

// in one module u can have only one export default
