import React from 'react'
import styles from "../Faq.module.css"
import faqpres from '../images/FAQ-presentgraphic.svg'
import Helmet from "react-helmet"
export default function Faq() {
  return (
    <div className= {styles.FaqWrapper}>
        <Helmet>
        <title>FAQ! </title>
          <meta name="description" content="About Section of Do Something LA" />
          <meta name="keywords" content="About, Do Something" />
        </Helmet>
      <div className={styles.introFlex}>
        <div className={styles.introCopyFlex}>
        <h3> 常见问题与解答
 <br/></h3>
        <p>如有更多问题，欢迎随时在我们的联系页面或Instagram上给我们留言。你也可以发邮件至 toys@dosomething.club.
 </p>
        </div>
        <img src = {faqpres} alt= "faq present" />
      </div>
      <div className={styles.faqCopy}>
        <h3>此玩具赠送活动是为谁而举办的？</h3>
        <p>为因有困难负担不起礼物给孩子的父母们。另外，欢迎您带着孩子前来。</p> 
        <h3>玩具赠送活动进行的时间与地点：</h3>
        <p>此活动将于 2021 年 12 月 18 日下午 1 点至晚上 9 点在 1756 Naud st, 90012 举行</p>
        <h3>我能在活动中期待什么？</h3>
        <p>当日在浓厚节日气氛中会有说普通话，粤语，英语和西班牙语的志愿者向你挥手与帮助。在场的所有人与您必须全程佩戴口罩。当日可能会有很长的队伍。现场不会提供任何食物，饮料以及洗手间。</p>
        <h3>活动只是有给幼儿的玩具吗？</h3>
        <p>不是，我们会提供给 3个月至16 岁孩子的玩具。</p>
        <h3>活动将会有多少玩具？</h3>
        <p>我们为 2,300 名孩子准备了玩具，我们将采用先到先得的方式提供它们，直到送完为止。</p>
        <h3>现场有停车位吗？</h3>
        <p>活动现场的停车位将会非常有限。 周边街道设有街泊。</p>
        <h3>我能做些什么来帮忙吗</h3>
        <p>向有需要的人或可以联系到他们的组织分享传单与此消息， 在您的社交媒体上转发。每一次分享都很重要。</p>
        <h3>我可以捐赠玩具吗？</h3>
        <p>这次活动中暂不接收玩具的捐赠。 但是，您可以在 www.dosomething.club 以金钱捐赠的方式来帮助我们与我们的社区。谢谢。</p>
        <h3>我可以拍摄照片或者视频吗？</h3>
        <p>您可以为我们的志愿者、装饰品、玩具以及与您同行的人拍照或录像。 但请尊重其他玩具领取者的隐私，请勿拍照。</p>
        <h3>我如何才能及时地了解有关活动的详细信息?</h3>
        <p>在 Instagram 上关注<i>@toy.giveaway</i></p>
        <h3>
        如有其他问题，请发送电子邮件至<i> toys@dosomething.club</i> 或在 Instagram <i>@toy.giveaway</i> 上私信我们。
    </h3>
      </div>
    </div>
  )
}
