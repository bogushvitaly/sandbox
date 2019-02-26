import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { produce } from "@ngxs-labs/immer-adapter";
import { State, StateContext } from "@ngxs/store";

import { SystemScreen } from "../models/screen.interface";

export interface SystemOutputScreenModel {
  dimensions: SystemScreen;
}

@State<SystemOutputScreenModel>({
  name: "screen",
  defaults: {
    dimensions: {
      width: 0,
      height: 0
    }
  }
})
export class SystemOutputScreenState {
  constructor() {}

  @Receiver({ type: "[System Screen] Set Window Viewport Dimensions" })
  static setWindowViewportDimensions(
    ctx: StateContext<SystemOutputScreenModel>,
    { payload }: EmitterAction<SystemScreen>
  ) {
    produce(ctx, (draft: SystemOutputScreenModel) => {
      draft.dimensions = {
        width: payload.width,
        height: payload.height
      };
    });
  }
}
