import GhostPrefix from "lib/utility/enum/GhostPrefix";

const ColorSuffix = ["r-g-b", "r-g-b-a"];
const LengthSuffix = ["length"];
const NumberSuffix = ["number"];
const BorderSuffix = ["width-color?-style?"];

const CheatsheetSuffixes: any = {
    [GhostPrefix.CURSOR]: ["alias", "all-scroll", "auto", "cell", "col-resize", "context-menu", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize", "ns-resize", "nw-resize", "nwse-resize", "no-drop", "none", "not-allowed", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "URL", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out", "initial", "inherit"],
    [GhostPrefix.CARET_COLOR]: ColorSuffix,
    [GhostPrefix.ACCENT_COLOR]: ColorSuffix,
    [GhostPrefix.POINTER_EVENTS]: ["none", "auto"],
    [GhostPrefix.SCROLL_BEHAVIOR]: ["smooth", "auto"],
    [GhostPrefix.RESIZE]: ["both", "horizontal", "vertical", "none"],
    [GhostPrefix.USER_SELECT]: ["none", "text", "all", "auto"],

    [GhostPrefix.TRANSITION]: ["property-duration?-timingFunction?"],
    [GhostPrefix.TRANSITION_DELAY]: NumberSuffix,
    [GhostPrefix.TRANSITION_DURATION]: NumberSuffix,
    [GhostPrefix.TRANSITION_PROPERTY]: ["cssProperty"],
    [GhostPrefix.TRANSITION_TIMING_FUNCTION]: ["ease-linear", "ease-in", "ease-out", "ease-in-out", "x1-y1-x2-y2"],

    [GhostPrefix.MATRIX]: [],
    [GhostPrefix.MATRIX_3D]: [],
    [GhostPrefix.TRANSLATE]: [],
    [GhostPrefix.TRANSLATE_3D]: [],
    [GhostPrefix.TRANSLATE_X]: [],
    [GhostPrefix.TRANSLATE_Y]: [],
    [GhostPrefix.TRANSLATE_Z]: [],
    [GhostPrefix.SCALE]: [],
    [GhostPrefix.SCALE_3D]: [],
    [GhostPrefix.SCALE_X]: [],
    [GhostPrefix.SCALE_Y]: [],
    [GhostPrefix.SCALE_Z]: [],
    [GhostPrefix.ROTATE]: [],
    [GhostPrefix.ROTATE_3D]: [],
    [GhostPrefix.ROTATE_X]: [],
    [GhostPrefix.ROTATE_Y]: [],
    [GhostPrefix.ROTATE_Z]: [],
    [GhostPrefix.SKEW]: [],
    [GhostPrefix.SKEW_X]: [],
    [GhostPrefix.SKEW_Y]: [],
    [GhostPrefix.PERSPECTIVE]: [],

    [GhostPrefix.BG_COLOR]: ColorSuffix,
    [GhostPrefix.BG_ATTACHMENT]: ["scroll", "fixed", "local", "initial", "inherit"],
    [GhostPrefix.BG_BLEND]: ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "saturation", "color", "luminosity"],
    [GhostPrefix.BG_CLIP]: ["border", "padding", "content"],
    [GhostPrefix.BG_ORIGIN]: ["border", "padding", "content"],
    [GhostPrefix.BG_POSITION]: ["left-top", "left-center", "left-bottom", "right-top", "right-center", "right-bottom", "center-top", "center-center", "center-bottom"],
    [GhostPrefix.BG_REPEAT]: ["all", "x", "y", "no"],
    [GhostPrefix.BG_SIZE]: [],

    [GhostPrefix.COLOR]: ColorSuffix,
    [GhostPrefix.FONT_WEIGHT]: ["lighter", "normal", "bold", "bolder", ...NumberSuffix],
    [GhostPrefix.FONT_SIZE]: LengthSuffix,
    [GhostPrefix.FONT_STYLE]: ["normal", "italic"],
    [GhostPrefix.FONT_VARIANT]: ["normal", "small-caps"],
    [GhostPrefix.FONT_VARIANT_CAPS]: ["normal", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "unicase", "titling-caps"],
    [GhostPrefix.TEXT_DECORATION]: ["line-color?-style?-thickness?"],
    [GhostPrefix.TEXT_DECORATION_COLOR]: ColorSuffix,
    [GhostPrefix.TEXT_DECORATION_LINE]: ["none", "underline", "overline", "line-through"],
    [GhostPrefix.TEXT_DECORATION_STYLE]: ["solid", "double", "dotted", "dashed", "wavy"],
    [GhostPrefix.TEXT_DECORATION_THICKNESS]: LengthSuffix,
    [GhostPrefix.TEXT_OVERFLOW]: ["clip", "ellipsis"],
    [GhostPrefix.TEXT_SHADOW]: ["hShadow-vShadow-blurRadius?-color?"],
    [GhostPrefix.TEXT_ALIGN]: ["left", "center", "right", "justify"],
    [GhostPrefix.FONT_FAMILY]: ["fontName"],
    [GhostPrefix.LETTER_SPACING]: ["tighter", "tight", "normal", "wide", "wider", "widest", ...NumberSuffix],
    [GhostPrefix.LINE_HEIGHT]: ["none", "tight", "snug", "normal", "relaxed", "loose", ...LengthSuffix],
    [GhostPrefix.LIST_STYLE_TYPE]: ["disc", "circle", "decimal", "square"],

    [GhostPrefix.DISPLAY]: ["inline", "block", "contents", "flex", "grid", "inline-block", "inline-flex", "inline-grid", "inline-table", "list-item", "run-in", "table", "table-caption", "\n      table-column-group", "table-header-group", "table-footer-group", "table-row-group", "table-cell", "table-column", "table-row", "none"],
    [GhostPrefix.POSITION]: ["static", "absolute", "fixed", "relative", "sticky"],
    [GhostPrefix.TOP]: LengthSuffix,
    [GhostPrefix.BOTTOM]: LengthSuffix,
    [GhostPrefix.RIGHT]: LengthSuffix,
    [GhostPrefix.LEFT]: LengthSuffix,
    [GhostPrefix.BOX]: ["border", "content"],
    [GhostPrefix.FLOAT]: ["right", "left", "none"],
    [GhostPrefix.CLEAR]: ["right", "left", "both", "none"],
    [GhostPrefix.OBJECT_FIT]: ["contain", "cover", "fill", "none", "scale-down"],
    [GhostPrefix.OVERFLOW]: ["auto", "hidden", "clip", "visible", "scroll"],
    [GhostPrefix.OVERFLOW_Y]: ["auto", "hidden", "clip", "visible", "scroll"],
    [GhostPrefix.OVERFLOW_X]: ["auto", "hidden", "clip", "visible", "scroll"],
    [GhostPrefix.OVERSCROLL]: ["auto", "contain", "none"],
    [GhostPrefix.OVERSCROLL_X]: ["auto", "contain", "none"],
    [GhostPrefix.OVERSCROLL_Y]: ["auto", "contain", "none"],
    [GhostPrefix.VISIBILITY]: ["visible", "hidden"],

    [GhostPrefix.FLEX_BASIS]: ["percentage", "divisor-dividend"],
    [GhostPrefix.FLEX_DIRECTION]: ["row", "row-reverse", "col", "col-reverse"],
    [GhostPrefix.FLEX_WRAP]: ["wrap", "wrap-reverse", "nowrap"],
    [GhostPrefix.FLEX_GROW]: ["1", "0"],
    [GhostPrefix.FLEX_SHRINK]: ["1", "0"],

    [GhostPrefix.GRID_TEMPLATE_COLUMNS]: NumberSuffix,
    [GhostPrefix.GRID_COLUMN_SPAN]: NumberSuffix,
    [GhostPrefix.GRID_COLUMN_START]: NumberSuffix,
    [GhostPrefix.GRID_COLUMN_END]: NumberSuffix,
    [GhostPrefix.GRID_TEMPLATE_ROWS]: NumberSuffix,
    [GhostPrefix.GRID_ROW_SPAN]: NumberSuffix,
    [GhostPrefix.GRID_ROW_START]: NumberSuffix,
    [GhostPrefix.GRID_ROW_END]: NumberSuffix,
    [GhostPrefix.GRID_FLOW]: ["row", "col", "dense", "row-dense", "column-dense"],
    [GhostPrefix.GRID_AUTO_COLUMNS]: ["auto", "min", "max"],
    [GhostPrefix.GRID_AUTO_ROWS]: ["auto", "min", "max"],

    [GhostPrefix.GAP]: NumberSuffix,
    [GhostPrefix.COLUMN_GAP]: NumberSuffix,
    [GhostPrefix.ROW_GAP]: NumberSuffix,
    [GhostPrefix.ORDER]: NumberSuffix,
    [GhostPrefix.JUSTIFY_CONTENT]: ["start", "end", "center", "between", "around", "evenly"],
    [GhostPrefix.JUSTIFY_ITEMS]: ["start", "end", "center", "stretch"],
    [GhostPrefix.JUSTIFY_SELF]: ["start", "end", "center", "stretch", "auto"],
    [GhostPrefix.ALIGN_CONTENT]: ["start", "end", "center", "between", "around", "evenly"],
    [GhostPrefix.ALIGN_ITEMS]: ["start", "end", "center", "baseline", "stretch"],
    [GhostPrefix.ALIGN_SELF]: ["start", "end", "center", "baseline", "stretch", "auto"],
    [GhostPrefix.PLACE_CONTENT]: ["start", "end", "center", "between", "around", "evenly", "stretch"],
    [GhostPrefix.PLACE_ITEMS]: ["start", "end", "center", "stretch"],
    [GhostPrefix.PLACE_SELF]: ["start", "end", "center", "stretch", "auto"],

    [GhostPrefix.WIDTH]: LengthSuffix,
    [GhostPrefix.HEIGHT]: LengthSuffix,
    [GhostPrefix.MIN_WIDTH]: LengthSuffix,
    [GhostPrefix.MIN_HEIGHT]: LengthSuffix,
    [GhostPrefix.MAX_WIDTH]: LengthSuffix,
    [GhostPrefix.MAX_HEIGHT]: LengthSuffix,

    [GhostPrefix.PADDING]: LengthSuffix,
    [GhostPrefix.PADDING_RIGHT]: LengthSuffix,
    [GhostPrefix.PADDING_LEFT]: LengthSuffix,
    [GhostPrefix.PADDING_BOTTOM]: LengthSuffix,
    [GhostPrefix.PADDING_TOP]: LengthSuffix,
    [GhostPrefix.PADDING_X]: LengthSuffix,
    [GhostPrefix.PADDING_Y]: LengthSuffix,

    [GhostPrefix.MARGIN]: LengthSuffix,
    [GhostPrefix.MARGIN_RIGHT]: LengthSuffix,
    [GhostPrefix.MARGIN_LEFT]: LengthSuffix,
    [GhostPrefix.MARGIN_BOTTOM]: LengthSuffix,
    [GhostPrefix.MARGIN_TOP]: LengthSuffix,
    [GhostPrefix.MARGIN_X]: LengthSuffix,
    [GhostPrefix.MARGIN_Y]: LengthSuffix,

    [GhostPrefix.SPACE_X]: LengthSuffix,
    [GhostPrefix.SPACE_Y]: LengthSuffix,

    [GhostPrefix.BORDER]: BorderSuffix,
    [GhostPrefix.BORDER_RIGHT]: BorderSuffix,
    [GhostPrefix.BORDER_LEFT]: BorderSuffix,
    [GhostPrefix.BORDER_TOP]: BorderSuffix,
    [GhostPrefix.BORDER_BOTTOM]: BorderSuffix,
    [GhostPrefix.BORDER_Y]: BorderSuffix,
    [GhostPrefix.BORDER_X]: BorderSuffix,
    [GhostPrefix.BORDER_RADIUS]: LengthSuffix,

    [GhostPrefix.OUTLINE]: BorderSuffix,
    [GhostPrefix.OUTLINE_WIDTH]: LengthSuffix,
    [GhostPrefix.OUTLINE_OFFSET]: LengthSuffix,
    [GhostPrefix.OUTLINE_STYLE]: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"],
    [GhostPrefix.OUTLINE_COLOR]: ColorSuffix,

    [GhostPrefix.Z_INDEX]: NumberSuffix,
};

export default CheatsheetSuffixes;