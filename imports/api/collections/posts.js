const Posts = new Mongo.Collection( "posts" );

export default secure( Posts );