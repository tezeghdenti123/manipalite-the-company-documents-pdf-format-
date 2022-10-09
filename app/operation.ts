export class Operation{
    private date:string;
    private operation:string;
    private debit:string;
    private credit:string;

    constructor(da:string,op:string,deb:string,cr:string){
        this.date=da;
        this.operation=op;
        this.debit=deb;
        this.credit=cr;
    }
}