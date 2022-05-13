import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{f as t}from"./app.a29c70c9.js";const e={},o=t('<h1 id="regexp-\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#regexp-\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> RegExp \u6B63\u5219\u8868\u8FBE\u5F0F</h1><p>\u7528\u6765\u5B9A\u4E49\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u89C4\u5219\uFF0C\u8BA1\u7B97\u673A\u53EF\u4EE5\u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u7B26\u5408\u5185\u5BB9\u7684\u5B57\u7B26\u4E32\u4ECE\u4E00\u6BB5\u5185\u5BB9\u4E2D\u63D0\u53D6\u51FA\u6765\u3002\u4E25\u683C\u533A\u5206\u5927\u5C0F\u5199</p><p><strong>\u8BED\u6CD5</strong>\uFF1A<code>new RegExp(&#39;\u6B63\u5219\u8868\u8FBE\u5F0F&#39;,&#39;\u5339\u914D\u6A21\u5F0F&#39;)</code> <code>/\u6B63\u5219\u8868\u8FBE\u5F0F/\u5339\u914D\u6A21\u5F0F</code></p><p><strong>\u5339\u914D\u6A21\u5F0F</strong>\uFF1A<code>i</code> \u5FFD\u7565\u5927\u5C0F\u5199\uFF0C <code>g</code> \u5168\u5C40\u5339\u914D</p><p><code>test()</code> \u7528\u6765\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u6B63\u5219\u8868\u8FBE\u5F0F</p><h2 id="\u91CF\u8BCD" tabindex="-1"><a class="header-anchor" href="#\u91CF\u8BCD" aria-hidden="true">#</a> \u91CF\u8BCD</h2><table><thead><tr><th>\u91CF\u8BCD</th><th>\u4F5C\u7528</th><th>\u91CF\u8BCD</th><th>\u4F5C\u7528</th><th>\u91CF\u8BCD</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><code>{m}</code></td><td>\u6B63\u597D\u51FA\u73B0m\u6B21</td><td><code>|</code></td><td><code>\u8868\u793A\u6216</code></td><td><code>.</code></td><td>\u4EFB\u610F\u5B57\u7B26\uFF0C\u9664\u4E86<code>\\n</code></td></tr><tr><td><code>{n,m}</code></td><td>\u51FA\u73B0n\u5230m\u6B21</td><td><code>[]</code></td><td>\u91CC\u9762\u7684\u5185\u5BB9\u90FD\u8868\u793A\u6216</td><td><code>.</code></td><td><code>\u8868\u793A.</code></td></tr><tr><td><code>{m,} </code></td><td>\u81F3\u5C11\u51FA\u73B0m\u6B21</td><td><code>[a-z]</code></td><td>\u4EFB\u610F\u5C0F\u5199\u5B57\u6BCD</td><td><code>\\w</code></td><td>\u4EFB\u610F\u5355\u8BCD\u5B57\u7B26\uFF0C\u76F8\u5F53\u4E8E<code>[a-zA-Z0-9_]</code></td></tr><tr><td><code>+</code></td><td>\u81F3\u5C11\u4E00\u6B21\uFF0C\u7B49\u4EF7\u4E8E{1,}</td><td><code>[A-Z]</code></td><td>\u4EFB\u610F\u5927\u5199\u5B57\u6BCD</td><td><code>\\W</code></td><td>\u9664\u4E86\u5355\u8BCD\u5B57\u7B26\uFF0C\u76F8\u5F53\u4E8E<code>[^a-zA-Z0-9_]</code></td></tr><tr><td><code>?</code></td><td>0-1\u6B21\uFF0C\u7B49\u4EF7\u4E8E{0,1}</td><td><code>[a-zA-Z]</code></td><td><code>\u4EFB\u610F\u5B57\u6BCD</code></td><td><code>\\s</code></td><td><code>\u7A7A\u683C</code></td></tr><tr><td><code>*</code></td><td>0-\u591A\u6B21\uFF0C\u7B49\u4EF7\u4E8E{0,}</td><td><code>[0-9]</code></td><td><code>\u4EFB\u610F\u6570\u5B57</code></td><td><code>\\S</code></td><td><code>\u9664\u4E86\u7A7A\u683C</code></td></tr><tr><td></td><td></td><td><code>[^]</code></td><td><code>\u8868\u793A\u9664\u4E86</code></td><td><code>\\d</code></td><td><code>\u4EFB\u610F\u6570\u5B57\uFF0C\u76F8\u5F53\u4E8E[0-9]</code></td></tr><tr><td></td><td></td><td><code>^</code></td><td><code>\u8868\u793A\u5B57\u7B26\u4E32\u7684\u5F00\u5934</code></td><td><code>\\D</code></td><td><code>\u9664\u4E86\u6570\u5B57\uFF0C\u76F8\u5F53\u4E8E[^0-9]</code></td></tr><tr><td></td><td></td><td><code>$</code></td><td><code>\u8868\u793A\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E</code></td><td></td><td></td></tr></tbody></table><h2 id="\u5B57\u7B26\u4E32\u4E2D\u548C\u6B63\u5219\u76F8\u5173\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u4E2D\u548C\u6B63\u5219\u76F8\u5173\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u4E2D\u548C\u6B63\u5219\u76F8\u5173\u7684\u65B9\u6CD5</h2><ol><li><code>str.search()</code> \u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\u641C\u7D22\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u542B\u6709\u6307\u5B9A\u7684\u5B50\u4E32\uFF0C\u8FD4\u56DE\u5B57\u7B26\u4E32\u7B2C\u4E00\u6B21\u51FA\u73B0\u4F4D\u7F6E\u7684\u7D22\u5F15\uFF0C\u6CA1\u627E\u5230\u5219\u8FD4\u56DE<code>-1</code></li><li><code>str.split()</code> \u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u62C6\u5206\u4E3A\u4E00\u4E2A\u6570\u7EC4</li><li><code>str.replace()</code> \u4F7F\u7528\u4E00\u4E2A\u65B0\u7684\u5185\u5BB9\uFF0C\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u6307\u5B9A\u5185\u5BB9,\u9ED8\u8BA4\u53EA\u4F1A\u66FF\u6362\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u5185\u5BB9,\u5982\u679C\u5E0C\u671B\u66FF\u6362\u6240\u6709\u7684\u7B26\u5408\u6761\u4EF6\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u662F\u5339\u914D\u6A21\u5F0F<code>g</code></li><li><code>str.match()</code> \u5C06\u5B57\u7B26\u4E32\u4E2D\u7B26\u5408\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5185\u5BB9\u63D0\u53D6\u51FA\u6765,\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u5185\u5BB9\u4FDD\u5B58\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\u8FD4\u56DE</li></ol>',9);function c(r,a){return o}var s=d(e,[["render",c],["__file","\u6B63\u5219\u8868\u8FBE\u5F0F.html.vue"]]);export{s as default};
