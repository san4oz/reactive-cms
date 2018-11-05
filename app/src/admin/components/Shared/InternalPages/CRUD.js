import React from "react";
import InternalPageContainer from "../../../containers/InternalPageContainer";
import Action from "./Action";

export const Create = (component, entityName) =>
    <InternalPageContainer component={component} actions={[<Action key={1} url={`/admin/${entityName}/save`} icon="save" />]} />

export const Update = (component, entityName) =>
    <InternalPageContainer component={component} actions={[<Action key={1} url={`/admin/${entityName}/update`} icon="save" />]} />

export const List = (component, entityName) =>
    <InternalPageContainer component={component} actions={[<Action key={1} url={`/admin/${entityName}/new`} icon="plus-square" />]} />