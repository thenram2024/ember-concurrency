(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[910],{120:(e,t,s)=>{"use strict"
s.d(t,{w:()=>l})
var n=s(211),r=s.n(n),i=s(421),a=s(646),o=s(603),c=s(223)
class u extends a.O{assert(...e){(0,o.assert)(...e)}async(e){(0,c.join)((()=>(0,c.schedule)("actions",e)))}reportUncaughtRejection(e){(0,c.next)(null,(function(){if(!r().onerror)throw e
r().onerror(e)}))}defer(){return(0,i.defer)()}globalDebuggingEnabled(){return r().ENV.DEBUG_TASKS}}const l=new u},646:(e,t,s)=>{"use strict"
s.d(t,{O:()=>n,U:()=>r})
class n{assert(){}async(e){Promise.resolve().then(e)}reportUncaughtRejection(){this.async((e=>{throw e}))}defer(){let e={promise:null,resolve:null,reject:null},t=new Promise(((t,s)=>{e.resolve=t,e.reject=s}))
return e.promise=t,e}globalDebuggingEnabled(){return!1}}const r=new n},52:(e,t,s)=>{"use strict"
s.d(t,{A:()=>n})
class n{constructor(e){this.maxConcurrency=e||1}}},334:(e,t,s)=>{"use strict"
s.d(t,{A:()=>o})
var n=s(52),r=s(213)
const i=(0,r.kw)("it belongs to a 'drop' Task that was already running")
class a{constructor(e){this.remainingSlots=e}step(){return this.remainingSlots>0?(this.remainingSlots--,r.su):i}}class o extends n.A{makeReducer(){return new a(this.maxConcurrency)}}},187:(e,t,s)=>{"use strict"
s.d(t,{A:()=>a})
var n=s(52),r=s(213)
class i{constructor(e){this.remainingSlots=e}step(){return this.remainingSlots>0?(this.remainingSlots--,r.su):r.I$}}class a extends n.A{makeReducer(){return new i(this.maxConcurrency)}}},213:(e,t,s)=>{"use strict"
s.d(t,{Hs:()=>i,I$:()=>o,Tb:()=>n,dJ:()=>r,kw:()=>c,su:()=>a})
const n="CANCELLED",r="STARTED",i="QUEUED",a={type:r},o={type:i},c=e=>({type:n,reason:e})},526:(e,t,s)=>{"use strict"
s.d(t,{A:()=>o})
var n=s(52),r=s(213)
const i=(0,r.kw)("it belongs to a 'keepLatest' Task that was already running")
class a{constructor(e,t){this.remainingSlots=e,this.numToCancel=t}step(){return this.remainingSlots>0?(this.remainingSlots--,r.su):this.numToCancel>0?(this.numToCancel--,i):r.I$}}class o extends n.A{makeReducer(e,t){let s=e+t
return new a(this.maxConcurrency,s-this.maxConcurrency-1)}}},246:(e,t,s)=>{"use strict"
s.d(t,{A:()=>o})
var n=s(52),r=s(213)
const i=(0,r.kw)("it belongs to a 'restartable' Task that was .perform()ed again")
class a{constructor(e){this.numToCancel=e}step(){return this.numToCancel>0?(this.numToCancel--,i):r.su}}class o extends n.A{makeReducer(e,t){return new a(e+t-this.maxConcurrency)}}},951:(e,t,s)=>{"use strict"
s.d(t,{A:()=>d})
var n=s(213)
const r=new Map
class i{constructor(e,t,s){this.stateTracker=t,this.schedulerPolicy=e,this.initialTaskInstances=s,this.startingInstances=[]}process(){let[e,t,s]=this.filterFinishedTaskInstances(),n=this.schedulerPolicy.makeReducer(t,s),r=e.filter((e=>this.setTaskInstanceExecutionState(e,n.step())))
return this.stateTracker.computeFinalStates((e=>this.applyState(e))),this.startingInstances.forEach((e=>e.start())),r}filterFinishedTaskInstances(){let e=0,t=0
return[this.initialTaskInstances.filter((s=>{let n=this.stateTracker.stateFor(s.task),r=s.executor.state
return r.isFinished?(n.onCompletion(s),!1):(r.hasStarted?e+=1:t+=1,!0)})),e,t]}setTaskInstanceExecutionState(e,t){let s=this.stateTracker.stateFor(e.task)
switch(e.executor.counted||(e.executor.counted=!0,s.onPerformed(e)),t.type){case n.Tb:return e.cancel(t.reason),!1
case n.dJ:return e.executor.state.hasStarted||(this.startingInstances.push(e),s.onStart(e)),s.onRunning(e),!0
case n.Hs:return s.onQueued(e),!0}}applyState(e){let{taskable:t}=e
if(!t.onState)return
const{guid:s}=t
if(r.has(s)&&e.tag<r.get(s))return
let n=Object.assign({numRunning:e.numRunning,numQueued:e.numQueued,numPerformedInc:e.numPerformedInc},e.attrs)
t.onState(n,t),r.set(s,e.tag)}}var a=s(752)
class o{constructor(e,t){this.taskable=e,this.group=e.group,this.numRunning=0,this.numQueued=0,this.numPerformedInc=0,this.attrs={},this.tag=t}onCompletion(e){let t=e.completionState
this.attrs.lastRunning=null,this.attrs.lastComplete=e,t===a.R5?this.attrs.lastSuccessful=e:(t===a.KH?this.attrs.lastErrored=e:t===a.kY&&(this.attrs.lastCanceled=e),this.attrs.lastIncomplete=e)}onPerformed(e){this.numPerformedInc+=1,this.attrs.lastPerformed=e}onStart(e){this.attrs.last=e}onRunning(e){this.attrs.lastRunning=e,this.numRunning+=1}onQueued(){this.numQueued+=1}recurseTaskGroups(e){let t=this.group
for(;t;)e(t),t=t.group}applyStateFrom(e){Object.assign(this.attrs,e.attrs),this.numRunning+=e.numRunning,this.numQueued+=e.numQueued,this.numPerformedInc+=e.numPerformedInc}}const c=new Map
class u{constructor(){this.states=new Map}stateFor(e){let t=e.guid,s=this.states.get(t)
if(!s){let n=c.has(t)?c.get(t):0
s=new o(e,++n),this.states.set(t,s),c.set(t,n)}return s}computeFinalStates(e){this.computeRecursiveState(),this.forEachState((t=>e(t)))}computeRecursiveState(){this.forEachState((e=>{let t=e
e.recurseTaskGroups((e=>{let s=this.stateFor(e)
s.applyStateFrom(t),t=s}))}))}forEachState(e){this.states.forEach((t=>e(t)))}}const l=new class{onCompletion(){}onPerformed(){}onStart(){}onRunning(){}onQueued(){}}
class h{stateFor(){return l}computeFinalStates(){}}class d{constructor(e,t){this.schedulerPolicy=e,this.stateTrackingEnabled=t,this.taskInstances=[]}cancelAll(e,t){let s=this.taskInstances.map((s=>{s.task.guids[e]&&s.executor.cancel(t)})).filter((e=>!!e))
return Promise.all(s)}perform(e){e.onFinalize((()=>this.scheduleRefresh())),this.taskInstances.push(e),this.refresh()}scheduleRefresh(){Promise.resolve().then((()=>this.refresh()))}refresh(){let e=this.stateTrackingEnabled?new u:new h,t=new i(this.schedulerPolicy,e,this.taskInstances)
this.taskInstances=t.process()}}},960:(e,t,s)=>{"use strict"
s.d(t,{Ag:()=>b,U6:()=>y,mp:()=>k,Zm:()=>g})
var n=s(951),r=s(213)
const i=new class{step(){return r.su}}
class a{makeReducer(){return i}}var o=s(187),c=s(334),u=s(526),l=s(246),h=s(12),d=s(602),p=s(646)
function f(e,t,s){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var s=t.call(e,"string")
if("object"!=typeof s)return s
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const m={enqueue:(e,t)=>t&&e.setBufferPolicy(o.A),evented:(e,t)=>t&&e.setEvented(t),debug:(e,t)=>t&&e.setDebug(t),drop:(e,t)=>t&&e.setBufferPolicy(c.A),group:(e,t)=>e.setGroup(t),keepLatest:(e,t)=>t&&e.setBufferPolicy(u.A),maxConcurrency:(e,t)=>e.setMaxConcurrency(t),onState:(e,t)=>e.setOnState(t),restartable:(e,t)=>t&&e.setBufferPolicy(l.A)}
function g(e,t){if(m[e])throw new Error(`A modifier with the name '${e}' has already been defined.`)
m[e]=t}function y(e){return m[e]}function k(e){return e in m}let b=class{constructor(e="<unknown>",t=null,s={}){f(this,"env",p.U),f(this,"_debug",null),f(this,"_enabledModifiers",[]),f(this,"_hasSetConcurrencyConstraint",!1),f(this,"_hasSetBufferPolicy",!1),f(this,"_hasEnabledEvents",!1),f(this,"_maxConcurrency",null),f(this,"_onStateCallback",((e,t)=>t.setState(e))),f(this,"_schedulerPolicyClass",a),f(this,"_taskGroupPath",null),this.name=e,this.taskDefinition=t,this.options=s,this._processModifierOptions(s)}createTask(e){let t=this.getTaskOptions(e)
return new h.Y(Object.assign({generatorFactory:t=>this.taskDefinition.apply(e,t)},t))}createTaskGroup(e){let t=this.getTaskOptions(e)
return new d.N(t)}getModifier(e){if(k(e))return m[e].bind(null,this)}getOptions(){return this.options}getScheduler(e,t){return new n.A(e,t)}getTaskOptions(e){let t,s,n=this._onStateCallback
if(this._taskGroupPath){if(t=e[this._taskGroupPath],!(t instanceof d.N))throw new Error(`Expected group '${this._taskGroupPath}' to be defined but was not found.`)
s=t.scheduler}else{let e=new this._schedulerPolicyClass(this._maxConcurrency)
s=this.getScheduler(e,n&&"function"==typeof n)}return{context:e,debug:this._debug,env:this.env,name:this.name,group:t,scheduler:s,hasEnabledEvents:this._hasEnabledEvents,onStateCallback:n,enabledModifiers:this._enabledModifiers,modifierOptions:this.getOptions()}}setBufferPolicy(e){return function(e){if(e._hasSetBufferPolicy)throw new Error(`Cannot set multiple buffer policies on a task or task group. ${e._schedulerPolicyClass} has already been set for task or task group '${e.name}'`)}(this),this._hasSetBufferPolicy=!0,this._hasSetConcurrencyConstraint=!0,this._schedulerPolicyClass=e,function(e){if(e._hasSetConcurrencyConstraint&&e._taskGroupPath)throw new Error("Cannot use both 'group' and other concurrency-constraining task modifiers (e.g. 'drop', 'enqueue', 'restartable')")}(this),this}setDebug(e){return this._debug=e,this}setEvented(e){return this._hasEnabledEvents=e,this}setMaxConcurrency(e){return this._hasSetConcurrencyConstraint=!0,this._maxConcurrency=e,this}setGroup(e){return this._taskGroupPath=e,this}setName(e){return this.name=e,this}setOnState(e){return this._onStateCallback=e,this}setTaskDefinition(e){return this.taskDefinition=e,this}_processModifierOptions(e){if(e)for(let t of Object.keys(e)){let s=e[t],n=this.getModifier(t)
"function"==typeof n&&n(s)&&this._enabledModifiers.push(t)}}}},944:(e,t,s)=>{"use strict"
s.d(t,{Jn:()=>i,Vt:()=>o,W5:()=>n,aV:()=>c,f6:()=>a,iw:()=>r,qs:()=>u})
const n="TaskCancelation"
function r(e){return e&&e.name===n}const i="explicit",a="yielded",o="lifespan_end",c="parent_cancel"
class u{constructor(e,t){this.kind=e,this.reason=t,this.promise=new Promise((e=>{this.finalize=e}))}}},752:(e,t,s)=>{"use strict"
s.d(t,{KH:()=>i,R5:()=>r,XS:()=>n,kY:()=>a})
const n=0,r=1,i=2,a=3},381:(e,t,s)=>{"use strict"
s.d(t,{Ni:()=>u,B0:()=>h,wA:()=>l,_p:()=>m,Px:()=>f})
class n{constructor(e,t,s){this.value=e,this.done=t,this.errored=s}}class r{constructor(e){this.done=!1,this.generatorFactory=e,this.iterator=null}step(e,t){try{let s=this.getIterator(),{value:r,done:i}=s[t](e)
return i?this.finalize(r,!1):new n(r,!1,!1)}catch(e){return this.finalize(e,!0)}}getIterator(){return this.iterator||this.done||(this.iterator=this.generatorFactory()),this.iterator}finalize(e,t){return this.done=!0,this.iterator=null,new n(e,!0,t)}}var i=s(504),a=s(45),o=s(752),c=s(944)
const u="PERFORM_TYPE_DEFAULT",l="PERFORM_TYPE_UNLINKED",h="PERFORM_TYPE_LINKED",d={}
let p=[]
function f(){return p[p.length-1]}class m{constructor({generatorFactory:e,env:t,debug:s}){this.generatorState=new r(e),this.state=Object.assign({},i.N),this.index=1,this.disposers=[],this.finalizeCallbacks=[],this.env=t,this.debug=s,this.cancelRequest=null}start(){this.state.hasStarted||this.cancelRequest||(this.setState({hasStarted:!0}),this.proceedSync(a.MM,void 0),this.taskInstance.onStarted())}cancel(e){return this.requestCancel(e)?(this.state.hasStarted?this.proceedWithCancelAsync():this.finalizeWithCancel(),this.cancelRequest.promise):(e.finalize(),e.promise)}setState(e){Object.assign(this.state,e),this.taskInstance.setState(this.state)}proceedChecked(e,t,s){this.state.isFinished||this.advanceIndex(e)&&(t===a.X7?(this.requestCancel(new c.qs(c.f6),s),this.proceedWithCancelAsync()):this.proceedAsync(t,s))}proceedWithCancelAsync(){this.proceedAsync(a.HD,d)}proceedAsync(e,t){this.advanceIndex(this.index),this.env.async((()=>this.proceedSync(e,t)))}proceedSync(e,t){this.state.isFinished||(this.dispose(),this.generatorState.done?this.handleResolvedReturnedValue(e,t):this.handleResolvedContinueValue(e,t))}handleResolvedContinueValue(e,t){let s=this.index,n=this.generatorStep(t,e)
this.advanceIndex(s)&&(n.errored?this.finalize(n.value,o.KH):this.handleYieldedValue(n))}handleResolvedReturnedValue(e,t){switch(e){case a.MM:case a.HD:this.finalize(t,o.R5)
break
case a.pA:this.finalize(t,o.KH)}}handleYieldedUnknownThenable(e){let t=this.index
e.then((e=>{this.proceedChecked(t,a.MM,e)}),(e=>{this.proceedChecked(t,a.pA,e)}))}advanceIndex(e){if(this.index===e)return++this.index}handleYieldedValue(e){let t=e.value
t?(this.addDisposer(t[a.Zp]),t[a.Sx]?this.invokeYieldable(t):"function"==typeof t.then?this.handleYieldedUnknownThenable(t):this.proceedWithSimpleValue(t)):this.proceedWithSimpleValue(t)}proceedWithSimpleValue(e){this.proceedAsync(a.MM,e)}addDisposer(e){"function"==typeof e&&this.disposers.push(e)}dispose(){let e=this.disposers
0!==e.length&&(this.disposers=[],e.forEach((e=>e())))}generatorStep(e,t){p.push(this)
let s=this.generatorState.step(e,t)
if(p.pop(),this._expectsLinkedYield){let e=s.value
e&&e.performType===h||console.warn("You performed a .linked() task without immediately yielding/returning it. This is currently unsupported (but might be supported in future version of ember-concurrency)."),this._expectsLinkedYield=!1}return s}maybeResolveDefer(){this.defer&&this.state.isFinished&&(this.state.completionState===o.R5?this.defer.resolve(this.state.value):this.defer.reject(this.state.error))}onFinalize(e){this.finalizeCallbacks.push(e),this.state.isFinished&&this.runFinalizeCallbacks()}runFinalizeCallbacks(){this.finalizeCallbacks.forEach((e=>e())),this.finalizeCallbacks=[],this.maybeResolveDefer(),this.maybeThrowUnhandledTaskErrorLater()}promise(){return this.defer||(this.defer=this.env.defer(),this.asyncErrorsHandled=!0,this.maybeResolveDefer()),this.defer.promise}maybeThrowUnhandledTaskErrorLater(){this.asyncErrorsHandled||this.state.completionState!==o.KH||(0,c.iw)(this.state.error)||this.env.async((()=>{this.asyncErrorsHandled||this.env.reportUncaughtRejection(this.state.error)}))}requestCancel(e){return!this.cancelRequest&&!this.state.isFinished&&(this.cancelRequest=e,!0)}finalize(e,t){if(this.cancelRequest)return this.finalizeWithCancel()
let s={completionState:t}
t===o.R5?(s.isSuccessful=!0,s.value=e):t===o.KH?(s.isError=!0,s.error=e):t===o.kY&&(s.error=e),this.finalizeShared(s)}finalizeWithCancel(){let e=this.taskInstance.formatCancelReason(this.cancelRequest.reason),t=new Error(e)
this.debugEnabled()&&console.log(e),t.name=c.W5,this.finalizeShared({isCanceled:!0,completionState:o.kY,error:t,cancelReason:e}),this.cancelRequest.finalize()}debugEnabled(){return this.debug||this.env.globalDebuggingEnabled()}finalizeShared(e){this.index++,e.isFinished=!0,this.setState(e),this.runFinalizeCallbacks(),this.dispatchFinalizeEvents(e.completionState)}dispatchFinalizeEvents(e){switch(e){case o.R5:this.taskInstance.onSuccess()
break
case o.KH:this.taskInstance.onError(this.state.error)
break
case o.kY:this.taskInstance.onCancel(this.state.cancelReason)}}invokeYieldable(e){try{let t=e[a.Sx](this.taskInstance,this.index)
this.addDisposer(t)}catch(e){this.env.reportUncaughtRejection(e)}}onYielded(e,t){this.asyncErrorsHandled=!0,this.onFinalize((()=>{let s=this.state.completionState
s===o.R5?e.proceed(t,a.MM,this.state.value):s===o.KH?e.proceed(t,a.pA,this.state.error):s===o.kY&&e.proceed(t,a.X7,null)}))
let s=this.getPerformType()
if(s!==l)return()=>{this.detectSelfCancelLoop(s,e),this.cancel(new c.qs(c.aV))}}getPerformType(){return this.taskInstance.performType||u}detectSelfCancelLoop(e,t){if(e!==u)return
let s=t.executor&&t.executor.cancelRequest
!s||s.kind!==c.Vt||this.cancelRequest||this.state.isFinished||this.taskInstance.selfCancelLoopWarning(t)}}},504:(e,t,s)=>{"use strict"
s.d(t,{N:()=>n})
const n={completionState:s(752).XS,value:null,error:null,isSuccessful:!1,isError:!1,isCanceled:!1,hasStarted:!1,isFinished:!1}},880:(e,t,s)=>{"use strict"
s.d(t,{K:()=>n})
const n={last:null,lastRunning:null,lastPerformed:null,lastSuccessful:null,lastComplete:null,lastErrored:null,lastCanceled:null,lastIncomplete:null,performCount:0}
Object.freeze(n)},602:(e,t,s)=>{"use strict"
s.d(t,{N:()=>r})
var n=s(256)
let r=class extends n.c{}},12:(e,t,s)=>{"use strict"
s.d(t,{Y:()=>a})
var n=s(256),r=s(381)
class i{constructor(e,t,s){this.task=e,this.performType=t,this.linkedObject=s}perform(...e){return this.task._performShared(e,this.performType,this.linkedObject)}}let a=class e extends n.c{constructor(e){super(e),this.generatorFactory=e.generatorFactory,this.perform=this._perform.bind(this)}linked(){let e=(0,r.Px)()
if(!e)throw new Error("You can only call .linked() from within a task.")
return new i(this,r.B0,e)}unlinked(){return new i(this,r.wA,null)}toString(){return`<Task:${this.name}>`}_clone(){return new e({context:this.context,debug:this.debug,env:this.env,generatorFactory:this.generatorFactory,group:this.group,hasEnabledEvents:this.hasEnabledEvents,name:this.name,onStateCallback:this.onStateCallback,scheduler:this.scheduler})}_curry(...e){let t=this._clone()
return t._curryArgs=[...this._curryArgs||[],...e],t}_perform(...e){return this._performShared(e,r.Ni,null)}_performShared(e,t,s){let n=this._curryArgs?[...this._curryArgs,...e]:e,i=this._taskInstanceFactory(n,t,s)
return t===r.B0&&(s._expectsLinkedYield=!0),this._isAlive||i.cancel(),this.scheduler.perform(i),i}_taskInstanceOptions(e,t,s){return{task:this,args:e,executor:new r._p({generatorFactory:()=>this.generatorFactory(e),env:this.env,debug:this.debug}),performType:t,hasEnabledEvents:this.hasEnabledEvents}}}},256:(e,t,s)=>{"use strict"
s.d(t,{c:()=>a})
var n=s(880),r=s(944)
let i=0
class a{constructor(e){this.context=e.context,this.debug=e.debug||!1,this.enabledModifiers=e.enabledModifiers,this.env=e.env,this.group=e.group,this.hasEnabledEvents=e.hasEnabledEvents,this.modifierOptions=e.modifierOptions,this.name=e.name,this.onStateCallback=e.onStateCallback,this.scheduler=e.scheduler,this.guid="ec_"+i++,this.guids={},this.guids[this.guid]=!0,this.group&&Object.assign(this.guids,this.group.guids)}cancelAll(e){let{reason:t,cancelRequestKind:s,resetState:n}=e||{}
t=t||".cancelAll() was explicitly called on the Task"
let i=new r.qs(s||r.Jn,t)
return this.scheduler.cancelAll(this.guid,i).then((()=>{n&&this._resetState()}))}get _isAlive(){return!0}_resetState(){this.setState(n.K)}setState(){}}Object.assign(a.prototype,n.K),Object.assign(a.prototype,{numRunning:0,numQueued:0,isRunning:!1,isQueued:!1,isIdle:!0,state:"idle"})},45:(e,t,s)=>{"use strict"
s.d(t,{G$:()=>p,HD:()=>o,MM:()=>i,Oc:()=>m,Sx:()=>r,X7:()=>c,Zp:()=>n,_d:()=>l,i4:()=>f,pA:()=>a})
const n="__ec_cancel__",r="__ec_yieldable__",i="next",a="throw",o="return",c="cancel"
class u{constructor(e,t){this._taskInstance=e,this._resumeIndex=t}getTaskInstance(){return this._taskInstance}cancel(){let e=this._taskInstance
e.proceed.call(e,this._resumeIndex,c)}next(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,i,e)}return(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,o,e)}throw(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,a,e)}}class l{constructor(){this[r]=this[r].bind(this)}onYield(){}_deferable(){let e={resolve:void 0,reject:void 0}
return e.promise=new Promise(((t,s)=>{e.resolve=t,e.reject=s})),e}_toPromise(){let e=this._deferable(),t={proceed(t,s,n){s==i||s==o?e.resolve(n):e.reject(n)}},s=this[r](t,0)
return e.promise[n]=s,e.promise}then(...e){return this._toPromise().then(...e)}catch(...e){return this._toPromise().catch(...e)}finally(...e){return this._toPromise().finally(...e)}[r](e,t){let s=new u(e,t)
return this.onYield(s)}}class h extends l{onYield(e){let t=requestAnimationFrame((()=>e.next()))
return()=>cancelAnimationFrame(t)}}class d extends l{constructor(e){super(),this.ms=e}onYield(e){let t=setTimeout((()=>e.next()),this.ms)
return()=>clearTimeout(t)}}function p(){return new h}const f=new class extends l{onYield(){}}
function m(e){return new d(e)}},462:(e,t,s)=>{"use strict"
s.d(t,{F:()=>i})
var n=s(471),r=s(603)
function i(e,t,s,i){let a=s[0],o=s.slice(1)
return function(...s){if(a&&"function"==typeof a[t]){if(i&&i.value){let e=s.pop()
s.push((0,n.get)(e,i.value))}return a[t](...o,...s)}(0,r.assert)(`The first argument passed to the \`${e}\` helper should be a Task object (without quotes); you passed ${a}`,!1)}}},934:(e,t,s)=>{"use strict"
s.d(t,{A:()=>b})
var n=s(603),r=s(471),i=s(505),a=s(123),o=s(223),c=s(960),u=s(786),l=s(474),h=s(372),d=s(951)
class p extends d.A{scheduleRefresh(){(0,o.once)(this,this.refresh)}}var f=s(120)
let m=0
function g(e,t,s,n,r,i){if(s&&s.length>0)for(let a=0;a<s.length;++a){let o=s[a],c="__ember_concurrency_handler_"+m++
t[c]=y(n,r,i),e(t,o,null,c)}}function y(e,t,s){return function(){let n=(0,r.get)(this,e)
s?(0,o.scheduleOnce)("actions",n,t,...arguments):n[t].apply(n,arguments)}}const k=e=>Array.isArray(e)?e:[e];(0,c.Zm)("cancelOn",((e,t)=>e.addCancelEvents(...k(t)))),(0,c.Zm)("observes",((e,t)=>e.addObserverKeys(...k(t)))),(0,c.Zm)("on",((e,t)=>e.addPerformEvents(...k(t))))
class b extends c.Ag{constructor(...e){var t,s,n
super(...e),t=this,s="env",n=f.w,(s=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var s=t.call(e,"string")
if("object"!=typeof s)return s
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(s))in t?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n}createTask(e){(0,n.assert)("Cannot create task if a task definition is not provided as generator function or encapsulated task.",this.taskDefinition)
let t=this.getTaskOptions(e)
return"object"==typeof this.taskDefinition?new u.N(Object.assign({taskObj:this.taskDefinition},t)):new u.Y(Object.assign({generatorFactory:t=>this.taskDefinition.apply(e,t)},t))}createTaskGroup(e){(0,n.assert)("A task definition is not expected for a task group.",!this.taskDefinition)
let t=this.getTaskOptions(e)
return new h.N(t)}addCancelEvents(...e){return this._cancelEventNames=this._cancelEventNames||[],this._cancelEventNames.push(...e),this}addObserverKeys(...e){return this._observes=this._observes||[],this._observes.push(...e),this}addPerformEvents(...e){return this._eventNames=this._eventNames||[],this._eventNames.push(...e),this}getModifier(e){let t=super.getModifier(e)
return t||"function"!=typeof l.BA.prototype[e]||(t=l.BA.prototype[e].bind(this)),(0,n.assert)(`Task option '${e}' is not recognized as a supported option.`,t),t}getScheduler(e,t){return new p(e,t)}_setupEmberKVO(e){g(i.addListener,e,this._eventNames,this.name,"perform",!1),g(i.addListener,e,this._cancelEventNames,this.name,"cancelAll",!1),g(a.addObserver,e,this._observes,this.name,"perform",!0)}get taskFn(){return this.taskDefinition}set taskFn(e){this.setTaskDefinition(e)}}},372:(e,t,s)=>{"use strict"
s.d(t,{N:()=>a})
var n=s(602),r=s(590),i=s(729)
class a extends n.N{}i.e&&Object.defineProperties(a.prototype,i.e),Object.assign(a.prototype,r.W)},628:(e,t,s)=>{"use strict"
s.d(t,{H:()=>c})
var n=s(504),r=s(45),i=s(944)
class a{constructor({task:e,args:t,executor:s,performType:n,hasEnabledEvents:r}){this.task=e,this.args=t,this.performType=n,this.executor=s,this.executor.taskInstance=this,this.hasEnabledEvents=r}setState(){}onStarted(){}onSuccess(){}onError(){}onCancel(){}formatCancelReason(){}selfCancelLoopWarning(){}onFinalize(e){this.executor.onFinalize(e)}proceed(e,t,s){this.executor.proceedChecked(e,t,s)}[r.Sx](e,t){return this.executor.onYielded(e,t)}cancel(e=".cancel() was explicitly called"){this.executor.cancel(new i.qs(i.Jn,e))}then(...e){return this.executor.promise().then(...e)}catch(...e){return this.executor.promise().catch(...e)}finally(...e){return this.executor.promise().finally(...e)}toString(){return`${this.task} TaskInstance`}start(){return this.executor.start(),this}}Object.assign(a.prototype,n.N),Object.assign(a.prototype,{state:"waiting",isDropped:!1,isRunning:!0})
var o=s(729)
class c extends a{setState(e){let t=this._recomputeState(e)
Object.assign(this,{...e,isRunning:!e.isFinished,isDropped:"dropped"===t,state:t})}_recomputeState(e){return e.isDropped?"dropped":e.isCanceled?e.hasStarted?"canceled":"dropped":e.isFinished?"finished":e.hasStarted?"running":"waiting"}onStarted(){this.triggerEvent("started",this)}onSuccess(){this.triggerEvent("succeeded",this)}onError(e){this.triggerEvent("errored",this,e)}onCancel(e){this.triggerEvent("canceled",this,e)}formatCancelReason(e){return`TaskInstance '${this.getName()}' was canceled because ${e}. For more information, see: http://ember-concurrency.com/docs/task-cancelation-help`}getName(){return this.name||(this.name=this.task&&this.task.name||"<unknown>"),this.name}selfCancelLoopWarning(e){let t=`\`${e.getName()}\``,s=`\`${this.getName()}\``
console.warn(`ember-concurrency detected a potentially hazardous "self-cancel loop" between parent task ${t} and child task ${s}. If you want child task ${s} to be canceled when parent task ${t} is canceled, please change \`.perform()\` to \`.linked().perform()\`. If you want child task ${s} to keep running after parent task ${t} is canceled, change it to \`.unlinked().perform()\``)}triggerEvent(...e){if(!this.hasEnabledEvents)return
let t=this.task,s=t.context,n=t&&t.name
if(s&&s.trigger&&n){let[t,...r]=e
s.trigger(`${n}:${t}`,...r)}}}o.O&&Object.defineProperties(c.prototype,o.O)},474:(e,t,s)=>{"use strict"
s.d(t,{BA:()=>d,GL:()=>l,ah:()=>p,nY:()=>m})
var n=s(211),r=s.n(n),i=s(471),a=s(187),o=s(334),c=s(526),u=s(246)
let l="__ec_task_factory"
const h={restartable(){return this[l].setBufferPolicy(u.A),this},enqueue(){return this[l].setBufferPolicy(a.A),this},drop(){return this[l].setBufferPolicy(o.A),this},keepLatest(){return this[l].setBufferPolicy(c.A),this},maxConcurrency(e){return this[l].setMaxConcurrency(e),this},group(e){return this[l].setGroup(e),this},evented(){return this[l].setEvented(!0),this},debug(){return this[l].setDebug(!0),this},onState(e){return this[l].setOnState(e),this}}
class d{}class p{}Object.assign(p.prototype,h),Object.assign(d.prototype,h,{setup(e,t){this.callSuperSetup&&this.callSuperSetup(...arguments),this[l].setName(t),this[l]._setupEmberKVO(e)},on(){return this[l].addPerformEvents(...arguments),this},cancelOn(){return this[l].addCancelEvents(...arguments),this},observes(){return this[l].addObserverKeys(...arguments),this}})
const f=r()._setClassicDecorator||r()._setComputedDecorator
function m(e){let t=function(s,n){return void 0!==t.setup&&t.setup(s,n),(0,i.computed)(e)(...arguments)}
return f(t),t}},786:(e,t,s)=>{"use strict"
s.d(t,{N:()=>m,Y:()=>p})
var n=s(294),r=s(471),i=s.n(r),a=s(130),o=s(12),c=s(628),u=s(381),l=s(590),h=s(729),d=s(944)
class p extends o.Y{constructor(e){super(e),(0,a.isDestroying)(this.context)||(0,a.registerDestructor)(this.context,(()=>{this.cancelAll({reason:"the object it lives on was destroyed or unrendered",cancelRequestKind:d.Vt})}))}get _isAlive(){return!(0,a.isDestroying)(this.context)}_taskInstanceFactory(e,t,s){let n=this._taskInstanceOptions(e,t,s)
return new c.H(n)}_clone(){return new p({context:this.context,debug:this.debug,env:this.env,generatorFactory:this.generatorFactory,group:this.group,hasEnabledEvents:this.hasEnabledEvents,name:this.name,onStateCallback:this.onStateCallback,scheduler:this.scheduler})}}h.e&&Object.defineProperties(p.prototype,h.e),Object.assign(p.prototype,l.W)
const f="__ec__encap_current_ti"
class m extends p{constructor(e){super(e),this.taskObj=e.taskObj,this._encapsulatedTaskStates=new WeakMap,this._encapsulatedTaskInstanceProxies=new WeakMap}_getEncapsulatedTaskClass(){let e=this._encapsulatedTaskImplClass
return e||(e=i().extend(this.taskObj,{unknownProperty(e){let t=this[f]
return t?t[e]:void 0}})),e}_taskInstanceFactory(e,t){let s,r=(0,n.getOwner)(this.context),i=this._getEncapsulatedTaskClass().create({context:this.context});(0,n.setOwner)(i,r)
let a=new c.H({task:this,args:e,executor:new u._p({generatorFactory:()=>i.perform.apply(s,e),env:this.env,debug:this.debug}),performType:t,hasEnabledEvents:this.hasEnabledEvents})
return i[f]=a,this._encapsulatedTaskStates.set(a,i),s=this._wrappedEncapsulatedTaskInstance(a),s}_wrappedEncapsulatedTaskInstance(e){if(!e)return null
let t=this._encapsulatedTaskInstanceProxies,s=t.get(e)
if(!s){let n=this._encapsulatedTaskStates.get(e)
s=new Proxy(e,{get:(e,t)=>t in e?e[t]:(0,r.get)(n,t.toString()),set:(e,t,s)=>(t in e?e[t]=s:(0,r.set)(n,t.toString(),s),!0),has:(e,t)=>t in e||t in n,ownKeys:e=>Reflect.ownKeys(e).concat(Reflect.ownKeys(n)),defineProperty(s,r,i){let a=t.get(e)
return a&&(i.get?i.get=i.get.bind(a):a&&i.set&&(i.set=i.set.bind(a))),Reflect.defineProperty(n,r,i)},getOwnPropertyDescriptor:(e,t)=>t in e?Reflect.getOwnPropertyDescriptor(e,t):Reflect.getOwnPropertyDescriptor(n,t)}),t.set(e,s)}return s}}},590:(e,t,s)=>{"use strict"
s.d(t,{W:()=>n})
const n={_performCount:0,setState(e){this._performCount=this._performCount+(e.numPerformedInc||0)
let t=e.numRunning>0,s=e.numQueued>0,n=Object.assign({},e,{performCount:this._performCount,isRunning:t,isQueued:s,isIdle:!t&&!s,state:t?"running":"idle"})
Object.assign(this,n)},onState(e,t){t.onStateCallback&&t.onStateCallback(e,t)}}},729:(e,t,s)=>{"use strict"
s.d(t,{O:()=>c,e:()=>o})
var n=s(473),r=s(880),i=s(504)
function a(e,t){return Object.keys(e).reduce(((t,s)=>function(e,t,s){const r=Object.getOwnPropertyDescriptor(e,s)
r.initializer=r.initializer||(()=>e[s]),delete r.value
const i=(0,n.tracked)(t,s,r)
return t[s]=i,t}(e,t,s)),t)}let o,c
o=a(r.K,{}),o=a({numRunning:0,numQueued:0,isRunning:!1,isQueued:!1,isIdle:!0,state:"idle"},o),c=a(i.N,{}),c=a({state:"waiting",isDropped:!1,isRunning:!1},c),Object.freeze(o),Object.freeze(c)},201:(e,t,s)=>{"use strict"
s.r(t),s.d(t,{buildTask:()=>r})
var n=s(934)
function r(e,t,s,r){let i=t
r&&(i=Object.assign({},i),i[r]=!0)
const a=e()
return new n.A(s||"<unknown>",a.generator,i).createTask(a.context)}},108:(e,t,s)=>{"use strict"
s.r(t),s.d(t,{cancelHelper:()=>o,default:()=>c})
var n=s(336),r=s(603),i=s(462)
const a="the 'cancel-all' template helper was invoked"
function o(e){let t=e[0]
return t&&"function"==typeof t.cancelAll||(0,r.assert)(`The first argument passed to the \`cancel-all\` helper should be a Task or TaskGroup (without quotes); you passed ${t}`,!1),(0,i.F)("cancel-all","cancelAll",[t,{reason:a}])}var c=(0,n.helper)(o)},855:(e,t,s)=>{"use strict"
s.r(t),s.d(t,{default:()=>c,performHelper:()=>o})
var n=s(336),r=s(603),i=s(462)
function a(e){return function(t){"function"==typeof e?e(t):null===e||(0,r.assert)(`The onError argument passed to the \`perform\` helper should be a function or null; you passed ${e}`,!1)}}function o(e,t){let s=(0,i.F)("perform","perform",e,t)
return t&&void 0!==t.onError?function(...e){try{return s(...e).catch(a(t.onError))}catch{a(t.onError)}}:s}var c=(0,n.helper)(o)},177:(e,t,s)=>{"use strict"
s.r(t),s.d(t,{default:()=>n})
var n=(0,s(336).helper)((function(e){let[t,...s]=e
return t._curry(...s)}))},926:(e,t,s)=>{"use strict"
s.r(t),s.d(t,{Task:()=>te.Y,TaskGroup:()=>A.N,TaskGroupProperty:()=>u.ah,TaskInstance:()=>F.H,TaskProperty:()=>u.BA,Yieldable:()=>a,all:()=>N,allSettled:()=>Y,animationFrame:()=>i.G$,didCancel:()=>ee.iw,dropTask:()=>v,dropTaskGroup:()=>x,enqueueTask:()=>_,enqueueTaskGroup:()=>C,forever:()=>i.i4,getModifier:()=>h.U6,hasModifier:()=>h.mp,hash:()=>L,hashSettled:()=>q,keepLatestTask:()=>w,keepLatestTaskGroup:()=>T,lastValue:()=>k,race:()=>z,rawTimeout:()=>i.Oc,registerModifier:()=>h.Zm,restartableTask:()=>S,restartableTaskGroup:()=>O,task:()=>R,taskGroup:()=>j,timeout:()=>c,waitForEvent:()=>J,waitForProperty:()=>X,waitForQueue:()=>Z})
var n=s(223),r=s(120),i=s(45)
class a extends i._d{_deferable(){return r.w.defer()}}class o extends a{constructor(e){super(),this.ms=e}onYield(e){let t=(0,n.later)((()=>e.next()),this.ms)
return()=>(0,n.cancel)(t)}}function c(e){return new o(e)}var u=s(474),l=s(934),h=s(960)
function d(e,t,s,n=[],r=h.Ag){let i,{initializer:a,get:o,value:c}=s
a?i=a.call(void 0):o?i=o.call(void 0):c&&(i=c),i.displayName=`${t} (task)`
let u=new WeakMap,l=new r(t,i,n[0]||{})
return l._setupEmberKVO(e),{get(){let e=u.get(this)
return e||(e=l.createTask(this),u.set(this,e)),e}}}function p(e,t,s,n=[],r=h.Ag){let i=new WeakMap,a=new r(t,null,n[0]||{})
return{get(){let e=i.get(this)
return e||(e=a.createTaskGroup(this),i.set(this,e)),e}}}function f(e){return function(...t){return function(e){let[t,s,n]=e
return 3===e.length&&"object"==typeof t&&null!==t&&"string"==typeof s&&("object"==typeof n&&null!==n&&"enumerable"in n&&"configurable"in n||void 0===n)}(t)?e(...t):(...s)=>e(...s,t)}}function m(e,t={},s=h.Ag){return f(((n,r,i,[a]=[])=>{let o=Object.assign({},{...t,...a})
return e(n,r,i,[o],s)}))}function g(e={},t=h.Ag){return m(d,e,t)}function y(e={},t=h.Ag){return m(p,e,t)}const k=f(((e,t,s,[n]=[])=>{const{initializer:r}=s
return delete s.initializer,{get(){let e=this[n].lastSuccessful
return e?e.value:r?r.call(this):void 0}}})),b=g({},l.A),v=g({drop:!0},l.A),_=g({enqueue:!0},l.A),w=g({keepLatest:!0},l.A),S=g({restartable:!0},l.A),E=y({},l.A),x=y({drop:!0},l.A),C=y({enqueue:!0},l.A),T=y({keepLatest:!0},l.A),O=y({restartable:!0},l.A)
var P=s(603),A=s(372)
function R(e,t,s){var n
return(0,P.assert)('It appears you\'re attempting to use the new task(async () => { ... }) syntax, but the async arrow task function you\'ve provided is not being properly compiled by Babel.\n\nPossible causes / remedies:\n\n1. You must pass the async function expression directly to the task() function (it is not currently supported to pass in a variable containing the async arrow fn, or any other kind of indirection)\n2. The new task syntax is only supported by native classes. Ensure that this is one.\n3. If this code is in an addon, please ensure the addon specifies ember-concurrency "2.3.0" or higher in "dependencies" (not "devDependencies")\n4. Ensure that there is only one version of ember-concurrency v2.3.0+ being used in your project (including nested dependencies) and consider using npm/yarn/pnpm resolutions to enforce a single version is used\n5. Ensure that you have registered the Babel transform that Ember Concurrency uses to transform tasks in the "async-arrow" notation, see https://ember-concurrency.com/docs/v4-upgrade',!((n=arguments[arguments.length-1])&&n.constructor&&"AsyncFunction"===n.constructor.name)),I(e)||t&&s?b(...arguments):function(e){const t=(0,u.nY)((function(){return t[u.GL].setTaskDefinition(t.taskFn),t[u.GL].createTask(this)}))
return t.taskFn=e,t[u.GL]=new l.A,Object.setPrototypeOf(t,u.BA.prototype),t}(e)}function j(e,t,s){if(I(e)||t&&s)return E(...arguments)
{let e=(0,u.nY)((function(t){return e[u.GL].setName(t),e[u.GL].createTaskGroup(this)}))
return e[u.GL]=new l.A,Object.setPrototypeOf(e,u.ah.prototype),e}}function I(e){return!(!e||"function"==typeof e||"object"==typeof e&&"perform"in e&&"function"==typeof e.perform||Object.getPrototypeOf(e)!==Object.prototype)}var F=s(628),D=s(421),M=s.n(D)
const N=K(M().Promise,"all",G),Y=K(M(),"allSettled",G),z=K(D.Promise,"race",G),L=K(M(),"hash",$),q=K(M(),"hashSettled",$)
function G(e){return e}function $(e){return Object.keys(e).map((t=>e[t]))}function H(e){if(e)if(e instanceof F.H)e.executor.asyncErrorsHandled=!0
else if(e instanceof i._d)return e._toPromise()
return e}function K(e,t,s){return function(n){let r=function(e,t){if(Array.isArray(e))return e.map(t)
if("object"==typeof e&&null!==e){let s={}
return Object.keys(e).forEach((n=>{s[n]=t(e[n])})),s}return e}(n,H),a=s(r);(0,P.assert)(`'${t}' expects an array.`,Array.isArray(a))
let o=M().defer()
e[t](r).then(o.resolve,o.reject)
let c=!1,u=()=>{c||(c=!0,a.forEach((e=>{e&&(e instanceof F.H?e.cancel():"function"==typeof e[i.Zp]&&e[i.Zp]())})))},l=o.promise.finally(u)
return l[i.Zp]=u,l}}var B=s(471),W=s(123)
class V extends a{constructor(e){super(),this.queueName=e}onYield(e){let t
try{t=(0,n.schedule)(this.queueName,(()=>e.next()))}catch(t){e.throw(t)}return()=>(0,n.cancel)(t)}}class Q extends a{constructor(e,t){super(),this.object=e,this.eventName=t,this.usesDOMEvents=!1}on(e){"function"==typeof this.object.addEventListener?(this.usesDOMEvents=!0,this.object.addEventListener(this.eventName,e)):this.object.on(this.eventName,e)}off(e){this.usesDOMEvents?this.object.removeEventListener(this.eventName,e):this.object.off(this.eventName,e)}onYield(e){let t=null,s=()=>{t&&this.off(t),t=null}
return t=t=>{s(),e.next(t)},this.on(t),s}}class U extends a{constructor(e,t,s=Boolean){super(),this.object=e,this.key=t,this.predicateCallback="function"==typeof s?s:e=>e===s}onYield(e){let t=!1,s=()=>{let t=(0,B.get)(this.object,this.key)
if(this.predicateCallback(t))return e.next(t),!0}
return s()||((0,W.addObserver)(this.object,this.key,null,s),t=!0),()=>{t&&s&&(0,W.removeObserver)(this.object,this.key,null,s)}}}function Z(e){return new V(e)}function J(e,t){var s
return(0,P.assert)(`${e} must include Ember.Evented (or support \`.on()\` and \`.off()\`) or DOM EventTarget (or support \`addEventListener\` and  \`removeEventListener\`) to be able to use \`waitForEvent\``,(s=e)&&("function"==typeof s.one&&"function"==typeof s.off||"function"==typeof s.on&&"function"==typeof s.off||"function"==typeof s.addEventListener&&"function"==typeof s.removeEventListener)),new Q(e,t)}function X(e,t,s){return new U(e,t,s)}var ee=s(944),te=s(786)},24:function(e,t){window._eai_r=require,window._eai_d=define}}])
