import React from "react";

export default interface IRoute {
    exact?: boolean,
    path?: string,
    guard: boolean,
    component: any
}