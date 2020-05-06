import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yuko-header",
  styleUrl: "header.scss"
})
export class YukoHeader {
	@Prop() nickname: string = null;
	@Prop() icon: string = "supervised_user_circle";

  render() {
		return(
			<div class="wrapper">
				<div class="display">
					<div class="icon-image"> 
						<yuko-icon icon={this.icon}></yuko-icon>
					</div>
					<div class="user"> {this.nickname} </div>
				</div>
			</div>			
		);
  }
}