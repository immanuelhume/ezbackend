"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[937],{876:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7717:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7896),r=n(1461),s=(n(2784),n(876)),o=["components"],i={sidebar_position:4},l="Accessing the database",u={unversionedId:"tutorial-basics/accessing-the-database",id:"tutorial-basics/accessing-the-database",isDocsHomePage:!1,title:"Accessing the database",description:"If you want to assess the database, you must first understand that EzBackend is a wrapper of fastify and sequelize",source:"@site/docs/tutorial-basics/accessing-the-database.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/accessing-the-database",permalink:"/ezbackend/docs/tutorial-basics/accessing-the-database",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-basics/accessing-the-database.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create an API Route",permalink:"/ezbackend/docs/tutorial-basics/create-a-route"},next:{title:"Configuration",permalink:"/ezbackend/docs/tutorial-basics/configuration"}},c=[{value:"Understanding Sequelize",id:"understanding-sequelize",children:[]},{value:"Getting the sequelize model",id:"getting-the-sequelize-model",children:[]},{value:"A practical example",id:"a-practical-example",children:[]},{value:"Putting it together",id:"putting-it-together",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"accessing-the-database"},"Accessing the database"),(0,s.kt)("p",null,"If you want to assess the database, you must first understand that EzBackend is a wrapper of ",(0,s.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"fastify")," and ",(0,s.kt)("a",{parentName:"p",href:"https://sequelize.org/master/"},"sequelize")),(0,s.kt)("p",null,"Hence, when thinking about creating an API route, we should be thinking of accessing the database using sequelize ",(0,s.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Routes/"},"fastify api route")),(0,s.kt)("h2",{id:"understanding-sequelize"},"Understanding Sequelize"),(0,s.kt)("p",null,"Sequelize is an ",(0,s.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one"},"Object Relational Mapper (ORM)")," for the SQL databases Postgres, MySQL, MariaDB, SQLite and Microsoft SQL server."),(0,s.kt)("p",null,"It lets you connect to any of the databases with the same code. Want to change from SQLite to Postgres? Just change the configuration and everything will still work."),(0,s.kt)("h2",{id:"getting-the-sequelize-model"},"Getting the sequelize model"),(0,s.kt)("p",null,"For each ",(0,s.kt)("inlineCode",{parentName:"p"},"EzModel"),", there is a Sequelize ",(0,s.kt)("inlineCode",{parentName:"p"},"Model")," which can access from ",(0,s.kt)("inlineCode",{parentName:"p"},"ezModel.model")),(0,s.kt)("p",null,"Let's say we have a table of users"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="User Model"',title:'"User','Model"':!0},'export const user = new EzModel("user", {\n  name: {\n    type: DataTypes.STRING,\n    allowNull: false,\n  },\n});\n')),(0,s.kt)("p",null,"We can get the sequelize model like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".ezb/index.ts"',title:'".ezb/index.ts"'},"const model = user.model; //model refers to the sequelize model\n")),(0,s.kt)("p",null,"Now that we have the sequelize model, it is more a problem of ",(0,s.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/models-usage.html/"},"'How do I use the sequelize model?'"),"?"),(0,s.kt)("h2",{id:"a-practical-example"},"A practical example"),(0,s.kt)("p",null,"Assuming we want an api endpoint that lets us know the number of users"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="API Endpoint"',title:'"API','Endpoint"':!0},'fastify.route({\n  method: "GET",\n  url: "/num-users",\n  schema: {\n    response: {\n      200: {\n        type: "object",\n        properties: {\n          numUsers: { type: "number" },\n        },\n      },\n    },\n  },\n  handler: async function (request, reply) {\n    reply.send(await getNumUsers());\n  },\n});\n')),(0,s.kt)("p",null,'So instead of googling "How to get number of users for ezbackend" we can google ',(0,s.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/models-usage.html#-code-count--code----count-the-occurrences-of-elements-in-the-database"},'"How to get number of rows in a table sequelize"')),(0,s.kt)("p",null,"So the function ",(0,s.kt)("inlineCode",{parentName:"p"},"getNumUsers")," may look like this"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="getNumUsers"',title:'"getNumUsers"'},"async function getNumUsers() {\n  const numUsers = await user.model.count();\n  return numUsers;\n}\n")),(0,s.kt)("p",null,"And with that we can now have an api route that gives us the total number of users"),(0,s.kt)("h2",{id:"putting-it-together"},"Putting it together"),(0,s.kt)("p",null,"For a working example, you can copy and past the below code into ",(0,s.kt)("inlineCode",{parentName:"p"},".ezb/index.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"./ezb/index.ts","./ezb/index.ts":!0},'import { EzBackend, EzModel } from "@ezbackend/common";\n\nconst ezb = EzBackend.app(); //This gets the singleton\nconst fastify = ezb.server; //This lets you get the fastify instance from anywhere\n\nexport const user = new EzModel("user", {\n  name: {\n    type: DataTypes.STRING,\n    allowNull: false,\n  },\n});\n\nasync function getNumUsers() {\n  const numUsers = await user.model.count();\n  return numUsers;\n}\n\nfastify.route({\n  method: "GET",\n  url: "/num-users",\n  schema: {\n    response: {\n      200: {\n        type: "object",\n        properties: {\n          numUsers: { type: "number" },\n        },\n      },\n    },\n  },\n  handler: async function (request, reply) {\n    reply.send({ numUsers: await getNumUsers() });\n  },\n});\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can access the sequelize instance directly with"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const ezb = EzBackend.app();\nconst sequelize = ezb.orm;\n")))))}d.isMDXComponent=!0}}]);