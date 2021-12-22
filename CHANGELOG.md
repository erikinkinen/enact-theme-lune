# Change Log

The following is a curated list of changes in the Enact lune module, newest changes on the top.

## [2.1.2] - 2021-12-22

- Fixed samples build issue 

## [2.1.1] - 2021-12-22

### Added
- `lune/VideoPlayer` props `onWillFastForward`, `onWillJumpBackward`, `onWillJumpForward`, `onWillPause`, `onWillPlay`, and `onWillRewind`

### Fixed

- `lune/Button` to have centered icon on RTL locale
- `lune/VideoPlayer` to handle media related callbacks properly
- `lune/FormCheckboxItem` to show correct color for the focused disabled checkbox

## [2.1.0] - 2021-11-30

- Support color customization

## [2.0.4] - 2021-11-01

### Added

- `lune/Icon` supported icon list, adding new icons `bluetooth`, `moodmode`, and `changepassword`

### Fixed

- `lune` to select correct font when font-weight changes in some Indian locales

## [2.0.3] - 2021-10-21

### Fixed

- `lune` to support India region font correctly
- `lune/TimePicker` to apply disabled color to the separator

## [2.0.2] - 2021-10-07

### Added

- `lune/Icon` supported icon list, adding a new icon `spanner`

### Changed

- `lune/ProgressBar` bar color for `lune/Alert`

### Fixed

- `lune/VirtualList` to not move focus to an unexpected item when 5-way directional key hold

## [2.0.1] - 2021-09-28

### Fixed

- `samples/sampler` not to fail in sampler build

## [2.0.0] - 2021-09-28

### Fixed

- `lune/DatePicker` and `lune/TimePikcer`abnormal animation
- `lune/Panels` to perform transition without delay when wheeling

## [2.0.0-rc.9] - 2021-09-13

### Changed

- `lune/DatePicker` and `lune/TimePicker` styling to match updated GUI

### Fixed

- `lune/VirtualList` to not focus the item again if focus moved out of the list via 5way when `snapToCenter`

## [2.0.0-rc.8] - 2021-08-31

### Fixed

- `lune/Dropdown` to restore focus within the list when moving mouse after clicking dropdown button
- `lune/Scroller` to move focus via up/down keys from scroll thumb when the content is short but the scrollbar is visible
- `lune/TimePicker` abnormal minute animation in some locales
- `lune/WizardPanels` to not read out `undefined` when there is no `subtitle` prop

## [2.0.0-rc.7] - 2021-08-09

### Fixed

- `lune/Item` to marquee properly when `slotAfter` or `slotBefore` changed

## [2.0.0-rc.6] - 2021-08-03

### Added

- `lune/Input` type `tel` and `passwordtel`
- `lune/Slider` prop `noWheel` to disable wheel event handler

### Fixed

- `lune/ContextualPopupDecorator` to focus elements in `ContextualPopup` when `spotlightRestrict` is `self-first` via 5way
- `lune/WizardPanels` to prevent re-rendering of previous panel

## [2.0.0-rc.5] - 2021-07-22

### Added

- `lune/DatePicker` and `lune/TimePicker` prop `noLabel` to hide label
- `lune/ImageItem` public classname `imageIcon`
- `lune/Slider` prop `wheelInterval` to throttle the wheel input

### Fixed

- `lune/FixedPopupPanels` and `lune/PopupTabLayout` to not go back to the previous panel by left key on popup opened inside
- `lune/MediaPlayer` to work trick play via key
- `lune/Scroller` and `lune/VirtualList` to show scroll animation properly with 5-way directional keys
- `lune/Scroller` to not focus the body at the initial rendering when `focusableScrollbar` prop is `byEnter`

## [2.0.0-rc.4] - 2021-07-08

### Fixed

- `lune/WizardPanels` to revert 2.0.0-rc.3 fix that prevent re-rendering

## [2.0.0-rc.3] - 2021-07-02

### Added

- `lune/Input` prop `inputFieldSpotlightId` to set `spotlightId` of `InputField`
- `lune/Input` prop `noSubmitButton` to omit submit button of number key pad

### Changed

- `lune/Slider` to expand hover area

### Fixed

- `lune/Picker` value to not marquee when changing `title`
- `lune/Popup` to have proper focus when opening with `noAnimation` is `true`
- `lune/Scroller` and `lune/VirtualList` to scroll by hover when scrollbar is hidden
- `lune/Scroller` and `lune/VirtualList` to focus elements at scroll boundaries when `hoverToScroll` is `true`
- `lune/VideoPlayer` to handle decimal playback rate
- `lune/VirtualList` to scroll properly when `snapToCenter`
- `lune/WizardPanels` to prevent re-rendering of previous panel

## [2.0.0-rc.2] - 2021-07-01

### Fixed

- `lune/Popup` to revert 2.0.0-rc.1 fix that having proper focus when `noAnimation`

## [2.0.0-rc.1] - 2021-06-18

### Added

- `lune/Picker` props `reverse` and `type` to support for number list
- `lune/Picker` and `lune/RangePicker` public class names `title` and `inlineTitle`
- `lune/Scroller` and `lune/VirtualList` prop `hoverToScroll` to scroll by hover
- `lune/VirtualList` prop `snapToCenter`

### Changed

- Shadow effect to using box-shadow instead of drop-shadow for performance on embedded environment
- `lune/FixedPopupPanels` and `lune/PopupTabLayout` to disable left key handler to go to the previous panel in RTL locales
- `lune/MediaPlayer.MediaControls` to show more components when a user flicks on action guide
- `lune/Scroller` and `lune/VirtualList` overscroll effect style to match latest designs
- `lune/Slider` to interact by wheel

