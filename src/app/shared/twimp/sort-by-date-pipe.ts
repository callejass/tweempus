import { PipeTransform, Pipe} from '@angular/core';
import { Twimp } from './twimp.model';

@Pipe({
    name: 'sortByDate',
    pure: false
})
export class SortByDatePipe implements PipeTransform {


    constructor() {

    }

    transform(array: Array<Twimp>): any {
        return array.sort((a: Twimp, b: Twimp) => {
            const fecha1: string = a.timestamp.replace(/-/g, '').split('').reverse().join();
            const fecha2: string = b.timestamp.replace(/-/g, '').split('').reverse().join();

            return fecha1 < fecha2 ? 1 : -1;

            // return +a.timestamp.replace(/-/g, '') - +b.timestamp.replace(/-/, '');
            // return +b.timestamp.replace(/-/, '') - +a.timestamp.replace(/-/g, '');
        });
    }
}
