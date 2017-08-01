"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGINATION_TEMPLATE = "\n<div class=\"pagination-box\">\n    <div class=\"pagination-range\">\n        {{dataTable.translations.paginationRange}}:\n        <span [textContent]=\"dataTable.offset + 1\"></span>\n        -\n        <span [textContent]=\"[dataTable.offset + dataTable.limit , dataTable.itemCount] | min\"></span>\n        /\n        <span [textContent]=\"dataTable.itemCount\"></span>\n    </div>\n    <div class=\"pagination-controllers\">\n        <div class=\"pagination-limit\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">{{dataTable.translations.paginationLimit}}:</span>\n                <input #limitInput type=\"number\" class=\"form-control\" min=\"1\" step=\"1\"\n                       [ngModel]=\"limit\" (blur)=\"limit = limitInput.value\"\n                       (keyup.enter)=\"limit = limitInput.value\" (keyup.esc)=\"limitInput.value = limit\"/>\n            </div>\n        </div>\n        <div class=\" pagination-pages\">\n            <button [disabled]=\"dataTable.offset <= 0\" (click)=\"pageFirst()\" class=\"btn btn-default pagination-firstpage\">&laquo;</button>\n            <button [disabled]=\"dataTable.offset <= 0\" (click)=\"pageBack()\" class=\"btn btn-default pagination-prevpage\">&lsaquo;</button>\n            <div class=\"pagination-page\">\n                <div class=\"input-group\">\n                    <input #pageInput type=\"number\" class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\"\n                           [ngModel]=\"page\" (blur)=\"page = pageInput.value\"\n                           (keyup.enter)=\"page = pageInput.value\" (keyup.esc)=\"pageInput.value = page\"/>\n                    <div class=\"input-group-addon\">\n                        <span>/</span>\n                        <span [textContent]=\"dataTable.lastPage\"></span>\n                    </div>\n                </div>\n            </div>\n            <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\" (click)=\"pageForward()\" class=\"btn btn-default pagination-nextpage\">&rsaquo;</button>\n            <button [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\" (click)=\"pageLast()\" class=\"btn btn-default pagination-lastpage\">&raquo;</button>\n        </div>\n    </div>\n</div>\n";
//# sourceMappingURL=/components/pagination.template.js.map