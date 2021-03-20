
var env = require('./env');

// Set dependencies
if (!env.isFrontEnd) {
    var jsdom = require('jsdom');
    jsdom.defaultDocumentFeatures = {
        FetchExternalResources: false,
        ProcessExternalResources: false
    };

    module.exports = {
        jsdom: jsdom.JSDOM,
        Node: (new jsdom.JSDOM("<br/>")).window.Node
    }
} else {
    module.exports = {
        jsdom: null,
        Node: Node
    }
}
