import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yuko-header",
  styleUrl: "header.scss"
})
export class YukoHeader {
	@Prop() username: string = "User";  
	@Prop() icon: string = "supervised_user_circle";
	@Prop({reflect: true}) show_side_panel: boolean = null;

	show_panel(){ 
		this.show_side_panel = true; 
	}
  render() {
		return(
			<div class="wrapper">
				<div class="display">
					<div class="icon-image" onClick={() => this.show_panel()}> 
						<yuko-icon icon={this.icon}></yuko-icon>
					</div>
					<div class="user"> {this.username} </div> 
				</div> 
			</div>			
		);
  }
}