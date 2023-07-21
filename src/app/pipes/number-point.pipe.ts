import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPoint',
})
export class NumberPointPipe implements PipeTransform {
  transform(value: number): any {
    let numeroCadena = String(value).split('').reverse().join('');

    // Insertar los puntos cada tres caracteres
    let numeroFormateado = numeroCadena
      .replace(/(\d{3})/g, '$1.')
      .split('')
      .reverse()
      .join('');

    // Eliminar punto adicional si el número tiene una longitud divisible por tres
    if (numeroFormateado.charAt(0) === '.') {
      numeroFormateado = numeroFormateado.slice(1);
    }

    return numeroFormateado;
  }
}
