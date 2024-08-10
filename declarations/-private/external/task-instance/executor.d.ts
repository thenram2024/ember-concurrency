export function getRunningInstance(): any;
export const PERFORM_TYPE_DEFAULT: "PERFORM_TYPE_DEFAULT";
export const PERFORM_TYPE_UNLINKED: "PERFORM_TYPE_UNLINKED";
export const PERFORM_TYPE_LINKED: "PERFORM_TYPE_LINKED";
export class TaskInstanceExecutor {
    constructor({ generatorFactory, env, debug }: {
        generatorFactory: any;
        env: any;
        debug: any;
    });
    generatorState: GeneratorState;
    state: {
        completionState: number;
        value: null;
        error: null;
        isSuccessful: boolean;
        isError: boolean;
        isCanceled: boolean;
        hasStarted: boolean;
        isFinished: boolean;
    };
    index: number;
    disposers: any[];
    finalizeCallbacks: any[];
    env: any;
    debug: any;
    cancelRequest: any;
    start(): void;
    cancel(cancelRequest: any): any;
    setState(state: any): void;
    proceedChecked(index: any, yieldResumeType: any, value: any): void;
    proceedWithCancelAsync(): void;
    proceedAsync(yieldResumeType: any, value: any): void;
    proceedSync(yieldResumeType: any, value: any): void;
    /**
     * This method is called when a previously yielded value from
     * the generator has been resolved, and now it's time to pass
     * it back into the generator. There are 3 ways to "resume" a
     * generator:
     *
     * - call `.next(value)` on it, which is used to pass in a resolved
     *   value (the fulfilled value of a promise), e.g. if a task generator fn
     *   does `yield Promise.resolve(5)`, then we take that promise yielded
     *   by the generator, detect that it's a promise, resolve it, and then
     *   pass its fulfilled value `5` back into the generator function so
     *   that it can continue executing.
     * - call `.throw(error)` on it, which throw an exception from where the
     *   the generator previously yielded. We do this when the previously
     *   yielded value resolves to an error value (e.g. a rejected promise
     *   or a TaskInstance that finished with an error). Note that when you
     *   resume a generator with a `.throw()`, it can still recover from that
     *   thrown error and continue executing normally so long as the `yield`
     *   was inside a `try/catch` statement.
     * - call `.return(value)` on it, causes the generator function to return
     *   from where it previously `yield`ed. We use `.return()` when cancelling
     *   a TaskInstance; by `.return`ing, rather than `.throw`ing, it allows
     *   the generator function to skip `catch(e) {}` blocks, which is usually
     *   reserved for actual errors/exceptions; if we `.throw`'d cancellations,
     *   it would require all tasks that used try/catch to conditionally ignore
     *   cancellations, which is annoying. So we `.return()` from generator functions
     *   in the case of errors as a matter of convenience.
     *
     * @private
     */
    private handleResolvedContinueValue;
    /**
     * This method is called when the generator function is all
     * out of values, and the last value returned from the function
     * (possible a thenable/yieldable/promise/etc) has been resolved.
     *
     * Possible cases:
     * - `return "simple value";` // resolved value is "simple value"
     * - `return undefined;` // (or omitted return) resolved value is undefined
     * - `return someTask.perform()` // resolved value is the value returned/resolved from someTask
     *
     * @private
     */
    private handleResolvedReturnedValue;
    handleYieldedUnknownThenable(thenable: any): void;
    /**
     * The TaskInstance internally tracks an index/sequence number
     * (the `index` property) which gets incremented every time the
     * task generator function iterator takes a step. When a task
     * function is paused at a `yield`, there are two events that
     * cause the TaskInstance to take a step: 1) the yielded value
     * "resolves", thus resuming the TaskInstance's execution, or
     * 2) the TaskInstance is canceled. We need some mechanism to prevent
     * stale yielded value resolutions from resuming the TaskFunction
     * after the TaskInstance has already moved on (either because
     * the TaskInstance has since been canceled or because an
     * implementation of the Yieldable API tried to resume the
     * TaskInstance more than once). The `index` serves as
     * that simple mechanism: anyone resuming a TaskInstance
     * needs to pass in the `index` they were provided that acts
     * as a ticket to resume the TaskInstance that expires once
     * the TaskInstance has moved on.
     *
     * @private
     */
    private advanceIndex;
    handleYieldedValue(stepResult: any): void;
    proceedWithSimpleValue(yieldedValue: any): void;
    addDisposer(maybeDisposer: any): void;
    /**
     * Runs any disposers attached to the task's most recent `yield`.
     * For instance, when a task yields a TaskInstance, it registers that
     * child TaskInstance's disposer, so that if the parent task is canceled,
     * dispose() will run that disposer and cancel the child TaskInstance.
     *
     * @private
     */
    private dispose;
    /**
     * Calls .next()/.throw()/.return() on the task's generator function iterator,
     * essentially taking a single step of execution on the task function.
     *
     * @private
     */
    private generatorStep;
    _expectsLinkedYield: boolean | undefined;
    maybeResolveDefer(): void;
    onFinalize(callback: any): void;
    runFinalizeCallbacks(): void;
    promise(): any;
    defer: any;
    asyncErrorsHandled: boolean | undefined;
    maybeThrowUnhandledTaskErrorLater(): void;
    requestCancel(request: any): boolean;
    finalize(value: any, completionState: any): void;
    finalizeWithCancel(): void;
    debugEnabled(): any;
    finalizeShared(state: any): void;
    dispatchFinalizeEvents(completionState: any): void;
    invokeYieldable(yieldedValue: any): void;
    /**
     * `onYielded` is called when this task instance has been
     * yielded in another task instance's execution. We take
     * this opportunity to conditionally link up the tasks
     * so that when the parent or child cancels, the other
     * is cancelled.
     *
     * Given the following case:
     *
     * ```js
     * parentTask: task(function * () {
     *   yield otherTask.perform();
     * })
     * ```
     *
     * Then the `parent` param is the task instance that is executing, `this`
     * is the `otherTask` task instance that was yielded.
     *
     * @private
     */
    private onYielded;
    getPerformType(): any;
    detectSelfCancelLoop(performType: any, parent: any): void;
}
import { GeneratorState } from '../generator-state';
//# sourceMappingURL=executor.d.ts.map