class Father{
    dream():string{
        return "Doctor";
    }
}

class Mother{
    dream():string{
        return "Engineer";
    }
}

// multiple inheritance not supported

class Child extends Father, Mother{
    achieve(){
        this.dream(); // which method to call. ambiguity
    }
}