import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { EnvService } from './env.service';
import { environmentLoader as environmentLoaderPromise } from '../environments/environmentLoader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeng-angularcli-setup';
  jsonEnv = {}
  constructor(
    public env: EnvService
  ) {
    if (env.enableDebug) {
      console.log('Debug mode enabled!');
    }
    console.log(env);

    environmentLoaderPromise.then(env => {
       console.log(env);
      this.jsonEnv = env;
       
    });
  } 


}
