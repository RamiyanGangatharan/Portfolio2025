import MDP from './markdownpage';

const article = `
# Article Title
---
CONTENT
`;

export default function Article() {return (<MDP title={"My Article"} article={article}></MDP>);}