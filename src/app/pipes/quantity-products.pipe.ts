import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../core/models/product.model';

@Pipe({
  name: 'quantityProducts'
})
export class QuantityProductsPipe implements PipeTransform {

  transform(objects: object[], id: string): any {
    const countedObjects: object[] = [];

    for (const object of objects) {
      const countedObject: any = countedObjects.find(obj => obj[id] === object[id]);
      if (countedObject) {
        countedObject.count++;
      } else {
        countedObjects.push({...object, count: 1});
      }
    }
    return countedObjects;
  }

}
