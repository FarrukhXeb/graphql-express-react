module.exports = `
type User {
    id: ID!
    firstName:String!
    lastName:String!
    email:String!
    password:String
    country: Country!
}
type Country{
    id:ID!
    name:String!
    abbreviation:String!
    users:[User]!
}
input UserInput{
    firstName:String
    lastName:String
    email:String!
    password:String!
    countryId: ID
}
type AuthToken{
    token:String!
    user:User!
}
type Query {
    user(id:ID!): User!
    users : [User]!
    countries :[Country]!
}
type Mutation {
    register(input:UserInput):AuthToken!
    login(input:UserInput):AuthToken!
    createCountry(name:String!,abbreviation:String!):Country!
}
`;
