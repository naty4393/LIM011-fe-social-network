"""Generated client library for managedidentities version v1beta1."""
# NOTE: This file is autogenerated and should not be edited by hand.
from apitools.base.py import base_api
from googlecloudsdk.third_party.apis.managedidentities.v1beta1 import managedidentities_v1beta1_messages as messages


class ManagedidentitiesV1beta1(base_api.BaseApiClient):
  """Generated client library for service managedidentities version v1beta1."""

  MESSAGES_MODULE = messages
  BASE_URL = u'https://managedidentities.googleapis.com/'
  MTLS_BASE_URL = u'https://managedidentities.mtls.googleapis.com/'

  _PACKAGE = u'managedidentities'
  _SCOPES = [u'https://www.googleapis.com/auth/cloud-platform']
  _VERSION = u'v1beta1'
  _CLIENT_ID = '1042881264118.apps.googleusercontent.com'
  _CLIENT_SECRET = 'x_Tw5K8nnjoRAqULM9PFAC2b'
  _USER_AGENT = u'google-cloud-sdk'
  _CLIENT_CLASS_NAME = u'ManagedidentitiesV1beta1'
  _URL_VERSION = u'v1beta1'
  _API_KEY = None

  def __init__(self, url='', credentials=None,
               get_credentials=True, http=None, model=None,
               log_request=False, log_response=False,
               credentials_args=None, default_global_params=None,
               additional_http_headers=None, response_encoding=None):
    """Create a new managedidentities handle."""
    url = url or self.BASE_URL
    super(ManagedidentitiesV1beta1, self).__init__(
        url, credentials=credentials,
        get_credentials=get_credentials, http=http, model=model,
        log_request=log_request, log_response=log_response,
        credentials_args=credentials_args,
        default_global_params=default_global_params,
        additional_http_headers=additional_http_headers,
        response_encoding=response_encoding)
    self.projects_locations_global_domains = self.ProjectsLocationsGlobalDomainsService(self)
    self.projects_locations_global_operations = self.ProjectsLocationsGlobalOperationsService(self)
    self.projects_locations_global = self.ProjectsLocationsGlobalService(self)
    self.projects_locations = self.ProjectsLocationsService(self)
    self.projects = self.ProjectsService(self)

  class ProjectsLocationsGlobalDomainsService(base_api.BaseApiService):
    """Service class for the projects_locations_global_domains resource."""

    _NAME = u'projects_locations_global_domains'

    def __init__(self, client):
      super(ManagedidentitiesV1beta1.ProjectsLocationsGlobalDomainsService, self).__init__(client)
      self._upload_configs = {
          }

    def AttachTrust(self, request, global_params=None):
      r"""Adds an AD trust to a domain.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('AttachTrust')
      return self._RunMethod(
          config, request, global_params=global_params)

    AttachTrust.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}:attachTrust',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.domains.attachTrust',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}:attachTrust',
        request_field=u'attachTrustRequest',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def Create(self, request, global_params=None):
      r"""Creates a Microsoft AD domain.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Create')
      return self._RunMethod(
          config, request, global_params=global_params)

    Create.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.domains.create',
        ordered_params=[u'parent'],
        path_params=[u'parent'],
        query_params=[u'domainName'],
        relative_path=u'v1beta1/{+parent}/domains',
        request_field=u'domain',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def Delete(self, request, global_params=None):
      r"""Deletes a domain.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsDeleteRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Delete')
      return self._RunMethod(
          config, request, global_params=global_params)

    Delete.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}',
        http_method=u'DELETE',
        method_id=u'managedidentities.projects.locations.global.domains.delete',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsDeleteRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def DetachTrust(self, request, global_params=None):
      r"""Removes an AD trust.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('DetachTrust')
      return self._RunMethod(
          config, request, global_params=global_params)

    DetachTrust.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}:detachTrust',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.domains.detachTrust',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}:detachTrust',
        request_field=u'detachTrustRequest',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def Get(self, request, global_params=None):
      r"""Gets information about a domain.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Domain) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}',
        http_method=u'GET',
        method_id=u'managedidentities.projects.locations.global.domains.get',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsGetRequest',
        response_type_name=u'Domain',
        supports_download=False,
    )

    def GetIamPolicy(self, request, global_params=None):
      r"""Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsGetIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Policy) The response message.
      """
      config = self.GetMethodConfig('GetIamPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    GetIamPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}:getIamPolicy',
        http_method=u'GET',
        method_id=u'managedidentities.projects.locations.global.domains.getIamPolicy',
        ordered_params=[u'resource'],
        path_params=[u'resource'],
        query_params=[u'options_requestedPolicyVersion'],
        relative_path=u'v1beta1/{+resource}:getIamPolicy',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsGetIamPolicyRequest',
        response_type_name=u'Policy',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists domains in a project.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListDomainsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains',
        http_method=u'GET',
        method_id=u'managedidentities.projects.locations.global.domains.list',
        ordered_params=[u'parent'],
        path_params=[u'parent'],
        query_params=[u'filter', u'orderBy', u'pageSize', u'pageToken'],
        relative_path=u'v1beta1/{+parent}/domains',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsListRequest',
        response_type_name=u'ListDomainsResponse',
        supports_download=False,
    )

    def Patch(self, request, global_params=None):
      r"""Updates the metadata and configuration of a domain.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsPatchRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Patch')
      return self._RunMethod(
          config, request, global_params=global_params)

    Patch.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}',
        http_method=u'PATCH',
        method_id=u'managedidentities.projects.locations.global.domains.patch',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[u'updateMask'],
        relative_path=u'v1beta1/{+name}',
        request_field=u'domain',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsPatchRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def ReconfigureTrust(self, request, global_params=None):
      r"""Updates the DNS conditional forwarder.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('ReconfigureTrust')
      return self._RunMethod(
          config, request, global_params=global_params)

    ReconfigureTrust.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}:reconfigureTrust',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.domains.reconfigureTrust',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}:reconfigureTrust',
        request_field=u'reconfigureTrustRequest',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def ResetAdminPassword(self, request, global_params=None):
      r"""Resets a domain's administrator password.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ResetAdminPasswordResponse) The response message.
      """
      config = self.GetMethodConfig('ResetAdminPassword')
      return self._RunMethod(
          config, request, global_params=global_params)

    ResetAdminPassword.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}:resetAdminPassword',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.domains.resetAdminPassword',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}:resetAdminPassword',
        request_field=u'resetAdminPasswordRequest',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest',
        response_type_name=u'ResetAdminPasswordResponse',
        supports_download=False,
    )

    def SetIamPolicy(self, request, global_params=None):
      r"""Sets the access control policy on the specified resource. Replaces any.
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsSetIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Policy) The response message.
      """
      config = self.GetMethodConfig('SetIamPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    SetIamPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}:setIamPolicy',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.domains.setIamPolicy',
        ordered_params=[u'resource'],
        path_params=[u'resource'],
        query_params=[],
        relative_path=u'v1beta1/{+resource}:setIamPolicy',
        request_field=u'setIamPolicyRequest',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsSetIamPolicyRequest',
        response_type_name=u'Policy',
        supports_download=False,
    )

    def TestIamPermissions(self, request, global_params=None):
      r"""Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsTestIamPermissionsRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (TestIamPermissionsResponse) The response message.
      """
      config = self.GetMethodConfig('TestIamPermissions')
      return self._RunMethod(
          config, request, global_params=global_params)

    TestIamPermissions.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}:testIamPermissions',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.domains.testIamPermissions',
        ordered_params=[u'resource'],
        path_params=[u'resource'],
        query_params=[],
        relative_path=u'v1beta1/{+resource}:testIamPermissions',
        request_field=u'testIamPermissionsRequest',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsTestIamPermissionsRequest',
        response_type_name=u'TestIamPermissionsResponse',
        supports_download=False,
    )

    def ValidateTrust(self, request, global_params=None):
      r"""Validates a trust state, that the target domain is reachable, and that the.
