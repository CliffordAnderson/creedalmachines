Creedal Machines — static deployment package

Files:
- index.html: document structure and content
- styles.css: all presentation styles
- script.js: scripted demonstration logic and optional live model calls

Deploying on Cloudflare Pages:
1. Upload the contents of this folder, or upload creedal-machines-static.zip.
2. No build command is required.
3. The production file should be index.html at the deployment root.

Note: Stage V uses client-side calls to the selected model provider with a user-supplied API key/token. The key is kept only in browser memory by this static page.
