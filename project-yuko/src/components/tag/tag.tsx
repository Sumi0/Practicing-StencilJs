import { Component, h } from "@stencil/core"; 

@Component({
  tag: "yuko-tag",
  styleUrl: "tag.scss",
  shadow: true
})
export class YukoTag { 

  render() {
    return(
      <div class="wrapper">
        <p><slot /></p>    
      </div>
    );
  }
}