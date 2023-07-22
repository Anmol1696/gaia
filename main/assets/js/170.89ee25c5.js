(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{503:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"validators-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators-overview"}},[e._v("#")]),e._v(" Validators Overview")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/"}},[e._v("Cosmos Hub")]),e._v(" is based on "),a("a",{attrs:{href:"https://docs.cometbft.com/v0.34/introduction/what-is-cometbft",target:"_blank",rel:"noopener noreferrer"}},[e._v("CometBFT"),a("OutboundLink")],1),e._v(" that relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by each validator's private key.")],1),e._v(" "),a("p",[e._v("Validator candidates can bond their own ATOM and have ATOM "),a("RouterLink",{attrs:{to:"/delegators/delegator-guide-cli.html"}},[e._v('"delegated"')]),e._v(", or staked, to them by token holders. The Cosmos Hub has "),a("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/66",target:"_blank",rel:"noopener noreferrer"}},[e._v("180 validators"),a("OutboundLink")],1),e._v(", but over time the number of validators can be increased with governance proposals. The validators are determined by the total number of ATOM tokens delegated to them — the top 180 validator candidates with the most voting power are the current Cosmos validators.")],1),e._v(" "),a("p",[e._v("Validators and their delegators earn ATOM as block provisions and tokens as transaction fees through execution of the Tendermint consensus protocol. Note that validators can set a commission percentage on the fees their delegators receive as additional incentive. You can find an overview of all current validators and their voting power on "),a("a",{attrs:{href:"https://www.mintscan.io/cosmos/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mintscan"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If validators double sign or are offline for an "),a("RouterLink",{attrs:{to:"/validators/validator-faq.html#what-are-the-slashing-conditions"}},[e._v("extended period")]),e._v(", their staked ATOM (including ATOM of users that delegated to them) can be slashed. The penalty depends on the severity of the violation.")],1),e._v(" "),a("h2",{attrs:{id:"hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),a("p",[e._v("For validator key management, validators must set up a physical operation that is secured with restricted access. A good starting place, for example, would be co-locating in secure data centers.")]),e._v(" "),a("p",[e._v("Validators are expected to equip their datacenter location with redundant power, connectivity, and storage backups. Expect to have several redundant networking boxes for fiber, firewall, and switching and then small servers with redundant hard drive and failover.")]),e._v(" "),a("p",[e._v("You can find the minimum hardware requirements on the instructions for "),a("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[e._v("joining the Cosmos Hub mainnet")]),e._v(". As the network grows, bandwidth, CPU, and memory requirements rise. Large hard drives are recommended for storing years of blockchain history, as well as significant RAM to process the increasing amount of transactions.")],1),e._v(" "),a("h2",{attrs:{id:"create-a-validator-website"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-validator-website"}},[e._v("#")]),e._v(" Create a Validator Website")]),e._v(" "),a("p",[e._v("To get started as a validator, create your dedicated validator website and signal your intention to become a validator in the "),a("a",{attrs:{href:"https://discord.gg/cosmosnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Discord"),a("OutboundLink")],1),e._v(". Posting your validator website is essential because delegators want to have information about the entity they are delegating their ATOM to.")]),e._v(" "),a("h2",{attrs:{id:"seek-legal-advice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seek-legal-advice"}},[e._v("#")]),e._v(" Seek Legal Advice")]),e._v(" "),a("p",[e._v("As always, do your own research and seek legal advice if you intend to run a validator node.")]),e._v(" "),a("h2",{attrs:{id:"community"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community"}},[e._v("#")]),e._v(" Community")]),e._v(" "),a("p",[e._v("Discuss the finer details of being a validator on our community Discord and sign up for the Cosmos newsletter to get regular updates:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://discord.gg/cosmosnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Developers Discord"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cosmos.network/updates/signup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Newsletter"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);