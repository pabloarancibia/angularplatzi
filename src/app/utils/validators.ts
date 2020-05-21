import { AbstractControl } from '@angular/forms';

export class MyValidators{
    
    static isPriceValid(control: AbstractControl){
        const value = control.value;
        console.log(value);

        // solo retornamos este objeto si y solo si es invalido,
        // si cumple la validacion retorna null
        if ( value > 10000){
        return {price_invalid: true};
        }
        return null;
    }
}

