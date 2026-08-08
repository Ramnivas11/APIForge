const { URL } = require("url");

const blockedHosts = [
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "::1",
    "169.254.169.254"
];

function isPrivateIPv4(hostname) {
    const parts = hostname.split(".").map(Number);

    if (parts.length !== 4 || parts.some(isNaN)) {
        return false;
    }

    const [a, b] = parts;

    return (
        a === 10 ||
        (a === 172 && b >= 16 && b <= 31) ||
        (a === 192 && b === 168)
    );
}

const allowedProtocols = ["http:", "https:"];

function validateTargetUrl(url) {
    const parsed = new URL(url);
    const hostname = parsed.hostname;
    const protocol = parsed.protocol;

    if (!allowedProtocols.includes(protocol)) {
        throw new Error(`Invalid protocol: '${protocol}'. Only HTTP and HTTPS are allowed.`);
    }

    if (blockedHosts.includes(hostname)) {
        throw new Error("Access to this host is not allowed.");
    }

    if (isPrivateIPv4(hostname)) {
        throw new Error("Private network addresses are not allowed.");
    }

    return true;
}

module.exports = {
    validateTargetUrl,
};