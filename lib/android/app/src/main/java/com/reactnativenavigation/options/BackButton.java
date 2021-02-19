package com.reactnativenavigation.options;

import android.content.Context;

import com.reactnativenavigation.options.params.BoolParam;
import com.reactnativenavigation.options.params.NullBoolParam;
import com.reactnativenavigation.options.params.StringParam;
import com.reactnativenavigation.options.parsers.BoolParser;
import com.reactnativenavigation.options.parsers.ColorParser;
import com.reactnativenavigation.options.parsers.TextParser;
import com.reactnativenavigation.react.Constants;

import org.json.JSONObject;

public class BackButton extends ButtonOptions {
    public static BackButton parse(Context context, JSONObject json) {
        BackButton result = new BackButton();
        if (json == null || json.toString().equals("{}")) return result;

        result.hasValue = true;
        result.visible = BoolParser.parse(json, "visible");
        result.accessibilityLabel = TextParser.parse(json, "accessibilityLabel", "Navigate Up");
        if (json.has("icon")) result.icon = TextParser.parse(json.optJSONObject("icon"), "uri");
        result.id = json.optString("id", Constants.BACK_BUTTON_ID);
        result.enabled = BoolParser.parse(json, "enabled");
        result.disableIconTint = BoolParser.parse(json, "disableIconTint");
        result.color = ColorParser.parse(context, json, "color");
        result.disabledColor = ColorParser.parse(context, json, "disabledColor");
        result.testId = TextParser.parse(json, "testID");
        result.popStackOnPress = BoolParser.parse(json, "popStackOnPress");

        return result;
    }

    BackButton() {
        id = Constants.BACK_BUTTON_ID;
        accessibilityLabel = new StringParam("Navigate Up");
    }

    public BoolParam visible = NullBoolParam.INSTANCE;
    private boolean hasValue;

    public boolean hasValue() {
        return hasValue;
    }

    public void mergeWith(BackButton other) {
        if (!Constants.BACK_BUTTON_ID.equals(other.id)) id = other.id;
        if (other.accessibilityLabel.hasValue()) accessibilityLabel = other.accessibilityLabel;
        if (other.icon.hasValue()) icon = other.icon;
        if (other.visible.hasValue()) visible = other.visible;
        if (other.color.hasValue()) color = other.color;
        if (other.disabledColor.hasValue()) disabledColor = other.disabledColor;
        if (other.disableIconTint.hasValue()) disableIconTint = other.disableIconTint;
        if (other.enabled.hasValue()) enabled = other.enabled;
        if (other.testId.hasValue()) testId = other.testId;
        if (other.popStackOnPress.hasValue()) popStackOnPress = other.popStackOnPress;
    }

    void mergeWithDefault(final BackButton defaultOptions) {
        if (Constants.BACK_BUTTON_ID.equals(id)) id = defaultOptions.id;
        if (!accessibilityLabel.hasValue()) accessibilityLabel = defaultOptions.accessibilityLabel;
        if (!icon.hasValue()) icon = defaultOptions.icon;
        if (!visible.hasValue()) visible = defaultOptions.visible;
        if (!color.hasValue()) color = defaultOptions.color;
        if (!disabledColor.hasValue()) disabledColor = defaultOptions.disabledColor;
        if (!disableIconTint.hasValue()) disableIconTint = defaultOptions.disableIconTint;
        if (!enabled.hasValue()) enabled = defaultOptions.enabled;
        if (!testId.hasValue()) testId = defaultOptions.testId;
        if (!popStackOnPress.hasValue()) popStackOnPress = defaultOptions.popStackOnPress;
    }

    public void setVisible() {
        visible = new BoolParam(true);
        hasValue = true;
    }

    public void setHidden() {
        visible = new BoolParam(false);
        hasValue = true;
    }

    @Override
    public boolean isBackButton() {
        return true;
    }
}
