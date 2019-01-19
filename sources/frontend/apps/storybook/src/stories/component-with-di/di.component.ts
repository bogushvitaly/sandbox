import { Component, ElementRef, Inject, InjectionToken, Injector, Input } from '@angular/core';

export const TEST_TOKEN = new InjectionToken<string>('test');

@Component({
  selector: 'storybook-di-component',
  templateUrl: './di.component.html',
  providers: [{ provide: TEST_TOKEN, useValue: 123 }]
})
export class DiComponent {
  @Input()
  title: string;

  constructor(
    protected injector: Injector,
    protected elRef: ElementRef,
    @Inject(TEST_TOKEN) protected testToken: number
  ) {}

  isAllDeps(): boolean {
    return Boolean(this.testToken && this.elRef && this.injector && this.title);
  }

  elRefStr(): string {
    return JSON.stringify(this.elRef);
  }
}
