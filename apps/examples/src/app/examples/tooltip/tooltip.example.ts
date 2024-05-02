import { Component } from '@angular/core';
import {
  NgpTooltipDirective,
  NgpTooltipTriggerDirective,
} from '@ng-primitives/ng-primitives/tooltip';

@Component({
  standalone: true,
  selector: 'app-tooltip',
  imports: [NgpTooltipTriggerDirective, NgpTooltipDirective],
  template: `
    <button
      class="h-10 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-950 outline-none transition-all hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100"
      [ngpTooltipTrigger]="tooltip"
      type="button"
    >
      Tooltip
    </button>

    <ng-template #tooltip>
      <div
        class="fixed max-w-64 rounded-lg bg-zinc-950 px-3 py-2 text-xs font-medium text-white"
        ngpTooltip
      >
        Hover over items to reveal additional context or details. Tooltips provide quick insights
        without cluttering your screen.
      </div>
    </ng-template>
  `,
})
export default class TooltipExample {}
