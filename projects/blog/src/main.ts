import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/* eslint "no-console": "off" */
platformBrowserDynamic()
	.bootstrapModule(AppModule, {
		ngZoneEventCoalescing: true,
	})
	.catch((err) => console.error(err));
