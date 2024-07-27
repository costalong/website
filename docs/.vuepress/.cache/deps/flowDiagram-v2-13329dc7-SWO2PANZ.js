import {
  flowRendererV2,
  flowStyles
} from "./chunk-Q4D56DI7.js";
import "./chunk-OSS6QIML.js";
import {
  flowDb,
  parser$1
} from "./chunk-DF5FI4UP.js";
import "./chunk-YOWMBMWE.js";
import "./chunk-SSURWKA2.js";
import "./chunk-GSXCV5EH.js";
import "./chunk-IJWU7HYZ.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-XXYJ4ZV7.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/.pnpm/mermaid@10.9.1/node_modules/mermaid/dist/flowDiagram-v2-13329dc7.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-13329dc7-SWO2PANZ.js.map
