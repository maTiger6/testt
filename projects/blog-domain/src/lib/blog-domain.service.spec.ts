import { TestBed } from '@angular/core/testing';

import { BlogDomainService } from './blog-domain.service';

describe('BlogDomainService', () => {
	let service: BlogDomainService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(BlogDomainService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
