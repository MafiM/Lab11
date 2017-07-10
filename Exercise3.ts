class baseObject  {
    width : number = 0;
    length : number = 0;
};
class rectangle extends baseObject{
    calcSize () : number {
        return this.width * this.length;
    };
}
let rec = new rectangle();
rec.width = 5;
rec.length = 2;
console.log(rec.calcSize())