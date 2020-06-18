//import * as _ from 'lodash';
declare module "lodash2" {

     interface firstFunction {
        (data: string[]): string;
    }
     interface lodash {
        first2: firstFunction;
    }
    export const _: lodash

}