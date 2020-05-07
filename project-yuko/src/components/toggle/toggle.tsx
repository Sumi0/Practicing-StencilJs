import { Component, h } from "@stencil/core"; 

@Component({
  tag: "yuko-toggle",
  styleUrl: "toggle.scss",     
  shadow: true
})
export class YukoToggle {

  render() {
    return(
      <div class="wrapper">
        <label class="switch">
          <input type="checkbox" id="togBtn" />
          <div class="slider round"></div>
        </label>
      </div>
    );
  }
}