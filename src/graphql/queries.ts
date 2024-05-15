import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    viewer {
      repositories(last: 100) {
        nodes {
          name
          description
	  collaborators {
            edges {
              node {
                name
              }
            }
          }
	  defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
          issues(states: OPEN) {
            totalCount
          }
          pullRequests {
            totalCount
          }
        }
      }
    }
  }
`;