### Fixed

- `lune/FixedPopupPanels` to keep focus inside of popup when pressing 5-way after click
- `lune/InputField` cursor not to jump unexpectedly when mouse down
- `lune/MediaPlayer` to show `MediaControls` via wheel properly when isomorphic build
- `lune/Panels.Header` to not overlap subtitle and children when header type is `mini`
- `lune/Popup` to have proper focus when opening with `noAnimation` is `true`
- `lune/PopupTabLayout` to move focus via 5-way left in the header
- `lune/Scroller` to scroll correctly on Chrome 85 or higher in RTL locales via 5way

## [2.0.0-beta.1] - 2021-05-21

- Enhanced touch support

### Added

- `lune/FixedPopupPanels` and `lune/PopupTabLayout` left key handler to go to the previous panel
- `lune/Input` a back button and props `backButtonAriaLabel` and `noBackButton`
- `lune/Input` and `lune/Input.InputPopup` `url` to prop `type`
- `lune/Picker` and `lune/RangePicker` props `title` and `inlineTitle`
- `lune/Slider` prop `keyFrequency` to control the accelerating speed when key hold

### Changed

- `lune/Panels.Header` to always show back button
- `lune/PopupTabLayout` back key behavior to match the latest UX
- `lune/PopupTabLayout` to collapse its tab only when a user enters a menu
- `lune/Scroller` focus rule to match latest UX when `focusableScrollbar` prop is `byEnter`
- `lune/Scroller` and `lune/VirtualList` to hide the scrollbar after N seconds
- `lune/WizardPanels.Panel` `nextButton` and `prevButton` to show labels separately to match latest designs

### Fixed

- `lune/FormCheckboxItem` to show correct color for `slotBefore` icon in disabled state when focused
- `lune/ImageItem` to resize the image properly
- `lune/Input` button label when default value is `0`
- `lune/Panels.Header` to remeasure marquee metrics when the size of slots changed
- `lune/Scroller` and `lune/VirtualList` to activate voice control intent when only scrollable
- `lune/Scroller` and `lune/VirtualList` to move focus properly via page key
- `lune/VideoPlayer` to show the knob when mediaSlider gets focused with 5-way
- horizontal `lune/VirtualList` to align items well when navigating with 5-way
- `lune/WizardPanels` to not show focus effect on the wrong element in `footer`

## [2.0.0-alpha.3] - 2021-03-31

### Added

- `lune/Dropdown` number type `width` prop
- `lune/Item` public class names `itemContent`, `content`, and `label`
- `lune/Scroller` prop `scrollbarTrackCss` to customize scroll track and thumb style

### Fixed

- `lune/Dropdown` to not show console error after selecting item
- `lune/RangePicker` to update label when value is out of range
- `lune/VirtualList` to not block key down events after panel transition

## [2.0.0-alpha.2] - 2021-03-26

- Update Enact dependency

## [2.0.0-alpha.1] - 2021-02-24

- The framework was updated to support React 17.0.1

### Added

- `lune/ThemeDecorator` config `rootId` to specify React DOM tree root for global event handlers

## [1.5.0] - 2021-02-09

### Added

- `lune/Item` prop `data-webos-voice-labels` when `label` is used

### Fixed

- `lune/Alert` to read out properly after closing it in a `lune/PopupTabLayout`
- `lune/FlexiblePopupPanels` padding in RTL locales
- `lune/Heading` `font-style` to use oblique font instead of fake `italic`
- `lune/Input` to not have initial focus with pointer when `type` prop is `'number'` or `'passwordnumber'`
- `lune/Panel` to not reset scroll position by events from others
- `lune/Panels.Header` to not show back button in the first panel
- `lune/VideoPlayer.Video` to not start a new play before another one completes

## [1.4.6] - 2021-01-29

### Fixed

- `lune/ContextualPopupDecorator` to update `ContextualPopup` position properly in RTL locales

## [1.4.5] - 2021-01-05

### Fixed

- `lune/Dropdown` title `font-style` to `normal` where a locale's fonts cannot support italic

## [1.4.4] - 2020-11-06

### Fixed

- `lune/ThemeDecorator` font style in non-latin locales
- `lune/TimePicker` to change its value with up/down key when the focus changed by enter key

## [1.4.3] - 2020-10-30

### Changed

- `lune/Scroller` and `lune/VirtualList` scrollbar to always show

### Fixed

- `lune/Heading` `font-style` to `normal` where a locale's fonts cannot support italic

## [1.4.2] - 2020-10-26

### Fixed

- Cambodian(km) language to be classified as a tall-glyph language
- `lune/Item` line-height to support tall-glyph language

## [1.4.1] - 2020-10-20

### Fixed

- `lune/WizardPanels` to read `steps` when neither prop `noSteps` nor `aria-label` is present

## [1.4.0] - 2020-10-16

### Added

- `lune/TabLayout.Tab` prop `onTabClick` to handle `onClick` event on it

### Fixed

- `lune/Input` to match latest designs
- `lune/TooltipDecorator` to marquee when `tooltipReleative` prop is true
- `lune/VirtualList` to not show overscroll effect when 5-way key is pressed after scrolling to the bottom by wheel
- `lune/WizardPanels` to read `steps` properly with `noSteps` and `aria-label` props

## [1.3.2] - 2020-09-25

### Changed

