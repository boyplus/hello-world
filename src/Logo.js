import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
class Logo extends React.Component {
	render() {
		return (
			<div>
				<div class="row">
					<div class="col-2 col-md-2 col-sm-2"></div>
					<div class="col-1 col-md-1 col-sm-1"></div>
					<div class="col-1 col-md-1 col-sm-1"> <AnchorLink href="#two"><img src="/images/11.png" alt="logo 512" width="150%" /></AnchorLink></div>
					<div class="col-1 col-md-1 col-sm-1"><AnchorLink href="#one"><img src="/images/22.png" alt="logo 512" width="150%" /></AnchorLink></div>
					<div class="col-1 col-md-1 col-sm-1"><AnchorLink href="#one"><img src="/images/33.png" alt="logo 512" width="150%" /></AnchorLink></div>
					<div class="col-1 col-md-1 col-sm-1"><AnchorLink href="#one"><img src="/images/44.png" alt="logo 512" width="150%" /></AnchorLink></div>
					<div class="col-1 col-md-1 col-sm-1"><AnchorLink href="#one"><img src="/images/555.png" alt="logo 512" width="150%" /></AnchorLink></div>
					<div class="col-1 col-md-1 col-sm-1"><AnchorLink href="#one"><img src="/images/66.png" alt="logo 512" width="150%" /></AnchorLink></div>
					<div class="col-1 col-md-1 col-sm-1"></div>
					<div class="col-2 col-md-2 col-sm-2"></div>
				</div>


			</div>
		);
	}
}

export default Logo;