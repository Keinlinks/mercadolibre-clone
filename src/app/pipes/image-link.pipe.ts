import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageLink',
})
export class ImageLinkPipe implements PipeTransform {
  transform(value: string): any {
    let partes = value.split('');
    partes.splice(29, 0, 'N');
    partes.splice(64, 1, 'O');
    return partes.join('');
  }
}
