import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDomainComponent } from './blog-domain.component';

describe('BlogDomainComponent', () => {
	let component: BlogDomainComponent;
	let fixture: ComponentFixture<BlogDomainComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BlogDomainComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BlogDomainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterAll((done) => {
		done();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
