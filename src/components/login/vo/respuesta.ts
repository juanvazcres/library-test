export class Respuesta {


   public  static RESULT = {
        OK: 1,
        FAIL: 0
    };

    public static MESSAGE = {
        OK: 'OK',
        FAIL: 'FAIL'
    };
    constructor(public result: number=Respuesta.RESULT.OK, public message: string=Respuesta.MESSAGE.OK, public data?:any) {
       // this.result = result;
        //this.message = message;
    }

}