target domain is able to accept incoming trust requests.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('ValidateTrust')
      return self._RunMethod(
          config, request, global_params=global_params)

    ValidateTrust.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/domains/{domainsId}:validateTrust',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.domains.validateTrust',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}:validateTrust',
        request_field=u'validateTrustRequest',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

  class ProjectsLocationsGlobalOperationsService(base_api.BaseApiService):
    """Service class for the projects_locations_global_operations resource."""

    _NAME = u'projects_locations_global_operations'

    def __init__(self, client):
      super(ManagedidentitiesV1beta1.ProjectsLocationsGlobalOperationsService, self).__init__(client)
      self._upload_configs = {
          }

    def Cancel(self, request, global_params=None):
      r"""Starts asynchronous cancellation on a long-running operation.  The server.
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Empty) The response message.
      """
      config = self.GetMethodConfig('Cancel')
      return self._RunMethod(
          config, request, global_params=global_params)

    Cancel.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/operations/{operationsId}:cancel',
        http_method=u'POST',
        method_id=u'managedidentities.projects.locations.global.operations.cancel',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}:cancel',
        request_field=u'cancelOperationRequest',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest',
        response_type_name=u'Empty',
        supports_download=False,
    )

    def Delete(self, request, global_params=None):
      r"""Deletes a long-running operation. This method indicates that the client is.
no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalOperationsDeleteRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Empty) The response message.
      """
      config = self.GetMethodConfig('Delete')
      return self._RunMethod(
          config, request, global_params=global_params)

    Delete.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/operations/{operationsId}',
        http_method=u'DELETE',
        method_id=u'managedidentities.projects.locations.global.operations.delete',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalOperationsDeleteRequest',
        response_type_name=u'Empty',
        supports_download=False,
    )

    def Get(self, request, global_params=None):
      r"""Gets the latest state of a long-running operation.  Clients can use this.
method to poll the operation result at intervals as recommended by the API
service.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalOperationsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/operations/{operationsId}',
        http_method=u'GET',
        method_id=u'managedidentities.projects.locations.global.operations.get',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalOperationsGetRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists operations that match the specified filter in the request. If the.
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.

      Args:
        request: (ManagedidentitiesProjectsLocationsGlobalOperationsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListOperationsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/global/operations',
        http_method=u'GET',
        method_id=u'managedidentities.projects.locations.global.operations.list',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[u'filter', u'pageSize', u'pageToken'],
        relative_path=u'v1beta1/{+name}',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsGlobalOperationsListRequest',
        response_type_name=u'ListOperationsResponse',
        supports_download=False,
    )

  class ProjectsLocationsGlobalService(base_api.BaseApiService):
    """Service class for the projects_locations_global resource."""

    _NAME = u'projects_locations_global'

    def __init__(self, client):
      super(ManagedidentitiesV1beta1.ProjectsLocationsGlobalService, self).__init__(client)
      self._upload_configs = {
          }

  class ProjectsLocationsService(base_api.BaseApiService):
    """Service class for the projects_locations resource."""

    _NAME = u'projects_locations'

    def __init__(self, client):
      super(ManagedidentitiesV1beta1.ProjectsLocationsService, self).__init__(client)
      self._upload_configs = {
          }

    def Get(self, request, global_params=None):
      r"""Gets information about a location.

      Args:
        request: (ManagedidentitiesProjectsLocationsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Location) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations/{locationsId}',
        http_method=u'GET',
        method_id=u'managedidentities.projects.locations.get',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1beta1/{+name}',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsGetRequest',
        response_type_name=u'Location',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists information about the supported locations for this service.

      Args:
        request: (ManagedidentitiesProjectsLocationsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListLocationsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1beta1/projects/{projectsId}/locations',
        http_method=u'GET',
        method_id=u'managedidentities.projects.locations.list',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[u'filter', u'includeUnrevealedLocations', u'pageSize', u'pageToken'],
        relative_path=u'v1beta1/{+name}/locations',
        request_field='',
        request_type_name=u'ManagedidentitiesProjectsLocationsListRequest',
        response_type_name=u'ListLocationsResponse',
        supports_download=False,
    )

  class ProjectsService(base_api.BaseApiService):
    """Service class for the projects resource."""

    _NAME = u'projects'

    def __init__(self, client):
      super(ManagedidentitiesV1beta1.ProjectsService, self).__init__(client)
      self._upload_configs = {
          }
