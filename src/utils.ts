import {tokenize, markEdits, HunkData, TokenizeOptions} from 'react-diff-view';
import refactor from "refractor"


export const tokenizeHunks = (hunks: HunkData[], language: string, oldSource: string) => {
    if (!hunks) {
        return undefined;
    }

    const options:TokenizeOptions = {
        highlight: true,
        enhancers: [markEdits(hunks, {type: 'block'})],
        language,
        refractor: refactor,
        oldSource

    };

    try {
        return tokenize(hunks, options);
    } catch (ex) {
        return undefined;
    }
};
