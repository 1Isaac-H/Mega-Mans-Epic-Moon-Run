var gdjs;(function(l){l.PixiFiltersTools.registerFilterCreator("RGBSplit",{makePIXIFilter:function(i,e){return new PIXI.filters.RGBSplitFilter},updatePreRender:function(i,e){},updateDoubleParameter:function(i,e,t){const r=i;e==="redX"?r.red.x=t:e==="redY"?r.red.y=t:e==="greenX"?r.green.x=t:e==="greenY"?r.green.y=t:e==="blueX"?r.blue.x=t:e==="blueY"&&(r.blue.y=t)},updateStringParameter:function(i,e,t){},updateBooleanParameter:function(i,e,t){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=rgb-split-pixi-filter.js.map