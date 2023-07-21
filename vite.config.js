import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';


// main config export
export default ({ mode }) => {

	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	const plugins = [vue()]

	return defineConfig({
		server: {
			host: '0.0.0.0' /* allow testing on local IP for iPad/phone/net */,
		},
		plugins: plugins,
		resolve: {
			alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		root: './src/client',
		build: {
			outDir: path.join(__dirname, 'dist/production'),
		},
		// eslint-disable-next-line no-undef
		base: process.env.VITE_PATH,
	});
}
