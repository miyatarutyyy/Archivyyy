// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://miyatarutyyy.github.io',
	base: '/Archivyyy/',
	integrations: [mdx(), sitemap()],
	vite: {
	  server: {
	    watch: {
	      ignored: ['**/.#*', '**/*~']
	    }	      	       
	  }
	}
});
