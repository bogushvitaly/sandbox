import {
  animate,
  query,
  style,
  transition,
  trigger
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition(
    "* => *",
    [
      query(":enter", [style({ opacity: 0 })], {
        optional: true
      }),
      query(
        ":leave",

        [
          style({ opacity: 1, padding: "{{padding}}" }),
          animate("{{duration}}s", style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(
        ":enter",
        [
          style({ opacity: 0 }),
          animate(
            "{{duration}}s",
            style({ opacity: 1, padding: "{{padding}}" })
          )
        ],
        { optional: true }
      )
    ],
    { params: { padding: "0", duration: "0.2" } }
  )
]);
