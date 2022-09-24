import React from 'react'
import './footer.scss'
export default function Footer() {
	return (
		<>
			<footer className="footer border_top">
				<div className="site-footer">
					<div className="mid-footer">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-5 col-lg-3">
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xsm-12">
									<div className="row rowsfooter">
										<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
											<div className="widget-ft first">
												<h4 className="title-menu notbf">
													<span>
														Về chúng tôi
													</span>
												</h4>
												<div className="desfot">
													<p>Delta Platinum là một sản phẩm của Delta Web, với nỗ lực phát triển bền vững về thị trường bất động sản, Delta Platinum đều có thể giúp bạn.<br />
														Tìm tin bán nhà đất hoặc cho thuê nhà đất mới nhất bằng cách sử dụng công cụ tìm kiếm hoặc các đường link ngay trên trang chủ.</p>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
											<div className="widget-ft">
												<h4 className="title-menu a-right">
													<a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu02" aria-controls="collapseListMenu02">
														Chính sách <i className="fa fa-plus" aria-hidden="true" />
													</a>
												</h4>
												<div className="collapse time_work" id="collapseListMenu02">
													<ul className="list-menu">
														<li className="li_menu"><a href="index.html">Trang chủ</a></li>
														<li className="li_menu"><a href="collections/all.html">Tất cả tin rao</a></li>
														<li className="li_menu"><a href="tin-tuc.html">Tin tức</a></li>
														<li className="li_menu"><a href="gioi-thieu.html">Giới thiệu</a></li>
														<li className="li_menu"><a href="lien-he.html">Liên hệ</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
											<h4 className="title-menu notbf">
												<span>
													Liên hệ
												</span>
											</h4>
											<div className="widget-ft last social_footer">
												<div className="contactfooter">
													<div className="flop">
														<div className="fright">
															<p>Bạn cần hỗ trợ ?</p>
															<a className="fone" href="tel:19006750">1900 6750
															</a>
														</div>
														<div className="section flex">
															<div className="fright">
																<span>An Thượng, Hà Nội, Vietnam</span>
															</div>
														</div>
														<div className="section flex">
															<div className="fright">
																<a href="mailto:deltawebltd@gmail.com">deltawebltd@gmail.com</a>
															</div>
														</div>
													</div>
												</div>
												<div className="social_footer">
													<ul className="follow_option">
														<li>
															<a href="#" title="Theo dõi Facebook Delta Platinum"><i className="fa fa-facebook" /></a>
														</li>
														<li>
															<a href="#" title="Theo dõi Twitter Delta Platinum"><i className="fa fa-twitter" /></a>
														</li>
														<li>
															<a href="#" title="Theo dõi Google Plus Delta Platinum"><i className="fa fa-google" /></a>
														</li>
														<li>
															<a href="#" title="Theo dõi Instagam Delta Platinum"><i className="fa fa-instagram" /></a>
														</li>
														<li>
															<a href="#" title="Theo dõi Youtube Delta Platinum"><i className="fa fa-youtube-play" /></a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
											<div className="widget-ft">
												<h4 className="title-menu a-right">
													<a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu04" aria-controls="collapseListMenu04">
														Hướng dẫn <i className="fa fa-plus" aria-hidden="true" />
													</a>
												</h4>
												<div className="collapse time_work" id="collapseListMenu04">
													<ul className="list-menu">
														<li className="li_menu"><a href="index.html">Trang chủ</a></li>
														<li className="li_menu"><a href="collections/all.html">Tất cả tin rao</a></li>
														<li className="li_menu"><a href="tin-tuc.html">Tin tức</a></li>
														<li className="li_menu"><a href="gioi-thieu.html">Giới thiệu</a></li>
														<li className="li_menu"><a href="lien-he.html">Liên hệ</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-footer-bottom copyright clearfix">
						<div className="container">
							<div className="inner clearfix">
								<div className="row tablet">
									<div id="copyright" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-center fot_copyright">
										<span className="wsp">
											<span className="mobile">© Bản quyền thuộc về <b><a href="https://deltaweb.bizwebvietnam.net/" title="Delta Web" target="_blank">Delta Web</a></b>
												<span className="hidden-xs"> | </span>
											</span>
											<span className="opacity1">Cung cấp bởi</span>
											<a href="javascript:;">Sapo</a>
										</span>
									</div>
								</div>
							</div>
							<a href="#" id="back-to-top" className="backtop" title="Lên đầu trang"><i className="fa fa-angle-up" aria-hidden="true" /></a>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
