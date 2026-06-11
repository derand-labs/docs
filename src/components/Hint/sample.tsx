import React from 'react';
import Hint from './index';

interface SampleHintProps {
    text?: string;
}

export function GeneralPurposeComputerHint({ text }: SampleHintProps) {
    return (
        <Hint hint="A programmable computing device capable of performing a wide variety of tasks. Most computers available on the market fall into this category."     >
            {text ?? "general-purpose computers"}
        </Hint>
    );
}

export function TypicalGeneralPurposeComputerHint({ text }: SampleHintProps) {
    return (
        <Hint hint="A general-purpose computer with average consumer-grade performance.">
            {text ?? "typical general-purpose computers"}
        </Hint>
    );
}

export function FastestGeneralPurposeComputerHint({ text }: SampleHintProps) {
    return (
        <Hint hint="The fastest general-purpose computer reasonably assumed by DeRand, estimated to operate at approximately 30 GHz. This assumption is used to estimate the minimum time required to complete a VDF computation.">
            {text ?? "fastest general-purpose computers"}
        </Hint>
    );
}

export function SpecializedComputerHint({ text }: SampleHintProps) {
    return (
        <Hint hint="Hardware designed for a specific computational task, such as ASICs or FPGAs. Such hardware may significantly outperform general-purpose computers (even the fastest one) for certain VDF implementations.">
            {text ?? "specialized computers"}
        </Hint>
    );
}


export function RequestFeeDetail({ text }: SampleHintProps) {
    return (
        <Hint hint="baseFee + delay * delayFee">
            {text ?? "request fee"}
        </Hint>
    );
}


interface RequestFeeProps {
    n: number;
}

export function RequestFeeShortHand({ n }: RequestFeeProps) {
    return (
        <Hint hint={`${n} × Request Fee`} >
            {`${n}R`}
        </Hint>
    );
}
