import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Dragon } from 'src/app/models';
import { DragonsService } from 'src/app/services/dragons.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent implements OnInit {
  dragons: Dragon[] = [];
  selectedDragon: Dragon;
  dragonForm: any;
  loaded = false;
  updatingRemoving = false;

  constructor(
    private dragonsService: DragonsService,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getData();
    this.dragonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }

  openModal(id: string, dragon: Dragon): void {
    this.selectedDragon = dragon;
    this.dragonForm.get('name').setValue(this.selectedDragon.name);
    this.dragonForm.get('type').setValue(this.selectedDragon.type);
    this.modalService.open(id);
  }

  removeDragon(): void {
    this.updatingRemoving = true;
    this.dragonsService.deleteDragon(this.selectedDragon.id)
      .subscribe(result => {
        this.getData();
        this.closeModal('remove-dragon');
        this.updatingRemoving = false;
        console.log(result);
      }, error => {
        console.log(error);
        this.updatingRemoving = false;
      })
  }

  submit(): void {
    this.updatingRemoving = true;
    this.dragonsService.updateDragon(this.dragonForm.getRawValue(),this.selectedDragon.id)
      .subscribe(result => {
        this.getData();
        this.closeModal('update-dragon');
        this.updatingRemoving = false;
        console.log(result);
      }, error => {
        this.updatingRemoving = false;
        console.log(error);
      })
  }

  getData(): void {
    this.loaded = false;
    this.dragonsService.getDragons()
      .subscribe(result => {
        this.dragons = result.sort((a: Dragon, b: Dragon) => {
          if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
          }
          if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
          }
          return 0;
        });
        this.loaded = true;

        console.log(result);
        console.log(this.dragons);
      }, error => {
        console.log(error);
      })
  }
}
