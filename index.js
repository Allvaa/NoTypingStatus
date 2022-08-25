const { Plugin } = require("powercord/entities");
const { typing } = require("powercord/webpack");
const { inject, uninject } = require("powercord/injector");

module.exports = class NoTypingStatus extends Plugin {
    startPlugin() {
        inject("nts", typing, "startTyping", () => false, true);
    }
    pluginWillUnload() {
        uninject("nts");
    }
}