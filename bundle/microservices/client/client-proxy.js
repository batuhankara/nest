"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const invalid_message_exception_1 = require("../exceptions/invalid-message.exception");
const throw_1 = require("rxjs/observable/throw");
class ClientProxy {
    send(pattern, data) {
        if (shared_utils_1.isNil(pattern) || shared_utils_1.isNil(data)) {
            return throw_1._throw(new invalid_message_exception_1.InvalidMessageException());
        }
        return new Observable_1.Observable((observer) => {
            this.publish({ pattern, data }, this.createObserver(observer));
        });
    }
    createObserver(observer) {
        return ({ err, response, isDisposed }) => {
            if (err) {
                return observer.error(err);
            }
            else if (isDisposed) {
                return observer.complete();
            }
            observer.next(response);
        };
    }
    assignPacketId(packet) {
        const id = Math.random()
            .toString(36)
            .substr(2, 5) + Date.now();
        return Object.assign(packet, { id });
    }
}
exports.ClientProxy = ClientProxy;