- `lune/WizardPanels` to read out the content of customized `nextButton` and `prevButton`

### Fixed

- `lune/FlexiblePopupPanels` and `lune/PopupTabLayout` to match latest designs
- `lune/Picker` to move focus on increase or decrease button properly via 5-way

## [1.3.1] - 2020-09-17

### Changed

- `lune/Alert` background color for fullscreen type
- `lune/Icon` supported icon list, adding a new icon
- `lune/Icon` and `lune/Switch` size to not enlarge when large text mode
- `lune/Scroller` focused body color when `focusableScrollbar` prop is `byEnter`

### Fixed

- `lune/TabLayout` to not handle key events from other popup components

## [1.3.0] - 2020-09-14

### Added

- `lune/DatePicker` and `lune/TimePicker` prop `onComplete` to handle enter key from the last picker

### Changed

- `lune/RangePicker` to read out properly when Spotlight is on the next or previous button
- `lune/TooltipDecorator` not to read out audio guidance when showing
- `lune/WizardPanels` footer to lower position

### Fixed

- `lune/DatePicker` and `lune/TimePicker` to focus the next picker with enter key
- `lune/DatePicker` and `lune/TimePicker` to show arrows when normal
- `lune/Scroller` to not restrict focus movement with 5-way directional keys when `focusableScrollbar` prop is `byEnter` and there is no scrollbar

## [1.2.1] - 2020-09-03

### Changed

- Primary background color to black

### Fixed

- `lune/WizardPanels` to revert 1.2.0 fix that render `Panel` contents within the usual render flow

## [1.2.0] - 2020-09-01

### Added

- `lune/FlexiblePopupPanels.Panel` `size` property to allow the selection between "auto" sized, "small", and "large" panel presets

### Changed

- `lune/Scroller` scrollbar thumb to prevent losing focus with 5-way directional keys when `focusableScrollbar` prop is `byEnter`
- `lune/Scroller` and `lune/VirtualList` scrollbar color and transparency

### Fixed

- `lune/FixedPopupPanels`, `lune/FlexiblePopupPanels` and `lune/PopupTabLayout` to match latest designs
- `lune/Input` number pad layout in right-to-left locales for both overlay and fullscreen `Input`
- `lune/PopupTabLayout` and `lune/TabLayout` to visibly change focus only once when focusing the tabs via 5-way
- `lune/TabLayout` to properly change focus when changing `index` programmatically
- `lune/Tooltip` arrow shape
- `lune/WizardPanels` to render `Panel` contents within the usual render flow allowing more predictable use of lifecycle methods

## [1.1.4] - 2020-08-24

### Fixed

- `lune/Dropdown` to match latest designs
- `lune/Input` number pad layout in right-to-left locales
- `lune/Item` style to match latest designs
- `lune/Panels.Header` style to match latest designs
- `lune/TabLayout` to not lose focus when changing `index` programmatically

## [1.1.3] - 2020-08-17

### Fixed

- `lune/Button` alignment for small icon-only buttons
- `lune/Panels` animation after reversing direction
- `lune/TooltipDecorator` to be positioned correctly over complex components
- `lune/WizardPanels` to favor other header components when using 5-way within the header
- `lune/WizardPanels` to focus a spottable component within the first `Panel` on mount
- `lune/WizardPanel` `noAnimation` autofocus
- Sinhala(si), Thai(th), Vietnamese(vi) languages to be classified as a tall-glyph language, with others like Arabic and Japanese to no longer be classified as tall-glyph. These languages will have new line-height settings, causing their layouts to shift slightly, which should ultimately be closer to the intended designs.

## [1.1.2] - 2020-08-10

### Fixed

- `lune/Button` style to match latest designs
- `lune/Panels` to allow key events after being unmounted
- `lune/Panels.Panel` to return to last focused element when reentering the `Panel`
- `lune/TabLayout` to correctly restore focus to the selected tab after expanding
- `lune/VideoPlayer.Video` to reuse video DOM node when changing `source`

## [1.1.1] - 2020-08-05

### Fixed

- `lune/Button`, `lune/InputField`, `lune/Item` and `lune/Picker` `font-weight`
- `lune/Button` background color opacity when opaque and disabled
- `lune/ContextualPopupDecorator` to include the popup in its accessibility tree
- `lune/FixedPopupPanels` and `lune/FlexiblePopupPanels` to correctly set focus after closing
- `lune/Panels` to prevent key events during view transitions
- `lune/Slider` to read out `value` with the hint string only once when focused

## [1.1.0] - 2020-07-29

### Added

- `lune/PopupTabLayout` and `lune/TabLayout` support for animated `Sprite` icons
- `lune/Scroller` prop `aria-label` to be read out instead of a body text
- `lune/Sprite` component for animating images
- `lune/TabLayout.Tab` prop `tabKey` to specify a unique key when the `title` and `icon` combination is not unique
- `lune/VideoPlayer` prop `onToggleMore` to notify consumers when more components are shown

### Fixed

