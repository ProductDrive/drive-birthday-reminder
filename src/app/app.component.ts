import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PwaInstallBannerComponent } from './pwa-install-banner/pwa-install-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PwaInstallBannerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
