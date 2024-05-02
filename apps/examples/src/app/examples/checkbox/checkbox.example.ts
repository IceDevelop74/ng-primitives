import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheckMini } from '@ng-icons/heroicons/mini';
import {
  NgpCheckboxDirective,
  NgpCheckboxIndicatorDirective,
  NgpCheckboxInputDirective,
  NgpCheckboxLabelDirective,
} from '@ng-primitives/ng-primitives/checkbox';

@Component({
  standalone: true,
  selector: 'app-checkbox',
  imports: [
    NgIcon,
    NgpCheckboxDirective,
    NgpCheckboxIndicatorDirective,
    NgpCheckboxLabelDirective,
    NgpCheckboxInputDirective,
  ],
  viewProviders: [provideIcons({ heroCheckMini })],
  template: `
    <div
      class="group flex select-none items-center gap-x-3"
      [(ngpCheckboxChecked)]="checked"
      ngpCheckbox
    >
      <input ngpCheckboxInput />

      <button
        class="flex size-5 cursor-pointer items-center justify-center rounded border border-zinc-200 bg-white shadow-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:bg-zinc-50 data-[state=checked]:border-zinc-950 data-[state=checked]:bg-zinc-950 data-[state=checked]:group-hover:bg-zinc-950"
        ngpCheckboxIndicator
      >
        @if (checked()) {
          <ng-icon class="text-xs text-white" name="heroCheckMini" />
        }
      </button>
      <label class="cursor-pointer text-sm font-medium text-zinc-950" ngpCheckboxLabel>
        Accept terms and conditions
      </label>
    </div>
  `,
})
export default class CheckboxExample {
  /**
   * The checked state of the checkbox.
   */
  readonly checked = signal(false);
}
