import { Component, h } from "@stencil/core"; 

@Component({
  tag: "yuko-main-page",
  styleUrl: "main-page.scss",     
  shadow: true
})
export class YukoMainPage {

  render() {
    return(
      <div class="main-wrapper">
        <yuko-header></yuko-header>
        <div class="body">
          <yuko-side-panel></yuko-side-panel>
          <div>
            <yuko-profile-detail></yuko-profile-detail>
          </div>
        </div>
      </div>
    );
  }
}