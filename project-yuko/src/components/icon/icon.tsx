import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yuko-icon",
  styleUrl: "icon.scss"
})
export class YukoIcon {
  @Prop() icon: string = null;
  render() {
    if (/^cut-/i.test(this.icon)) {
      return <i class={this.icon}></i>;
    } else {
      return <i class="material-icons">{this.icon}</i>;
    }
  }
}
