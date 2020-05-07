import { Component, h, Prop } from "@stencil/core"; 

@Component({
  tag: "yuko-profile-detail",
  styleUrl: "profile-detail.scss",     
  shadow: true
})
export class YukoDisplayContent {
  @Prop() username; 

  render() {
    
    const title = "Characters may only contain alphabets, white-spaces not allowed at the beginning.";
    const title_dob = "Enter date in given format only."
    return(
      <div class="wrapper"> 
        <yuko-tag>Profile Info</yuko-tag>
        <div class="form">
          <div class="main">
            <div class="tags">      
              <yuko-tag>Name</yuko-tag>
              <yuko-tag>DOB</yuko-tag>
              <yuko-tag>Profession</yuko-tag>
              <yuko-tag>Designation</yuko-tag>
            </div> 
            <form>
              <input type="text" pattern="[a-zA-Z][a-zA-Z ]+" title={title}></input>    
              <input type="text" pattern="^\d{4}-\d{2}-\d{2}$" title={title_dob} placeholder="yyyy-mm-dd"></input>  
              <input type="text" pattern="[a-zA-Z][a-zA-Z ]+" title={title}></input> 
              <input type="text" pattern="[a-zA-Z][a-zA-Z ]+" title={title}></input> 
              <input type="submit" style={{display: "none"}}></input>    
            </form>
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