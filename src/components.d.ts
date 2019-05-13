/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'smoothly';
import {
  Currency,
} from 'isoly';
import {
  Payment,
} from '@certitrade/card3-model';
import {
  EventEmitter,
} from '@stencil/core';


export namespace Components {

  interface Card3Form {
    'state': "failed" | "succeeded" | "processing" | "created";
    'submit': (method: string, amount: number, currency: Currency, order?: string | undefined, reference?: string | undefined, description?: string | undefined) => void;
    'url': string;
    'value'?: Payment;
  }
  interface Card3FormAttributes extends StencilHTMLAttributes {
    'onChanged'?: (event: CustomEvent<Payment>) => void;
    'state'?: "failed" | "succeeded" | "processing" | "created";
    'url'?: string;
    'value'?: Payment;
  }
}

declare global {
  interface StencilElementInterfaces {
    'Card3Form': Components.Card3Form;
  }

  interface StencilIntrinsicElements {
    'card3-form': Components.Card3FormAttributes;
  }


  interface HTMLCard3FormElement extends Components.Card3Form, HTMLStencilElement {}
  var HTMLCard3FormElement: {
    prototype: HTMLCard3FormElement;
    new (): HTMLCard3FormElement;
  };

  interface HTMLElementTagNameMap {
    'card3-form': HTMLCard3FormElement
  }

  interface ElementTagNameMap {
    'card3-form': HTMLCard3FormElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
