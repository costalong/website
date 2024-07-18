// node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.16_@algolia+client-search@4.24.0_search-insights@2.15.0_vuepress@2.0.0-rc.13/node_modules/vuepress-theme-reco/lib/client/utils/other.js
function formatISODate(ISODate = "") {
  const dateStr = ISODate.replace("T", " ").replace("Z", "").split(".")[0];
  const formatDateStr = dateStr.replace(/(\s00:00:00)$/, "");
  return formatDateStr;
}

export {
  formatISODate
};
//# sourceMappingURL=chunk-NLEX4HQA.js.map
