import { createRequire } from 'module';

export default {
	async fetch(request, env, ctx) {
		const esm = (await import('./hello.js')).hello();
		console.log(esm);

		const require = createRequire('/');
		const cjs = require('./hello.cjs').hello();
		console.log(cjs);

		return new Response('done');
	},
};
