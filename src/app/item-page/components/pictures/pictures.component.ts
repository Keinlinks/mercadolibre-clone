import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.thumbails_ref = this.thumbails_list.toArray();

    this.thumbails_ref[0].nativeElement.classList.add('border_blue');
  }
  @ViewChildren('thumbail') thumbails_list!: QueryList<ElementRef>;
  thumbails: string[] = [
    'https://http2.mlstatic.com/D_NQ_NP_852939-MLC48709153016_122021-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_881203-MLC48709153009_122021-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_745660-MLC51671181900_092022-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_806861-MLC51671181899_092022-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_953497-MLC48709153013_122021-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_940425-MLC69056701030_042023-O.webp',
  ];
  picture_number: number = 0;
  thumbails_ref: ElementRef[] = [];
  hover(event: MouseEvent) {
    const id_string = (event.target as HTMLElement).id;
    const id = parseInt(id_string.charAt(id_string.length - 1));
    this.picture_number = id;
    for (let thumbail of this.thumbails_ref) {
      if (thumbail.nativeElement.classList[1] == 'border_blue')
        thumbail.nativeElement.classList.remove('border_blue');
    }
    this.thumbails_ref[id].nativeElement.classList.add('border_blue');
  }
}
