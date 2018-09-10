import { TestWindow } from '@stencil/core/testing';
import { MyComponent } from './img-brightness';

describe('img-brightness', () => {
    it('should build', () => {
        expect(new MyComponent()).toBeTruthy();
    });

    describe('rendering', () => {
        let element: HTMLMyComponentElement;
        let testWindow: TestWindow;
        beforeEach(async () => {
            testWindow = new TestWindow();
            element = await testWindow.load({
                components: [MyComponent],
                html: '<img-brightness></img-brightness>'
            });
        });
    });
});
