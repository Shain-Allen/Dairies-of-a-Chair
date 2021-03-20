window.DiarryEntry = function (playerText, gatheredItems, roomsVisted) {
    this.playerText = playerText | "text";
    this.gatheredItems = gatheredItems;
    this.roomsVisted = [];
};

DiarryEntry.prototype._init = function (obj) {
    Object.keys(obj).forEach(function (pn) {
        this[pn] = clone(obj[pn]);
    }, this);

    return this;
};

DiarryEntry.prototype.clone = function () {
    return (new DiarryEntry())._init(this);
};

DiarryEntry.prototype.toJSON = function () {
    var owndata = {};
    Object.keys(this).forEach(function (pn) {
        owndata[pn] = clone(this[pn]);
    }, this);
    return JSON.reviveWrapper('(new DiarryEntry())._init($ReviveData$', owndata);
};