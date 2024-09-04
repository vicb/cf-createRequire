import { createRequire } from 'node:module';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const esm = (await import('./hello.js')).hello();
		console.log(esm);

		const require = createRequire('file://');
		const cjs = require('hello.cjs').hello();
		console.log(cjs);

		return new Response('done');
	},
} satisfies ExportedHandler<Env>;
