import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css'

export default function MyReactPage() {
    return (
        <Layout title={`网站导航`}>
            <section className={styles.container}>
                <h1 style={{textAlign: 'center'}}>网站导航</h1>
                <div>
                    <a href="https://developer.mozilla.org/zh-CN/" title="MDN Web Docs" target="_blank">
                        <img className={styles.img} src="/img/logo/MDN_Web_Docs_logo.svg" alt="MDN Web Docs"/>
                    </a>
                    <a href="https://www.bilibili.com/" title="bilibili" target="_blank">
                        <img className={styles.img} src="/img/logo/Bilibili_logo.svg" alt="bilibili"/>
                    </a>
                    <a href="https://hyperskill.org/study-plan" target="_blank" title="JetBrains Academy">
                        <img className={styles.img} src="/img/logo/JetBrains_Academy.svg" alt="JetBrains Academy logo"/>
                    </a>
                    <a href="https://github.com/junjieweb" title="GitHub" target="_blank">
                        <img className={styles.img} src="/img/logo/Octicons-mark-github.svg" alt="GitHub"/>
                    </a>
                    <a href="https://gitee.com/" title="Gitee" target="_blank">
                        <img className={styles.img} src="/img/logo/Gitee_logo_black.svg" alt="Gitee"/>
                    </a>
                    <a href="https://stackoverflow.com/" title="Stack Overflow" target="_blank">
                        <img className={styles.img} src="/img/logo/Stack_Overflow_logo.svg" alt="Stack Overflow"/>
                    </a>
                    <a href="https://www.iconfont.cn/" title="iconfont" target="_blank">
                        <img className={styles.img} src="/img/logo/iconfont.svg" alt="iconfont"/>
                    </a>
                </div>
                <hr/>
                <div>
                    <h3>Dev Tools</h3>
                    <a href="https://www.jetbrains.com/zh-cn/webstorm/" title="WebStorm" target="_blank">
                        <img className={styles.img} src="/img/logo/WebStorm_icon.svg" alt="WebStorm"/>
                    </a>
                    <a href="https://code.visualstudio.com/" target="_blank" title="VScode">
                        <img className={styles.img} alt="VScode"
                             src="/img/logo/Visual_Studio_Code_logo.svg"/>
                    </a>
                    <a href="https://git-scm.com/" target="_blank" title="Git">
                        <img className={styles.img} alt="Git"
                             src="/img/logo/Git-logo.svg"/>
                    </a>
                    <a href="https://tortoisesvn.net/downloads.zh.html" target="_blank" title="TortoiseSVN">
                        <img className={styles.img} alt="TortoiseSVN"
                             src="/img/logo/TortoiseSVN_logo.svg"/>
                    </a>
                    <a href="https://nodejs.org/zh-cn/" target="_blank" title="NodeJS">
                        <img className={styles.img} alt="NodeJS"
                             src="/img/logo/Node.js_logo.svg"/>
                    </a>
                </div>
                <hr/>
                <div>
                    <h3>Vue</h3>
                    <a href="https://cn.vuejs.org/" title="Vue" target="_blank">
                        <img className={styles.img} src="/img/logo/Vue.js_Logo_2.svg" alt="Vue"/>
                    </a>
                    <a href="https://element.eleme.cn/#/zh-CN" title="Element UI" target="_blank">
                        <img className={styles.img} src="/img/logo/Element-UI_logo.svg" alt="Element UI"/>
                    </a>
                    <a href="https://antdv.com/docs/vue/introduce-cn/" title="Ant Design Vue" target="_blank">
                        <img className={styles.img} src="/img/logo/Ant_Design_Vue_logo.svg" alt="Ant Design of Vue"/>
                    </a>
                    <a href="https://vuetifyjs.com/zh-Hans/" title="vuetify" target="_blank">
                        <img className={styles.img} src="/img/logo/vuetify.svg" alt="vuetify"/>
                    </a>
                    <a href="https://vant-contrib.gitee.io/vant/v2/#/zh-CN/" title="Vant" target="_blank">
                        <img className={styles.img} src="/img/logo/Vant_logo.png" alt="Vant"/>
                    </a>
                    <a href="https://v2.vuepress.vuejs.org/zh/" title="VuePress" target="_blank">
                        <img className={styles.img} src="/img/logo/VuePress_logo.png" alt="VuePress"/>
                    </a>
                    <a href="https://cn.vitejs.dev/" title="Vite" target="_blank">
                        <img className={styles.img} src="/img/logo/Vite.svg" alt="Vite"/>
                    </a>
                </div>
                <hr/>
                <div>
                    <h3>Google</h3>
                    <a href="https://translate.google.com/" target="_blank" title="Google 翻译">
                        <img className={styles.img} alt="Google 翻译"
                             src="https://ssl.gstatic.com/translate/favicon.ico"/>
                    </a>
                    <a href="https://news.google.com/topstories?hl=zh-CN&gl=CN&ceid=CN:zh-Hans" target="_blank"
                       title="Google 新闻">
                        <img className={styles.img} alt="Google 新闻"
                             src="https://lh3.googleusercontent.com/-DR60l-K8vnyi99NZovm9HlXyZwQ85GMDxiwJWzoasZYCUrPuUM_P_4Rb7ei03j-0nRs0c4F=w48"/>
                    </a>
                    <a href="https://www.google.com/maps" target="_blank" title="Google 地图">
                        <img className={styles.img} alt="Google 地图"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Google_Earth_icon.svg/640px-Google_Earth_icon.svg.png"/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" title="YouTube">
                        <img className={styles.img} alt="YouTube"
                             src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"/>
                    </a>
                    <a href="https://mail.google.com/" target="_blank" title="Gmail">
                        <img className={styles.img} alt="Gmail"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png"/>
                    </a>
                </div>
                <hr/>
                <div>
                    <h3>React</h3>
                    <a href="https://zh-hans.reactjs.org/" title="React" target="_blank">
                        <img className={styles.img} src="/img/logo/React_logo.svg" alt="React"/>
                    </a>
                    <a href="https://create-react-app.dev/" title="create-react-app" target="_blank">
                        <img className={styles.img} src="/img/logo/create-react-app.svg"
                             alt="create-react-app"/>
                    </a>
                    <a href="http://cn.redux.js.org/" title="Redux" target="_blank">
                        <img className={styles.img} src="/img/logo/redux.svg" alt="Redux"/>
                    </a>
                    <a href="https://reactrouter.com/" title="React-Router" target="_blank">
                        <img className={styles.img} src="/img/logo/React-Router.svg" alt="React-Router"/>
                    </a>
                    <a href="https://docusaurus.io/zh-CN/" title="Docusaurus" target="_blank">
                        <img className={styles.img} src="/img/logo.svg" alt="Docusaurus"/>
                    </a>
                    <a href="https://reactrouter.com/" title="AntDesign" target="_blank">
                        <img className={styles.img} src="/img/logo/AntDesign-of-React.svg"
                             alt="AntDesign"/>
                    </a>
                </div>
            </section>
        </Layout>
    );
}
