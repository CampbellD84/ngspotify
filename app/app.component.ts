import { Component } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SpotifyService } from './services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './components/app.component.html',
    providers:[SpotifyService]
})
export class AppComponent { }
