'use strict';
var bunyan = require('bunyan');

export default class logger {
    constructor() {
        return bunyan.createLogger(
            {
                name: "nodejs-seed",
                streams: [
                    {
                        stream: process.stdout
                    }
                ],
                serializers: {
                    req: bunyan.stdSerializers.req
                },
            });
    }
}