import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { PROJECTS } from '../../core/portfolio.data';
import { techStyle } from '../../core/tech';
import { Carousel } from '../../shared/carousel/carousel';
import { ScrollAppear } from '../../shared/scroll-appear.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAppear, SectionHeading, Carousel],
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly lang = inject(LanguageService).lang;
  protected readonly badge = techStyle;
}
