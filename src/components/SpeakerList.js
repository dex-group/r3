import React from 'react'
import styled from 'styled-components'

const Speaker = styled.div`
  width: 46%;
  background: rgba(255, 255, 255, 0);
  border-radius: 8px;
  padding: 16px 20px;
  transition: all .3s cubic-bezier(.15, .8, .3, 1.6);
  margin-bottom: 30px;
  &:hover {
    transform: scale(1.04);
    background: rgba(255, 255, 255, .08);
  }

  .linkBox {
    display: flex;
    align-items: flex-start;
    text-decoration: none;
  }

  .linkAvatar {
    flex-shrink: 0;
    margin-right: 16px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: block;
    }
  }

  .linkMeta {
    flex: 1;
  }

  .linkName {
    color: white;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .linkTitle {
    color: white;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 6px;
  }

  .linkDescription {
    color: rgba(255, 255, 255, .6);
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 0;
  }
`

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto 8px;
  max-width: 740px;
`

const Speakers = props => (

  <Speaker>
    <a href={props.link} className="linkBox" target="_blank" rel="noopener noreferrer">
      <span className="linkAvatar"><img alt={props.name} src={props.avatar} title={props.name} /></span>
      <div className="linkMeta">
        <h3 className="linkName">{props.name}</h3>
        <p className="linkTitle">{props.title}</p>
        <p className="linkDescription">{props.description}</p>
      </div>
    </a>
  </Speaker>
)

const SpeakerList = () => {

 return (
  <ListWrapper>
    <Speakers
      link="#"
      avatar ="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "栗子"
      title = "阿里云 • 资深视觉设计师"
      description = "小行星创始人，独立设计师，画师。现任阿里巴巴阿里云高级视觉设计。">
    </Speakers>
    <Speakers
      link="#"
      avatar ="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "唐园园"
      title = "知乎 • 插画设计师"
      description="Designer, Code, Digital Nomad.">
    </Speakers>
    <Speakers
      link="#"
      avatar ="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "郑杯"
      title = "百度 • 插画设计师"
      description = "早期在百度简单搜索负责品牌 Doodle 设计，以及各品牌推广运营视觉设计。包括活动 H5 以及品牌视觉延展。目前在百度搜索运营团队，负责百度搜索各运营活动视觉设计，相关品牌周边设计以及活动插画设计。">
    </Speakers>
    <Speakers
      link="#"
      avatar ="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "约翰强尼"
      title = "wmy • 动画设计师"
      description = "站酷人气动画设计师，毕业于北京电影学院动画系，原就职于动画影视公司，职位动画导演，主要负责人物设计，分镜设计，影片把控。现就职于广告公司 wmy，主要负责分镜及二维动画。">
    </Speakers>
    <Speakers
      link = "#"
      avatar = "https://pbs.twimg.com/profile_images/862852660449468416/S6lliWM7_400x400.jpg"
      name = "煎饼"
      title = "字节跳动 • 动效设计师"
      description = "字节跳动互娱社区资深动画设计师，负责互娱社区旗下产品如抖音/火山的交互动效设计、动画设计。">
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name="曾文静"
      title = "京东金融 • 移动体验设计负责人"
      description = "从 0 到 1 打造京东金融 App 的体验设计，前京东 JDC 视觉设计师，主导京东主站内多个垂直产品的设计及迭代。" >
    </Speakers>
    <Speakers
      link = "#"
      avatar = "https://pbs.twimg.com/profile_images/378800000010252572/78d17364b6d52a63220206d139e6ebbd_400x400.jpeg"
      name = "程智达"
      title = "医渡云 • UED 负责人"
      description = "清华大学理工科博士转行，曾任豌豆荚产品设计师，AcFun 设计总监。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "刘津"
      title = "宜人贷 • 用户体验设计团队负责人"
      description = "曾担任阿里巴巴交互设计专家、网易用户体验设计团队主管。著有《破茧成蝶——用户体验设计师的成长之路》、《破茧成蝶2——以产品为为中心的设计革命》等书，增长设计 UGD 理念推行者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/521179749322723328/yp6wavZW_400x400.jpeg"
      name = "Seven"
      title = "网易蜗牛 • 产品设计师"
      description = "曾参与负责易信、网易云阅读等产品的设计以及视觉团队的管理工作，目前独立负责「网易蜗牛读书」整体的品牌体验设计，包括品牌、UI、动效、营销设计等。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "海波"
      title = "独立产品设计师"
      description = "国内知名独立开发者。作品包括 FarBox、Bitcron、MarkEditor。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "SanityD"
      title = "阿里闲鱼 • 体验设计专家"
      description = "前腾讯高级视觉设计师。现阿里闲鱼体验设计专家，主要负责闲鱼客户端整体设计。曾参与设计淘宝HD，手机淘宝，淘宝二楼，QQ空间等产品设计。" >
    </Speakers>
    <Speakers
      link = "#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "Meng To"
      title = "Design + Code • 创始人"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link = "#"
      avatar = "https://pbs.twimg.com/profile_images/682822194678743040/FHZ9LND1_400x400.png"
      name = "Jamie Fang"
      title = "DaoCloud • 创始人产品设计师"
      description = "现任 DaoCloud 产品设计师。Cornell University 法学硕士毕业。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "钟信"
      title = "Teambition • 视觉设计师"
      description = "主要负责 Teambition 专业化场景中的视觉设计，Sketch 插件 Overview Artboard 和 Pinlog 的作者，Framer 社区原型设计活动获奖者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "胡玥申"
      title = "frog • 高级视觉设计师"
      description = "善于结合设计思维与科学技术，以跨学科的视角去发现设计机会，解决用户痛点。加入 frog 后，他参与了在上海、香港、悉尼、伦敦、新加坡等地进行的各类设计项目，为来自保险、金融、汽车、手机等行业的世界顶级客户服务。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "Allen Wang"
      title = "Fireball 烧蛋工作室 • 首席设计师"
      description = "目前负责 Price Tag 产品设计，开源设计项目 Make Icon With Sketch 作者, 开源 Swift 项目 30DaysofSwift Github 累计 star 超过 9.5K。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "勺子"
      title = "蚂蚁金服 • 体验技术部负责人"
      description = "目前负责蚂蚁金服中后台产品设计体系，开源设计项目 Ant Design 负责人, 在 GitHub 累计 star 超过 20K。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "西西"
      title = "网易云音乐 • 动效设计师"
      description = "前猎豹移动动效设计师，负责猎豹移动旗下移动端产品动效设计，现网易云音乐资深动效设计师，负责品牌推广H5的动效设计。Sketch 插件 Font Packer 和 Sketch2AE 作者" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://pbs.twimg.com/profile_images/936851299601063936/ulH7131R_400x400.jpg"
      name = "邹宇辉"
      title = "哇叽哇叽 • 产品负责人"
      description = "前 NOTHING 产品设计师，主导了 NOTHING 从 0 到 1 的产品迭代。现为在线抓娃娃领域 app「哇叽哇叽」的产品负责人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://pbs.twimg.com/profile_images/792919284213100544/UMkGrKfl_400x400.jpg"
      name = "朱龑"
      title = "独立前端设计师"
      description = "前瀑布 IM 联合创始人、前墨刀设计师。Spectre.css 等著名开源项目作者，Github 上 star 超过 5000+。现为独立前端设计师，提供产品、设计和前端开发服务。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/987287685600456704/DECTdToU_400x400.jpg"
      name = "孙亮"
      title = "多会 • 创始人"
      description = "多会创始人、番茄土豆创始人。设计师和全栈工程师，近十年主导设计开发十几个面向用户的产品，产品包括内部使用管理系统和百万用户服务的大众软件。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://pbs.twimg.com/profile_images/931746922590695424/cp97n_cD_400x400.jpg"
      name = "黄怡"
      title = "Apple • 视觉设计师"
      description = "ZEALER 第一任设计师。GitCafe 设计总监。曾在青蛙设计，目前在苹果新加坡任职视觉设计师。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "王渊"
      title = "Bilibili • 视觉设计师"
      description = "B 站 PGC 垂直业务线以及哔哩哔哩设计语言负责人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "李泽同"
      title = "像素范儿 • 创始人"
      description = "曾任 isobar 中国美术指导，前火星时代UI讲师，线上课负责人。现像素范儿创始人，优阁网创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "靳浩"
      title = "像素范儿 • 教学总监"
      description = "曾担任大可乐手机视觉设计主管，现任像素范儿课程负责人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://pbs.twimg.com/profile_images/709683503978315776/1PHgmyiu_400x400.jpg"
      name = "刘江平"
      title = "爱范儿 • 设计副总裁"
      description = "前腾讯高级视觉设计师。现阿里闲鱼体验设计专家，主要负责闲鱼客户端整体设计。曾参与设计淘宝HD，手机淘宝，淘宝二楼，QQ空间等产品设计。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "王稷豪"
      title = "拼多多 • 产品经理"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "大菠萝"
      title = "微信 • 前端工程师"
      description = "微信前端 UI 工程师，WeSketch 插件作者" >
    </Speakers>
    <Speakers
      link="#"
      avatar="https://cdn.dribbble.com/users/2440/avatars/normal/e6e21fae9c8a22a16c82fec803bf10e3.jpg?1533720426"
      name = "郎启旭"
      title = "moreless • 创始人"
      description = "App Store 推荐应用「潮汐」作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "姜莱"
      title = "石墨文档 • 产品经理"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "Ting"
      title = "ThoughtWorks • 视觉设计师"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "肖畅"
      title = "海豚浏览器 • 设计总监"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "Ashung Hung"
      title = "360 手机 • 设计师"
      description = "Sketch Automate 插件作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "Sheen"
      title = "Sense Design • 创始人"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "Luke"
      title = "腾讯CDC • UI 工程师"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "Snow"
      title = "腾讯CDC • 设计师"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/378800000599124073/db1c3a4f06b15eacb7ce978ea2760e21_400x400.jpeg"
      name = "James Tang"
      title = "Invision • iOS 工程师"
       description= "Magic Mirror 插件作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "刘贝"
      title = " • 设计负责人"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "李兴宇"
      title = "Invo design • 创始人"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "李婧"
      title = "艾体验 • 创始人"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "胡飞"
      title = "点融网 • UED 负责人"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "谢郑凯"
      title = "艾体验 • 设计合伙人"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "Anakin"
      title = "Enjoy • 设计总监"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "飞哥"
      title = "渡鸦 • 视觉设计师"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "秦琼"
      title = "火币网 • 设计师"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "朱宏"
      title = "自由设计师"
      description = "前微软用户体验布道者，MINI 中国顾问。前搜狐、淘宝设计师。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "郗鉴"
      title = "火币网 • 设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "李凯文"
      title = "小米蜂语科技 • 产品总监"
      description = "世界知名设计师和全栈工程师，拥有 20 年互联网设计经验，Design + Code（https://designcode.io）创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/1019068540228337664/d5UVLMDv_400x400.jpg"
      name = "刘通晓"
      title = "sparanoid • 创始人"
       description= "sparanoid 创始人。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/940113532229750785/qywxxLce_400x400.jpg"
      name = "许明辉"
      title = "miiinus • 创始人"
      description = "创始人 & 设计总监.">
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "谢思靖"
      title = "全速网络 • 创意总监"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "吴琳叶"
      title = "Thoughtworks • 中国区设计总监"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "徐强"
      title = " UI Park • 课程总监"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "王静黎"
      title = "奇境文化 • 设计总监"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "菜菜"
      title = "蚂蚁金服 • 资深设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "吴纬国"
      title = "蚂蚁金服 • 设计负责人"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "匡雪婷"
      title = "阿里巴巴 • 资深视觉设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "王镇雷"
      title = "阿里巴巴 • 资深交互设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "傅小贞"
      title = "阿里巴巴 • 资深设计负责人"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "库儿"
      title = "自由设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "盗盗"
      title = "WiFi 万能钥匙 • 产品总监"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "徐爽"
      title = "阿里巴巴 • 交互设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/849862770182963200/oXX2RGpi_400x400.jpg"
      name = "鲁赫"
      title = "Stripe • 资深设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "朱翌炜"
      title = "frog • 资深设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "烧麦"
      title = "自由设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "MartinRGB"
       title= "魅族 • 设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "大熊"
       title= "币信 • 设计负责人"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link="#"
      avatar = "https://pbs.twimg.com/profile_images/477338902068346881/89w7SbqD_400x400.png"
      name = "友才"
       title= "知乎 • 资深设计师"
      description = "前腾讯设计师，《界与面》作者。" >
    </Speakers>
    <Speakers
      link = "#"
      avatar = "https://pbs.twimg.com/profile_images/800094523166584833/AC4tNwLF_400x400.jpg"
      name="Ray"
      title="自由职业产品设计师"
      description="Designer, Code, Digital Nomad.">
    </Speakers>
    <Speakers
      link = "#"
      avatar = "https://pbs.twimg.com/profile_images/466976726602358784/aKc3aDvN_400x400.jpeg"
      name="utom"
      title="iCourt • 产品设计师"
      description="Designer, Code, Digital Nomad.">
    </Speakers>
    <Speakers
      link = "#"
      avatar = "https://pbs.twimg.com/profile_images/800094523166584833/AC4tNwLF_400x400.jpg"
      name="李响"
      title="渡鸦 • 设计总监"
      description="Designer, Code, Digital Nomad.">
    </Speakers>
  </ListWrapper>
 )
}

export default SpeakerList