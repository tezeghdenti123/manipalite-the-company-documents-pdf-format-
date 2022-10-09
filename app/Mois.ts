import { Operation } from "./operation";
export class Mois{
    private id:string;
    private mois:string;
    private name:string;
    private listoperation:any[];

    constructor(da:string,op:string){
        this.mois=da;
        this.name=op;
        this.listoperation=[];
    }
    public addop(operation:Operation){
        this.listoperation.push(operation);
    }
    public getlist():any[]{
        return this.listoperation;
    }
}