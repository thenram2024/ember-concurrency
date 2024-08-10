export function taskComputed(fn: any): (proto: any, key: any, ...args: any[]) => void | TypedPropertyDescriptor<any>;
export let taskFactorySymbol: string;
export namespace propertyModifiers {
    /**
     * Configures the task to cancel old currently task instances
     * to make room for a new one to perform. Sets default
     * maxConcurrency to 1.
     *
     * [See the Live Example](/docs/examples/route-tasks/1)
     *
     * @method restartable
     * @memberof TaskProperty
     * @instance
     */
    function restartable(): {
        restartable(): any;
        /**
         * Configures the task to run task instances one-at-a-time in
         * the order they were `.perform()`ed. Sets default
         * maxConcurrency to 1.
         *
         * @method enqueue
         * @memberof TaskProperty
         * @instance
         */
        enqueue(): any;
        /**
         * Configures the task to immediately cancel (i.e. drop) any
         * task instances performed when the task is already running
         * at maxConcurrency. Sets default maxConcurrency to 1.
         *
         * @method drop
         * @memberof TaskProperty
         * @instance
         */
        drop(): any;
        /**
         * Configures the task to drop all but the most recently
         * performed {@linkcode TaskInstance }.
         *
         * @method keepLatest
         * @memberof TaskProperty
         * @instance
         */
        keepLatest(): any;
        /**
         * Sets the maximum number of task instances that are allowed
         * to run at the same time. By default, with no task modifiers
         * applied, this number is Infinity (there is no limit
         * to the number of tasks that can run at the same time).
         * {@linkcode TaskProperty#restartable .restartable},
         * {@linkcode TaskProperty#enqueue .enqueue}, and
         * {@linkcode TaskProperty#drop .drop} set the default
         * maxConcurrency to 1, but you can override this value
         * to set the maximum number of concurrently running tasks
         * to a number greater than 1.
         *
         * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
         *
         * The example below uses a task with `maxConcurrency(3)` to limit
         * the number of concurrent AJAX requests (for anyone using this task)
         * to 3.
         *
         * ```js
         * doSomeAjax: task(function * (url) {
         *   return fetch(url);
         * }).maxConcurrency(3),
         *
         * elsewhere() {
         *   this.doSomeAjax.perform("http://www.example.com/json");
         * },
         * ```
         *
         * @method maxConcurrency
         * @memberof TaskProperty
         * @param {Number} n The maximum number of concurrently running tasks
         * @instance
         */
        maxConcurrency(n: number): any;
        /**
         * Adds this task to a TaskGroup so that concurrency constraints
         * can be shared between multiple tasks.
         *
         * [See the Task Group docs for more information](/docs/task-groups)
         *
         * @method group
         * @memberof TaskProperty
         * @param {String} groupPath A path to the TaskGroup property
         * @instance
         */
        group(taskGroupPath: any): any;
        /**
         * Activates lifecycle events, allowing Evented host objects to react to task state
         * changes.
         *
         * ```js
         *
         * export default Component.extend({
         *   uploadTask: task(function* (file) {
         *     // ... file upload stuff
         *   }).evented(),
         *
         *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
         *     this.analytics.track("User Photo: upload started");
         *   }),
         * });
         * ```
         *
         * @method evented
         * @memberof TaskProperty
         * @instance
         */
        evented(): any;
        /**
         * Logs lifecycle events to aid in debugging unexpected Task behavior.
         * Presently only logs cancelation events and the reason for the cancelation,
         * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
         *
         * @method debug
         * @memberof TaskProperty
         * @instance
         */
        debug(): any;
        /**
         * Configures the task to call the passed in callback for derived state updates,
         * overriding the default derived state tracking. You may call with `null` to
         * completely opt-out of derived state tracking.
         *
         * @method onState
         * @memberof TaskProperty
         * @param {function?} callback Callback to be called. Receives an object argument with the new state.
         * @instance
         */
        onState(callback: Function | null): any;
    };
    /**
     * Configures the task to run task instances one-at-a-time in
     * the order they were `.perform()`ed. Sets default
     * maxConcurrency to 1.
     *
     * @method enqueue
     * @memberof TaskProperty
     * @instance
     */
    function enqueue(): {
        /**
         * Configures the task to cancel old currently task instances
         * to make room for a new one to perform. Sets default
         * maxConcurrency to 1.
         *
         * [See the Live Example](/docs/examples/route-tasks/1)
         *
         * @method restartable
         * @memberof TaskProperty
         * @instance
         */
        restartable(): any;
        enqueue(): any;
        /**
         * Configures the task to immediately cancel (i.e. drop) any
         * task instances performed when the task is already running
         * at maxConcurrency. Sets default maxConcurrency to 1.
         *
         * @method drop
         * @memberof TaskProperty
         * @instance
         */
        drop(): any;
        /**
         * Configures the task to drop all but the most recently
         * performed {@linkcode TaskInstance }.
         *
         * @method keepLatest
         * @memberof TaskProperty
         * @instance
         */
        keepLatest(): any;
        /**
         * Sets the maximum number of task instances that are allowed
         * to run at the same time. By default, with no task modifiers
         * applied, this number is Infinity (there is no limit
         * to the number of tasks that can run at the same time).
         * {@linkcode TaskProperty#restartable .restartable},
         * {@linkcode TaskProperty#enqueue .enqueue}, and
         * {@linkcode TaskProperty#drop .drop} set the default
         * maxConcurrency to 1, but you can override this value
         * to set the maximum number of concurrently running tasks
         * to a number greater than 1.
         *
         * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
         *
         * The example below uses a task with `maxConcurrency(3)` to limit
         * the number of concurrent AJAX requests (for anyone using this task)
         * to 3.
         *
         * ```js
         * doSomeAjax: task(function * (url) {
         *   return fetch(url);
         * }).maxConcurrency(3),
         *
         * elsewhere() {
         *   this.doSomeAjax.perform("http://www.example.com/json");
         * },
         * ```
         *
         * @method maxConcurrency
         * @memberof TaskProperty
         * @param {Number} n The maximum number of concurrently running tasks
         * @instance
         */
        maxConcurrency(n: number): any;
        /**
         * Adds this task to a TaskGroup so that concurrency constraints
         * can be shared between multiple tasks.
         *
         * [See the Task Group docs for more information](/docs/task-groups)
         *
         * @method group
         * @memberof TaskProperty
         * @param {String} groupPath A path to the TaskGroup property
         * @instance
         */
        group(taskGroupPath: any): any;
        /**
         * Activates lifecycle events, allowing Evented host objects to react to task state
         * changes.
         *
         * ```js
         *
         * export default Component.extend({
         *   uploadTask: task(function* (file) {
         *     // ... file upload stuff
         *   }).evented(),
         *
         *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
         *     this.analytics.track("User Photo: upload started");
         *   }),
         * });
         * ```
         *
         * @method evented
         * @memberof TaskProperty
         * @instance
         */
        evented(): any;
        /**
         * Logs lifecycle events to aid in debugging unexpected Task behavior.
         * Presently only logs cancelation events and the reason for the cancelation,
         * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
         *
         * @method debug
         * @memberof TaskProperty
         * @instance
         */
        debug(): any;
        /**
         * Configures the task to call the passed in callback for derived state updates,
         * overriding the default derived state tracking. You may call with `null` to
         * completely opt-out of derived state tracking.
         *
         * @method onState
         * @memberof TaskProperty
         * @param {function?} callback Callback to be called. Receives an object argument with the new state.
         * @instance
         */
        onState(callback: Function | null): any;
    };
    /**
     * Configures the task to immediately cancel (i.e. drop) any
     * task instances performed when the task is already running
     * at maxConcurrency. Sets default maxConcurrency to 1.
     *
     * @method drop
     * @memberof TaskProperty
     * @instance
     */
    function drop(): {
        /**
         * Configures the task to cancel old currently task instances
         * to make room for a new one to perform. Sets default
         * maxConcurrency to 1.
         *
         * [See the Live Example](/docs/examples/route-tasks/1)
         *
         * @method restartable
         * @memberof TaskProperty
         * @instance
         */
        restartable(): any;
        /**
         * Configures the task to run task instances one-at-a-time in
         * the order they were `.perform()`ed. Sets default
         * maxConcurrency to 1.
         *
         * @method enqueue
         * @memberof TaskProperty
         * @instance
         */
        enqueue(): any;
        drop(): any;
        /**
         * Configures the task to drop all but the most recently
         * performed {@linkcode TaskInstance }.
         *
         * @method keepLatest
         * @memberof TaskProperty
         * @instance
         */
        keepLatest(): any;
        /**
         * Sets the maximum number of task instances that are allowed
         * to run at the same time. By default, with no task modifiers
         * applied, this number is Infinity (there is no limit
         * to the number of tasks that can run at the same time).
         * {@linkcode TaskProperty#restartable .restartable},
         * {@linkcode TaskProperty#enqueue .enqueue}, and
         * {@linkcode TaskProperty#drop .drop} set the default
         * maxConcurrency to 1, but you can override this value
         * to set the maximum number of concurrently running tasks
         * to a number greater than 1.
         *
         * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
         *
         * The example below uses a task with `maxConcurrency(3)` to limit
         * the number of concurrent AJAX requests (for anyone using this task)
         * to 3.
         *
         * ```js
         * doSomeAjax: task(function * (url) {
         *   return fetch(url);
         * }).maxConcurrency(3),
         *
         * elsewhere() {
         *   this.doSomeAjax.perform("http://www.example.com/json");
         * },
         * ```
         *
         * @method maxConcurrency
         * @memberof TaskProperty
         * @param {Number} n The maximum number of concurrently running tasks
         * @instance
         */
        maxConcurrency(n: number): any;
        /**
         * Adds this task to a TaskGroup so that concurrency constraints
         * can be shared between multiple tasks.
         *
         * [See the Task Group docs for more information](/docs/task-groups)
         *
         * @method group
         * @memberof TaskProperty
         * @param {String} groupPath A path to the TaskGroup property
         * @instance
         */
        group(taskGroupPath: any): any;
        /**
         * Activates lifecycle events, allowing Evented host objects to react to task state
         * changes.
         *
         * ```js
         *
         * export default Component.extend({
         *   uploadTask: task(function* (file) {
         *     // ... file upload stuff
         *   }).evented(),
         *
         *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
         *     this.analytics.track("User Photo: upload started");
         *   }),
         * });
         * ```
         *
         * @method evented
         * @memberof TaskProperty
         * @instance
         */
        evented(): any;
        /**
         * Logs lifecycle events to aid in debugging unexpected Task behavior.
         * Presently only logs cancelation events and the reason for the cancelation,
         * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
         *
         * @method debug
         * @memberof TaskProperty
         * @instance
         */
        debug(): any;
        /**
         * Configures the task to call the passed in callback for derived state updates,
         * overriding the default derived state tracking. You may call with `null` to
         * completely opt-out of derived state tracking.
         *
         * @method onState
         * @memberof TaskProperty
         * @param {function?} callback Callback to be called. Receives an object argument with the new state.
         * @instance
         */
        onState(callback: Function | null): any;
    };
    /**
     * Configures the task to drop all but the most recently
     * performed {@linkcode TaskInstance }.
     *
     * @method keepLatest
     * @memberof TaskProperty
     * @instance
     */
    function keepLatest(): {
        /**
         * Configures the task to cancel old currently task instances
         * to make room for a new one to perform. Sets default
         * maxConcurrency to 1.
         *
         * [See the Live Example](/docs/examples/route-tasks/1)
         *
         * @method restartable
         * @memberof TaskProperty
         * @instance
         */
        restartable(): any;
        /**
         * Configures the task to run task instances one-at-a-time in
         * the order they were `.perform()`ed. Sets default
         * maxConcurrency to 1.
         *
         * @method enqueue
         * @memberof TaskProperty
         * @instance
         */
        enqueue(): any;
        /**
         * Configures the task to immediately cancel (i.e. drop) any
         * task instances performed when the task is already running
         * at maxConcurrency. Sets default maxConcurrency to 1.
         *
         * @method drop
         * @memberof TaskProperty
         * @instance
         */
        drop(): any;
        keepLatest(): any;
        /**
         * Sets the maximum number of task instances that are allowed
         * to run at the same time. By default, with no task modifiers
         * applied, this number is Infinity (there is no limit
         * to the number of tasks that can run at the same time).
         * {@linkcode TaskProperty#restartable .restartable},
         * {@linkcode TaskProperty#enqueue .enqueue}, and
         * {@linkcode TaskProperty#drop .drop} set the default
         * maxConcurrency to 1, but you can override this value
         * to set the maximum number of concurrently running tasks
         * to a number greater than 1.
         *
         * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
         *
         * The example below uses a task with `maxConcurrency(3)` to limit
         * the number of concurrent AJAX requests (for anyone using this task)
         * to 3.
         *
         * ```js
         * doSomeAjax: task(function * (url) {
         *   return fetch(url);
         * }).maxConcurrency(3),
         *
         * elsewhere() {
         *   this.doSomeAjax.perform("http://www.example.com/json");
         * },
         * ```
         *
         * @method maxConcurrency
         * @memberof TaskProperty
         * @param {Number} n The maximum number of concurrently running tasks
         * @instance
         */
        maxConcurrency(n: number): any;
        /**
         * Adds this task to a TaskGroup so that concurrency constraints
         * can be shared between multiple tasks.
         *
         * [See the Task Group docs for more information](/docs/task-groups)
         *
         * @method group
         * @memberof TaskProperty
         * @param {String} groupPath A path to the TaskGroup property
         * @instance
         */
        group(taskGroupPath: any): any;
        /**
         * Activates lifecycle events, allowing Evented host objects to react to task state
         * changes.
         *
         * ```js
         *
         * export default Component.extend({
         *   uploadTask: task(function* (file) {
         *     // ... file upload stuff
         *   }).evented(),
         *
         *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
         *     this.analytics.track("User Photo: upload started");
         *   }),
         * });
         * ```
         *
         * @method evented
         * @memberof TaskProperty
         * @instance
         */
        evented(): any;
        /**
         * Logs lifecycle events to aid in debugging unexpected Task behavior.
         * Presently only logs cancelation events and the reason for the cancelation,
         * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
         *
         * @method debug
         * @memberof TaskProperty
         * @instance
         */
        debug(): any;
        /**
         * Configures the task to call the passed in callback for derived state updates,
         * overriding the default derived state tracking. You may call with `null` to
         * completely opt-out of derived state tracking.
         *
         * @method onState
         * @memberof TaskProperty
         * @param {function?} callback Callback to be called. Receives an object argument with the new state.
         * @instance
         */
        onState(callback: Function | null): any;
    };
    /**
     * Sets the maximum number of task instances that are allowed
     * to run at the same time. By default, with no task modifiers
     * applied, this number is Infinity (there is no limit
     * to the number of tasks that can run at the same time).
     * {@linkcode TaskProperty#restartable .restartable},
     * {@linkcode TaskProperty#enqueue .enqueue}, and
     * {@linkcode TaskProperty#drop .drop} set the default
     * maxConcurrency to 1, but you can override this value
     * to set the maximum number of concurrently running tasks
     * to a number greater than 1.
     *
     * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
     *
     * The example below uses a task with `maxConcurrency(3)` to limit
     * the number of concurrent AJAX requests (for anyone using this task)
     * to 3.
     *
     * ```js
     * doSomeAjax: task(function * (url) {
     *   return fetch(url);
     * }).maxConcurrency(3),
     *
     * elsewhere() {
     *   this.doSomeAjax.perform("http://www.example.com/json");
     * },
     * ```
     *
     * @method maxConcurrency
     * @memberof TaskProperty
     * @param {Number} n The maximum number of concurrently running tasks
     * @instance
     */
    function maxConcurrency(n: number): {
        /**
         * Configures the task to cancel old currently task instances
         * to make room for a new one to perform. Sets default
         * maxConcurrency to 1.
         *
         * [See the Live Example](/docs/examples/route-tasks/1)
         *
         * @method restartable
         * @memberof TaskProperty
         * @instance
         */
        restartable(): any;
        /**
         * Configures the task to run task instances one-at-a-time in
         * the order they were `.perform()`ed. Sets default
         * maxConcurrency to 1.
         *
         * @method enqueue
         * @memberof TaskProperty
         * @instance
         */
        enqueue(): any;
        /**
         * Configures the task to immediately cancel (i.e. drop) any
         * task instances performed when the task is already running
         * at maxConcurrency. Sets default maxConcurrency to 1.
         *
         * @method drop
         * @memberof TaskProperty
         * @instance
         */
        drop(): any;
        /**
         * Configures the task to drop all but the most recently
         * performed {@linkcode TaskInstance }.
         *
         * @method keepLatest
         * @memberof TaskProperty
         * @instance
         */
        keepLatest(): any;
        maxConcurrency(n: number): any;
        /**
         * Adds this task to a TaskGroup so that concurrency constraints
         * can be shared between multiple tasks.
         *
         * [See the Task Group docs for more information](/docs/task-groups)
         *
         * @method group
         * @memberof TaskProperty
         * @param {String} groupPath A path to the TaskGroup property
         * @instance
         */
        group(taskGroupPath: any): any;
        /**
         * Activates lifecycle events, allowing Evented host objects to react to task state
         * changes.
         *
         * ```js
         *
         * export default Component.extend({
         *   uploadTask: task(function* (file) {
         *     // ... file upload stuff
         *   }).evented(),
         *
         *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
         *     this.analytics.track("User Photo: upload started");
         *   }),
         * });
         * ```
         *
         * @method evented
         * @memberof TaskProperty
         * @instance
         */
        evented(): any;
        /**
         * Logs lifecycle events to aid in debugging unexpected Task behavior.
         * Presently only logs cancelation events and the reason for the cancelation,
         * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
         *
         * @method debug
         * @memberof TaskProperty
         * @instance
         */
        debug(): any;
        /**
         * Configures the task to call the passed in callback for derived state updates,
         * overriding the default derived state tracking. You may call with `null` to
         * completely opt-out of derived state tracking.
         *
         * @method onState
         * @memberof TaskProperty
         * @param {function?} callback Callback to be called. Receives an object argument with the new state.
         * @instance
         */
        onState(callback: Function | null): any;
    };
    /**
     * Adds this task to a TaskGroup so that concurrency constraints
     * can be shared between multiple tasks.
     *
     * [See the Task Group docs for more information](/docs/task-groups)
     *
     * @method group
     * @memberof TaskProperty
     * @param {String} groupPath A path to the TaskGroup property
     * @instance
     */
    function group(taskGroupPath: any): {
        /**
         * Configures the task to cancel old currently task instances
         * to make room for a new one to perform. Sets default
         * maxConcurrency to 1.
         *
         * [See the Live Example](/docs/examples/route-tasks/1)
         *
         * @method restartable
         * @memberof TaskProperty
         * @instance
         */
        restartable(): any;
        /**
         * Configures the task to run task instances one-at-a-time in
         * the order they were `.perform()`ed. Sets default
         * maxConcurrency to 1.
         *
         * @method enqueue
         * @memberof TaskProperty
         * @instance
         */
        enqueue(): any;
        /**
         * Configures the task to immediately cancel (i.e. drop) any
         * task instances performed when the task is already running
         * at maxConcurrency. Sets default maxConcurrency to 1.
         *
         * @method drop
         * @memberof TaskProperty
         * @instance
         */
        drop(): any;
        /**
         * Configures the task to drop all but the most recently
         * performed {@linkcode TaskInstance }.
         *
         * @method keepLatest
         * @memberof TaskProperty
         * @instance
         */
        keepLatest(): any;
        /**
         * Sets the maximum number of task instances that are allowed
         * to run at the same time. By default, with no task modifiers
         * applied, this number is Infinity (there is no limit
         * to the number of tasks that can run at the same time).
         * {@linkcode TaskProperty#restartable .restartable},
         * {@linkcode TaskProperty#enqueue .enqueue}, and
         * {@linkcode TaskProperty#drop .drop} set the default
         * maxConcurrency to 1, but you can override this value
         * to set the maximum number of concurrently running tasks
         * to a number greater than 1.
         *
         * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
         *
         * The example below uses a task with `maxConcurrency(3)` to limit
         * the number of concurrent AJAX requests (for anyone using this task)
         * to 3.
         *
         * ```js
         * doSomeAjax: task(function * (url) {
         *   return fetch(url);
         * }).maxConcurrency(3),
         *
         * elsewhere() {
         *   this.doSomeAjax.perform("http://www.example.com/json");
         * },
         * ```
         *
         * @method maxConcurrency
         * @memberof TaskProperty
         * @param {Number} n The maximum number of concurrently running tasks
         * @instance
         */
        maxConcurrency(n: number): any;
        group(taskGroupPath: any): any;
        /**
         * Activates lifecycle events, allowing Evented host objects to react to task state
         * changes.
         *
         * ```js
         *
         * export default Component.extend({
         *   uploadTask: task(function* (file) {
         *     // ... file upload stuff
         *   }).evented(),
         *
         *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
         *     this.analytics.track("User Photo: upload started");
         *   }),
         * });
         * ```
         *
         * @method evented
         * @memberof TaskProperty
         * @instance
         */
        evented(): any;
        /**
         * Logs lifecycle events to aid in debugging unexpected Task behavior.
         * Presently only logs cancelation events and the reason for the cancelation,
         * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
         *
         * @method debug
         * @memberof TaskProperty
         * @instance
         */
        debug(): any;
        /**
         * Configures the task to call the passed in callback for derived state updates,
         * overriding the default derived state tracking. You may call with `null` to
         * completely opt-out of derived state tracking.
         *
         * @method onState
         * @memberof TaskProperty
         * @param {function?} callback Callback to be called. Receives an object argument with the new state.
         * @instance
         */
        onState(callback: Function | null): any;
    };
    /**
     * Activates lifecycle events, allowing Evented host objects to react to task state
     * changes.
     *
     * ```js
     *
     * export default Component.extend({
     *   uploadTask: task(function* (file) {
     *     // ... file upload stuff
     *   }).evented(),
     *
     *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
     *     this.analytics.track("User Photo: upload started");
     *   }),
     * });
     * ```
     *
     * @method evented
     * @memberof TaskProperty
     * @instance
     */
    function evented(): {
        /**
         * Configures the task to cancel old currently task instances
         * to make room for a new one to perform. Sets default
         * maxConcurrency to 1.
         *
         * [See the Live Example](/docs/examples/route-tasks/1)
         *
         * @method restartable
         * @memberof TaskProperty
         * @instance
         */
        restartable(): any;
        /**
         * Configures the task to run task instances one-at-a-time in
         * the order they were `.perform()`ed. Sets default
         * maxConcurrency to 1.
         *
         * @method enqueue
         * @memberof TaskProperty
         * @instance
         */
        enqueue(): any;
        /**
         * Configures the task to immediately cancel (i.e. drop) any
         * task instances performed when the task is already running
         * at maxConcurrency. Sets default maxConcurrency to 1.
         *
         * @method drop
         * @memberof TaskProperty
         * @instance
         */
        drop(): any;
        /**
         * Configures the task to drop all but the most recently
         * performed {@linkcode TaskInstance }.
         *
         * @method keepLatest
         * @memberof TaskProperty
         * @instance
         */
        keepLatest(): any;
        /**
         * Sets the maximum number of task instances that are allowed
         * to run at the same time. By default, with no task modifiers
         * applied, this number is Infinity (there is no limit
         * to the number of tasks that can run at the same time).
         * {@linkcode TaskProperty#restartable .restartable},
         * {@linkcode TaskProperty#enqueue .enqueue}, and
         * {@linkcode TaskProperty#drop .drop} set the default
         * maxConcurrency to 1, but you can override this value
         * to set the maximum number of concurrently running tasks
         * to a number greater than 1.
         *
         * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
         *
         * The example below uses a task with `maxConcurrency(3)` to limit
         * the number of concurrent AJAX requests (for anyone using this task)
         * to 3.
         *
         * ```js
         * doSomeAjax: task(function * (url) {
         *   return fetch(url);
         * }).maxConcurrency(3),
         *
         * elsewhere() {
         *   this.doSomeAjax.perform("http://www.example.com/json");
         * },
         * ```
         *
         * @method maxConcurrency
         * @memberof TaskProperty
         * @param {Number} n The maximum number of concurrently running tasks
         * @instance
         */
        maxConcurrency(n: number): any;
        /**
         * Adds this task to a TaskGroup so that concurrency constraints
         * can be shared between multiple tasks.
         *
         * [See the Task Group docs for more information](/docs/task-groups)
         *
         * @method group
         * @memberof TaskProperty
         * @param {String} groupPath A path to the TaskGroup property
         * @instance
         */
        group(taskGroupPath: any): any;
        evented(): any;
        /**
         * Logs lifecycle events to aid in debugging unexpected Task behavior.
         * Presently only logs cancelation events and the reason for the cancelation,
         * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
         *
         * @method debug
         * @memberof TaskProperty
         * @instance
         */
        debug(): any;
        /**
         * Configures the task to call the passed in callback for derived state updates,
         * overriding the default derived state tracking. You may call with `null` to
         * completely opt-out of derived state tracking.
         *
         * @method onState
         * @memberof TaskProperty
         * @param {function?} callback Callback to be called. Receives an object argument with the new state.
         * @instance
         */
        onState(callback: Function | null): any;
    };
    /**
     * Logs lifecycle events to aid in debugging unexpected Task behavior.
     * Presently only logs cancelation events and the reason for the cancelation,
     * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
     *
     * @method debug
     * @memberof TaskProperty
     * @instance
     */
    function debug(): {
        /**
         * Configures the task to cancel old currently task instances
         * to make room for a new one to perform. Sets default
         * maxConcurrency to 1.
         *
         * [See the Live Example](/docs/examples/route-tasks/1)
         *
         * @method restartable
         * @memberof TaskProperty
         * @instance
         */
        restartable(): any;
        /**
         * Configures the task to run task instances one-at-a-time in
         * the order they were `.perform()`ed. Sets default
         * maxConcurrency to 1.
         *
         * @method enqueue
         * @memberof TaskProperty
         * @instance
         */
        enqueue(): any;
        /**
         * Configures the task to immediately cancel (i.e. drop) any
         * task instances performed when the task is already running
         * at maxConcurrency. Sets default maxConcurrency to 1.
         *
         * @method drop
         * @memberof TaskProperty
         * @instance
         */
        drop(): any;
        /**
         * Configures the task to drop all but the most recently
         * performed {@linkcode TaskInstance }.
         *
         * @method keepLatest
         * @memberof TaskProperty
         * @instance
         */
        keepLatest(): any;
        /**
         * Sets the maximum number of task instances that are allowed
         * to run at the same time. By default, with no task modifiers
         * applied, this number is Infinity (there is no limit
         * to the number of tasks that can run at the same time).
         * {@linkcode TaskProperty#restartable .restartable},
         * {@linkcode TaskProperty#enqueue .enqueue}, and
         * {@linkcode TaskProperty#drop .drop} set the default
         * maxConcurrency to 1, but you can override this value
         * to set the maximum number of concurrently running tasks
         * to a number greater than 1.
         *
         * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
         *
         * The example below uses a task with `maxConcurrency(3)` to limit
         * the number of concurrent AJAX requests (for anyone using this task)
         * to 3.
         *
         * ```js
         * doSomeAjax: task(function * (url) {
         *   return fetch(url);
         * }).maxConcurrency(3),
         *
         * elsewhere() {
         *   this.doSomeAjax.perform("http://www.example.com/json");
         * },
         * ```
         *
         * @method maxConcurrency
         * @memberof TaskProperty
         * @param {Number} n The maximum number of concurrently running tasks
         * @instance
         */
        maxConcurrency(n: number): any;
        /**
         * Adds this task to a TaskGroup so that concurrency constraints
         * can be shared between multiple tasks.
         *
         * [See the Task Group docs for more information](/docs/task-groups)
         *
         * @method group
         * @memberof TaskProperty
         * @param {String} groupPath A path to the TaskGroup property
         * @instance
         */
        group(taskGroupPath: any): any;
        /**
         * Activates lifecycle events, allowing Evented host objects to react to task state
         * changes.
         *
         * ```js
         *
         * export default Component.extend({
         *   uploadTask: task(function* (file) {
         *     // ... file upload stuff
         *   }).evented(),
         *
         *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
         *     this.analytics.track("User Photo: upload started");
         *   }),
         * });
         * ```
         *
         * @method evented
         * @memberof TaskProperty
         * @instance
         */
        evented(): any;
        debug(): any;
        /**
         * Configures the task to call the passed in callback for derived state updates,
         * overriding the default derived state tracking. You may call with `null` to
         * completely opt-out of derived state tracking.
         *
         * @method onState
         * @memberof TaskProperty
         * @param {function?} callback Callback to be called. Receives an object argument with the new state.
         * @instance
         */
        onState(callback: Function | null): any;
    };
    /**
     * Configures the task to call the passed in callback for derived state updates,
     * overriding the default derived state tracking. You may call with `null` to
     * completely opt-out of derived state tracking.
     *
     * @method onState
     * @memberof TaskProperty
     * @param {function?} callback Callback to be called. Receives an object argument with the new state.
     * @instance
     */
    function onState(callback: Function | null): {
        /**
         * Configures the task to cancel old currently task instances
         * to make room for a new one to perform. Sets default
         * maxConcurrency to 1.
         *
         * [See the Live Example](/docs/examples/route-tasks/1)
         *
         * @method restartable
         * @memberof TaskProperty
         * @instance
         */
        restartable(): any;
        /**
         * Configures the task to run task instances one-at-a-time in
         * the order they were `.perform()`ed. Sets default
         * maxConcurrency to 1.
         *
         * @method enqueue
         * @memberof TaskProperty
         * @instance
         */
        enqueue(): any;
        /**
         * Configures the task to immediately cancel (i.e. drop) any
         * task instances performed when the task is already running
         * at maxConcurrency. Sets default maxConcurrency to 1.
         *
         * @method drop
         * @memberof TaskProperty
         * @instance
         */
        drop(): any;
        /**
         * Configures the task to drop all but the most recently
         * performed {@linkcode TaskInstance }.
         *
         * @method keepLatest
         * @memberof TaskProperty
         * @instance
         */
        keepLatest(): any;
        /**
         * Sets the maximum number of task instances that are allowed
         * to run at the same time. By default, with no task modifiers
         * applied, this number is Infinity (there is no limit
         * to the number of tasks that can run at the same time).
         * {@linkcode TaskProperty#restartable .restartable},
         * {@linkcode TaskProperty#enqueue .enqueue}, and
         * {@linkcode TaskProperty#drop .drop} set the default
         * maxConcurrency to 1, but you can override this value
         * to set the maximum number of concurrently running tasks
         * to a number greater than 1.
         *
         * [See the AJAX Throttling example](/docs/examples/ajax-throttling)
         *
         * The example below uses a task with `maxConcurrency(3)` to limit
         * the number of concurrent AJAX requests (for anyone using this task)
         * to 3.
         *
         * ```js
         * doSomeAjax: task(function * (url) {
         *   return fetch(url);
         * }).maxConcurrency(3),
         *
         * elsewhere() {
         *   this.doSomeAjax.perform("http://www.example.com/json");
         * },
         * ```
         *
         * @method maxConcurrency
         * @memberof TaskProperty
         * @param {Number} n The maximum number of concurrently running tasks
         * @instance
         */
        maxConcurrency(n: number): any;
        /**
         * Adds this task to a TaskGroup so that concurrency constraints
         * can be shared between multiple tasks.
         *
         * [See the Task Group docs for more information](/docs/task-groups)
         *
         * @method group
         * @memberof TaskProperty
         * @param {String} groupPath A path to the TaskGroup property
         * @instance
         */
        group(taskGroupPath: any): any;
        /**
         * Activates lifecycle events, allowing Evented host objects to react to task state
         * changes.
         *
         * ```js
         *
         * export default Component.extend({
         *   uploadTask: task(function* (file) {
         *     // ... file upload stuff
         *   }).evented(),
         *
         *   uploadedStarted: on('uploadTask:started', function(taskInstance) {
         *     this.analytics.track("User Photo: upload started");
         *   }),
         * });
         * ```
         *
         * @method evented
         * @memberof TaskProperty
         * @instance
         */
        evented(): any;
        /**
         * Logs lifecycle events to aid in debugging unexpected Task behavior.
         * Presently only logs cancelation events and the reason for the cancelation,
         * e.g. "TaskInstance 'doStuff' was canceled because the object it lives on was destroyed or unrendered"
         *
         * @method debug
         * @memberof TaskProperty
         * @instance
         */
        debug(): any;
        onState(callback: Function | null): any;
    };
}
/**
  A {@link TaskProperty} is the Computed Property-like object returned
  from the {@linkcode task} function. You can call Task Modifier methods
  on this object to configure the behavior of the {@link Task}.

  See [Managing Task Concurrency](/docs/task-concurrency) for an
  overview of all the different task modifiers you can use and how
  they impact automatic cancelation / enqueueing of task instances.

  {@link TaskProperty} is only used for supporting "classic" Ember objects.
  When using Native JavaScript or TypeScript classes, you will use [task decorators](/docs/task-decorators)
  on methods instead.

  @class TaskProperty
*/
export class TaskProperty {
}
export class TaskGroupProperty {
}
//# sourceMappingURL=task-properties.d.ts.map