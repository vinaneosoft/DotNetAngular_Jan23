

class MyServlet{
    static count=0;
    num:number;
     static object:MyServlet;
    private constructor(num=0){
        this.num=num;
        MyServlet.count++;
    }
    static getInstance(){
        if(this.object==null){
            this.object=new MyServlet();
        }
       
        return this.object;
   }
}
console.log(MyServlet.count);

let servlet1= MyServlet.getInstance();
let servlet2= MyServlet.getInstance();
let servlet3= MyServlet.getInstance();
console.log(MyServlet.count);
console.log(servlet1);
console.log(servlet3);
