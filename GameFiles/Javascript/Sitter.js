window.Sitter = function (name, dirty, cushionDamg, buttPow) {
    this.name = name || '';
    this.dirty = dirty || '';
    this.cushionDamg = cushionDamg || '';
    this.buttPow = buttPow || '';
};

Sitter.prototype._init = function (obj) {
    Object.keys(obj).forEach(function (pn) {
        this[pn] = clone(obj[pn]);
    }, this);

    return this;
};

Sitter.prototype.clone = function () {
    return (new Sitter())._init(this);
};

Sitter.prototype.toJSON = function () {
    var owndata = {};
    Object.keys(this).forEach(function (pn) {
        owndata[pn] = clone(this[pn]);
    }, this);
    return JSON.reviveWrapper('(new Sitter())._init($ReviveData$', owndata);
};