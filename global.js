if ( Meteor.isServer ) {
	global.secure = collection => {
		const yes = {
	    insert	: f => true,
	    update	: f => true,
	    remove	: f => true,
	  };
	  const no = {
	    insert	: f => false,
	    update	: f => false,
	    remove	: f => false,
	  };

	  collection.allow( Meteor.isDevelopment ? yes : no );
	  collection.deny( Meteor.isDevelopment ? no : yes );

	  return ( collection );
	};
}

if ( Meteor.isClient ) {
	global.GEBID = document.getElementById;
}