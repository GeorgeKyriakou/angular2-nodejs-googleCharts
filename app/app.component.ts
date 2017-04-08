import { Component } from '@angular/core';
import {GetlogService} from './services/getlogs.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[GetlogService]
})
export class AppComponent { }
