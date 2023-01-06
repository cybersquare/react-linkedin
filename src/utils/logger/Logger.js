import { LogglyTracker } from "loggly-jslogger";

const logger = new LogglyTracker();
logger.push(
    {'logglyKey': 'c9ee1ef3-85b4-4273-823c-0f6513aff60f',
      'sendConsoleErrors': true,
      'tag': 'javascript-logs'
    }
)

export default logger;