- `lune/Checkbox` and `lune/Switch` to support `aria-disabled`
- `lune/DayPicker` to not read out current index and total numbers
- `lune/Dropdown` button margin with title
- `lune/Dropdown` to delegate voice props to the dropdown button
- `lune/FixedPopupPanels` and `lune/FlexiblePopupPanels` to avoid duplicate 5-way navigation when using `lune/Picker` or `lune/Input`
- `lune/FlexiblePopupPanels.Panel` to favor auto-focusing the content over the navigation buttons
- `lune/ImageItem` to support `aria-disabled`
- `lune/Input.InputField` to support `aria-disabled`
- `lune/Item` font-size for large text mode
- `lune/Item` to support RTL text
- `lune/MediaPlayer` to pause spotlight during animations
- `lune/Panels` animation direction for locales that use right-to-left reading order
- `lune/ProgressButton` icon size
- `lune/Scroller` and `lune/VirtualList` scrollbar thumb shape to not clipped
- `lune/Scroller` not to read out thumb audio guidance when focusing on the body
- `lune/TabGroup` to read out contents without button `role`
- `lune/TabLayout` to properly support scrolling the tabs
- `lune/VideoPlayer` to clear previously read string by calling announce with the `clear` property
- `lune/VideoPlayer` to read out action guide string after video title
- `lune/VirtualList` to not lose focus when entering from outside after scrolling via 5-way

## [1.0.1] - 2020-07-20

### Fixed

- `lune/ImageItem` to re-render properly when `data-index` prop is the same
- `lune/Scroller` to set its height correctly
- `lune/Scroller` and `lune/VirtualList` overscroll style to match latest designs
- `lune/Scroller` and `lune/VirtualList` to properly support `spotlightDisabled` prop
- `lune/VirtualList` to preserve focus in panels

## [1.0.0] - 2020-07-13

### Changed

- `lune/Icon` supported icon list, adding new icons

### Fixed

- `lune/ActionGuide` style to match latest designs
- `lune/Button` to animate when focused and pressed
- `lune/ContextualMenu` style to match latest designs
- `lune/DayPicker` to pass `disabled` to each child instead of applying to its container
- `lune/DropDown` title color
- `lune/FixedPopupPanels` and `lune/PopupTabLayout` to change `Panel` height when the contents change
- `lune/FixedPopupPanels`, `lune/Panels`, and `lune/PopupTabLayout` to avoid skipping panel animations when under system load
- `lune/FlexiblePopupPanels` navigation buttons to not be clipped when focused
- `lune/ImageItem` to center the label in vertical orientation when `centered` prop is true
- `lune/Input` text selection color
- `lune/Input` to close the popup with the enter key only when the VKB is activated
- `lune/Input` to properly read out number values
- `lune/MediaPlayer.MediaControls` animation when more components are rendered
- `lune/MediaPlayer.MediaSlider` style to match latest designs
- `lune/Panels.Header` spacing between title and subtitle
- `lune/Popup` to correctly emit the `onClose` event when focus attempts to leave the popup
- `lune/PopupTabLayout` padding so it's the same distance all the way around the tab buttons
- `lune/PopupTabLayout` and `lune/TabLayout` to not lose focus from tabs with 5-way
- `lune/Scroller` to not lose focus from scrollbar when re-rendered
- `lune/Slider` to readout `value` when the knob is focused
- `lune/VirtualList` to not clip the shadow of the last item when `wrap` prop is true or `scrollMode` is translate
- `lune/WizardPanels` style when using `noSteps`

## [1.0.0-rc.4] - 2020-07-09

### Fixed

- `lune/TabLayout` layout in RTL locales

## [1.0.0-rc.3] - 2020-07-07

### Fixed

- `lune/FixedPopupPanels` to use an opaque background in high-contrast mode
- `lune/MediaControls` margins to correctly align in RTL

## [1.0.0-rc.2] - 2020-07-07

### Removed

- `lune` support for `data-spotlight-container-muted`

### Added

- `lune/Input` event `onBeforeChange`

### Changed

- `lune/PopupTabLayout.TabPanels` prop `noCloseButton` to be `false` by default
- `lune/TooltipDecorator` prop `tooltipWidth` and `lune/TooltipDecorator.Tooltip` prop `width` to support either an auto-scaled number of pixels or a string CSS measurement value

### Fixed

- `lune/Button` style to match latest designs
- `lune/Button` style when using small, icon-only buttons in non-latin locales
- `lune/Dropdown` to read out `aria-label` without `title` when `aria-label` prop exists
- `lune/Dropdown` to reveal its title when scrolling up by 5-way in a scroller
- `lune/FixedPopupPanels` to use a translucent background
- `lune/FlexiblePopupPanels` to retain focus on navigation buttons when used to change panels
- `lune/ImageItem` to pass `role` and `aria-checked` when `showSelection` prop exists
- `lune/Input` to marquee the invalid tooltip
- `lune/Panels.Panel` to read out the title and subtitle except when used in `lune/WizardPanels`
- `lune/Picker` values position in RTL
- `lune/Popup` to respect paused spotlight
- `lune/PopupTabLayout` style to match latest designs
- `lune/Scroller` to stop the propagation of keydown events from a scroller thumb when it scrolls
- `lune/Scroller` vertical padding to prevent overlapping contained components
- `lune/Spinner` style to match latest designs
- `lune/TabLayout` to disable the collapsed list icon button when all tabs are disabled
- `lune/TabLayout` and `lune/PopupTabLayout` transition performance
- `lune/TimePicker` spacing between pickers in RTL
- `lune/WizardPanels` to read out properly

## [1.0.0-rc.1] - 2020-06-29

### Removed

- `lune` focus animation

### Added

- `lune` high-contrast support

### Changed

- `lune/Input` prop `size` default value to small

### Fixed

