import { Component, CreateBuilder, INotifyPropertyChanged, rippleEffect, NotifyPropertyChanges, Property } from '@syncfusion/ej2-base';
import { BaseEventArgs, EmitType, Event, EventHandler } from '@syncfusion/ej2-base';
import { addClass, createElement, detach, isRippleEnabled } from '@syncfusion/ej2-base';
import { getUniqueID } from '@syncfusion/ej2-base';
import { RadioButtonModel } from './radio-button-model';
import { RadioButtonHelper } from './radio-button-builder';
import { wrapperInitialize, EJ2Instance } from './../common/common';

export type RadioLabelPosition = 'after' | 'before';

const LABEL: string = 'e-label';
const RIPPLE: string = 'e-ripple-container';
const RTL: string = 'e-rtl';
const WRAPPER: string = 'e-radio-wrapper';

/**
 * RadioButton is a graphical user interface element that allows you to select one option from the choices.
 * It contains checked and unchecked states.
 * ```html
 * <input type="radio" id="radio"/>
 * <script>
 * var radioObj = new RadioButton({ label: "Default" });
 * radioObj.appendTo("#radio");
 * </script>
 * ```
 */
@NotifyPropertyChanges
export class RadioButton extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private isKeyPressed: boolean = false;

    /**
     * Event trigger when the RadioButton state has been changed by user interaction.
     * @event
     */
    @Event()
    public change: EmitType<ChangeArgs>;

    /**
     * Specifies a value that indicates whether the RadioButton is `checked` or not.
     * When set to `true`, RadioButton will be in `checked` state.
     * @default false
     */
    @Property(false)
    public checked: boolean;

    /**
     * Defines class/multiple classes separated by a space in the RadioButton element.
     * You can add custom styles to the RadioButton by using this property.
     * @default ''
     */
    @Property('')
    public cssClass: string;

    /**
     * Specifies a value that indicates whether the RadioButton is `disabled` or not.
     * When set to `true`, RadioButton will be in `disabled` state.
     * @default false
     */
    @Property(false)
    public disabled: boolean;

    /**
     * Defines the caption for the RadioButton, that describes the purpose of the RadioButton.
     * @default ''
     */
    @Property('')
    public label: string;

    /**
     * Positions label `before`/`after` to the RadioButton.
     * When set to `before`, the label is positioned to left of the RadioButton.
     * @default 'after'
     */
    @Property('after')
    public labelPosition: string;

    /**
     * Defines `name` attribute for the RadioButton.
     * It is used to reference form data (RadioButton value) after a form is submitted.
     * @default ''
     */
    @Property('')
    public name: string;

    /**
     * Defines `value` attribute for the RadioButton.
     * It is a form data passed to the server when submitting the form.
     * @default ''
     */
    @Property('')
    public value: string;

    /**
     * Constructor for creating the widget
     * @private
     */
    constructor(options?: RadioButtonModel, element?: string | HTMLInputElement) {
        super(options, <string | HTMLInputElement>element);
    }

    private changeHandler(event: Event): void {
        this.checked = true;
        let changeEventArgs: ChangeArgs = { checked: true, event: event };
        this.trigger('change', changeEventArgs);
    }

    private updateChange(state: boolean): void {
        let input: Element;
        let name: string = this.element.getAttribute('name');
        let radioGrp: NodeListOf<Element> = document.querySelectorAll('input.e-radio[name="' + name + '"]');
        for (let i: number = 0; i < radioGrp.length; i++) {
            input = radioGrp[i];
            if (input !== this.element) {
                ((input as EJ2Instance).ej2_instances[0] as RadioButton).checked = false;
            }
        }
    }

    /**
     * To destroy the widget.
     * @returns void
     */
    public destroy(): void {
        let label: Element = this.getLabel();
        super.destroy();
        if (!this.disabled) {
            this.unWireEvents();
        }
        detach(label);
        this.element.checked = false;
        if (this.name) {
            this.element.removeAttribute('name');
        }
        if (this.value) {
            this.element.removeAttribute('value');
        }
        if (this.disabled) {
            this.element.removeAttribute('disabled');
        }
    }

    private focusHandler(): void {
        if (this.isKeyPressed) {
            this.getLabel().classList.add('e-focus');
        }
    }

    private focusOutHandler(): void {
        this.getLabel().classList.remove('e-focus');
    }

    protected getModuleName(): string {
        return 'radio';
    }

    /**
     * Gets the properties to be maintained in the persistence state.
     * @private
     */
    public getPersistData(): string {
        return this.addOnPersist(['checked']);
    }

    private getLabel(): Element {
        return this.element.nextElementSibling;
    }

    private initialize(): void {
        this.initWrapper();
        if (this.name) {
            this.element.setAttribute('name', this.name);
        }
        if (this.value) {
            this.element.setAttribute('value', this.value);
        }
        if (this.checked) {
            this.element.checked = true;
        }
        if (this.disabled) {
            this.setDisabled();
        }
    }

    private initWrapper(): void {
        let rippleSpan: Element;
        let wrapper: Element = this.element.parentElement;
        if (!wrapper.classList.contains(WRAPPER)) {
            wrapper = createElement('div', { className: WRAPPER });
            this.element.parentNode.insertBefore(wrapper, this.element);
        }
        let label: HTMLElement = createElement('label', { attrs: { for: this.element.id } });
        wrapper.appendChild(this.element);
        wrapper.appendChild(label);
        if (isRippleEnabled) {
            rippleSpan = createElement('span', { className: (RIPPLE) });
            label.appendChild(rippleSpan);
            rippleEffect(rippleSpan as HTMLElement, {
                duration: 400,
                isCenterRipple: true
            });
        }
        if (this.enableRtl) {
            label.classList.add(RTL);
        }
        if (this.cssClass) {
            addClass([label], this.cssClass.split(' '));
        }
        if (this.label) {
            this.setText(this.label);
        }
    }

    private keyDownHandler(): void {
        this.isKeyPressed = true;
    }

    private labelRippleHandler(e: MouseEvent): void {
        let ripple: Element = this.getLabel().getElementsByClassName(RIPPLE)[0];
        if (ripple) {
            let event: MouseEvent = document.createEvent('MouseEvents');
            event.initEvent(e.type, true, true);
            ripple.dispatchEvent(event);
        }
    }

    private mouseDownHandler(): void {
        this.isKeyPressed = false;
    }

    /**
     * Called internally if any of the property value changes.
     * @private
     */
    public onPropertyChanged(newProp: RadioButtonModel, oldProp: RadioButtonModel): void {
        let label: Element = this.getLabel();
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'checked':
                    if (newProp.checked) {
                        this.updateChange(newProp.checked);
                    }
                    this.element.checked = newProp.checked;
                    break;
                case 'disabled':
                    if (newProp.disabled) {
                        this.setDisabled();
                        this.unWireEvents();
                    } else {
                        this.element.disabled = false;
                        this.wireEvents();
                    }
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        label.classList.remove(oldProp.cssClass);
                    }
                    label.classList.add(newProp.cssClass);
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        label.classList.add(RTL);
                    } else {
                        label.classList.remove(RTL);
                    }
                    break;
                case 'label':
                    this.setText(newProp.label);
                    break;
                case 'labelPosition':
                    if (newProp.labelPosition === 'before') {
                        label.classList.add('e-right');
                    } else {
                        label.classList.remove('e-right');
                    }
                    break;
                case 'name':
                    this.element.setAttribute('name', newProp.name);
                    break;
                case 'value':
                    this.element.setAttribute('value', newProp.value);
                    break;
            }
        }
    }

    /**
     * Initialize checked Property, Angular and React and Unique ID support.
     * @private
     */
    protected preRender(): void {
        let element: HTMLInputElement = this.element;
        element = wrapperInitialize('EJ-RADIOBUTTON', 'radio', element, WRAPPER);
        this.element = element;
        if (this.element.getAttribute('type') !== 'radio') {
            this.element.setAttribute('type', 'radio');
        }
        if (!this.element.id) {
            this.element.id = getUniqueID('e-' + this.getModuleName());
        }
    }

    /**
     * Initialize the control rendering
     * @private
     */
    protected render(): void {
        this.initialize();
        if (!this.disabled) {
            this.wireEvents();
        }
    }

    private setDisabled(): void {
        this.element.disabled = true;
    }

    private setText(text: string): void {
        let label: Element = this.getLabel();
        let textLabel: Element = label.getElementsByClassName(LABEL)[0];
        if (textLabel) {
            textLabel.textContent = text;
        } else {
            textLabel = createElement('span', { className: LABEL, innerHTML: text });
            label.appendChild(textLabel);
        }
        if (this.labelPosition === 'before') {
            this.getLabel().classList.add('e-right');
        } else {
            this.getLabel().classList.remove('e-right');
        }
    }

    protected unWireEvents(): void {
        let label: Element = this.getLabel();
        EventHandler.remove(this.element, 'change', this.changeHandler);
        EventHandler.remove(document, 'keydown', this.keyDownHandler);
        EventHandler.remove(label, 'mousedown', this.mouseDownHandler);
        EventHandler.remove(this.element, 'focus', this.focusHandler);
        EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
        let rippleLabel: Element = label.getElementsByClassName(LABEL)[0];
        if (rippleLabel) {
            EventHandler.remove(rippleLabel, 'mousedown', this.labelRippleHandler);
            EventHandler.remove(rippleLabel, 'mouseup', this.labelRippleHandler);
        }
    }

    protected wireEvents(): void {
        let label: Element = this.getLabel();
        EventHandler.add(this.element, 'change', this.changeHandler, this);
        EventHandler.add(document, 'keydown', this.keyDownHandler, this);
        EventHandler.add(label, 'mousedown', this.mouseDownHandler, this);
        EventHandler.add(this.element, 'focus', this.focusHandler, this);
        EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
        let rippleLabel: Element = label.getElementsByClassName(LABEL)[0];
        if (rippleLabel) {
            EventHandler.add(rippleLabel, 'mousedown', this.labelRippleHandler, this);
            EventHandler.add(rippleLabel, 'mouseup', this.labelRippleHandler, this);
        }
    }
}

export interface ChangeArgs extends BaseEventArgs {
    /** Returns the checked value of the RadioButton. */
    checked?: boolean;
    /** Returns the event parameters of the RadioButton. */
    event?: Event;
}

/**
 * Builder for RadioButton
 */
export let radioButtonBuilder: RadioButtonHelper = <RadioButtonHelper>CreateBuilder(RadioButton);