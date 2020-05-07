import { Component, h, Prop } from "@stencil/core"; 

@Component({
  tag: "yuko-main-page",
  styleUrl: "main-page.scss",     
  shadow: true
})
export class YukoMainPage {
  @Prop() show_profile_section: boolean = null;   
  @Prop() show_notification_section: boolean = null;   
  @Prop() show_panel: boolean;

  render() {
 
    return(
      <div class="main-wrapper">
        <yuko-header ></yuko-header>
        <div class="body">
          <yuko-side-panel></yuko-side-panel>
          <div>
            <yuko-profile-detail profile_info={this.show_profile_section} notification={this.show_notification_section}></yuko-profile-detail>
          </div>
        </div>
      </div>
    );
  }
}