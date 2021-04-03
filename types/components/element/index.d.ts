import { EventEmitter } from "../../stencil-public-runtime";
import { Token } from "authly";
import { Error } from "gracely";
import { Trigger } from "smoothly-model";
import { AuthorizationCreatableSafe, MerchantKeyInfo } from "../model";
export declare class Form {
    frame: HTMLSmoothlyFrameElement;
    apiKey: string;
    state: "failed" | "succeeded" | "processing" | "created";
    state3d: "failed" | "succeeded" | "processing" | "created";
    value?: AuthorizationCreatableSafe;
    value3d?: AuthorizationCreatableSafe;
    theme?: string;
    verify?: {
        pareq: string;
        url: string;
        issuer: string;
    };
    authorization?: AuthorizationCreatableSafe;
    changed: EventEmitter<AuthorizationCreatableSafe>;
    changed3d: EventEmitter<AuthorizationCreatableSafe>;
    private received?;
    private received3d?;
    merchant?: MerchantKeyInfo;
    componentWillLoad(): Promise<void>;
    handleTrigger(event: CustomEvent<Trigger>): Promise<void>;
    submit(authorization: AuthorizationCreatableSafe): Promise<AuthorizationCreatableSafe | Error | Token>;
    do3d(authorization: AuthorizationCreatableSafe, error?: Error): Promise<AuthorizationCreatableSafe | Error | Token>;
    render(): any[];
}
