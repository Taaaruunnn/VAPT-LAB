import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth';
import {
  LucideAngularModule,
  LayoutDashboard,
  Radar,
  Target,
  ScanSearch,
  FileText,
  FlaskConical,
  Users,
  Settings
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule
  ],
  templateUrl: './sidebar.html'
})
export class Sidebar {
  authService = inject(AuthService);
  readonly LayoutDashboard = LayoutDashboard;
  readonly Radar = Radar;
  readonly Target = Target;
  readonly ScanSearch = ScanSearch;
  readonly FileText = FileText;
  readonly FlaskConical = FlaskConical;
  readonly Users = Users;
  readonly Settings = Settings;

}