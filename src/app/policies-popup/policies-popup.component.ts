import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-policies-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policies-popup.component.html',
  styleUrls: ['./policies-popup.component.scss']
})
export class PoliciesPopupComponent {
  @Input() open = false;
  @Input() showAcceptButton = false;
  @Input() activeTab: 'privacy' | 'cookies' = 'privacy';
  @Output() close = new EventEmitter<void>();
  @Output() accepted = new EventEmitter<void>();

  switchTab(tab: 'privacy' | 'cookies') {
    this.activeTab = tab;
  }

  onClose() {
    this.close.emit();
  }

  onAccept() {
    this.accepted.emit();
  }
}
