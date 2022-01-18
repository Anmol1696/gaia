(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{726:function(a,t,e){"use strict";e.r(t);var s=e(1),o=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"加入主网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加入主网"}},[a._v("#")]),a._v(" 加入主网")]),a._v(" "),e("p",[a._v("::: 提示\n请查看"),e("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[a._v("launch repo"),e("OutboundLink")],1),a._v("获取主网信息，包含了所使用的Cosmos-SDK的正确版本和genesis文件。\n:::")]),a._v(" "),e("p",[a._v("::: 警告\n"),e("strong",[a._v("在更进一步之前你需要"),e("RouterLink",{attrs:{to:"/zh/gaia-tutorials/installation.html"}},[a._v("安装gaia")])],1),a._v("\n:::")]),a._v(" "),e("h2",{attrs:{id:"创建一个新节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新节点"}},[a._v("#")]),a._v(" 创建一个新节点")]),a._v(" "),e("p",[a._v("这些指令适用于从头开始设置一个全节点。")]),a._v(" "),e("p",[a._v("首先，初始化节点并创建必要的配置文件：")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCAmbHQ7eW91cl9jdXN0b21fbW9uaWtlciZndDsK"}}),a._v(" "),e("p",[a._v("::: 注意\nmoniker只能包含ASCII字符。使用Unicode字符会使得你的节点不可访问\n:::")]),a._v(" "),e("p",[a._v("你可以稍后在"),e("code",[a._v("~/.gaia/config/config.toml")]),a._v("文件中编辑"),e("code",[a._v("moniker")]),a._v(":")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBBIGN1c3RvbSBodW1hbiByZWFkYWJsZSBuYW1lIGZvciB0aGlzIG5vZGUKbW9uaWtlciA9ICZxdW90OyZsdDt5b3VyX2N1c3RvbV9tb25pa2VyJmd0OyZxdW90Owo="}}),a._v(" "),e("p",[a._v("你可以编辑"),e("code",[a._v("~/.gaia/config/config.toml")]),a._v("文件来开启垃圾交易过滤机制以拒绝收到的手续费过低的交易：")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyMjIyMgbWFpbiBiYXNlIGNvbmZpZyBvcHRpb25zICMjIyMjCgojIFRoZSBtaW5pbXVtIGdhcyBwcmljZXMgYSB2YWxpZGF0b3IgaXMgd2lsbGluZyB0byBhY2NlcHQgZm9yIHByb2Nlc3NpbmcgYQojIHRyYW5zYWN0aW9uLiBBIHRyYW5zYWN0aW9uJ3MgZmVlcyBtdXN0IG1lZXQgdGhlIG1pbmltdW0gb2YgYW55IGRlbm9taW5hdGlvbgojIHNwZWNpZmllZCBpbiB0aGlzIGNvbmZpZyAoZS5nLiAxMHVhdG9tKS4KCm1pbmltdW0tZ2FzLXByaWNlcyA9ICZxdW90OyZxdW90Owo="}}),a._v(" "),e("p",[a._v("你的全节点已经初始化成功！")]),a._v(" "),e("h2",{attrs:{id:"genesis-seeds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#genesis-seeds"}},[a._v("#")]),a._v(" Genesis & Seeds")]),a._v(" "),e("h3",{attrs:{id:"复制genesis文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制genesis文件"}},[a._v("#")]),a._v(" 复制genesis文件")]),a._v(" "),e("p",[a._v("将主网的"),e("code",[a._v("genesis.json")]),a._v("文件放置在"),e("code",[a._v("gaiad")]),a._v("的配置文件夹中")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvLmdhaWEvY29uZmlnCmN1cmwgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy9sYXVuY2gvbWFzdGVyL2dlbmVzaXMuanNvbiAmZ3Q7ICRIT01FLy5nYWlhL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),a._v(" "),e("p",[a._v("注意我们使用了"),e("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[a._v("launch repo"),e("OutboundLink")],1),a._v("中的"),e("code",[a._v("latest")]),a._v("文件夹，该文件夹包含了最新版本主网的详细信息。")]),a._v(" "),e("p",[a._v("::: 提示\n如果你想加入的是公共测试网，点击"),e("RouterLink",{attrs:{to:"/zh/gaia-tutorials/join-testnet.html"}},[a._v("这里")]),a._v("\n:::")],1),a._v(" "),e("p",[a._v("运行命令验证配置的正确性:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),a._v(" "),e("h3",{attrs:{id:"添加种子节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加种子节点"}},[a._v("#")]),a._v(" 添加种子节点")]),a._v(" "),e("p",[a._v("你的节点需要知道如何寻找伙伴节点。你需要添加有用的种子节点到"),e("code",[a._v("$HOME/.gaia/config/config.toml")]),a._v("文件中。"),e("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("launch")]),e("OutboundLink")],1),a._v(" repo包含了一些种子节点的链接。")]),a._v(" "),e("p",[a._v("如果这些种子节点不再运行，你可以在Cosmos Hub浏览器(可以在"),e("a",{attrs:{href:"https://cosmos.network/launch",target:"_blank",rel:"noopener noreferrer"}},[a._v("launch page"),e("OutboundLink")],1),a._v("中找到)发现种子节点和持久节点。")]),a._v(" "),e("p",[a._v("你还可以到"),e("a",{attrs:{href:"https://riot.im/app/#/room/#cosmos-validators:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("验证人Riot聊天室"),e("OutboundLink")],1),a._v("里询问可用节点。")]),a._v(" "),e("p",[a._v("你可以阅读"),e("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/develop/docs/tendermint-core/using-tendermint.md#peers",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),e("OutboundLink")],1),a._v("了解更多伙伴节点和种子节点的信息。")]),a._v(" "),e("p",[a._v("::: 警告\n在Cosmos Hub主网中，可接受的币种是"),e("code",[a._v("uatom")]),a._v(","),e("code",[a._v("1atom = 1.000.000uatom")]),a._v("\n:::")]),a._v(" "),e("p",[a._v("Cosmos Hub网络中的交易需要支付一笔交易手续费以得到处理。手续费支付执行交易所消耗的gas。计算公式如下：")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZmVlcyA9IGdhcyAqIGdhc1ByaWNlcwo="}}),a._v(" "),e("p",[e("code",[a._v("gas")]),a._v("由交易本身决定。不同的交易需要不同数量的"),e("code",[a._v("gas")]),a._v("。一笔交易的"),e("code",[a._v("gas")]),a._v("数量在它被执行时计算，但有一种方式可以提前估算，那就是把标识"),e("code",[a._v("gas")]),a._v("\n的值设置为"),e("code",[a._v("auto")]),a._v("。当然，这只是给出一个预估值。如果你想要确保为交易提供足够的gas，你可以使用"),e("code",[a._v("--gas-adjustment")]),a._v("标识来调整预估值(默认是"),e("code",[a._v("1.0")]),a._v(")。")]),a._v(" "),e("p",[e("code",[a._v("gasPrice")]),a._v("是每个单位"),e("code",[a._v("gas")]),a._v("的单价。每个验证人节点可以设置"),e("code",[a._v("min-gas-price")]),a._v("，只会把那些"),e("code",[a._v("gasPrice")]),a._v("高于自己设置的"),e("code",[a._v("min-gas-price")]),a._v("的交易打包。")]),a._v(" "),e("p",[a._v("交易的"),e("code",[a._v("fees")]),a._v("是"),e("code",[a._v("gas")]),a._v("与"),e("code",[a._v("gasPrice")]),a._v("的结果。作为一个用户，你必须输入三者中的两者。更高的"),e("code",[a._v("gasPrice")]),a._v("/"),e("code",[a._v("fees")]),a._v("，将提高你的交易被打包的机会。")]),a._v(" "),e("p",[a._v("::: 提示\n主网中推荐的"),e("code",[a._v("gas-prices")]),a._v("是"),e("code",[a._v("0.0025uatom")]),a._v("\n:::")]),a._v(" "),e("h2",{attrs:{id:"设置minimum-gas-prices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置minimum-gas-prices"}},[a._v("#")]),a._v(" 设置"),e("code",[a._v("minimum-gas-prices")])]),a._v(" "),e("p",[a._v("你的全节点可以在交易池中放入未确认的交易。为了保护其免受Spam攻击，最好设置一个"),e("code",[a._v("minimum-gas-prices")]),a._v("来过滤交易以决定是否要放入交易池。这个参数可以在"),e("code",[a._v("~/.gaia/config/gaiad.toml")]),a._v("文件中配置。")]),a._v(" "),e("p",[a._v("推荐的初始"),e("code",[a._v("minimum-gas-prices")]),a._v("是"),e("code",[a._v("0.0025uatom")]),a._v("，如果你愿意可以稍后再修改它。")]),a._v(" "),e("h2",{attrs:{id:"运行一个全节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行一个全节点"}},[a._v("#")]),a._v(" 运行一个全节点")]),a._v(" "),e("p",[a._v("通过这条命令开始运行全节点：")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),a._v(" "),e("p",[a._v("检查一切是否平稳运行中:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhdHVzCg=="}}),a._v(" "),e("p",[a._v("使用"),e("a",{attrs:{href:"https://cosmos.network/launch",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cosmos Explorer"),e("OutboundLink")],1),a._v("查看网络状态。")]),a._v(" "),e("h2",{attrs:{id:"导出状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出状态"}},[a._v("#")]),a._v(" 导出状态")]),a._v(" "),e("p",[a._v("Gaia能够将整个应用程序的状态转存到一个JSON文件中，该文件可以用于分析还可以用作一个新网络的genesis文件。")]),a._v(" "),e("p",[a._v("导出状态:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),a._v(" "),e("p",[a._v("你还可以导出指定高度的状态(处理完指定高度后的状态):")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),a._v(" "),e("p",[a._v("如果你计划使用导出的状态文件启动一个新网络，导出时要加上"),e("code",[a._v("--for-zero-height")]),a._v("标识:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdIC0tZm9yLXplcm8taGVpZ2h0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),a._v(" "),e("h2",{attrs:{id:"升级成为验证人节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级成为验证人节点"}},[a._v("#")]),a._v(" 升级成为验证人节点")]),a._v(" "),e("p",[a._v("你现在有了一个运行状态的全节点。接下来，你可以升级你的全节点，成为一个Cosmos验证人。排名前100的验证人节点可以向Cosmos Hub提议新的区块。请查看"),e("RouterLink",{attrs:{to:"/zh/gaia-tutorials/validators/validator-setup.html"}},[a._v("创建验证人节点")]),a._v("。")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);