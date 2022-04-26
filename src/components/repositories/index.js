import React from "react";
import useGithub from "../../hooks/githubHooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
   
    const { githubState, getUserRepos } = useGithub();
    
    return (
    <S.WrapperTabs 
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
    >
        <S.WrapperTabsList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabsList>
        <S.WrapperTabPanel>
            <RepositoryItem 
            name="repositorio-1" 
            linkToRepo="https://github.com/lsguilherme/aulasPOO"
            fullName="lsguilherme/aulasPOO"
        />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
        <RepositoryItem 
            name="repositorio-2" 
            linkToRepo="https://github.com/lsguilherme/aulasPOO"
            fullName="lsguilherme/aulasPOO"
        />
        </S.WrapperTabPanel>
    </S.WrapperTabs>
    );
}

export default Repositories;