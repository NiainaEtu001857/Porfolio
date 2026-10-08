import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { EXPERIENCE } from '../../core/portfolio.data';
import { ScrollAppear } from '../../shared/scroll-appear.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAppear, SectionHeading],
})
export class Experience {
  protected readonly experience = EXPERIENCE;
  protected readonly lang = inject(LanguageService).lang;
  /** Décalage entre deux cartes pour l'apparition en cascade. */
  protected readonly stagger = 120;
}
