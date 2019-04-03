import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@testXplat/utils';
import { TrimbrCoreModule } from '@testXplat/web';

@NgModule({
  imports: [TrimbrCoreModule, IonicModule.forRoot()]
})
export class TrimbrIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: TrimbrIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'TrimbrIonicCoreModule');
  }
}
