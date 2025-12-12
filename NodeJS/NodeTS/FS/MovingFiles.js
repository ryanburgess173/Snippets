var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fs = require('fs').promises;
var path = require('path');
function moveFile() {
    return __awaiter(this, void 0, void 0, function () {
        var sourceFile, targetDir, targetFile, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sourceFile = 'source/file.txt';
                    targetDir = 'destination';
                    targetFile = path.join(targetDir, 'file.txt');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 10]);
                    return [4 /*yield*/, fs.access(sourceFile)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fs.mkdir(targetDir, { recursive: true })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fs.rename(sourceFile, targetFile)];
                case 4:
                    _a.sent();
                    console.log(sourceFile, targetFile);
                    return [3 /*break*/, 10];
                case 5:
                    err_1 = _a.sent();
                    if (!(err_1 instanceof Error && 'code' in err_1)) return [3 /*break*/, 9];
                    if (!(err_1.code === 'ENOENT')) return [3 /*break*/, 6];
                    console.log('Source file does not exist');
                    return [3 /*break*/, 9];
                case 6:
                    if (!(err_1.code === 'EXDEV')) return [3 /*break*/, 8];
                    console.log('Cross-device move detected, using copy+delete fallback');
                    return [4 /*yield*/, moveAcrossDevices(sourceFile, targetFile)];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    console.error('Error moving file: ', err_1);
                    _a.label = 9;
                case 9: return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
function moveAcrossDevices(source, target) {
    return __awaiter(this, void 0, void 0, function () {
        var err_2, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 8]);
                    return [4 /*yield*/, fs.copyFile(source, target)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fs.unlink(source)];
                case 2:
                    _a.sent();
                    console.log('File moved across devices successfully');
                    return [3 /*break*/, 8];
                case 3:
                    err_2 = _a.sent();
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, fs.unlink(target)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    return [3 /*break*/, 7];
                case 7: throw err_2;
                case 8: return [2 /*return*/];
            }
        });
    });
}
moveFile();
