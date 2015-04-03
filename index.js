/// <reference path="typings/tsd.d.ts" />
var nodeDependency = require('node-dependency');
var content = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
nodeDependency.utils.lodash.filter(content, function (item) { return (item.id % 2) === 0; });
