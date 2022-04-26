import React from "react";
import GithubProvider from "./providers/githubProvide";
import { ResetCSS } from "./global/reset";
import App from "./App";

const Providers = () => {
return(
<main>
    <GithubProvider>
        <ResetCSS />
        <App />
    </GithubProvider>
</main>
)};

export default Providers;