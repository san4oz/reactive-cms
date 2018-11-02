import React from "react";
import InternalPage from "./InternalPage";
import Action from "./Action";

export const Create = (component, entityName) =>
    InternalPage(component, [ <Action key={1} url={`/admin/${entityName}/save`} icon="save" /> ]);

export const Update = (component, entityName) =>
    InternalPage(component, [ <Action key={1} url={`/admin/${entityName}/update`} icon="save" /> ]);

export const List = (component, entityName) =>
    InternalPage(component, [ <Action key={1} url={`/admin/${entityName}/new`} icon="plus-square" /> ]);