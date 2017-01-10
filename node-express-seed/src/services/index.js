import logger from '../utils/logger';
let log = new logger();
export function factorial(n) {
    log.info("find factorial for %s",n);
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}