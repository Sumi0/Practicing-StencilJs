import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yuko-button",
  styleUrl: "button.scss",
  shadow: true
})
export class YukoButton {
  @Prop({ reflect: true }) size: "medium" | "small" | "root" = "small";        
  @Prop({ reflect: true }) cancel: boolean;  
  @Prop({ reflect: true }) submit: boolean;
  @Prop({ reflect: true }) validate: boolean;

  render() {
    return (
      <button>
       <slot />
      </button> 
    );               
  }
}