- `lune/ActionGuide`, `lune/Alert`, `lune/Checkbox`, `lune/CheckboxItem`, and `lune/FormCheckboxItem`, `lune/Input`, `lune/MediaPlayer`, `lune/Picker`, and `lune/VideoPlayer` style to match latest designs
- `lune/Dropdown` margins to correctly align with other components
- `lune/FixedPopupPanels` and `lune/FlexiblePopupPanels` to allow clicking near, but outside, the Panels to dismiss them
- `lune/FixedPopupPanels` to not read out a title twice
- `lune/FlexiblePopupPanels` and `lune/PopupTabLayout` shadow effects
- `lune/Input` submit button positioning
- `lune/Item` to prevent unnecessary re-rendering
- `lune/PopupTabLayout` to read out properly
- `lune/Scroller` and `lune/VirtualList` to not show a scroll thumb when focus is moving without scrolling
- `lune/Tooltip` arrow rendering to eliminate a vertical gap
- `lune/WizardPanels` direction of buttons and transition in RTL locales

## [1.0.0-beta.8] - 2020-06-22

### Added

- `lune` LESS mixin `.sand-spotlight-focus-text-colors` to support focused font style
- `lune/ImageItem` prop `centered` to center the primary caption in vertical orientation

### Changed

- `lune` LESS mixins `.sand-spotlight-resting-colors` and `.sand-spotlight-focus-colors` to `.sand-spotlight-resting-bg-colors` and `.sand-spotlight-focus-bg-colors` respectively
- `lune/Button` to include a small top and bottom margin to avoid clipping the expanded focus state
- `lune/Dropdown` to prevent focus on the outer area
- `lune/Icon` supported icon list
- `lune/Input` `disabled` prop to not close an open input
- `lune/MediaControls` to show more components via wheel down

### Fixed

- `lune/Dropdown` to support readout placeholder string
- `lune/Button`, `lune/DatePicker`, `lune/FormCheckboxItem`, `lune/ImageItem`, `lune/Item`, and `lune/MediaOverlay` font style when focused
- `lune/Checkbox` to center the icon
- `lune/ContextualMenuDecorator` to match the latest style guide
- `lune/DatePicker` to read out 'day', 'month', or 'year' when it is focused or its value is changed
- `lune/Dropdown` to match the latest design
- `lune/Dropdown` to not expand the button activator when focused
- `lune/FixedPopupPanels` and `lune/FlexiblePopupPanels` to respect `spotlightRestrict`
- `lune/FixedPopupPanels` padding in RTL locales
- `lune/FormCheckboxItem` to not have a focusable inner part
- `lune/Input` to display the submit button when the number input field is used
- `lune/Input` to support accessibility features
- `lune/Item` style to match latest designs
- `lune/KeyGuide` to position on the right in RTL
- `lune/MediaOverlay` style to match latest designs
- `lune/Panels` to properly restore focus after a transition
- `lune/Popup` to correctly emit the `onClose` event when focus leaves the popup
- `lune/PopupTabLayout` to position on the left in RTL
- `lune/ProgressButton` to match the latest design
- `lune/Scroller` and `lune/VirtualList` to not show the scrollbar on every re-render
- `lune/Switch` and `lune/SwitchItem` accessibility read out
- `lune/TabLayout` to center tab icons when collapsed
- `lune/TimePicker` to read out 'hour' or 'minute' when it is focused or its value is changed
- `lune/TooltipDecorator` to center text when `tooltipMarquee` is used with centered alignment

## [1.0.0-beta.7] - 2020-06-16

### Added

- `lune/Dropdown` prop `title` to optionally display a heading above the component
- `lune/FixedPopupPanels` and `lune/FlexiblePopupPanels` prop `fullHeight` to force these components to always stretch to the screen edges
- `lune/Icon` prop `flip` value `"auto"` to automatically flip the icon horizontally for RTL locales
- `lune/TooltipDecorator` prop `tooltipType` to support new transparent label-style tooltips
- `lune/TooltipDecorator` prop `tooltipMarquee` to support marquee

### Changed

- `lune/Dropdown` prop `title` to `placeholder` to display a value within the component when no selection has been made
- `lune/Input` to highlight activated number cells
- `lune/Panel` and `lune/WizardPanels` support for reference forwarding to obtain a reference to each component's root node

### Fixed

- `lune/Alert` to center its content when `type="fullscreen"`
- `lune/Button` flashing when switching `selected` on and off
- `lune/CheckboxItem`, `lune/FormCheckboxItem`, `lune/RadioItem`, and `lune/SwitchItem` slots margins
- `lune/ContextualMenuDecorator` to not be read as an alert when rendered
- `lune/ContextualPopupDecorator` to position itself correctly when `direction` is changed
- `lune/DayPicker` format for locales that do not start the week on Sunday
- `lune/Dropdown` to properly read the focused item
- `lune/FixedPopupPanels` layout in RTL locales
- `lune/FixedPopupPanels` to support accessibility properly
- `lune/FixedPopupPanels` to flex to the content size and invoke scrolling (when using `lune/Scroller`) when the content is too big
- `lune/Input` to update `invalidTooltip` to the latest design
- `lune/Panel` and `lune/WizardPanels` to not read out the Panel title after closing a dropdown
- `lune/TabLayout` to restore focus to the selected tab when expanding without icons
- `lune/TabLayout` performance when focusing items in the layout
- `lune/ThemeDecorator.AccessibilityDecorator` not to overwrite its `skinVariants` prop
- `lune/VirtualList` focus when 5-way directional keys are quickly and consecutively pressed
- `lune/WizardPanels` to use `lune/Skinnable`

## [1.0.0-beta.6] - 2020-06-08

### Removed

- `lune/Alert` prop `subtitle`

### Added

