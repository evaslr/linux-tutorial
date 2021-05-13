(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{429:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iptables-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables-应用"}},[t._v("#")]),t._v(" Iptables 应用")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("iptables")]),t._v(" 是一个配置 Linux 内核 "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Firewall",target:"_blank",rel:"noopener noreferrer"}},[t._v("防火墙"),a("OutboundLink")],1),t._v(" 的命令行工具，是 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Netfilter",target:"_blank",rel:"noopener noreferrer"}},[t._v("netfilter"),a("OutboundLink")],1),t._v(" 项目的一部分。 可以直接配置，也可以通过许多前端和图形界面配置。")]),t._v(" "),a("p",[t._v("iptables 也经常代指该内核级防火墙。iptables 用于 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ipv4",target:"_blank",rel:"noopener noreferrer"}},[t._v("ipv4"),a("OutboundLink")],1),t._v("，"),a("em",[t._v("ip6tables")]),t._v(" 用于 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ipv6",target:"_blank",rel:"noopener noreferrer"}},[t._v("ipv6"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Nftables",target:"_blank",rel:"noopener noreferrer"}},[t._v("nftables"),a("OutboundLink")],1),t._v(" 已经包含在 "),a("a",{attrs:{href:"http://www.phoronix.com/scan.php?page=news_item&px=MTQ5MDU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux kernel 3.13"),a("OutboundLink")],1),t._v(" 中，以后会取代 iptables 成为主要的 Linux 防火墙工具。")]),t._v(" "),a("p",[t._v("环境：CentOS7")])]),t._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),a("p",[a("strong",[t._v("iptables 可以检测、修改、转发、重定向和丢弃 IPv4 数据包")]),t._v("。")]),t._v(" "),a("p",[t._v("过滤 IPv4 数据包的代码已经内置于内核中，并且按照不同的目的被组织成 "),a("strong",[t._v("表")]),t._v(" 的集合。"),a("strong",[t._v("表")]),t._v(" 由一组预先定义的 "),a("strong",[t._v("链")]),t._v(" 组成，"),a("strong",[t._v("链")]),t._v("包含遍历顺序规则。每一条规则包含一个谓词的潜在匹配和相应的动作（称为 "),a("strong",[t._v("目标")]),t._v("），如果谓词为真，该动作会被执行。也就是说条件匹配。")]),t._v(" "),a("h2",{attrs:{id:"_2-安装-iptables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-iptables"}},[t._v("#")]),t._v(" 2. 安装 iptables")]),t._v(" "),a("p",[t._v("（1）禁用 firewalld")]),t._v(" "),a("p",[t._v("CentOS 7 上默认安装了 firewalld 作为防火墙，使用 iptables 建议关闭并禁用 firewalld。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl stop firewalld\nsystemctl disable firewalld\n")])])]),a("p",[t._v("（2）安装 iptables")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install -y iptables-services\n")])])]),a("p",[t._v("（3）服务管理")]),t._v(" "),a("ul",[a("li",[t._v("查看服务状态："),a("code",[t._v("systemctl status iptables")])]),t._v(" "),a("li",[t._v("启用服务："),a("code",[t._v("systemctl enable iptables")])]),t._v(" "),a("li",[t._v("禁用服务："),a("code",[t._v("systemctl disable iptables")])]),t._v(" "),a("li",[t._v("启动服务："),a("code",[t._v("systemctl start iptables")])]),t._v(" "),a("li",[t._v("重启服务："),a("code",[t._v("systemctl restart iptables")])]),t._v(" "),a("li",[t._v("关闭服务: "),a("code",[t._v("systemctl stop iptables")])])]),t._v(" "),a("h2",{attrs:{id:"_3-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令"}},[t._v("#")]),t._v(" 3. 命令")]),t._v(" "),a("p",[t._v("基本语法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables(选项)(参数)\n")])])]),a("p",[t._v("基本选项说明：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-P")]),t._v(" "),a("td",[t._v("设置默认策略:iptables -P INPUT (DROP")])]),t._v(" "),a("tr",[a("td",[t._v("-F")]),t._v(" "),a("td",[t._v("清空规则链")])]),t._v(" "),a("tr",[a("td",[t._v("-L")]),t._v(" "),a("td",[t._v("查看规则链")])]),t._v(" "),a("tr",[a("td",[t._v("-A")]),t._v(" "),a("td",[t._v("在规则链的末尾加入新规则")])]),t._v(" "),a("tr",[a("td",[t._v("-I")]),t._v(" "),a("td",[t._v("num 在规则链的头部加入新规则")])]),t._v(" "),a("tr",[a("td",[t._v("-D")]),t._v(" "),a("td",[t._v("num 删除某一条规则")])]),t._v(" "),a("tr",[a("td",[t._v("-s")]),t._v(" "),a("td",[t._v('匹配来源地址 IP/MASK，加叹号"!"表示除这个 IP 外。')])]),t._v(" "),a("tr",[a("td",[t._v("-d")]),t._v(" "),a("td",[t._v("匹配目标地址")])]),t._v(" "),a("tr",[a("td",[t._v("-i")]),t._v(" "),a("td",[t._v("网卡名称 匹配从这块网卡流入的数据")])]),t._v(" "),a("tr",[a("td",[t._v("-o")]),t._v(" "),a("td",[t._v("网卡名称 匹配从这块网卡流出的数据")])]),t._v(" "),a("tr",[a("td",[t._v("-p")]),t._v(" "),a("td",[t._v("匹配协议,如 tcp,udp,icmp")])]),t._v(" "),a("tr",[a("td",[t._v("--dport num")]),t._v(" "),a("td",[t._v("匹配目标端口号")])]),t._v(" "),a("tr",[a("td",[t._v("--sport num")]),t._v(" "),a("td",[t._v("匹配来源端口号")])])])]),t._v(" "),a("p",[t._v("顺序：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables -t 表名 <-A/I/D/R> 规则链名 [规则号] <-i/o 网卡名> -p 协议名 <-s 源IP/源子网> --sport 源端口 <-d 目标IP/目标子网> --dport 目标端口 -j 动作\n")])])]),a("h2",{attrs:{id:"_4-iptables-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-iptables-示例"}},[t._v("#")]),t._v(" 4. iptables 示例")]),t._v(" "),a("h3",{attrs:{id:"_4-1-清空当前的所有规则和计数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-清空当前的所有规则和计数"}},[t._v("#")]),t._v(" 4.1. 清空当前的所有规则和计数")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -F  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空所有的防火墙规则")]),t._v("\niptables -X  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除用户自定义的空链")]),t._v("\niptables -Z  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空计数")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-2-配置允许-ssh-端口连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-配置允许-ssh-端口连接"}},[t._v("#")]),t._v(" 4.2. 配置允许 ssh 端口连接")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/24 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 22为你的ssh端口， -s 192.168.1.0/24表示允许这个网段的机器来连接，其它网段的ip地址是登陆不了你的机器的。 -j ACCEPT表示接受这样的请求")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-3-允许本地回环地址可以正常使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-允许本地回环地址可以正常使用"}},[t._v("#")]),t._v(" 4.3. 允许本地回环地址可以正常使用")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -i lo -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#本地圆环地址就是那个127.0.0.1，是本机上使用的,它进与出都设置为允许")]),t._v("\niptables -A OUTPUT -o lo -j ACCEPT\n")])])]),a("h3",{attrs:{id:"_4-4-设置默认的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-设置默认的规则"}},[t._v("#")]),t._v(" 4.4. 设置默认的规则")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -P INPUT DROP "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置默认的不让进")]),t._v("\niptables -P FORWARD DROP "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认的不允许转发")]),t._v("\niptables -P OUTPUT ACCEPT "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认的可以出去")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-5-配置白名单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-配置白名单"}},[t._v("#")]),t._v(" 4.5. 配置白名单")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -p all -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/24 -j ACCEPT  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许机房内网机器可以访问")]),t._v("\niptables -A INPUT -p all -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".140.0/24 -j ACCEPT  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许机房内网机器可以访问")]),t._v("\niptables -A INPUT -p tcp -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("183.121")]),t._v(".3.7 --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3380")]),t._v(" -j ACCEPT "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许183.121.3.7访问本机的3380端口")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-6-开启相应的服务端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-开启相应的服务端口"}},[t._v("#")]),t._v(" 4.6. 开启相应的服务端口")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" -j ACCEPT "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启80端口，因为web对外都是这个端口")]),t._v("\niptables -A INPUT -p icmp --icmp-type "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" -j ACCEPT "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许被ping")]),t._v("\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已经建立的连接得让它进来")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-7-保存规则到配置文件中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-保存规则到配置文件中"}},[t._v("#")]),t._v(" 4.7. 保存规则到配置文件中")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /etc/sysconfig/iptables /etc/sysconfig/iptables.bak "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任何改动之前先备份，请保持这一优秀的习惯")]),t._v("\niptables-save "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/sysconfig/iptables\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/sysconfig/iptables\n")])])]),a("h3",{attrs:{id:"_4-8-列出已设置的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-列出已设置的规则"}},[t._v("#")]),t._v(" 4.8. 列出已设置的规则")]),t._v(" "),a("blockquote",[a("p",[t._v("iptables -L [-t 表名][链名]")])]),t._v(" "),a("ul",[a("li",[t._v("四个表名 "),a("code",[t._v("raw")]),t._v("，"),a("code",[t._v("nat")]),t._v("，"),a("code",[t._v("filter")]),t._v("，"),a("code",[t._v("mangle")])]),t._v(" "),a("li",[t._v("五个规则链名 "),a("code",[t._v("INPUT")]),t._v("、"),a("code",[t._v("OUTPUT")]),t._v("、"),a("code",[t._v("FORWARD")]),t._v("、"),a("code",[t._v("PREROUTING")]),t._v("、"),a("code",[t._v("POSTROUTING")])]),t._v(" "),a("li",[t._v("filter 表包含"),a("code",[t._v("INPUT")]),t._v("、"),a("code",[t._v("OUTPUT")]),t._v("、"),a("code",[t._v("FORWARD")]),t._v("三个规则链")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -L -t nat                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出 nat 上面的所有规则")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#            ^ -t 参数指定，必须是 raw， nat，filter，mangle 中的一个")]),t._v("\niptables -L -t nat  --line-numbers  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 规则带编号")]),t._v("\niptables -L INPUT\n\niptables -L -nv  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看，这个列表看起来更详细")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-9-清除已有规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-清除已有规则"}},[t._v("#")]),t._v(" 4.9. 清除已有规则")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -F INPUT  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空指定链 INPUT 上面的所有规则")]),t._v("\niptables -X INPUT  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除指定的链，这个链必须没有被其它任何规则引用，而且这条上必须没有任何规则。")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果没有指定链名，则会删除该表中所有非内置的链。")]),t._v("\niptables -Z INPUT  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把指定链，或者表中的所有链上的所有计数器清零。")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-10-删除已添加的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-10-删除已添加的规则"}},[t._v("#")]),t._v(" 4.10. 删除已添加的规则")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加一条规则")]),t._v("\niptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.5 -j DROP\n")])])]),a("p",[t._v("将所有 iptables 以序号标记显示，执行：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -L -n --line-numbers\n")])])]),a("p",[t._v("比如要删除 INPUT 里序号为 8 的规则，执行：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -D INPUT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-11-开放指定的端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-11-开放指定的端口"}},[t._v("#")]),t._v(" 4.11. 开放指定的端口")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -j ACCEPT               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许本地回环接口(即运行本机访问本机)")]),t._v("\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许已建立的或相关连的通行")]),t._v("\niptables -A OUTPUT -j ACCEPT         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许所有本机向外的访问")]),t._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" -j ACCEPT    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许访问22端口")]),t._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" -j ACCEPT    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许访问80端口")]),t._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" -j ACCEPT    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许ftp服务的21端口")]),t._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" -j ACCEPT    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许FTP服务的20端口")]),t._v("\niptables -A INPUT -j reject       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#禁止其他未允许的规则访问")]),t._v("\niptables -A FORWARD -j REJECT     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#禁止其他未允许的规则访问")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-12-屏蔽-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-12-屏蔽-ip"}},[t._v("#")]),t._v(" 4.12. 屏蔽 IP")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -p tcp -m tcp -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.8 -j DROP  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 屏蔽恶意主机（比如，192.168.0.8")]),t._v("\niptables -I INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.45")]),t._v(".6.7 -j DROP       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#屏蔽单个IP的命令")]),t._v("\niptables -I INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.0")]),t._v(".0.0/8 -j DROP      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#封整个段即从123.0.0.1到123.255.255.254的命令")]),t._v("\niptables -I INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124.45")]),t._v(".0.0/16 -j DROP    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#封IP段即从123.45.0.1到123.45.255.254的命令")]),t._v("\niptables -I INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.45")]),t._v(".6.0/24 -j DROP    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#封IP段即从123.45.6.1到123.45.6.254的命令是")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-13-指定数据包出去的网络接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-13-指定数据包出去的网络接口"}},[t._v("#")]),t._v(" 4.13. 指定数据包出去的网络接口")]),t._v(" "),a("p",[t._v("只对 OUTPUT，FORWARD，POSTROUTING 三个链起作用。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A FORWARD -o eth0\n")])])]),a("h3",{attrs:{id:"_4-14-查看已添加的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-14-查看已添加的规则"}},[t._v("#")]),t._v(" 4.14. 查看已添加的规则")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -L -n -v\nChain INPUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("policy DROP "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48106")]),t._v(" packets, 2690K bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n pkts bytes target     prot opt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("     out     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v("               destination\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5075")]),t._v("  589K ACCEPT     all  --  lo     *       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0\n 191K   90M ACCEPT     tcp  --  *      *       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0           tcp dpt:22\n1499K  133M ACCEPT     tcp  --  *      *       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0           tcp dpt:80\n4364K 6351M ACCEPT     all  --  *      *       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0           state RELATED,ESTABLISHED\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6256")]),t._v("  327K ACCEPT     icmp --  *      *       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0\n\nChain FORWARD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("policy ACCEPT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" packets, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n pkts bytes target     prot opt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("     out     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v("               destination\n\nChain OUTPUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("policy ACCEPT 3382K packets, 1819M bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n pkts bytes target     prot opt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("     out     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v("               destination\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5075")]),t._v("  589K ACCEPT     all  --  *      lo      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0\n")])])]),a("h3",{attrs:{id:"_4-15-启动网络转发规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-15-启动网络转发规则"}},[t._v("#")]),t._v(" 4.15. 启动网络转发规则")]),t._v(" "),a("p",[t._v("公网"),a("code",[t._v("210.14.67.7")]),t._v("让内网"),a("code",[t._v("192.168.188.0/24")]),t._v("上网")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -t nat -A POSTROUTING -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".188.0/24 -j SNAT --to-source "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("210.14")]),t._v(".67.127\n")])])]),a("h3",{attrs:{id:"_4-16-端口映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-16-端口映射"}},[t._v("#")]),t._v(" 4.16. 端口映射")]),t._v(" "),a("p",[t._v("本机的 2222 端口映射到内网 虚拟机的 22 端口")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -t nat -A PREROUTING -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("210.14")]),t._v(".67.127 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2222")]),t._v("  -j DNAT --to-dest "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".188.115:22\n")])])]),a("h3",{attrs:{id:"_4-17-字符串匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-17-字符串匹配"}},[t._v("#")]),t._v(" 4.17. 字符串匹配")]),t._v(" "),a("p",[t._v("比如，我们要过滤所有 TCP 连接中的字符串"),a("code",[t._v("test")]),t._v("，一旦出现它我们就终止这个连接，我们可以这么做：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -p tcp -m string --algo kmp --string "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v(" -j REJECT --reject-with tcp-reset\niptables -L\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Chain INPUT (policy ACCEPT)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# target     prot opt source               destination")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# REJECT     tcp  --  anywhere             anywhere            STRING match "test" ALGO name kmp TO 65535 reject-with tcp-reset')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Chain FORWARD (policy ACCEPT)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# target     prot opt source               destination")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Chain OUTPUT (policy ACCEPT)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# target     prot opt source               destination")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-18-阻止-windows-蠕虫的攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-18-阻止-windows-蠕虫的攻击"}},[t._v("#")]),t._v(" 4.18. 阻止 Windows 蠕虫的攻击")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -I INPUT -j DROP -p tcp -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0 -m string --algo kmp --string "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cmd.exe"')]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-19-防止-syn-洪水攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-19-防止-syn-洪水攻击"}},[t._v("#")]),t._v(" 4.19. 防止 SYN 洪水攻击")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -p tcp --syn -m limit --limit "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("/second -j ACCEPT\n")])])]),a("h2",{attrs:{id:"_5-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-参考资料"}},[t._v("#")]),t._v(" 5. 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("https://wiki.archlinux.org/index.php/iptables_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)")]),t._v(" "),a("li",[t._v("https://wangchujiang.com/linux-command/c/iptables.html")])])])}),[],!1,null,null,null);s.default=r.exports}}]);