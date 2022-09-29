import { gql } from "@apollo/client";

export const CREATE_PROFILE = gql`
    mutation ($request: CreateProfileRequest!) {
        createProfile(request: $request) {
            ... on RelayerResult {
                txHash
            }
            ... on RelayError {
                reason
            }
            __typename
        }
    }
`;

export const MODULE_APPROVAL_DATA = gql`
    query ($request: GenerateModuleCurrencyApprovalDataRequest!) {
        generateModuleCurrencyApprovalData(request: $request) {
            to
            from
            data
        }
    }
`;

export const GET_CHALLENGE = gql`
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

export const AUTHENTICATION = gql`
  mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
  }
`;
