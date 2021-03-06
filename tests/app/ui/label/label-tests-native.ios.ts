﻿import labelModule = require("ui/label");
import enums = require("ui/enums");
import colorModule = require("color");
import utilsModule = require("utils/utils");

export function getNativeTextAlignment(label: labelModule.Label): string {
    switch (label.ios.textAlignment) {
        case NSTextAlignment.NSTextAlignmentLeft:
            return enums.TextAlignment.left;
        case NSTextAlignment.NSTextAlignmentCenter:
            return enums.TextAlignment.center;
        case NSTextAlignment.NSTextAlignmentRight:
            return enums.TextAlignment.right;
        default:
            return "unexpected value";
    }
}

export function getNativeBackgroundColor(label: labelModule.Label): colorModule.Color {
    var layer = (<UILabel>label.ios).layer;
    if (!layer || !layer.backgroundColor) {
        return undefined;
    }
    var uiColor = UIColor.colorWithCGColor(layer.backgroundColor);
    return utilsModule.ios.getColor(uiColor);
}
