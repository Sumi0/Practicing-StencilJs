import { Component, h, Prop } from "@stencil/core"; 

@Component({
  tag: "yuko-profile-detail",
  styleUrl: "profile-detail.scss",     
  shadow: true
})
export class YukoProfileDetail {
  @Prop() username: string; 
  @Prop({reflect: true}) profile_info: boolean;     
  @Prop({reflect: true}) notification: boolean;   

  render() {
    this.notification = !this.profile_info; 
    const title = "Characters may only contain alphabets, white-spaces not allowed at the beginning. Max-length is 30 characters."; 
    const title_dob = "Enter date in given format only."

    let data = null;
    if(this.profile_info && !this.notification) {
      data = (
        <form>
          <input type="text" pattern="[a-zA-Z][a-zA-Z ]+" title={title} maxlength="30"></input>    
          <input type="text" pattern="^\d{4}-\d{2}-\d{2}$" title={title_dob} placeholder="yyyy-mm-dd"></input>  
          <input type="text" pattern="[a-zA-Z][a-zA-Z ]+" title={title} maxlength="30"></input> 
          <input type="text" pattern="[a-zA-Z][a-zA-Z ]+" title={title} maxlength="30"></input>  
          <input type="submit" style={{display: "none"}}></input>     
        </form>     
      );
    } 
    else if (!this.profile_info && this.notification) {
      data = (
        <div>
          <yuko-toggle></yuko-toggle> 
          <yuko-toggle></yuko-toggle>
          <yuko-toggle></yuko-toggle>
          <yuko-toggle></yuko-toggle>
        </div>
      );
    }

    return(
      <div class="wrapper"> 
        {this.profile_info ? <yuko-tag>Profile Info</yuko-tag> : <yuko-tag>Notification</yuko-tag> }
        <div class="form">
          <div class="main">
            <div class="tags">  
              {this.profile_info ? <yuko-tag>Name</yuko-tag> : <yuko-tag>Send all alerts</yuko-tag> }    
              {this.profile_info ? <yuko-tag>DOB</yuko-tag> : <yuko-tag>Alerts only task success</yuko-tag> }    
              {this.profile_info ? <yuko-tag>Profession</yuko-tag> : <yuko-tag>Alerts only for failed tasks</yuko-tag> }    
              {this.profile_info ? <yuko-tag>Designation</yuko-tag> : <yuko-tag>I do not want any alerts</yuko-tag> }     
            </div> 
            {data}             
          </div> 
          <div class="buttons"> 
            <yuko-button size="medium" cancel={true}>Cancel</yuko-button>
            <yuko-button size="medium" submit={true}>Submit</yuko-button>   
          </div>
        </div>
      </div>
    );  
  }
}   