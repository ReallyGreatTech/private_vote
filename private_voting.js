import * as wasm from "./private_voting_bg.wasm";
import { __wbg_set_wasm } from "./private_voting_bg.js";
__wbg_set_wasm(wasm);
export * from "./private_voting_bg.js";
