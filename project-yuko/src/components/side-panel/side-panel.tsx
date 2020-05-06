import { Component, h } from "@stencil/core"; 

@Component({
  tag: "yuko-side-panel",
  styleUrl: "side-panel.scss",
  shadow: true
})
export class YukoSidePanel {

  render() {
    return(
      <div class="wrapper">
        <div class="links"> 
          <div id="profile">
            <yuko-button size="root"></yuko-button>
            <div> 
              <yuko-button size="small"></yuko-button>
              <yuko-button size="small"></yuko-button>
            </div>
          </div> 
          <div id="my-task"> 
            <yuko-button size="root"></yuko-button>
            <div>
              <yuko-button size="small"></yuko-button>
              <yuko-button size="small"></yuko-button> 
            </div>
          </div>
        </div>
      </div>	
    );
  }
}