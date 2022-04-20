import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DragonsListComponent } from './dragons-list/dragons-list.component';
import { NewDragonComponent } from './new-dragon/new-dragon.component';
import { DragonsComponent } from './dragons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'src/app/services/modal/modal.module';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonCardComponent } from './dragons-list/dragon-card/dragon-card.component';
import { IconsModule } from './../../components/icons/icons.module';

const dragonsRoutes: Route[] = [
  {
    path:'',
    component: DragonsComponent,
    children: [
      {
        path:'',
        component: DragonsListComponent
      },
      {
        path:'new',
        component: NewDragonComponent
      },
      {
        path:'details/:id',
        component: DragonDetailsComponent
      },
    ]
  },

]

@NgModule({
  declarations: [
    DragonsListComponent,
    NewDragonComponent,
    DragonsComponent,
    DragonDetailsComponent,
    DragonCardComponent
  ],
  imports: [
    RouterModule.forChild(dragonsRoutes),
    CommonModule,
    SharedModule,
    ModalModule,
    IconsModule
  ]
})
export class DragonsModule { }
