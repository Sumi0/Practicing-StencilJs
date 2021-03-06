/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface YukoButton {
        "cancel": boolean;
        "size": "medium" | "small" | "root";
        "submit": boolean;
        "validate": boolean;
    }
    interface YukoHeader {
        "icon": string;
        "show_side_panel": boolean;
        "username": string;
    }
    interface YukoIcon {
        "icon": string;
    }
    interface YukoMainPage {
        "show_notification_section": boolean;
        "show_profile_section": boolean;
    }
    interface YukoProfileDetail {
        "notification": boolean;
        "profile_info": boolean;
        "username": string;
    }
    interface YukoSidePanel {
    }
    interface YukoTag {
    }
    interface YukoToggle {
    }
}
declare global {
    interface HTMLYukoButtonElement extends Components.YukoButton, HTMLStencilElement {
    }
    var HTMLYukoButtonElement: {
        prototype: HTMLYukoButtonElement;
        new (): HTMLYukoButtonElement;
    };
    interface HTMLYukoHeaderElement extends Components.YukoHeader, HTMLStencilElement {
    }
    var HTMLYukoHeaderElement: {
        prototype: HTMLYukoHeaderElement;
        new (): HTMLYukoHeaderElement;
    };
    interface HTMLYukoIconElement extends Components.YukoIcon, HTMLStencilElement {
    }
    var HTMLYukoIconElement: {
        prototype: HTMLYukoIconElement;
        new (): HTMLYukoIconElement;
    };
    interface HTMLYukoMainPageElement extends Components.YukoMainPage, HTMLStencilElement {
    }
    var HTMLYukoMainPageElement: {
        prototype: HTMLYukoMainPageElement;
        new (): HTMLYukoMainPageElement;
    };
    interface HTMLYukoProfileDetailElement extends Components.YukoProfileDetail, HTMLStencilElement {
    }
    var HTMLYukoProfileDetailElement: {
        prototype: HTMLYukoProfileDetailElement;
        new (): HTMLYukoProfileDetailElement;
    };
    interface HTMLYukoSidePanelElement extends Components.YukoSidePanel, HTMLStencilElement {
    }
    var HTMLYukoSidePanelElement: {
        prototype: HTMLYukoSidePanelElement;
        new (): HTMLYukoSidePanelElement;
    };
    interface HTMLYukoTagElement extends Components.YukoTag, HTMLStencilElement {
    }
    var HTMLYukoTagElement: {
        prototype: HTMLYukoTagElement;
        new (): HTMLYukoTagElement;
    };
    interface HTMLYukoToggleElement extends Components.YukoToggle, HTMLStencilElement {
    }
    var HTMLYukoToggleElement: {
        prototype: HTMLYukoToggleElement;
        new (): HTMLYukoToggleElement;
    };
    interface HTMLElementTagNameMap {
        "yuko-button": HTMLYukoButtonElement;
        "yuko-header": HTMLYukoHeaderElement;
        "yuko-icon": HTMLYukoIconElement;
        "yuko-main-page": HTMLYukoMainPageElement;
        "yuko-profile-detail": HTMLYukoProfileDetailElement;
        "yuko-side-panel": HTMLYukoSidePanelElement;
        "yuko-tag": HTMLYukoTagElement;
        "yuko-toggle": HTMLYukoToggleElement;
    }
}
declare namespace LocalJSX {
    interface YukoButton {
        "cancel"?: boolean;
        "size"?: "medium" | "small" | "root";
        "submit"?: boolean;
        "validate"?: boolean;
    }
    interface YukoHeader {
        "icon"?: string;
        "show_side_panel"?: boolean;
        "username"?: string;
    }
    interface YukoIcon {
        "icon"?: string;
    }
    interface YukoMainPage {
        "show_notification_section"?: boolean;
        "show_profile_section"?: boolean;
    }
    interface YukoProfileDetail {
        "notification"?: boolean;
        "profile_info"?: boolean;
        "username"?: string;
    }
    interface YukoSidePanel {
        "onShow_notifications"?: (event: CustomEvent<any>) => void;
        "onShow_profile"?: (event: CustomEvent<any>) => void;
    }
    interface YukoTag {
    }
    interface YukoToggle {
    }
    interface IntrinsicElements {
        "yuko-button": YukoButton;
        "yuko-header": YukoHeader;
        "yuko-icon": YukoIcon;
        "yuko-main-page": YukoMainPage;
        "yuko-profile-detail": YukoProfileDetail;
        "yuko-side-panel": YukoSidePanel;
        "yuko-tag": YukoTag;
        "yuko-toggle": YukoToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "yuko-button": LocalJSX.YukoButton & JSXBase.HTMLAttributes<HTMLYukoButtonElement>;
            "yuko-header": LocalJSX.YukoHeader & JSXBase.HTMLAttributes<HTMLYukoHeaderElement>;
            "yuko-icon": LocalJSX.YukoIcon & JSXBase.HTMLAttributes<HTMLYukoIconElement>;
            "yuko-main-page": LocalJSX.YukoMainPage & JSXBase.HTMLAttributes<HTMLYukoMainPageElement>;
            "yuko-profile-detail": LocalJSX.YukoProfileDetail & JSXBase.HTMLAttributes<HTMLYukoProfileDetailElement>;
            "yuko-side-panel": LocalJSX.YukoSidePanel & JSXBase.HTMLAttributes<HTMLYukoSidePanelElement>;
            "yuko-tag": LocalJSX.YukoTag & JSXBase.HTMLAttributes<HTMLYukoTagElement>;
            "yuko-toggle": LocalJSX.YukoToggle & JSXBase.HTMLAttributes<HTMLYukoToggleElement>;
        }
    }
}
