import { Component, Prop, Listen, State } from '@stencil/core';
import { BRIGHTNESS_4_SVG, BRIGHTNESS_7_SVG } from './img-brightness.icons';

const MIN_BRIGHTNESS = 0.1;
const MAX_BRIGHTNESS = 2;
const STEP_SIZE = 0.1;



@Component({
    tag: 'img-brightness',
    styleUrl: 'img-brightness.scss',
    shadow: true
})
export class MyComponent {

    @Prop() first: string;
    @Prop() last: string;
    @State() brightness: number;

    sliderInput: HTMLInputElement;

    componentWillLoad() {
        this.brightness = 1;
    }

    @Listen('body:keydown.down')
    decrement() {
        this.brightness = Math.max(this.brightness - STEP_SIZE, MIN_BRIGHTNESS);
    }

    @Listen('body:keydown.up')
    increment() {
        this.brightness = Math.min(this.brightness + STEP_SIZE, MAX_BRIGHTNESS);
    }

    updateBrightness() {
        this.brightness = Number(this.sliderInput.value);
    }

    render() {
        const style = {
            filter: `brightness(${this.brightness})`
        };

        return (
            <div class="container">
                <div
                    class="adjust-me"
                    style={{ ...style }}>
                    <slot />
                </div>
                <div class="controls-container">
                    <div innerHTML={BRIGHTNESS_4_SVG}></div>
                    <input
                        ref={(el: HTMLInputElement) => this.sliderInput = el}
                        type="range"
                        min={MIN_BRIGHTNESS}
                        max={MAX_BRIGHTNESS}
                        step={STEP_SIZE}
                        value={this.brightness}
                        onInput={() => this.updateBrightness()} />
                    <div innerHTML={BRIGHTNESS_7_SVG}></div>
                </div>
            </div>
        );
    }
}
