<template>
<div class="mui-content">
			<div class="modal">
				<img class="personPhoto" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2907899458,1874948570&fm=27&gp=0.jpg" alt="">
				<img class="addPhoto" style="display: none;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAAAsSAAALEgHS3X78AAAClklEQVRo3u2aMW/aQBTHf1jdYaJj086NAh294K7tQkdPcZS1A98g9BuQD1CJTF6doWMls3hsidqtQ8mUKEthYKaDD8ky9vnAZ/Ch/CUm29g/vXf33r33GqvVimORxRHpRVV/bPt0gFbO5WnkMtf9zoYuN7N9+oAjfmcKj9wDUyAAAh1wpWBsnxNgAHhAs+S33AKjyCXcK4zt0wJGwHkFHjoBhrtAbQ0j3GmswRJFuhZQc+0wFVtDtq76kctUG4wACRUXtm4tgEHkMi4Nc2CQpC6KgKQwNQJZ61PkEuyaAQQ1AgEYi2C8HYztMwR6NctYmgKopQwj6K9qmoKdiUCtbJlRzXPKK5F9yGFEUOxRfw1VLDMwJOM/T1vHylgrWq3yrg2Xp/DxTSVAA5llPN1v676Ey7fw4XUlMJ4Mpm/Y4bJp+zgbMML/Xhl4WnayLOMYevTPhDkxFKZzTJZpqiaaRmidq2kpNUWuwhbdlt/3+Tv8eCrlauFzETCtr7/lGUC3DY9L+PY3/76HZalPmOmD+SW5eBrDPCwL7ivn5rP0BjA13c2stKkM1CQLJjQUZroBIwptCwNhwrygGTzDSPS4hJ9P8OdfJSA3yVr0RhHQ9pkZdBR4n+wWZGUAI0NAJum2h5URgEbE1fe6ayiLM7mFghrqNqsZZeWkBwFxW66OWpBTeLEKKh91dDcvr5tmSZK3OXG1pk6B9IuspaHSbOqIwNQ8MMhN5MrreoWHM5HmOAe2UCGIcg0gAXR3AJALFZCtChoJoOs9QdwBXZXGrPKayVlHjsgUqmgRLognNYbbPlh23MQTW3hPF4QA2WmORssgkNjxPNSHgNa6FztlINty9wqTAmsR17FkI1ohMFsXInSpcUyTgP8BVwzfenN4evoAAAAASUVORK5CYII=" alt="">
			</div>
			<div class="content">
				<!-- <img class="onload" src="../images/loading.svg" /> -->
				<p>账号：<span class="account">123456</span></p>
				<p>昵称：<span class="nickName"></span></p>
				<p>
					<a id="exitBtn">注销登录</a>
				</p>
			</div>
		<footer class="bar bar-tab">
				<a id="main" class="tab-item active" href="index.html">
					<img src="../../assets/main.png" alt="">
				</a>
				<a id="monitor" class="tab-item" href="">
					<img src="../../assets/monitor.png" alt="">
				</a>
				<a id="report" class="tab-item" href="">
					<img src="../../assets/report.png" alt="">
				</a>
				<a id="news" class="tab-item" href="">
					<img src="../../assets/news.png" alt="">
				</a>
				<a id="personal" class="tab-item" href="">
					<img src="../../assets/personal(active).png" alt="">
				</a>
			</footer>
		</div>
</template>

<script>
import commoncss from '@/assets/libs/common.css'
import muicss from '@/assets/libs/mui.min.css'
import commonjs from '@/assets/libs/common.js'
import rem from '@/assets/libs/flexRem.js'
export default {
  components:{},
  data: function() {
    return{

    }
  },
  methods: {


  }
}

</script>

<style>
body {
				font-family: "Microsoft Yahei", sans-serif;
				background-color: #f7f7f7;
			}

			ul {
				font-size: 0.28rem;
				color: #8f8f94;
			}

			.mui-btn {
				padding: 0.2rem;
			}
			.modal {
				background-color: #f7f7f7;
				padding: 0 0.26rem;
				height: 4.1rem;
				display: flex;
			}

			.personPhoto {
				box-sizing: content-box;
				margin: auto;
				border: 0.07rem solid #eeeeee;
				border-radius: 1.21rem;
				width: 2.22rem;
				height: 2.22rem;
			}

			.addPhoto {
				position: absolute;
				width: 0.6rem;
				height: 0.6rem;
				margin-top: 2.5rem;
				margin-left: 4rem;
			}

			.content {
				background-color: #f7f7f7;
				padding: 0 0.26rem;
				margin-bottom: 0.14rem;
				height: 4.1rem;
				/* flex:auto; */
			}

			.content p {
				line-height: 0.9rem;
				border-bottom: 1px solid #eeeeee;
				color: black;
				padding: 0 0.2rem;
			}

			.account,
			.nickName {
				float: right;
				color: #8f8f94;
			}
</style>
