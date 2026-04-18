install:
	npm install
	cd kaburai-backend && npm install
	cd kaburai-frontend && npm install


install-with-bun:
	bun install
	cd kaburai-backend && bun install
	cd kaburai-frontend && bun install

backend-serve:
	cd kaburai-backend && npm run dev

frontend-serve:
	cd kaburai-frontend && npm run dev

serve:
	npm run dev

clean:
	rm -rf node_modules
	rm -rf kaburai-backend/node_modules
	rm -rf kaburai-frontend/node_modules

reset: clean install