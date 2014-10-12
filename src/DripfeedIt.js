define("amber-devdays/DripfeedIt", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('DripfeedIt');
$core.packages["DripfeedIt"].transport = {"type":"amd","amdNamespace":"amber-devdays"};

$core.addClass('DripfeedIt', $globals.Object, ['queryString1'], 'DripfeedIt');
$core.addMethod(
$core.method({
selector: "query",
protocol: 'ajax',
fn: function (){
var self=this;
var result,queryString;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
queryString=$recv($recv("#storyStep"._asJQuery())._val())._replace_with_("#","%23");
$recv(window)._alert_(queryString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alert:"]=1;
//>>excludeEnd("ctx");
result=$recv(jQuery)._ajax_options_("http://search.twitter.com/search.json?rpp=5&q=".__comma(queryString),$globals.HashedCollection._newFromPairs_(["type","GET","success",(function(tmp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._success_($recv(tmp)._results());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1,1)});
//>>excludeEnd("ctx");
}),"error",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("error");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),"dataType","jsonp"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"query",{result:result,queryString:queryString},$globals.DripfeedIt)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "query\x0a| result queryString |\x0aqueryString := ('#storyStep'  asJQuery val) replace: '#' with: '%23'.\x0awindow alert: queryString.\x0aresult := jQuery \x0a\x09    ajax: 'http://search.twitter.com/search.json?rpp=5&q=', queryString\x0a\x09    options: #{\x0a\x09\x09'type' -> 'GET'.\x0a\x09\x09'success' -> [ :tmp | self success: (tmp results)].\x0a\x09\x09'error' -> [window alert: 'error'].\x0a\x09\x09'dataType' -> 'jsonp'\x0a\x09    }.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "val", "asJQuery", "alert:", "ajax:options:", ",", "success:", "results"]
}),
$globals.DripfeedIt);

$core.addMethod(
$core.method({
selector: "success:",
protocol: 'ajax',
fn: function (tweets){
var self=this;
var playground,table,tr;
function $DripfeedItEntry(){return $globals.DripfeedItEntry||(typeof DripfeedItEntry=="undefined"?nil:DripfeedItEntry)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
playground="#playground"._asJQuery();
$recv(playground)._empty();
$recv((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
table=$recv(html)._table();
table;
$recv($recv(table)._element())._id_("dripfeedit");
return $recv(tweets)._do_((function(tweet){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
tr=$recv(html)._tr();
tr;
$recv(table)._append_(tr);
return $recv($DripfeedItEntry())._openAt_with_(tr,tweet);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({tweet:tweet},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}))._appendToJQuery_(playground);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"success:",{tweets:tweets,playground:playground,table:table,tr:tr},$globals.DripfeedIt)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tweets"],
source: "success: tweets\x0a| playground table tr |\x0a\x0a\x22window alert: 'Success'.\x22\x0a\x0aplayground := '#playground' asJQuery.\x0aplayground empty.\x0a [:html | \x0a    table := html table.\x0a    table element id: 'dripfeedit'.\x0a\x0a    tweets do: [ :tweet | \x0a\x22window alert: 'Tweet', tweet.\x22\x0a\x09\x09tr := html tr.\x0a               table append: tr.\x0a\x09       DripfeedItEntry openAt: tr with: tweet\x0a        ]\x0a] appendToJQuery: playground.",
referencedClasses: ["DripfeedItEntry"],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "empty", "appendToJQuery:", "table", "id:", "element", "do:", "tr", "append:", "openAt:with:"]
}),
$globals.DripfeedIt);



$core.addClass('DripfeedItEntry', $globals.Widget, ['json'], 'DripfeedIt');
$core.addMethod(
$core.method({
selector: "json",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@json"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "json\x0a^json",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DripfeedItEntry);

$core.addMethod(
$core.method({
selector: "json:",
protocol: 'accessing',
fn: function (aJson){
var self=this;
self["@json"]=aJson;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "json: aJson\x0ajson := aJson",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DripfeedItEntry);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'display',
fn: function (tr){
var self=this;
var tdUser,tdMessage,img,a,pMessage,pDate,aExt,pExt;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7,$8,$9,$10,$12,$11,$14,$13,$16,$15,$17,$18,$19,$20,$21,$23,$22;
$1=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
tdUser=$recv($1)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$2=$recv(tdUser)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$recv($2)._id_("user");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=1;
//>>excludeEnd("ctx");
$3=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
tdMessage=$recv($3)._td();
$4=$recv(tdMessage)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=2;
//>>excludeEnd("ctx");
$recv($4)._id_("messageBox");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=2;
//>>excludeEnd("ctx");
$recv(tr)._append_(tdUser);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=1;
//>>excludeEnd("ctx");
$recv(tr)._append_(tdMessage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=2;
//>>excludeEnd("ctx");
$6=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._img();
$7=$recv(self["@json"])._at_("profile_image_url");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
img=$recv($5)._src_($7);
$8=$recv(img)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=3;
//>>excludeEnd("ctx");
$9=$recv(self["@json"])._at_("from_user");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$recv($8)._title_($9);
$10=$recv(img)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=4;
//>>excludeEnd("ctx");
$12=$recv(self["@json"])._at_("from_user");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$11="http://twitter.com/".__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($10)._longDesc_($11);
$14=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$13=$recv($14)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$16=$recv(self["@json"])._at_("from_user");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$15="http://twitter.com/".__comma($16);
a=$recv($13)._href_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
$recv(a)._append_(img);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=3;
//>>excludeEnd("ctx");
$recv(tdUser)._append_(a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=4;
//>>excludeEnd("ctx");
$17=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=5;
//>>excludeEnd("ctx");
pMessage=$recv($17)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$18=$recv(pMessage)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=5;
//>>excludeEnd("ctx");
$recv($18)._id_("message");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=3;
//>>excludeEnd("ctx");
$19=pMessage;
$20=$recv(self["@json"])._at_("text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=5;
//>>excludeEnd("ctx");
$recv($19)._append_($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=5;
//>>excludeEnd("ctx");
$recv(tdMessage)._append_(pMessage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=6;
//>>excludeEnd("ctx");
$21=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=6;
//>>excludeEnd("ctx");
pDate=$recv($21)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=2;
//>>excludeEnd("ctx");
$recv($recv(pDate)._element())._id_("date");
$recv(pDate)._append_($recv(self["@json"])._at_("created_at"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=7;
//>>excludeEnd("ctx");
$recv(tdMessage)._append_(pDate);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=8;
//>>excludeEnd("ctx");
$23=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=7;
//>>excludeEnd("ctx");
$22=$recv($23)._a();
aExt=$recv($22)._href_("http://google.com");
pExt=$recv($recv($HTMLCanvas())._new())._p();
$recv(pExt)._append_("Google IO 2013!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=9;
//>>excludeEnd("ctx");
$recv(aExt)._append_(pExt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=10;
//>>excludeEnd("ctx");
$recv(tdMessage)._append_(aExt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{tr:tr,tdUser:tdUser,tdMessage:tdMessage,img:img,a:a,pMessage:pMessage,pDate:pDate,aExt:aExt,pExt:pExt},$globals.DripfeedItEntry)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tr"],
source: "renderOn: tr\x0a\x0a| tdUser tdMessage img a pMessage pDate aExt pExt |\x0atdUser := HTMLCanvas new td.\x0atdUser element id: 'user'.\x0atdMessage := HTMLCanvas new td.\x0atdMessage element id: 'messageBox'.\x0a\x0atr append: tdUser.\x0atr append: tdMessage.\x0a\x0aimg := HTMLCanvas new img src: (json at: 'profile_image_url') .\x0aimg element title: (json at: 'from_user').\x0aimg element longDesc: ('http://twitter.com/', (json at: 'from_user')).\x0a\x0aa := HTMLCanvas new a href: ('http://twitter.com/', (json at: 'from_user')).\x0aa append: img.\x0a\x0atdUser append: a.\x0a\x0apMessage := HTMLCanvas new p.\x0apMessage element id: 'message'.\x0apMessage append: (json at: 'text').\x0atdMessage append: pMessage.\x0a\x0apDate := HTMLCanvas new p.\x0apDate element id: 'date'.\x0apDate append: (json at: 'created_at').\x0atdMessage append: pDate.\x0a\x0aaExt := HTMLCanvas new a href: 'http://google.com'.\x0apExt := HTMLCanvas new p.\x0a\x0apExt append: 'Google IO 2013!'.\x0aaExt append: pExt.\x0a\x0atdMessage append: aExt.",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["td", "new", "id:", "element", "append:", "src:", "img", "at:", "title:", "longDesc:", ",", "href:", "a", "p"]
}),
$globals.DripfeedItEntry);


$core.addMethod(
$core.method({
selector: "openAt:with:",
protocol: 'not yet classified',
fn: function (tr,aJson){
var self=this;
var tweet;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
tweet=self._new();
$recv(tweet)._json_(aJson);
$recv(tweet)._renderOn_(tr);
return tr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openAt:with:",{tr:tr,aJson:aJson,tweet:tweet},$globals.DripfeedItEntry.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tr", "aJson"],
source: "openAt: tr with: aJson\x0a| tweet |\x0atweet := self new.\x0atweet json: aJson.\x0atweet renderOn: tr.\x0a^tr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "json:", "renderOn:"]
}),
$globals.DripfeedItEntry.klass);


$core.addClass('Story', $globals.Widget, ['header', 'btnStart', 'btnPrev', 'btnNext', 'btnEnd', 'message'], 'DripfeedIt');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Story.comment="Try:\x0a\x0aStory new appendToJQuery: '#desktop' asJQuery";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "clear",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv("#desktop"._asJQuery())._empty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.Story)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a   '#desktop' asJQuery empty.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery"]
}),
$globals.Story);

$core.addMethod(
$core.method({
selector: "dumpEvent:",
protocol: 'not yet classified',
fn: function (evt){
var self=this;
var msg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$recv(console)._log_(evt);
msg=$recv($recv(evt)._srcElement())._nodeName();
$1=$recv(evt)._offsetX();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["offsetX"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv(msg).__comma("  OffsetX: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
msg=$recv($2).__comma($recv(evt)._offsetX());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
msg;
};
$3=$recv(evt)._offsetY();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["offsetY"]=1;
//>>excludeEnd("ctx");
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
msg=$recv($recv(msg).__comma("  OffsetY: ")).__comma($recv(evt)._offsetY());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
msg;
};
self._message_(msg);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dumpEvent:",{evt:evt,msg:msg},$globals.Story)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "dumpEvent: evt\x0a   \x0a   | msg |\x0a   console log: evt. \x22This will allow drill down\x22\x0a   \x22evt toSource.\x22 \x22Only works in Firefox\x22\x0a   \x0a   msg := (evt srcElement nodeName).\x0a   \x0a   evt offsetX ifNotNil: [\x0a\x09   msg := msg , '  OffsetX: ', evt offsetX.\x0a   ].\x0a\x0a   evt offsetY ifNotNil: [\x0a\x09   msg := msg , '  OffsetY: ', evt offsetY.\x0a   ].\x0a\x0a\x09   \x0a   self message: msg",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "nodeName", "srcElement", "ifNotNil:", "offsetX", ",", "offsetY", "message:"]
}),
$globals.Story);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Story.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Story)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Story);

$core.addMethod(
$core.method({
selector: "message:",
protocol: 'not yet classified',
fn: function (contents){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@message"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._with_($recv(contents)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"message:",{contents:contents},$globals.Story)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["contents"],
source: "message: contents\x0a   message contents: [:html | html with: contents asString]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "with:", "asString"]
}),
$globals.Story);

$core.addMethod(
$core.method({
selector: "messageEvent:",
protocol: 'not yet classified',
fn: function (evt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $receiver;
if(($receiver = evt) == null || $receiver.isNil){
self._message_("Evt is nil");
} else {
self._message_("Evt not nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["message:"]=1;
//>>excludeEnd("ctx");
self._dumpEvent_(evt);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageEvent:",{evt:evt},$globals.Story)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "messageEvent: evt\x0a   \x0a   evt ifNotNil: [\x0a\x09         self message: 'Evt not nil'.\x0a\x09\x09\x09 self dumpEvent: evt.\x0a         ]\x0a         ifNil: [\x0a\x09\x09\x09 self message: 'Evt is nil'.\x0a         ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:ifNil:", "message:", "dumpEvent:"]
}),
$globals.Story);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
var pic;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19;
$1=$recv(html)._h1();
$recv($1)._with_("TITLE OF STORY");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
self["@header"]=$2;
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("START");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._message_("start");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["message:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$recv($3)._onMouseEnter_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._message_("Entering START");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["message:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($3)._onMouseLeave_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._message_("Leaving START");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["message:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv($3)._onMouseOver_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._message_("Over START");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["message:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$4=$recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
self["@btnStart"]=$4;
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($5)._with_("PREV");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._message_("prev");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$6=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
self["@btnPrev"]=$6;
$7=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($7)._with_("TREE");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._showTree();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$8=$recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=4;
//>>excludeEnd("ctx");
self["@btnNext"]=$8;
$9=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=4;
//>>excludeEnd("ctx");
$recv($9)._with_("EVENT");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$recv($9)._onClick_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._messageEvent_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=4;
//>>excludeEnd("ctx");
$10=$recv($9)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=5;
//>>excludeEnd("ctx");
self["@btnEnd"]=$10;
$11=$recv(html)._button();
$recv($11)._with_("CLEAR");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$12=$recv($11)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._clear();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=5;
//>>excludeEnd("ctx");
$recv(self["@btnStart"])._style_("font-size: 4em");
$13=$recv(html)._p();
$recv($13)._with_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$14=$recv($13)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=6;
//>>excludeEnd("ctx");
self["@message"]=$14;
$recv(html)._p_("A plain text paragraph.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p:"]=1;
//>>excludeEnd("ctx");
$recv(html)._p_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._p_("A paragraph with plain text followed by a line break.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p:"]=3;
//>>excludeEnd("ctx");
$recv(html)._br();
$15=$recv(html)._em();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["em"]=1;
//>>excludeEnd("ctx");
$recv($15)._with_("Emphasized text ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$recv(html)._p_("followed by a horizontal rule.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p:"]=4;
//>>excludeEnd("ctx");
return $recv(html)._hr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p:"]=2;
//>>excludeEnd("ctx");
$recv(html)._p_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (10)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$16=$recv(html)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["img"]=1;
//>>excludeEnd("ctx");
$recv($16)._src_("http://amber-lang.net/images/amber.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["src:"]=1;
//>>excludeEnd("ctx");
$17=$recv($16)._width_((50));
return $17;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,11)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p:"]=5;
//>>excludeEnd("ctx");
$recv(html)._entity_("copy");
$recv(html)._with_("HELLO WITH");
$recv($recv(html)._em())._appendString_("A STRING APPENDED");
$recv(html)._p_("An image: ");
$18=$recv(html)._img();
$recv($18)._src_("http://amber-lang.net/images/amber.png");
$recv($18)._yourself();
$19=$recv($18)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("Pic clicked");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,12)});
//>>excludeEnd("ctx");
}));
pic=$19;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,pic:pic},$globals.Story)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| pic |\x0a\x0a   \x22Creates the structure of the block\x22\x0a\x09\x0a\x09header := html h1 with: 'TITLE OF STORY'; yourself.\x0a\x09\x0a\x09btnStart := html button with: 'START'; \x0a\x09      onClick: [self message: 'start']; \x0a\x09\x09  onMouseEnter: [self message: 'Entering START']; \x0a\x09\x09  onMouseLeave: [self message: 'Leaving START']; \x0a\x09\x09  onMouseOver: [self message: 'Over START'];\x0a\x09\x09  yourself.\x0a\x09btnPrev := html button with: 'PREV'; onClick: [self message: 'prev']; yourself.\x0a\x09btnNext := html button with: 'TREE'; onClick: [self showTree ]; yourself.\x0a\x09btnEnd := html button with: 'EVENT'; onClick: [ :evt | self messageEvent: evt ]; yourself.\x0a\x09\x0a\x09html button with: 'CLEAR'; onClick: [ self clear ].\x0a\x09\x0a\x09\x0a\x09btnStart style: 'font-size: 4em'.\x0a\x09\x0a\x09message := html p with: ''; yourself.\x0a\x09\x0a\x09\x22Some Fancy Stuff from Seaside book\x22\x0a\x09html p: 'A plain text paragraph.'.\x0a    html p: [\x0a\x09       html p: 'A paragraph with plain text followed by a line break.'.\x0a        html br.\x0a        html em with: 'Emphasized text '.\x0a        html p: 'followed by a horizontal rule.'.\x0a        html hr.\x0a\x09 ].\x0a\x09 \x0a\x09\x09html p: [\x0a        10 timesRepeat: [\x0a            html img\x0a                src: 'http://amber-lang.net/images/amber.png';\x0a                width: 50 ] ].\x0a\x09\x09\x09\x09\x0a\x09html entity: 'copy'.\x0a\x09\x0a\x09html with: 'HELLO WITH'.\x0a\x09\x0a\x09html em appendString: 'A STRING APPENDED'.\x09\x09\x0a\x09\x0a        html p: 'An image: '.\x0a\x09\x09\x0a\x09\x09pic := html img src: 'http://amber-lang.net/images/amber.png'; yourself; onClick: [ window alert: 'Pic clicked' ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "yourself", "button", "onClick:", "message:", "onMouseEnter:", "onMouseLeave:", "onMouseOver:", "showTree", "messageEvent:", "clear", "style:", "p", "p:", "br", "em", "hr", "timesRepeat:", "src:", "img", "width:", "entity:", "appendString:", "alert:"]
}),
$globals.Story);

$core.addMethod(
$core.method({
selector: "showTree",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(jQuery)._getScript_do_("../vendor/jstree/dist/jstree.min.js",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv("#treecontainer"._asJQuery())._jstree_($recv($JSON())._parse_("{\x0a    \x22json_data\x22: {\x0a        \x22data\x22: [\x0a            {\x0a                \x22data\x22: \x22A node\x22,\x0a                \x22children\x22: [\x0a                    \x22Child 1\x22,\x0a                    \x22A Child 2\x22\x0a                ]\x0a            }\x0a        ]\x0a    },\x0a    \x22plugins\x22: [\x0a        \x22json_data\x22,\x0a        \x22ui\x22\x0a    ]\x0a}"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showTree",{},$globals.Story)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showTree\x0a\x0ajQuery \x0a\x09\x09getScript: '../vendor/jstree/dist/jstree.min.js'\x0a\x09\x09do: [\x0a\x09\x09\x09'#treecontainer' asJQuery jstree: (JSON parse: '{\x0a    \x22json_data\x22: {\x0a        \x22data\x22: [\x0a            {\x0a                \x22data\x22: \x22A node\x22,\x0a                \x22children\x22: [\x0a                    \x22Child 1\x22,\x0a                    \x22A Child 2\x22\x0a                ]\x0a            }\x0a        ]\x0a    },\x0a    \x22plugins\x22: [\x0a        \x22json_data\x22,\x0a        \x22ui\x22\x0a    ]\x0a}').\x0a\x09]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["getScript:do:", "jstree:", "asJQuery", "parse:"]
}),
$globals.Story);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Story(){return $globals.Story||(typeof Story=="undefined"?nil:Story)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($Story())._new())._appendToJQuery_("#desktop"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Story.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a Story new appendToJQuery: '#desktop' asJQuery",
referencedClasses: ["Story"],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.Story.klass);

});
