import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { BirthdayCardService, TemplateInfo } from '../services/birthday-card.service';

interface GalleryTemplate extends TemplateInfo {
  shortName: string;
}

@Component({
  selector: 'app-templates-gallery',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './templates-gallery.component.html',
  styleUrls: ['./templates-gallery.component.scss'],
})
export class TemplatesGalleryComponent implements OnInit {
  templates: GalleryTemplate[] = [];
  categories: { key: string; label: string }[] = [];

  selectedCategory = 'all';
  selectedTemplate = 'celebration-classic';
  isSavingTemplate = false;

  filteredTemplates: GalleryTemplate[] = [];

  constructor(
    private router: Router,
    private auth: Auth,
    private authService: AuthService,
    private birthdayCardService: BirthdayCardService,
  ) {}

  async ngOnInit() {
    const keys = this.birthdayCardService.getTemplateKeys();
    this.templates = keys.map(shortName => ({
      shortName,
      ...this.birthdayCardService.getTemplateInfo(shortName)!,
    })).filter(t => t.displayName);

    const catSet = new Map<string, string>();
    for (const t of this.templates) {
      if (!catSet.has(t.category)) {
        catSet.set(t.category, t.category);
      }
    }
    const catLabels: Record<string, string> = {
      'universal': 'Universal Themes',
      'children': 'Children Themes',
      'teen': 'Teen Themes',
      'young-adult': 'Young Adult Themes',
      'family-parent': 'Family & Parent Themes',
      'senior-elder': 'Senior & Elder Themes',
      'milestone': 'Milestone Age Collection',
    };
    this.categories = Array.from(catSet.keys()).map(k => ({ key: k, label: catLabels[k] || k }));

    this.filteredTemplates = this.templates;

    const user = this.auth.currentUser;
    if (user) {
      const profile = await this.authService.getUserProfile(user.uid);
      if (profile?.selectedTemplate) {
        this.selectedTemplate = profile.selectedTemplate;
      }
    }
  }

  filterByCategory(categoryKey: string) {
    this.selectedCategory = categoryKey;
    if (categoryKey === 'all') {
      this.filteredTemplates = this.templates;
    } else {
      this.filteredTemplates = this.templates.filter(t => t.category === categoryKey);
    }
  }

  isSelected(template: GalleryTemplate): boolean {
    return this.selectedTemplate === template.shortName;
  }

  async selectTemplate(template: GalleryTemplate) {
    this.selectedTemplate = template.shortName;
    const user = this.auth.currentUser;
    if (!user) return;
    this.isSavingTemplate = true;
    try {
      await this.authService.updateUserProfile(user.uid, {
        selectedTemplate: template.shortName,
      });
    } catch (err) {
      console.error('Failed to save template preference:', err);
    } finally {
      this.isSavingTemplate = false;
    }
  }

  goBack() {
    this.router.navigate(['/celebrants']);
  }

  getCategoryTemplates(categoryKey: string): GalleryTemplate[] {
    return this.templates.filter(t => t.category === categoryKey);
  }
}
