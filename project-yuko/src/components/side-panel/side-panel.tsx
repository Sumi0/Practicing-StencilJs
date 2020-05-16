import { Component, h, Event, EventEmitter} from "@stencil/core"; 

@Component({
  tag: "yuko-side-panel",
  styleUrl: "side-panel.scss",
  shadow: true
})
export class YukoSidePanel {
@Event() show_profile : EventEmitter;
@Event() show_notifications : EventEmitter;
sp = () => {this.show_profile.emit() ; console.log('bhow-bhow')};
sn = () => {this.show_notifications.emit() ; console.log('meow-meow')}; 

  render() {
    return(
      <div class="wrapper">
        <div class="links"> 
          <div class="profile">   
            <div id="b1" onClick={this.sp}><yuko-button size="root" >Profile</yuko-button></div>    
            <div>   
              <div id="b11"><yuko-button size="small">Settings</yuko-button></div>
              <div id="b12" onClick={this.sn}><yuko-button size="small" >Notification</yuko-button></div>
            </div>
          </div> 
          <div class="my-task">   
            <div id="b2"><yuko-button size="root">My Tasks</yuko-button></div>
            <div>
              <div id="b21"><yuko-button size="small">Task 1</yuko-button></div>
              <div id="b22"><yuko-button size="small">Task 2</yuko-button></div> 
            </div>
          </div>
        </div> 
      </div>	
    );
  }
}