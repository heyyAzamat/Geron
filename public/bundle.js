(()=>{"use strict";let e=null,s="";Object.entries({winter:{closeProjects:10,income:6e5,hired:10,dismissed:10,newProjects:10},spring:{closeProjects:10,income:75e4,hired:10,dismissed:10,newProjects:10},summer:{closeProjects:10,income:55e4,hired:10,dismissed:10,newProjects:10},autumn:{closeProjects:10,income:9e5,hired:10,dismissed:10,newProjects:10}}).forEach((([o,c])=>{(!e||e.income<c.income)&&(e=c,s=o)}));const o={seasonName:s,info:e};console.log("Самый прибыльный сезон: ",o)})();