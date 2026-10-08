import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { SKILLS } from '../../core/portfolio.data';
import { techStyle } from '../../core/tech';
import { ScrollAppear } from '../../shared/scroll-appear.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAppear, SectionHeading],
})
export class Skills {
  protected readonly skills = SKILLS;
  protected readonly lang = inject(LanguageService).lang;
  protected readonly badge = techStyle;
}
