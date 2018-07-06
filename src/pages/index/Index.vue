<template>

  <div>hello index2  <a href="login.html">login</a>

			<header class="mui-bar mui-bar-nav">
			<div class="nav-city">
				<span  class="nav-text">郴州</span>
				<svg t="1526883235280" class="" style="vertical-align: middle" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
					<defs>
					</defs>
					<path d="M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.139364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z" p-id="1951" fill="#666666"></path>
				</svg>
			</div>
			<h1 class="mui-title">郴州北湖区地质监测平台</h1>
			<a class="weather" href="javascript:">
				<img id="weaImg" src="http://mat1.gtimg.com/pingjs/ext2020/weather/pc/icon/currentweather/day/00.png"/>
				<!--<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAAAsSAAALEgHS3X78AAADLUlEQVRo3u2awXHiQBBFH5TvkIHJwGRgHIHJwOLUx9VGsGRgrn2yyEDOAEewcgZsBhCB97A9W2NZMtJoJK+9TJWrwAg0f7r79/8No5eXF77KGvOF1hlMmyUiUxGZf3owIjIFdsBuCEB9R2YOXAETYHOumTOYL7AuGhTxGvhhT1eqmg3BgEAGTIGs6T3bRuZBRJIW1xfAM3AE1i0Z8Ba4BmYx06wIBaSqB2ABzFV11wLIlffvQ1MwoybazDb/UNroqIf0KkpAtqqaRCUAy9nVADUcDKQRAfiARAQgOXG6S5dapZf2Tg2o6r7m7U8utVU1bXsSoxgWwHI9tb9JaWO+GnCvbYH1O6CCVmcwprly4NIAZEBuxV91bQrcGcOlMam+ExjbnGOpxhuz92VWI61rIzqYEpCFqhaBjfEW+K6qnYVoFzmThwLxelBiTfU+hkUYB0ZlbTWyDgFSArS0+vmwyKTAU4zUMEbbANcishgUjPWRieV7rOUOJRk6MotSzRAhOgej9U6Ruahpfm9Ozusbc+C5qo90XDvPapSzITU78EoAq2peCaZGsbq1FJGFByA2kL+fKSIzXxmISGZNtgrkK381LqXPVc2NZhUn0wuYCv8yPzEweRsZVc1FZFVThGlsHVVzYFT4noXnOstpltbWjIXsFEvtrTf0Aeb4Ti/qhc12wMQoOuZaevJoMGrOvZvHcpiJ9a58UDAW9i1wF3HkugZ+dbUD4w43PwKZUXqXqGyczvsQbWbMlhqVZx3T6xvwGMOkBVsAu/kWuBWRQkRmARF5MAswvDmzlJp7PH8wqXHvyfjNe1LHouEsxCOQuOvNWmC2u+gNTIXcuXENzohgw58JJLbJwnrS3hrfzBhwUuf/RcRt5hhi+poOAat02025W5sfSWzzlxUf9Wj0Wzfw8DfTGtBJMDVAGg0hPLNVNFHZFZPTVoCaDAFTAieNTebLZVKxQaMDNLHULPpgs2hjoRMsGTQKbhKZzNJsFtILLHVSS5dDiwgVppT30dmsw2ztpyt+VV32GdW+vwac1jz+lGAGXWcw/yuYQ83jzwfGOvfK1HXSN5jR+cdz/+j6DYPjjhXyNcqTAAAAAElFTkSuQmCC" alt="天气">-->
				<p class="weatherText"><span id="wea"></span></p>
				<p class="tem"><span id="tem"></span>°C</p>
			</a>
		</header>
		<div class="mui-content">
			<img class="onload" src="../../assets/loading.svg" />
			<div id="popover" class="mui-popover">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" data-value="CS">长沙</li>
					<li class="mui-table-view-cell" data-value="CZ">郴州</li>
				</ul>
			</div>
			<div class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					<!--支持循环，需要重复图片节点-->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="javascript:void(0)"><img index="-1" src="../../assets/loop01.jpg" /></a>
					</div>
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="javascript:void(0)"><img index="-1" src="../../assets/loop01.jpg" /></a>
					</div>
					<div class="mui-slider-item">
						<a href="javascript:void(0)"><img index="0" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527072739661&di=36ad7976914dcb0d185b9af59beeef0b&imgtype=0&src=http%3A%2F%2Fimg3.xiazaizhijia.com%2Fwalls%2F20150417%2Fmid_84422024ff063d3.jpg" /></a>
					</div>
					<div class="mui-slider-item">
						<a href="javascript:void(0)"><img index="1" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527072739661&di=36ad7976914dcb0d185b9af59beeef0b&imgtype=0&src=http%3A%2F%2Fimg3.xiazaizhijia.com%2Fwalls%2F20150417%2Fmid_84422024ff063d3.jpg" /></a>
					</div>
					<div class="mui-slider-item">
						<a href="javascript:void(0)"><img index="2" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527072739661&di=36ad7976914dcb0d185b9af59beeef0b&imgtype=0&src=http%3A%2F%2Fimg3.xiazaizhijia.com%2Fwalls%2F20150417%2Fmid_84422024ff063d3.jpg" /></a>
					</div>
					<!--支持循环，需要重复图片节点-->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="javascript:void(0)"><img index="-1" src="../../assets/loop01.jpg" /></a>
					</div>
				</div>
				<div class="mui-slider-indicator">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
				</div>
			</div>

			<div class="modal">
				<div class="modalHeader">
					<span class="rectDiamonds"></span>
					<h3 class="modalTitle">公告通知<span>&nbsp;&nbsp;/&nbsp;&nbsp;NOTICE OF ANNOUNCEMENT</span></h3>
				</div>
				<div class="modalBody">
					<ul class="noticeList">
						<li class="listItem clearfix" index="0">
							<img src="" alt="">
							<h4>北湖区国土局</h4>
							<p>2018.5.21</p>
						</li>
						<li class="listItem clearfix" index="1">
							<img src="" alt="">
							<h4>北湖区国土局</h4>
							<p>2018.5.21</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="modal">
				<div class="modalHeader">
					<span class="rectDiamonds"></span>
					<h3 class="modalTitle">新闻动态<span>&nbsp;&nbsp;/&nbsp;&nbsp;NEWS INFORMATION</span></h3>
				</div>
				<div class="modalBody">
					<ul class="noticeListColumn">
						<li class="listItem" index="0">
							<img src="" alt="">
							<h4>地震安全知识</h4>
							<p>2018.5.21</p>
						</li>
						<li class="listItem" index="1">
							<img src="" alt="">
							<h4>西区坍塌地震</h4>
							<p>2018.5.21</p>
						</li>
						<li class="listItem" index="2">
							<img src="" alt="">
							<h4>雅安大地震</h4>
							<p>2018.5.21</p>
						</li>
					</ul>
				</div>
			</div>

		</div>
		<footer class="bar bar-tab">
			<a id="main" class="tab-item active" href="javascript:;">
				<img src="../../assets/main(active).png" alt="">
			</a>
			<a id="monitor" class="tab-item" href="login.html">
				<img src="../../assets/monitor.png" alt="">
			</a>
			<a id="report" class="tab-item" href="javascript:;">
				<img src="../../assets/report.png" alt="">
			</a>
			<a id="news" class="tab-item" href="javascript:;">
				<img src="../../assets/news.png" alt="">
			</a>
			<a id="personal" class="tab-item" href="personal.html">
				<img src="../../assets/personal.png" alt="">
			</a>
		</footer>
  </div>

