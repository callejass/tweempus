import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTwimpComponent } from './create-twimp/create-twimp.component';
import { CreateTwimpRoutingModule } from './create-twimp-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CreateTwimpRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateTwimpComponent],
  exports: [CreateTwimpComponent]
})
export class CreateTwimpModule { }
