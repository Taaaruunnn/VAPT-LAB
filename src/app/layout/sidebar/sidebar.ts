import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
  readonly LayoutDashboard = LayoutDashboard;
  readonly Radar = Radar;
  readonly Target = Target;
  readonly ScanSearch = ScanSearch;
  readonly FileText = FileText;
  readonly FlaskConical = FlaskConical;
  readonly Users = Users;
  readonly Settings = Settings;

}