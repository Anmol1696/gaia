(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{535:function(t,a,e){"use strict";e.r(a);var c=e(1),b=Object(c.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"formatting-a-proposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#formatting-a-proposal"}},[t._v("#")]),t._v(" Formatting a Proposal")]),t._v(" "),e("p",[t._v("Many proposals allow for long form text to be included, usually under the key "),e("code",[t._v("description")]),t._v(". These provide the opportunity to include "),e("a",{attrs:{href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown"),e("OutboundLink")],1),t._v(" if formatted correctly, as well as line breaks with "),e("code",[t._v("\\n")]),t._v(".")]),t._v(" "),e("p",[t._v("Beware, however, that if you are using the CLI to create a proposal, and setting "),e("code",[t._v("description")]),t._v(" using a flag, the text will be "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Escape_sequences_in_C",target:"_blank",rel:"noopener noreferrer"}},[t._v("escaped"),e("OutboundLink")],1),t._v(" which may have undesired effects.")]),t._v(" "),e("p",[t._v("Formating a proposal can be a trial-and-error process, which is why first submitting to the "),e("RouterLink",{attrs:{to:"/governance/submitting.html#submitting-your-proposal-to-the-testnet"}},[t._v("testnet")]),t._v(" is recommended.\n")],1),t._v(" "),e("p",[t._v("The examples shown below are of the text in a "),e("code",[t._v("json")]),t._v(" file packaged into a "),e("code",[t._v("submit-proposal")]),t._v(" transaction sent on-chain. More details about how to submit a proposal are in the "),e("RouterLink",{attrs:{to:"/governance/submitting.html"}},[t._v("Submitting a Governance Proposal")]),t._v(" section, but for now just be aware that the examples are the contents of a file separate from the transaction. As a general rule, any flags specific to a proposal (e.g., Title, description, deposit, parameters, recipient) can be placed in a "),e("code",[t._v("json")]),t._v(" file, while flags general to a transaction of any kind (e.g., chain-id, node-id, gas, fees) can remain in the CLI.")],1),t._v(" "),e("h2",{attrs:{id:"text"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[t._v("#")]),t._v(" Text")]),t._v(" "),e("p",[t._v("Text proposals are used by delegators to agree to a certain strategy, plan, commitment, future upgrade, or any other statement in the form of text. Aside from having a record of the proposal outcome on the Cosmos Hub chain, a text proposal has no direct effect on the change Cosmos Hub.")]),t._v(" "),e("p",[t._v("There are three components:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Title")]),t._v(" - the distinguishing name of the proposal, typically the way the that explorers list proposals")]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(" - the body of the proposal that further describes what is being proposed and details surrounding the proposal")]),t._v(" "),e("li",[e("strong",[t._v("Deposit")]),t._v(' - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal')])]),t._v(" "),e("h3",{attrs:{id:"real-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#real-example"}},[t._v("#")]),t._v(" Real example")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/12",target:"_blank",rel:"noopener noreferrer"}},[t._v("Proposal 12"),e("OutboundLink")],1),t._v(" asked if the Cosmos Hub community of validators charging 0% commission was harmful to the success of the Cosmos Hub.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtBcmUgVmFsaWRhdG9ycyBDaGFyZ2luZyAwJSBDb21taXNzaW9uIEhhcm1mdWwgdG8gdGhlIFN1Y2Nlc3Mgb2YgdGhlIENvc21vcyBIdWI/JnF1b3Q7LAogICZxdW90O2Rlc2NyaXB0aW9uJnF1b3Q7OiAmcXVvdDtUaGlzIGdvdmVybmFuY2UgcHJvcG9zYWwgaXMgaW50ZW5kZWQgdG8gYWN0IHB1cmVseSBhcyBhIHNpZ25hbGxpbmcgcHJvcG9zYWwuIFRocm91Z2hvdXQgdGhpcyBoaXN0b3J5IG9mIHRoZSBDb3Ntb3MgSHViLCB0aGVyZSBoYXMgYmVlbiBtdWNoIGRlYmF0ZSBhYm91dCB0aGUgaW1wYWN0IHRoYXQgdmFsaWRhdG9ycyBjaGFyZ2luZyAwJSBjb21taXNzaW9uIGhhcyBvbiB0aGUgQ29zbW9zIEh1YiwgcGFydGljdWxhcmx5IHdpdGggcmVzcGVjdCB0byB0aGUgZGVjZW50cmFsaXphdGlvbiBvZiB0aGUgQ29zbW9zIEh1YiBhbmQgdGhlIHN1c3RhaW5hYmlsaXR5IGZvciB2YWxpZGF0b3Igb3BlcmF0aW9ucy4gRGlzY3Vzc2lvbiBhcm91bmQgdGhpcyB0b3BpYyBoYXMgdGFrZW4gcGxhY2UgaW4gbWFueSBwbGFjZXMgaW5jbHVkaW5nIG51bWVyb3VzIHRocmVhZHMgb24gdGhlIENvc21vcyBGb3J1bSwgcHVibGljIFRlbGVncmFtIGNoYW5uZWxzLCBhbmQgaW4tcGVyc29uIG1lZXR1cHMuIEJlY2F1c2UgdGhpcyBoYXMgYmVlbiBvbmUgb2YgdGhlIHByaW1hcnkgZGlzY3Vzc2lvbiBwb2ludHMgaW4gb2ZmLWNoYWluIENvc21vcyBnb3Zlcm5hbmNlIGRpc2N1c3Npb25zLCB3ZSBiZWxpZXZlIGl0IGlzIGltcG9ydGFudCB0byBnZXQgYSBzaWduYWwgb24gdGhlIG1hdHRlciBmcm9tIHRoZSBvbi1jaGFpbiBnb3Zlcm5hbmNlIHByb2Nlc3Mgb2YgdGhlIENvc21vcyBIdWIuIFRoZXJlIGhhdmUgYmVlbiBwYXN0IGRpc2N1c3Npb25zIG9uIHRoZSBDb3Ntb3MgRm9ydW0gYWJvdXQgcGxhY2luZyBhbiBpbi1wcm90b2NvbCByZXN0cmljdGlvbiBvbiB2YWxpZGF0b3JzIGZyb20gY2hhcmdpbmcgMCUgY29tbWlzc2lvbi4gaHR0cHM6Ly9mb3J1bS5jb3Ntb3MubmV0d29yay90L2dvdmVybmFuY2UtbGltaXQtdmFsaWRhdG9ycy1mcm9tLTAtY29tbWlzc2lvbi1mZWUvMjE4MiBUaGlzIHByb3Bvc2FsIGlzIE5PVCBwcm9wb3NpbmcgYSBwcm90b2NvbC1lbmZvcmNlZCBtaW5pbXVtLiBJdCBpcyBtZXJlbHkgYSBzaWduYWxsaW5nIHByb3Bvc2FsIHRvIHF1ZXJ5IHRoZSB2aWV3cG9pbnQgb2YgdGhlIGJvbmRlZCBBdG9tIGhvbGRlcnMgYXMgYSB3aG9sZS4gV2UgZW5jb3VyYWdlIHBlb3BsZSB0byBkaXNjdXNzIHRoZSBxdWVzdGlvbiBiZWhpbmQgdGhpcyBnb3Zlcm5hbmNlIHByb3Bvc2FsIGluIHRoZSBhc3NvY2lhdGVkIENvc21vcyBIdWIgZm9ydW0gcG9zdCBoZXJlOiBodHRwczovL2ZvcnVtLmNvc21vcy5uZXR3b3JrL3QvcHJvcG9zYWwtYXJlLXZhbGlkYXRvcnMtY2hhcmdpbmctMC1jb21taXNzaW9uLWhhcm1mdWwtdG8tdGhlLXN1Y2Nlc3Mtb2YtdGhlLWNvc21vcy1odWIvMjUwNSBBbHNvLCBmb3Igdm90ZXJzIHdobyBiZWxpZXZlIHRoYXQgMCUgY29tbWlzc2lvbiByYXRlcyBhcmUgaGFybWZ1bCB0byB0aGUgbmV0d29yaywgd2UgZW5jb3VyYWdlIG9wdGlvbmFsbHkgc2hhcmluZyB5b3VyIGJlbGllZiBvbiB3aGF0IGEgaGVhbHRoeSBtaW5pbXVtIGNvbW1pc3Npb24gcmF0ZSBmb3IgdGhlIG5ldHdvcmsgdXNpbmcgdGhlIG1lbW8gZmllbGQgb2YgdGhlaXIgdm90ZSB0cmFuc2FjdGlvbiBvbiB0aGlzIGdvdmVybmFuY2UgcHJvcG9zYWwgb3IgbGlua2luZyB0byBhIGxvbmdlciB3cml0dGVuIGV4cGxhbmF0aW9uIHN1Y2ggYXMgYSBGb3J1bSBvciBibG9nIHBvc3QuIFRoZSBxdWVzdGlvbiBvbiB0aGlzIHByb3Bvc2FsIGlzIOKAnEFyZSB2YWxpZGF0b3JzIGNoYXJnaW5nIDAlIGNvbW1pc3Npb24gaGFybWZ1bCB0byB0aGUgc3VjY2VzcyBvZiB0aGUgQ29zbW9zIEh1Yj/igJ0uIEEgWWVzIHZvdGUgaXMgc3RhdGluZyB0aGF0IHRoZXkgQVJFIGhhcm1mdWwgdG8gdGhlIG5ldHdvcmsncyBzdWNjZXNzLCBhbmQgYSBObyB2b3RlIGlzIGEgc3RhdGVtZW50IHRoYXQgdGhleSBhcmUgTk9UIGhhcm1mdWwuJnF1b3Q7LAogICZxdW90O2RlcG9zaXQmcXVvdDs6ICZxdW90OzEwMDAwMHVhdG9tJnF1b3Q7Cn0K"}}),t._v(" "),e("h2",{attrs:{id:"community-pool-spend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#community-pool-spend"}},[t._v("#")]),t._v(" Community Pool Spend")]),t._v(" "),e("p",[t._v("There are five (5) components:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Title")]),t._v(" - the distinguishing name of the proposal, typically the way the that explorers list proposals")]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(" - the body of the proposal that further describes what is being proposed and details surrounding the proposal")]),t._v(" "),e("li",[e("strong",[t._v("Recipient")]),t._v(" - the Cosmos Hub (bech32-based) address that will receive funding from the Community Pool")]),t._v(" "),e("li",[e("strong",[t._v("Amount")]),t._v(" - the amount of funding that the recipient will receive in micro-ATOMs (uatom)")]),t._v(" "),e("li",[e("strong",[t._v("Deposit")]),t._v(' - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal')])]),t._v(" "),e("p",[t._v("If the description says that a certain address will receive a certain number of ATOMs, it should also be programmed to do that, but it's possible that that's not the case (accidentally or otherwise). Check that the description aligns with teh 'recipient' address.")]),t._v(" "),e("h3",{attrs:{id:"real-example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#real-example-2"}},[t._v("#")]),t._v(" Real example")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("amount")]),t._v(" is "),e("code",[t._v("1000000000uatom")]),t._v(". 1,000,000 micro-ATOM is equal to 1 ATOM, so "),e("code",[t._v("recipient")]),t._v(" address "),e("code",[t._v("cosmos1xf2qwf6g6xvuttpf37xwrgp08qq984244952ze")]),t._v(" will receive 1000 ATOM if this proposal is passed.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v('deposit": "1000000uatom')]),t._v(" results in 1 ATOM being used from the proposal submitter's account.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtBY3RpdmF0ZSBnb3Zlcm5hbmNlIGRpc2N1c3Npb25zIG9uIHRoZSBEaXNjb3Vyc2UgZm9ydW0gdXNpbmcgY29tbXVuaXR5IHBvb2wgZnVuZHMmcXVvdDssCiAgJnF1b3Q7ZGVzY3JpcHRpb24mcXVvdDs6ICZxdW90OyMjIFN1bW1hcnlcblByb3Bvc2FsIHRvIHJlcXVlc3QgZm9yIDEwMDAgQVRPTSBmcm9tIHRoZSBjb21tdW5pdHkgc3BlbmRpbmcgcG9vbCB0byBiZSBzZW50IHRvIGEgbXVsdGlzaWcgd2hvIHdpbGwgcHV0IGZ1bmRzIHRvd2FyZHMgc3Rld2FyZHNoaXAgb2YgdGhlIERpc2NvdXJzZSBmb3J1bSB0byBtYWtlIGl0IGFuIGF1dGhvcml0YXRpdmUgcmVjb3JkIG9mIGdvdmVybmFuY2UgZGVjaXNpb25zIGFzIHdlbGwgYXMgYSB2aWJyYW50IHNwYWNlIHRvIGRyYWZ0IGFuZCBkaXNjdXNzIHByb3Bvc2Fscy5cbiMjIERldGFpbHNcbldlIGFyZSByZXF1ZXN0aW5nIDEwMDAgQVRPTSBmcm9tIHRoZSBjb21tdW5pdHkgc3BlbmRpbmcgcG9vbCB0byBhY3RpdmF0ZSBhbmQgc3Rld2FyZCB0aGUgQ29zbW9zIEh1YiAoRGlzY291cnNlKSBmb3J1bSBmb3IgdGhlIG5leHQgc2l4IG1vbnRocy5cblxuT2ZmLWNoYWluIGdvdmVybmFuY2UgY29udmVyc2F0aW9ucyBhcmUgY3VycmVudGx5IGhpZ2hseSBmcmFnbWVudGVkLCB3aXRoIG5vIHNoYXJlZCBwdWJsaWMgdmVudWUgZm9yIGRpc2N1c3NpbmcgcHJvcG9zYWxzIGFzIHRoZXkgcHJvY2VlZCB0aHJvdWdoIHRoZSBwcm9jZXNzIG9mIGJlaW5nIGRyYWZ0ZWQgYW5kIHZvdGVkIG9uLiBJdCBtZWFucyB0aGVyZSBpcyBubyByZWNvcmQgb2YgZGlzY3Vzc2lvbiB0aGF0IHZvdGVycyBjYW4gY29uZmlkZW50bHkgcG9pbnQgdG8gZm9yIGNvbnRleHQsIHBvdGVudGlhbGx5IGxlYWRpbmcgdG8gZ292ZXJuYW5jZSBkZWNpc2lvbnMgYmVjb21pbmcgZGVsZWdpdGltaXplZCBieSBzdGFrZWhvbGRlcnMuXG5cblRoZSByZXF1ZXN0ZWQgYW1vdW50IHdpbGwgYmUgc2VudCB0byBhIG11bHRpc2lnIGNvbXByaXNpbmcgaW5kaXZpZHVhbHMgKG1lbWJlcnMgbGlzdGVkIGJlbG93KSB3aG8gY2FuIGVuc3VyZSB0aGF0IHRoZSB0b2tlbnMgYXJlIHNwZW50IGp1ZGljaW91c2x5LiBXZSBiZWxpZXZlIHN0ZXdhcmRzaGlwIG9mIHRoZSBmb3J1bSByZXF1aXJlczpcblxuKiAqKk1vZGVyYXRpb24qKjogRm9ybWF0LCBlZGl0LCBhbmQgY2F0ZWdvcml6ZSBwb3N0czsgU3RhbmRhcmRpemUgdGl0bGVzIGFuZCB0YWdzOyBNb25pdG9yIGFuZCBhcHByb3ZlIG5ldyBwb3N0czsgQXJjaGl2ZSBwb3N0cy5cbiogKipGYWNpbGl0YXRpb24qKjogQXNrIGNsYXJpZnlpbmcgcXVlc3Rpb25zIGluIHBvc3QgdGhyZWFkczsgU3VtbWFyaXplIGRpc2N1c3Npb25zOyBQcm92aWRlIGhpc3RvcmljYWwgcHJlY2VkZW5jZSB0byBkaXNjdXNzaW9ucy5cbiogKipFbmdhZ2VtZW50Kio6IENpcmN1bGF0ZSBpbXBvcnRhbnQgcG9zdHMgb24gb3RoZXIgc29jaWFsIGNoYW5uZWxzIHRvIGluY3JlYXNlIGNvbW11bml0eSBwYXJ0aWNpcGF0aW9uOyBTb2xpY2l0IGlucHV0IGZyb20ga2V5IHN0YWtlaG9sZGVycy5cbiogKipHdWlkYW5jZSoqOiBPcmllbnQgYW5kIGFzc2lzdCBuZXdjb21lcnM7IEd1aWRlIHByb3Bvc2VycyB0aHJvdWdoIGdvdmVybmFuY2UgcHJvY2VzczsgQW5zd2VyIHF1ZXN0aW9ucyByZWdhcmRpbmcgdGhlIGZvcnVtIG9yIENvc21vcyBlY29zeXN0ZW0uXG5UaGUgd29yayB0byBzdGV3YXJkIHRoZSBmb3J1bSB3aWxsIGJlIGNhcnJpZWQgb3V0IGJ5IG1lbWJlcnMgb2YgW0h5cGhhIFdvcmtlciBDby1vcF0oaHR0cHM6Ly9oeXBoYS5jb29wLykgYW5kIGluZGl2aWR1YWxzIHNlbGVjdGVkIGZyb20gdGhlIGNvbW11bml0eSB0byBjYXJyeSBvdXQgc2NvcGVkIHRhc2tzIGluIGV4Y2hhbmdlIGZvciBBVE9NIGZyb20gdGhpcyBidWRnZXQuXG4jIyBNdWx0aXNpZyBNZW1iZXJzXG4qIEh5cGhhOiBNYWkgSXNoaWthd2EgU3V0dG9uIChIeXBoYSBDby1vcClcbiogVmFsaWRhdG9yOiBEYW5pZWwgSHdhbmcgKFN0YWtlZmlzaClcbiogQ29zbW9zIEh1YiBkZXZlbG9wZXI6IExhdXJlbiBHYWxsaW5hcm8gKEludGVyY2hhaW4gQmVybGluKVxuXG5XZSBmZWVsIHRoZSBtZW1iZXJzaGlwIG9mIHRoZSBtdWx0aXNpZyBzaG91bGQgYmUgcm90YXRlZCBmb2xsb3dpbmcgdGhlIHNpeC1tb250aCBwaWxvdCBwZXJpb2QgdG8gcHJlc2VydmUgaW5zaWdodCBmcm9tIHRoZSBkaXN0aW5jdCBzcGVjaWFsaXphdGlvbnMgKGkuZS4sIENvc21vcyBIdWIgdmFsaWRhdG9ycyBhbmQgZGV2ZWxvcGVycykuXG4jIyBUaW1lbGluZSBhbmQgRGVsaXZlcmFibGVzXG5XZSBlc3RpbWF0ZSB0aGUgdG90YWwgd29yayB0byB0YWtlIDI1MC0zMDAgaG91cnMgb3ZlciBzaXggbW9udGhzIHdoZXJlIHdlIGhvcGUgdG8gcHJvZHVjZTpcbiogKipNb3Zpbmcgc3VtbWFyaWVzOioqIFByb3ZpZGUgc3VjY2luY3Qgc3VtbWFyaWVzIG9mIHRoZSBwcm9wb3NhbHMgYW5kIGluY2x1ZGUgYWxsIHB1YmxpY2x5IHN0YXRlZCByZWFzb25zIHdoeSB2YXJpb3VzIGVudGl0aWVzIGFyZSBjaG9vc2luZyB0byB2b3RlIGZvci9hZ2FpbnN0IGEgZ2l2ZW4gcHJvcG9zYWwuIFRoZXNlIHN1bW1hcmllcyB3aWxsIGJlIHdyaXR0ZW4gb2JqZWN0aXZlbHksIG5vdCBzaWRpbmcgd2l0aCBhbnkgb25lIGVudGl0eS5cbiogKipWYWxpZGF0b3IgcGxhdGZvcm1zOioqIENyZWF0ZSBhIHNlY3Rpb24gb2YgdGhlIEZvcnVtIHdoZXJlIHdlIGNvbGxhdGUgYWxsIHZhbGlkYXRvcnMnIHZpc2lvbnMgZm9yIENvc21vcyBIdWIgZ292ZXJuYW5jZSB0byBhbGxvdyB0aGVtIHRvIHN0YXRlIHRoZWlyIHBvc2l0aW9ucyBwdWJsaWNseS4gV2Ugd2lsbCB3b3JrIHdpdGggdGhlIHNtYWxsZXIgdmFsaWRhdG9ycyB0byBlbnN1cmUgdGhleSBhcmUgZXF1YWxseSByZXByZXNlbnRlZC5cbiogKipSZWd1bGFyIGNoZWNrLWlucyB3aXRoIHRoZSBDb3Ntb25hdXQgREFPOioqIENvbGxhYm9yYXRlIHdpdGggdGhlIGZ1dHVyZSBDb3Ntb25hdXQgREFPIHRvIGVuc3VyZSBtYXhpbWFsIGFjY2Vzc2liaWxpdHkgYW5kIGVuZ2FnZW1lbnQuIENvbW11bml0eSBtYW5hZ2VtZW50IGlzIGEgY3JpdGljYWwsIGNvbXBsZW1lbnRhcnkgYXNwZWN0IG9mIGluY3JlYXNpbmcgcGFydGljaXBhdGlvbiBpbiBnb3Zlcm5hbmNlLlxuKiAqKkFubm91bmNlbWVudCBjaGFubmVsOioqIENyZWF0ZSBhIHJlYWQtb25seSBhbm5vdW5jZW1lbnQgY2hhbm5lbCBpbiB0aGUgQ29zbW9zIENvbW11bml0eSBEaXNjb3JkLCBzbyB0aGF0IG5ldyBwcm9wb3NhbHMgYW5kIG1ham9yIGRpc2N1c3Npb25zIGNhbiBiZSBlYXNpbHkgZm9sbG93ZWQuXG4qICoqVG9vbGluZyBmcmllbmRseSBwb3N0czoqKiBUYWcgYW5kIGNhdGVnb3JpemUgcG9zdHMgc28gdGhhdCB0aGV5IGNhbiBiZSBlYXNpbHkgaW5nZXN0ZWQgaW50byBleGlzdGluZyB0b29saW5nIHRoYXQgdmFsaWRhdG9ycyBoYXZlIHNldHVwLlxuKiAqKk5ldXRyYWwgbW9kZXJhdGlvbiBmcmFtZXdvcms6KiogRG9jdW1lbnQgYW5kIGZvbGxvdyB0cmFuc3BhcmVudCBzdGFuZGFyZHMgZm9yIGhvdyB0aGUgZm9ydW0gaXMgbW9kZXJhdGVkLlxuXG5BdCB0aGUgZW5kIG9mIHRoZSBwZXJpb2QsIHdlIHdpbGwgcHJvZHVjZSBhIHJlcG9ydCByZWZsZWN0aW5nIG9uIG91ciBzdWNjZXNzZXMgYW5kIGZhaWx1cmVzLCBhbmQgcmVjb21tZW5kYXRpb25zIGZvciBob3cgdGhlIHdvcmsgb2YgbWFpbnRhaW5pbmcgYSBnb3Zlcm5hbmNlIHZlbnVlIGNhbiBiZSBjb250aW51b3VzbHkgc3VzdGFpbmVkIChlLmcuLCB0aHJvdWdoIGEgREFPKS4gV2Ugc2VlIHRoaXMgaW5pdGlhdGl2ZSBhcyBhIHByb2Nlc3Mgb2YgZGlzY292ZXJ5LCB3aGVyZSB3ZSBhcmUgbGVhcm5pbmcgYnkgZG9pbmcuXG5cbkZvciBtb3JlIGNvbnRleHQsIHlvdSBjYW4gcmVhZCB0aHJvdWdoIHRoZSBkaXNjdXNzaW9ucyBvbiB0aGlzIFtwcm9wb3NhbCBvbiB0aGUgRGlzY291cnNlIGZvcnVtXShodHRwczovL2ZvcnVtLmNvc21vcy5uZXR3b3JrL3QvcHJvcG9zYWwtZHJhZnQtYWN0aXZhdGUtZ292ZXJuYW5jZS1kaXNjdXNzaW9ucy1vbi10aGUtZGlzY291cnNlLWZvcnVtLXVzaW5nLWNvbW11bml0eS1wb29sLWZ1bmRzLzU4MzMpLlxuXG4jIyBHb3Zlcm5hbmNlIFZvdGVzXG5UaGUgZm9sbG93aW5nIGl0ZW1zIHN1bW1hcml6ZSB0aGUgdm90aW5nIG9wdGlvbnMgYW5kIHdoYXQgaXQgbWVhbnMgZm9yIHRoaXMgcHJvcG9zYWw6XG4qKllFUyoqIC0gWW91IGFwcHJvdmUgdGhpcyBjb21tdW5pdHkgc3BlbmQgcHJvcG9zYWwgdG8gZGVwb3NpdCAxMDAwIEFUT00gdG8gYSBtdWx0aXNpZyB0aGF0IHdpbGwgc3BlbmQgdGhlbSB0byBpbXByb3ZlIGdvdmVybmFuY2UgZGlzY3Vzc2lvbnMgaW4gdGhlIERpc2NvdXJzZSBmb3J1bS5cbioqTk8qKiAtIFlvdSBkaXNhcHByb3ZlIG9mIHRoaXMgY29tbXVuaXR5IHNwZW5kIHByb3Bvc2FsIGluIGl0cyBjdXJyZW50IGZvcm0gKHBsZWFzZSBpbmRpY2F0ZSB3aHkgaW4gdGhlIENvc21vcyBGb3J1bSkuXG4qKk5PIFdJVEggVkVUTyoqIC0gWW91IGFyZSBzdHJvbmdseSBvcHBvc2VkIHRvIHRoaXMgY2hhbmdlIGFuZCB3aWxsIGV4aXQgdGhlIG5ldHdvcmsgaWYgcGFzc2VkLlxuKipBQlNUQUlOKiogLSBZb3UgYXJlIGltcGFydGlhbCB0byB0aGUgb3V0Y29tZSBvZiB0aGUgcHJvcG9zYWwuXG4jIyBSZWNpcGllbnRcbmNvc21vczF4ZjJxd2Y2ZzZ4dnV0dHBmMzd4d3JncDA4cXE5ODQyNDQ5NTJ6ZVxuIyMgQW1vdW50XG4xMDAwIEFUT01cblxuKioqRGlzY2xvc3VyZSoqOiBIeXBoYSBoYXMgYW4gZXhpc3RpbmcgY29udHJhY3Qgd2l0aCB0aGUgSW50ZXJjaGFpbiBGb3VuZGF0aW9uIGZvY3VzZWQgb24gdGhlIHRlc3RuZXQgcHJvZ3JhbSBhbmQgaW1wcm92aW5nIGRvY3VtZW50YXRpb24uIFRoaXMgd29yayBpcyBiZXlvbmQgdGhlIHNjb3BlIG9mIHRoYXQgY29udHJhY3QgYW5kIGlzIGZvY3VzZWQgb24gZW5nYWdpbmcgdGhlIGNvbW11bml0eSBpbiBnb3Zlcm5hbmNlLipcblxuSVBGUyBwaW4gb2YgcHJvcG9zYWwgb24tZm9ydW06IChodHRwczovL2lwZnMuaW8vaXBmcy9RbWFxN2Z0cVdjY2dZQ284VTFLWmZFbmp2alVEelNFR3BNeGNSeTYxdThnZjJZKSZxdW90OywKICAmcXVvdDtyZWNpcGllbnQmcXVvdDs6ICZxdW90O2Nvc21vczF4ZjJxd2Y2ZzZ4dnV0dHBmMzd4d3JncDA4cXE5ODQyNDQ5NTJ6ZSZxdW90OywgCiAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwMDAwMDAwdWF0b20mcXVvdDssCiAgJnF1b3Q7ZGVwb3NpdCZxdW90OzogJnF1b3Q7MTAwMDAwMHVhdG9tJnF1b3Q7Cn0KCg=="}}),t._v(" "),e("h2",{attrs:{id:"param-change"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#param-change"}},[t._v("#")]),t._v(" Param Change")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" Changes to the "),e("a",{attrs:{href:"https://docs.cosmos.network/main/modules/gov",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("gov")]),t._v(" module"),e("OutboundLink")],1),t._v(" are different from the other kinds of parameter changes because "),e("code",[t._v("gov")]),t._v(" has subkeys, "),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5800",target:"_blank",rel:"noopener noreferrer"}},[t._v("as discussed here"),e("OutboundLink")],1),t._v(". Only the "),e("code",[t._v("key")]),t._v(" part of the JSON file is different for "),e("code",[t._v("gov")]),t._v(" parameter-change proposals.")]),t._v(" "),e("p",[t._v("For parameter-change proposals, there are arguably seven (7) components, though three are nested beneath 'Changes':")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Title")]),t._v(" - the distinguishing name of the proposal, typically the way the that explorers list proposals")]),t._v(" "),e("li",[e("strong",[t._v("Description")]),t._v(" - the body of the proposal that further describes what is being proposed and details surrounding the proposal")]),t._v(" "),e("li",[e("strong",[t._v("Changes")]),t._v(" - a component containing")]),t._v(" "),e("li",[e("strong",[t._v("Subspace")]),t._v(" - the Cosmos Hub module with the parameter that is being changed")]),t._v(" "),e("li",[e("strong",[t._v("Key")]),t._v(" - the parameter that will be changed")]),t._v(" "),e("li",[e("strong",[t._v("Value")]),t._v(" - the value of the parameter that will be changed by the governance mechanism")]),t._v(" "),e("li",[e("strong",[t._v("Deposit")]),t._v(' - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal')])]),t._v(" "),e("p",[t._v("The components must be presented as shown in the example.")]),t._v(" "),e("h3",{attrs:{id:"real-example-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#real-example-3"}},[t._v("#")]),t._v(" Real example")]),t._v(" "),e("p",[t._v("This example is 'real', because it was put on-chain using the Theta testnet and can be seen in the block explorer "),e("a",{attrs:{href:"https://explorer.theta-testnet.polypore.xyz/proposals/87",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Not all explorers will show the proposed parameter changes that are coded into the proposal, so ensure that you verify that the description aligns with what the governance proposal is programmed to enact. If the description says that a certain parameter will be increased, it should also be programmed to do that, but it's possible that that's not the case (accidentally or otherwise).")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"IHsKICAmcXVvdDt0aXRsZSZxdW90OzogJnF1b3Q7RG9jIHVwZGF0ZSB0ZXN0OiBQYXJhbSBjaGFuZ2UgZm9yIE1heFZhbGlkYXRvcnMmcXVvdDssCiAgJnF1b3Q7ZGVzY3JpcHRpb24mcXVvdDs6ICZxdW90O1Rlc3RpbmcgdGhlIHByb3Bvc2FsIGZvcm1hdCBmb3IgaW5jcmVhc2luZyB0aGUgTWF4VmFsaWRhdG9yIHBhcmFtJnF1b3Q7LAogICZxdW90O2NoYW5nZXMmcXVvdDs6IFsKICAgIHsKICAgICAgJnF1b3Q7c3Vic3BhY2UmcXVvdDs6ICZxdW90O3N0YWtpbmcmcXVvdDssCiAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7TWF4VmFsaWRhdG9ycyZxdW90OywKICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6IDIwMAogICAgfQogIF0sCiAgJnF1b3Q7ZGVwb3NpdCZxdW90OzogJnF1b3Q7MTAwMDAwdWF0b20mcXVvdDsKfQo="}})],1)}),[],!1,null,null,null);a.default=b.exports}}]);