import { DragonsService } from './../../../services/dragons.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Dragon } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dragon',
  templateUrl: './new-dragon.component.html',
  styleUrls: ['./new-dragon.component.scss']
})
export class NewDragonComponent implements OnInit {
  dragonForm: any;
  submitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private dragonsService: DragonsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dragonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  submit(): void {
    if(!this.dragonForm.valid) {
      return;
    }

    this.submitting = true;

    this.dragonsService.setDragon(this.dragonForm.getRawValue())
      .subscribe((result: HttpResponse<Dragon>) => {
        console.log(result);
        this.router.navigate(['../'])
      }, (error) => {
        this.submitting = false;
        console.log(error)
      })
  }

}