</template>



<script>
import commoncss from '@/assets/libs/common.css'
import muicss from '@/assets/libs/mui.min.css'
import commonjs from '@/assets/libs/common.js'
import rem from '@/assets/libs/flexRem.js'
// import mui from '@/assets/libs/mui.min.js'
import hello from '@/components/Hello'
export default {
  name: 'index',
  components: {
    hello
  },
  data() {
    return {


    }
  },
  mounted() {
    // mui(".bar-tab").on('tap', '#monitor', function() {
		// 		mui.openWindow({
		// 			url: 'web/monitor.html',
		// 			show: {
		// 				aniShow: 'fade-in'
		// 			},
		// 		});
		// 	});
  },
  methods: {

  }
}
/* localStorage.uuid = Date.now()
			mui.plusReady(function() {
				//获得slider插件对象
				var gallery = mui('.mui-slider');
				gallery.slider({
					interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
				});
			});
			mui(".bar-tab").on('tap', '#main', function() {
				mui.openWindow({
					url: 'main.html',
					show: {
						aniShow: 'fade-in'
					},
				});
			});
			mui(".bar-tab").on('tap', '#monitor', function() {
				mui.openWindow({
					url: 'web/monitor.html',
					show: {
						aniShow: 'fade-in'
					},
				});
			});
			mui(".bar-tab").on('tap', '#report', function() {
				mui.openWindow({
					id: 'reportList',
					url: 'web/reportList.html',
					show: {
						aniShow: 'fade-in'
					},
				});
			});
			mui(".bar-tab").on('tap', '#news', function() {
				mui.openWindow({
					url: 'web/news.html',
					show: {
						aniShow: 'fade-in'
					},
				});
			});
			mui(".bar-tab").on('tap', '#personal', function() {
				mui.openWindow({
					id: localStorage.uuid,
					url: 'web/personal.html',
					show: {
						aniShow: 'fade-in'
					},
				});
			});
			mui(".noticeList").on("tap",".listItem",function(){
				var selectId=$(this).attr("index");
				mui.openWindow({
					url:'web/newsDetails.html',
					show:{
						aniShow:'fade-in'
					},
					extras:{
						item: announcementData[selectId]
					}
				})
			})
			mui(".noticeListColumn").on("tap",".listItem",function(){
				var selectId=$(this).attr("index");
				mui.openWindow({
					url:'web/newsDetails.html',
					show:{
						aniShow:'fade-in'
					},
					extras:{
						item: informationData[selectId]
					}
				})
			})

			mui(".mui-bar-nav").on("tap",".nav-city",function(){
				mui('.mui-popover').popover('toggle',document.getElementById("openPopover"));
			});


			mui(".mui-popover").on("tap",".mui-table-view-cell",function(){
				mui('.mui-popover').popover('toggle');
				$('.nav-text').text(this.innerText);
				weather($(this).data('value'))
			});

			function weather(city) {
				ajaxGet('/home/weather', {
					city: city || 'CZ'
				}, function(res) {
					if (res.body && res.body.data) {
						$('#wea').html(res.body.data.wea)
						$('#tem').html(res.body.data.tem)
						$('#weaImg').attr('src', res.body.data.weaImg)
					}
				})
			}

      weather() */


