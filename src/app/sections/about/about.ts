import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { ABOUT } from '../../core/portfolio.data';
import { techStyle } from '../../core/tech';
import { ScrollAppear } from '../../shared/scroll-appear.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAppear, SectionHeading],
})
export class About {
  protected readonly about = ABOUT;
  protected readonly lang = inject(LanguageService).lang;
  protected readonly badge = techStyle;
}
