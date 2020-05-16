import { Component, h, Prop } from "@stencil/core"; 

@Component({
  tag: "yuko-main-page",
  styleUrl: "main-page.scss",     
  shadow: true 
})
export class YukoMainPage {
  @Prop() show_profile_section: boolean=null;     
  @Prop() show_notification_section: boolean=null;           
   
  render() {
    
    return(
      <div class="main-wrapper">
        <yuko-header ></yuko-header> 
        <div class="body">
          <yuko-side-panel 
          onShow_profile={() => {this.show_profile_section = true; this.show_notification_section=false}}  
          onShow_notifications={() => {this.show_notification_section = true;this.show_profile_section = false}} 
          onClick ={() => console.log(this.show_profile_section, this.show_notification_section)}     
          ></yuko-side-panel>
          <div>
            <yuko-profile-detail profile_info={this.show_profile_section} notification={this.show_notification_section}></yuko-profile-detail>
          </div>      
        </div>
      </div> 
    );  
  }
}
