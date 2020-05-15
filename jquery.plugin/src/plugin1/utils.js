var Observable = function () {
    this.listeners = {};
};

Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
        this.listeners[event].push(callback);
    } else {
        this.listeners[event] = [callback];
    }
};

Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
        params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
        params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
        this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
        this.invoke(this.listeners['*'], arguments);
    }
    };

    Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
        listeners[i].apply(this, params);
    }
};

module.exports = {
    Observable:Observable
}