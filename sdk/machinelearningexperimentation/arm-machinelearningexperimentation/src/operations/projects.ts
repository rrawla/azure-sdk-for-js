/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/projectsMappers";
import * as Parameters from "../models/parameters";
import { MLTeamAccountManagementClientContext } from "../mLTeamAccountManagementClientContext";

/** Class representing a Projects. */
export class Projects {
  private readonly client: MLTeamAccountManagementClientContext;

  /**
   * Create a Projects.
   * @param {MLTeamAccountManagementClientContext} client Reference to the service client.
   */
  constructor(client: MLTeamAccountManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the properties of the specified machine learning project.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Project>): void;
  get(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        workspaceName,
        projectName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProjectsGetResponse>;
  }

  /**
   * Creates or updates a project with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param parameters The parameters for creating or updating a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, parameters: Models.Project, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param parameters The parameters for creating or updating a project.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, parameters: Models.Project, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param parameters The parameters for creating or updating a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, parameters: Models.Project, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Project>): void;
  createOrUpdate(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, parameters: Models.Project, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        workspaceName,
        projectName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ProjectsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a project.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        workspaceName,
        projectName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Updates a project with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param parameters The parameters for updating a machine learning team account.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, parameters: Models.ProjectUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param parameters The parameters for updating a machine learning team account.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, parameters: Models.ProjectUpdateParameters, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param parameters The parameters for updating a machine learning team account.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, parameters: Models.ProjectUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Project>): void;
  update(resourceGroupName: string, accountName: string, workspaceName: string, projectName: string, parameters: Models.ProjectUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        workspaceName,
        projectName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ProjectsUpdateResponse>;
  }

  /**
   * Lists all the available machine learning projects under the specified workspace.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsListByWorkspaceResponse>
   */
  listByWorkspace(accountName: string, workspaceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsListByWorkspaceResponse>;
  /**
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param callback The callback
   */
  listByWorkspace(accountName: string, workspaceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.ProjectListResult>): void;
  /**
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(accountName: string, workspaceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectListResult>): void;
  listByWorkspace(accountName: string, workspaceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectListResult>, callback?: msRest.ServiceCallback<Models.ProjectListResult>): Promise<Models.ProjectsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        accountName,
        workspaceName,
        resourceGroupName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.ProjectsListByWorkspaceResponse>;
  }

  /**
   * Lists all the available machine learning projects under the specified workspace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProjectListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectListResult>): void;
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectListResult>, callback?: msRest.ServiceCallback<Models.ProjectListResult>): Promise<Models.ProjectsListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.ProjectsListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.workspaceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Project
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.workspaceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Project,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Project
    },
    201: {
      bodyMapper: Mappers.Project
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.workspaceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.workspaceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ProjectUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Project
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces{workspaceName}/projects",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.accountName,
    Parameters.workspaceName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
