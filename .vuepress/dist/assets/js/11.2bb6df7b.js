(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{217:function(e,t,o){"use strict";o.r(t);var n=o(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"monitor-states-alerts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitor-states-alerts"}},[e._v("#")]),e._v(" Monitor States & Alerts")]),e._v(" "),o("h2",{attrs:{id:"what-does-each-monitor-state-mean"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-does-each-monitor-state-mean"}},[e._v("#")]),e._v(" What does each monitor state mean?")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("NEW")]),e._v(": Monitor is created but it hasn't received any pings yet.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("RUNNING")]),e._v(": Monitor received a "),o("code",[e._v("start")]),e._v(" ping and it's currently running.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("UP")]),e._v(": Monitor is running on schedule and the last ping hasn't exceeded cron scheduled time + grace period.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("ALERT")]),e._v(": Monitor is not running according to the cron schedule or the last ran took longer than expected.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("PAUSED")]),e._v(": Monitor is paused. Monitor will stay paused unless it's manually resumed. It can still receive pings but it will ignore them.")])])]),e._v(" "),o("h2",{attrs:{id:"when-does-cronhub-alert-you"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#when-does-cronhub-alert-you"}},[e._v("#")]),e._v(" When does Cronhub alert you?")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("We send an alert when your monitor receives the first ping. The state of the monitor goes from "),o("code",[e._v("NEW")]),e._v(" to "),o("code",[e._v("OK")]),e._v(" or "),o("code",[e._v("RUNNING")]),e._v(" depending on the type of the ping.  This means that your monitor is set to monitor your cron job according to the cron job schedule and defined running time.")])]),e._v(" "),o("li",[o("p",[e._v("We send an alert when your monitor goes to the "),o("code",[e._v("ALERT")]),e._v(" state. This happens when the monitor doesn't recieve a ping on schedule or it runs longer than it supposed to. You can manually trigger alert by hitting "),o("code",[e._v("/fail")]),e._v(" endpoint.")])]),e._v(" "),o("li",[o("p",[e._v("When your monitor recovers. When your monitor recovers the new state is "),o("code",[e._v("OK")]),e._v(".")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);