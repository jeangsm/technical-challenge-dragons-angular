import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/models';
import { DragonsService } from 'src/app/services/dragons.service';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {
  dragon: Dragon;
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private dragonsService: DragonsService
  ) { }

  ngOnInit(): void {
    this.dragonsService.getDragonById(this.route.snapshot.params['id'])
      .subscribe((result: Dragon) => {
        this.dragon = result;
        this.loaded = true;
      }, error => {
        this.loaded = true;
        console.log(error);
      })
  }

}