- `lune/KeyGuide` support for color keys
- `lune/Scroller` props `horizontalScrollThumbAriaLabel` and `verticalScrollThumbAriaLabel` to provide customization of the hint string read when a scroll thumb is focused

### Changed

- `lune/Icon` supported icon list, adding new icons and removing unused ones

### Fixed

- `lune/Alert` to use multi-line content when `"fullscreen"`
- `lune/Checkbox`, `lune/CheckboxItem`, `lune/Switch`, `lune/SwitchItem`, `lune/RadioItem` and `lune/FormCheckboxItem` to read out as selected value
- `lune/Dropdown` to retain correct focus when `selected` or `children` change
- `lune/Dropdown` to show an item fully when the item gets focus
- `lune/FixedPopupPanels` and `lune/FlexiblePopupPanels` to properly respond to back button presses
- `lune/Panels.Header` style to match latest designs
- `lune/Popup` to always remove the scrim when closed
- `lune/Scroller` and `lune/VirtualList` to show the scrollbar initially
- `lune/Scroller` and `lune/VirtualList` to show the horizontal overscroll effect properly in RTL locales
- `lune/TabLayout` button sizes to match the latest designs
- `lune/WizardPanels` to respect using `spotlight/SpotlightContainerDecorator.spotlightDefaultClass` to determine the default focus

## [1.0.0-beta.5] - 2020-06-01

### Removed

- `lune/MediaPlayer.MediaControls` props `backwardIcon`, `forwardIcon`, `noRateButtons`, `onBackwardButtonClick`, `onForwardButtonClick`, `rateButtonsDisabled`

### Added

- `lune/FlexiblePopupPanels.Panel` props `prevButton` and `nextButton` to provide customization of the navigational buttons on each `Panel`
- `lune/FlexiblePopupPanels` props `onChange`, `onNextClick`, and `onPrevClick` to notify consumers of navigational events
- `lune/FlexiblePopupPanels` props `prevButtonVisibility` and `nextButtonVisibility` for assigning the default visibility of the navigational buttons
- `lune/MediaPlayer.MediaControls` prop `rateChangeDisabled` to prevent playback rate control via rewind and fast-forward keys
- `lune/PopupTabLayout` panel transition animation

### Changed

- `lune/FlexiblePopupPanels` to provide a close button on the first panel and navigational buttons on each panel

### Fixed

- `lune/Alert` to support the use of any component in the children area
- `lune/DatePicker` and `lune/TimePicker` to handle locale changes
- `lune/DatePicker` and `lune/TimePicker` to format locale labels on-demand for v8 snapshot compatibility
- `lune/Dropdown` to center scrolling to selected index
- `lune/Item` to properly accept numbers for `label`
- `lune/PopupTabLayout` tall-content scrolling capability
- `lune/PopupTabLayout` and `lune/FixedPopupPanels` bottom padding
- `lune/Scroller` and `lune/VirtualList` scrollbar height
- `lune/Slider` bar style to match latest designs
- `lune/VideoPlayer` to show a scrim behind the media controls
- `lune/VirtualList` to properly set the scroll position after focus changes

## [1.0.0-beta.4] - 2020-05-26

### Removed

- `lune/Panels` prop `featureContent`
- `lune/Panels.FixedPopupPanels`, `lune/Panels.FlexiblePopupPanels`, `lune/Panels.View`, and `lune/Panels.WizardPanels` aliases
- `lune/Scroller` and `lune/VirtualList` prop `initialHiddenHeight`
- `lune/WizardPanels` prop `buttons`, put buttons inside `footer` instead
- `lune/WizardPanels` props `noPrevButton`,`noNextButton`, `nextButtonAriaLabel`, `nextButtonText`, `prevButtonAriaLabel`, and `prevButtonText`, replacing them with simpler `nextButton` and `prevButton` props

### Added

- `lune/DatePicker` function `dateToLocaleString` to create locale-aware date strings
- `lune/DayPicker` component
- `lune/Icon` feature to support arbitrary icon sizes via the existing `size` prop
- `lune/ImageItem` public class names `fullImage`, `horizontal`, and `vertical`
- `lune/Input` props `invalid` and `invalidMessage` to mirror the API of `InputField`
- `lune/Input` props `maxLength`, `minLength`, and `numberInputField` to support arbitrary number lengths
- `lune/PopupTabLayout` and `lune/TabLayout` prop `onTabAnimationEnd` to notify consumers when the animation to collapse or expand the tabs completes
- `lune/TimePicker` function `timeToLocaleString` to create locale-aware time strings
- `lune/WizardPanels` props `prevButtonVisibility` and `nextButtonVisibility` for assigning the default visibility of the navigational buttons
- `lune/WizardPanels.Panel` props `prevButton` and `nextButton` to provide customization of the navigational buttons on each `Panel`

### Fixed

- `lune/Panels` to not fire transition events when initially rendered
- `lune/Scroller` and `lune/VirtualList` to properly handle keydown events
- `lune/TabLayout` default focus rules
- `lune/Tooltip` style to match latest designs
- `lune/VideoPlayer` to jump back when using the 5-way left key
- `lune/VirtualList` to support navigation with spottable children inside an item

## [1.0.0-beta.3] - 2020-05-11

### Removed

- `lune/VideoPlayer.MediaControls` component. Use `lune/MediaPlayer.MediaControls` instead.

### Added