</script>

<style>
body {
				font-family: "Microsoft Yahei", sans-serif;
			}

			ul {
				font-size: 0.28rem;
				color: #8f8f94;
			}

			.mui-btn {
				padding: 0.2rem;
			}
			/* .mui-bar{
				height: 0.88rem;
			} */

			.mui-bar-nav {
				padding-right: 0.1rem;
				white-space: nowrap;
			}
			.mui-bar-nav h1{
				color: #151515;
				font-weight: bold;
				font-size: 0.36rem;
				/* letter-spacing: 0.05em; */
			}
			.mui-bar .mui-title{
				right: 1.6rem;
				left: 1.6rem;
			}
			.mui-popover{
				width: 1.6rem;
			}
			.nav-text {
				line-height: 44px;
				text-align: center;
				white-space: nowrap;
				color: #000;
			}

			.nav-city {
				width: 1.1rem;
				height: 0.88rem;
				display: inline-block;
			}

			.nav-city svg {
				margin: 0 0.04rem 0 -0.1rem;
			}

			.mui-search {
				display: inline-flex;
			}

			.mui-slider img {
				width: 7.5rem;
				height: 2.78rem;
			}

			.modal {
				background-color: #ffffff;
				padding: 0 0.26rem;
				margin-bottom: 0.2rem;
			}

			.modalHeader {
				height: 0.8rem;
				line-height: 0.8rem;
				padding: 0 0.04rem;
				border-bottom: 0.02rem #e9e9e9 solid;
			}

			.rectDiamonds {
				display: inline-block;
				width: 0.0682rem;
				height: 0.32rem;
				margin-right: 0.06rem;
				background-color: #32a9fd;
				vertical-align: middle;
			}

			.modalTitle {
				display: inline-block;
				/*float:left;*/
				font-size: 0.32rem;
				color: #000000;
				vertical-align: middle;
			}

			.modalTitle span {
				/* font-family: "monospace", "Monaco", "Consolas"; */
				font-weight: normal;
				font-size: 0.24rem;
				color: #8f8f94;
			}

			.listItem {
				padding: 0.18rem 0;
				border-bottom: 0.02rem #e9e9e9 solid;
			}

			.noticeList img {
				float: left;
				width: 1.7rem;
				height: 1.3rem;
			}

			.noticeList h4,
			.noticeList p {
				/* text-indent: 0.1rem; */
				line-height: 0.65rem;
				padding-left: 0.2rem;
				overflow: hidden;
			}

			.noticeList h4 {
				line-height: 0.4rem;
				/* white-space: nowrap; */
				color: #7c7c83;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				font-size: 0.36rem;
			}
			.noticeList p {
				color: #8f8f94;
			}

			.noticeListColumn {
				display: flex;
				flex-wrap: wrap;
			}

			.noticeListColumn img {
				width: 2.1rem;
				height: 1.6rem;
			}

			.noticeListColumn .listItem {
				padding-right: 0.2rem;
			}

			.noticeListColumn h4,
			.noticeListColumn p {
				overflow: hidden;
				/* white-space: nowrap; */
				width: 2.1rem;
			}

			.noticeListColumn h4 {
				font-size: 0.28rem;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				color: #151515;
				font-weight: normal;
				line-height: 0.32rem;
			}
			.noticeListColumn p {
				color: #8f8f94;
				font-size: 0.26rem;
			}


			.weather {
				/* vertical-align: -0.09rem; */
				float: right;
				width: 1.2rem;
				height: 44px;
			}

			.weather img {
				height: 0.51rem;
				position: absolute;
				margin-left: 0rem;
				margin-top: 0.15rem;
				margin-right: 0.1rem;
			}

			.weather p {
				font-size: 0.16rem;
				display: inline-block;
			}

			.weatherText {
				position: absolute;
				margin-left: 0.7rem;
				margin-top: 0.1rem;
			}

			.tem {
				position: absolute;
				margin-left: 0.6rem;
				margin-top: 0.4rem;
			}
			.mui-content{
				padding-bottom: 1.1rem;
			}
</style>
