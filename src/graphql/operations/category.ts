import { gql } from "@apollo/client";

export default {
  Querys: {
    getAllSlug: gql`
      query {
        categories {
          data {
            attributes {
              slug
            }
          }
        }
      }
    `,
  },
  Mutations: {},
  Subscriptions: {},
};
