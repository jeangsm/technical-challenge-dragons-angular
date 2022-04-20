import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'dragon-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(
    private modalService: ModalService,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    console.log('on modal init id', this.id);

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
        if (el.target.className === 'dragon-modal') {
            this.close();
        }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('dragon-modal-open');
  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('dragon-modal-open');
  }
}
