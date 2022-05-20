import React from "react";
import styles from './styles.module.css'

export default function Languages(): JSX.Element {
    return (
        <section>
            <div className={styles.container}>
                <h2 style={{fontSize: '2rem'}}>Languages and Tools 💻</h2>
                <img className={styles.img} src="/img/logo/HTML5_logo_and_wordmark.svg" alt="HTML5"/>
                <img className={styles.img} src="/img/logo/CSS3_logo_and_wordmark.svg" alt="CSS3"/>
                <img className={styles.img} src="/img/logo/JavaScript_logo.svg" alt="JavaScript"/>
                <img className={styles.img} src="/img/logo/Typescript_logo.svg" alt="TypeScript"/>
                <img className={styles.img} src="/img/logo/Vue.js_Logo_2.svg" alt="Vue.js"/>
                <img className={styles.img} src="/img/logo/React_logo.svg" alt="React"/>
                <img className={styles.img} src="/img/logo/Angular_logo.svg" alt="Angular"/>
                <img className={styles.img} src="/img/logo/LESS_Logo.svg" alt="Less"/>
                <img className={styles.img} src="/img/logo/Sass_Logo_Color.svg" alt="Sass"/>
                <img className={styles.img} src="/img/logo/Git-logo.svg" alt="git"/>
                <img className={styles.img} src="/img/logo/Markdown-mark.svg" alt="Markdown"/>
                <img className={styles.img} src="/img/logo/Node.js_logo.svg" alt="Nodejs"/>
                <img className={styles.img} src="/img/logo/Npm-logo.svg" alt="Npm"/>
                <img className={styles.img} src="/img/logo/webpack_logo.svg" alt="webpack"/>
                <img className={styles.img} src="/img/logo/ESLint_logo.svg" alt="ESLint"/>
                <img className={styles.img} src="/img/logo/Octicons-mark-github.svg" alt="GitHub"/>
                <img className={styles.img} src="/img/logo/MDN_Web_Docs_logo.svg" alt="MDN"/>
                <img className={styles.img} src="/img/logo/jb_beam.svg" alt="JetBrains Logo"/>
                <img className={styles.img} src="/img/logo/WebStorm_icon.svg" alt="WebStorm"/>
                <img className={styles.img} src="/img/logo/Visual_Studio_Code_logo.svg" alt="VScode"/>
                <img className={styles.img} src="/img/logo/ps_appicon.svg" alt="PhotoShop"/>
                <hr/>
                <h2>特别鸣谢</h2>
                <h2><a href="https://www.jetbrains.com/zh-cn/community/opensource/#support" target={'_blank'}>开源开发许可证 -
                    社区支持</a></h2>
                <h3>JetBrains 通过为核心项目贡献者免费提供一套一流的开发者工具来支持非商业开源项目。</h3>
                <h3>获取所有 JetBrains 工具的免费访问权限，开发您的开源项目！</h3>
                <img src="/img/logo/jb_beam.svg" alt="JetBrains Logo (Main) logo"/>
                <img src="/img/logo/WebStorm.svg" alt="WebStorm logo"/>
            </div>
        </section>)
}
