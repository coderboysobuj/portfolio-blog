import { gql } from "@apollo/client";

export default {
  Querys: {
    getAllPost: gql`
      query {
        posts {
          data {
            id
            attributes {
              title
              slug
              shortDescription
              body
              thumb {
                data {
                  attributes {
                    url
                  }
                }
              }
              category {
                data {
                  id
                }
              }
              tags {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    getPostsByCategory: gql`
      query GetPostsByCategory($categorySlug: String!) {
        posts(filters: { category: { slug: { eq: $categorySlug } } }) {
          data {
            id
            attributes {
              title
              slug
              shortDescription
              thumb {
                data {
                  attributes {
                    url
                  }
                }
              }
              category {
                data {
                  id
                }
              }
              tags {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    getPostBySlug: gql`
      query GetPostBySlug($slug: String!) {
        posts(filters: { slug: { eq: $slug } }) {
          data {
            id
            attributes {
              title
              slug
              body
              shortDescription
              thumb {
                data {
                  attributes {
                    url
                  }
                }
              }
              category {
                data {
                  id
                }
              }
              tags {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,

    getAllSlug: gql`
      query {
        posts {
          data {
            id
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
