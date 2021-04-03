/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { AuthorizationCreatableSafe } from "./components/model";
import { Error } from "gracely";
import { Token } from "authly";
export namespace Components {
    interface CardfuncElement {
        "apiKey": string;
        "do3d": (authorization: AuthorizationCreatableSafe, error?: Error | undefined) => Promise<AuthorizationCreatableSafe | Error | Token>;
        "state": "failed" | "succeeded" | "processing" | "created";
        "state3d": "failed" | "succeeded" | "processing" | "created";
        "submit": (authorization: AuthorizationCreatableSafe) => Promise<AuthorizationCreatableSafe | Error | Token>;
        "value"?: AuthorizationCreatableSafe;
        "value3d"?: AuthorizationCreatableSafe;
    }
}
declare global {
    interface HTMLCardfuncElementElement extends Components.CardfuncElement, HTMLStencilElement {
    }
    var HTMLCardfuncElementElement: {
        prototype: HTMLCardfuncElementElement;
        new (): HTMLCardfuncElementElement;
    };
    interface HTMLElementTagNameMap {
        "cardfunc-element": HTMLCardfuncElementElement;
    }
}
declare namespace LocalJSX {
    interface CardfuncElement {
        "apiKey"?: string;
        "onChanged"?: (event: CustomEvent<AuthorizationCreatableSafe>) => void;
        "onChanged3d"?: (event: CustomEvent<AuthorizationCreatableSafe>) => void;
        "state"?: "failed" | "succeeded" | "processing" | "created";
        "state3d"?: "failed" | "succeeded" | "processing" | "created";
        "value"?: AuthorizationCreatableSafe;
        "value3d"?: AuthorizationCreatableSafe;
    }
    interface IntrinsicElements {
        "cardfunc-element": CardfuncElement;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cardfunc-element": LocalJSX.CardfuncElement & JSXBase.HTMLAttributes<HTMLCardfuncElementElement>;
        }
    }
}