- `lune/FixedPopupPanels` `width` prop, which now includes "half" to support larger content
- `lune/MediaPlayer` submodule which provides `MediaControls`, `MediaSlider`, and `Times` components for use in custom media player components
- `lune/TabLayout` support for `horizontal` orientation
- `lune/WizardPanels` props `current` and `total` to configure the `Steps` component directly when the number of `Panel` instances do not match the number of steps
- `lune/WizardPanels` prop `onBack` to allow developers to handle back button presses
- `lune/WizardPanels` support for animating changes to title and subtitle

### Changed

- `lune/Scroller` and `lune/VirtualList` to adjust padding area
- `lune/Scroller` and `lune/VirtualList` clickable scrollbar area
- `lune/WizardPanels` to automatically handle back key when `noPrevButton` is not set
- `lune/WizardPanels` to support multi-line subtitles

### Fixed

- `lune/Panels.Header` to match latest designs

## [1.0.0-beta.2] - 2020-05-04

### Deprecated

- `lune/Panels.WizardPanel` and `lune/Panels.View`, replaced with `lune/WizardPanels` and `lune/WizardPanels.Panel` respectively
- `lune/Panels.FlexiblePopupPanels`, replaced with `lune/FlexiblePopupPanels`
- `lune/Panels.FixedPopupPanels`, replaced with `lune/FixedPopupPanels`

### Added

- `lune/WizardPanels` props `nextButtonAriaLabel`, `prevButtonAriaLabel`, `noNextButton`, `noPrevButton`, and `noSteps`
- `lune/Scroller` and `lune/VirtualList` prop `initialHiddenHeight` to provide the height of the vertical scrollbar when the `featureContent` prop in the panel is set to true
- `lune/Input.InputPopup` component

### Fixed

- `lune/Header` centering
- `lune/Input.InputField` disabled colors
- `lune/WizardPanels` to hide previous and next buttons appropriately
- `lune/TabLayout` to support disabled tabs

## [1.0.0-beta.1] - 2020-04-27

### Removed

- `lune/Item` prop `selected`
- `lune/Panels.Header` props `headerInput` and `showInput`
- `lune/TabLayout` prop `tabs`
- `lune/DayPicker`, `lune/DaySelector`, `lune/Dialog`, `lune/EditableIntegerPicker`, `lune/ExpandableInput`, `lune/ExpandableItem`, `lune/ExpandableList`, `lune/ExpandablePicker`, `lune/FormCheckbox`, `lune/GridListImageItem`, `lune/IconButton`, `lune/IncrementSlider`, `lune/InputPopup`, `lune/LabeledIcon`, `lune/LabeledIconButton`, `lune/LabeledItem`, `lune/Notification`, `lune/Panels.ActivityPanels`, `lune/Panels.AlwaysViewingPanels`, `lune/Panels.Breadcrumb`, `lune/SelectableItem`, `lune/SlotItem`, `lune/ToggleButton`, `lune/ToggleIcon`, and `lune/ToggleItem`

### Added

- `lune/Heading` support for `size` type of `'tiny'`
- `lune/Item` prop `centered`
- `lune/Panels` and `lune/Panels.WizardPanel` props `onTransition` and `onWillTransition`
- `lune/Panels.WizardPanel` prop `noAnimation` to suppress view transition animation
- `lune/PopupTabLayout` component
- `lune/Scroller` prop `fadeOut` to show fade-out effect
- `lune/Slider` and `lune/ProgressBar` prop `showAnchor` to display anchor based on `progressAnchor` value
- `lune/VideoPlayer` props `initialJumpDelay`, `jumpDelay`, and `no5WayJump` to prevent and adjust the speed of media jumping via 5-way
- `lune/VirtualList.VirtualGridList` prop `noAffordance` to remove the affordance effect when scrolling forward via 5-way

### Changed

- `lune/ImageItem` focus effect when in a vertical orientation

### Fixed

- `lune/BodyText` font weight
- `lune/BodyText` line-wrap and `noWrap` capabilities
- `lune/DatePicker` and `lune/TimePicker` to match current designs
- `lune/Dropdown` to focus on selected option
- `lune/Picker` horizontal joined height in large text mode
- `lune/Scroller` focus behavior of the scroll thumb

## [1.0.0-alpha.9] - 2020-04-20

### Deprecated

- `lune/TabLayout` prop `tabs`, to be removed in beta.1. Use `lune/TabLayout.Tab` instead.

### Added

- `lune/Panels.Panel` prop `featureContent` to minimize the panel visuals to feature the content more prominently
- `lune/TabLayout.Tab` for configuring `TabLayout` tab contents

### Fixed

- `lune/Button` styles for `selected`
- `lune/Switch` sizing and positioning in large text mode
- `lune/Checkbox` and `lune/RadioItem` styling when disabled and focused

## [1.0.0-alpha.8] - 2020-04-14

### Deprecated

- `lune/Panels.Header` props `headerInput` and `showInput`, to be removed in 1.0.0-beta.1

### Added

- `lune/Panels.FlexiblePopupPanels` for a flexible size pop-up Panels experience
- `lune/Panels` and `lune/Panels.Header` props `backButtonAriaLabel`, `backButtonBackgroundOpacity`, `closeButtonAriaLabel`, `closeButtonBackgroundOpacity`, `noBackButton`, `noCloseButton`, `onBack`, and `onClose`

### Changed

- `lune/Panels.OptionPanels` to `lune/Panels.FixedPopupPanels`
- `lune/Scroller` and `lune/VirtualList` overscroll effect to bounce
- `lune/Picker` horizontal joined behavior and style for updated GUI

### Fixed

- `lune/TabLayout` to not select a previously focused tab after switching from 5-way to pointer mode

