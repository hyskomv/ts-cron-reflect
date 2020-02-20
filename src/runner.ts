import 'reflect-metadata';
import Application from "./Application";

process.on('uncaughtException', (err) => {
	console.error(`${new Date().toUTCString()} uncaughtException: ${err}`);
	process.exit(1);
});

const application = new Application();

(async function runner() {
	await application.init();
})();
