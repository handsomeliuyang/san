/**
 * @file  获取节点 stump 的 comment
 * @author errorrik(errorrik@gmail.com)
 */

var noSetHTML = require('../browser/no-set-html');
var warn = require('../util/warn');

// #[begin] error
/**
 * 获取节点 stump 的 comment
 *
 * @param {HTMLElement} el HTML元素
 */
function warnSetHTML(el) {
    // dont warn if not in browser runtime
    if (!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)) {
        return;
    }

    // some html elements cannot set innerHTML in old ie
    // see: https://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx
    if (noSetHTML(el)) {
        warn('set html for element "' + el.tagName + '" may cause an error in old IE');
    }
}
// #[end]

exports = module.exports = warnSetHTML;
