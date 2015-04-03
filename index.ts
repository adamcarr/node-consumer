/// <reference path="typings/tsd.d.ts" />

import nodeDependency = require('node-dependency');

var content = [{id: 1},{id: 2},{id: 3},{id: 4}];

nodeDependency.utils.lodash.filter(content, (item) => (item.id%2)===0);