## [1.0.0-alpha.7] - 2020-04-06

### Added

- `lune/Tooltip` public class names `tooltip` and `tooltipLabel`

### Changed

- `lune/Picker`, `lune/ProgressBar.ProgressBarTooltip`, and `lune/Steps` to use a number font for numeric content

### Fixed

- `lune/Panels.Header` to always vertically center the input field
- `lune/ImageItem` to not have a truncated label in RTL locales
- `lune/VirtualList.VirtualGridList` to position items correctly at the bottom when scrolling via down key
- `lune/Switch` styling when disabled and focused

## [1.0.0-alpha.6] - 2020-03-30

### Removed

- `lune/Panels` support for `controls` and the application close button

### Deprecated

- `lune/FormCheckbox`, use `lune/Checkbox` instead
- `lune/GridListImageItem`, use `lune/ImageItem` instead
- `lune/Panels.Breadcrumb`, to be removed in beta.1

### Added

- `lune/ImageItem` component
- `lune/ProgressButton` component
- `lune/Checkbox` standalone interactive capability
- `lune/Checkbox`, `lune/CheckboxItem`, and `lune/FormCheckboxItem` props `indeterminate` and `indeterminateIcon`, for representing a half or mixed state of a checkbox
- `lune/FromCheckboxItem` and `lune/Item` styling

### Changed

- `lune/FeedbackTooltip` visuals for updated GUI
- `lune/MediaOverlay` styling
- `lune/Panels` to default to `SlideLeftArranger`
- `lune/Panels` styling to match updated GUI

### Fixed

- `lune/Button` and `lune/Item` (and their derivatives) disabled colors
- `lune/Button` icon-only sizing so it is square once again
- `lune/Input` overlay number type keypad to lay-out its buttons correctly, in a 3x4 grid
- `lune/Scroller` and `lune/VirtualList` to scroll by wheel on the scrollbar
- `lune/Scroller` and `lune/VirtualList` to hide the scrollbar after N seconds
- `lune/Slider` default behavior to activate by focus, so the slider is immediately interactive when using 5-way
- `lune/ProgressBar.ProgressBarTooltip` to display only "center" position when "auto" is selected

## [1.0.0-alpha.5] - 2020-03-23

### Removed

- `lune` LESS mixins `.sand-spotlight-resting` and `.sand-spotlight-focus`, replacing them with `.sand-spotlight-resting-color` and `.sand-spotlight-focus-color` respectively

### Changed

- `lune/VideoPlayer` to not hide playback controls when pressing 5-way up

### Fixed

- `lune/Input.InputField` to show icons when focused
- `lune/Scroller`, `lune/VirtualList.VirtualGridList`, and `lune/VirtualList` to position overscroll effect properly when a horizontal scrollbar is displayed
- `lune/Scroller` to show the focused item fully when scrolling with 5-way directional keys
- `lune/TabLayout` to select tabs when focusing them in 5-way mode
- `lune/ThemeDecorator` global focus+disabled rules to not double-apply opacity values

## [1.0.0-alpha.4] - 2020-03-17

### Added

- `lune/GridListImageItem` props `imageIconComponent` and `imageIconSource` to support an image icon
- `lune/Input` prop `size`
- `lune/Switch` support for focus state

### Fixed

- `lune/Button` icon sizing
- `lune/ContextualPopupDecorator` to correctly manage focus when changing its open state
- `lune/Input` and `lune/Popup` to correctly support marquee
- `lune/Picker` joined styling
- `lune/Scroller.Scroller` to display the `scrollbar` as the correct height
- `lune/Scroller.Scroller` to scroll not sluggish when holding keys on scroll thumb
- `lune/SwitchItem` styling
- `lune/VideoPlayer` to continue to display controls when user activity is detected˛

## [1.0.0-alpha.3] - 2020-03-09

### Deprecated

- `lune/Panels.ActivityPanels` and `lune/Panels.AlwaysViewingPanels`, use `lune/Panels.Panels` or one of the pre-defined views.
- `lune/DayPicker`, `lune/DaySelector`, `lune/EditableIntegerPicker`, `lune/ExpandableItem`, `lune/ExpandablePicker`, `lune/ToggleButton`, `lune/ToggleIcon` to be removed in beta.1
- `lune/Dialog`, use `lune/Popup`
- `lune/ExpandableInput`, `lune/InputPopup`, `lune/InputPopup.NumberInputPopup`, use `lune/Input`
- `lune/LabeledItem`, `lune/SlotItem`, `lune/ToggleItem`, use `lune/Item`
- `lune/Notification`, use `lune/Alert`
- `lune/SelectableItem`, use `lune/CheckboxItem`

### Changed

- `lune/Input` to implement a popup-style input. The old functionality was moved to `lune/Input.InputField`, but is reserved and should only be used when expressly permitted.

### Fixed

- `lune/VirtualList.VirtualList` and `lune/VirtualList.VirtualGridList` to not suddenly jump when pressing directional keys after wheeling
- `lune/Scroller.Scroller` to wheel normally when `focusableScrollbar` prop is `byEnter`
- `lune/Button` styling
- `lune/Heading` styling

## [1.0.0-alpha.2] - 2020-03-03

### Changed

- `lune/Alert` visuals for updated GUI
- `lune/VideoPlayer` visuals for updated GUI

### Added

- `lune/InputPopup` component
- `lune/Panels.WizardPanel` component

## [1.0.0-alpha.1] - 2020-02-26

Initial alpha release.
