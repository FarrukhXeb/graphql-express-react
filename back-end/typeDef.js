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
type Category{
    id:ID!
    name:String!
    products:[Product]!
}
type Product{
    id:ID!
    name:String!
    price:Float!
    description:String!
    categories:[Category]!
}
input UserInput{
    firstName:String
    lastName:String
    email:String!
    password:String!
    country_id: ID
}
input ProductInput{
    name:String!
    price:Float!
    description:String!
    category_ids:[ID]!
}
type AuthToken{
    token:String!
    user:User!
}
type Query {
    user(id:ID!): User!
    users : [User]!
    countries :[Country]!
    category(name:String):Category!
    categories:[Category]!
    product(id:Float):Product!
    products:[Product]!
}
type Mutation {
    register(input:UserInput):AuthToken!
    login(input:UserInput):AuthToken!
    createCountry(name:String!,abbreviation:String!):Country!
    createProduct(input:ProductInput):Product!
    createCategory(name:String!):Category!
}
`;
