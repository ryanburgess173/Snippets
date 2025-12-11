import { bootstrapApplication } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NullSafeNavComponent } from "./null-safe-nav/null-safe-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NullSafeNavComponent],
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html'
})
class App { 
  title = 'Templates & Interpolation';
  name = 'Angular';
  current = '';
  read(val: string) { this.current = val ?? ''; }
}

bootstrapApplication(App);