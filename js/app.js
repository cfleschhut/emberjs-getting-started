App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

var posts = [{
  id: 1,
  title: 'Post 1',
  author: {
    name: 'Author 1'
  },
  date: new Date('12-27-2012'),
  excerpt: 'Lorem Ipsum',
  body: 'Lorem Ipsum dolor sit amet'
}, {
  id: 2,
  title: 'Post 2',
  author: {
    name: 'Author 2'
  },
  date: new Date('12-24-2012'),
  excerpt: 'Lorem Ipsum',
  body: 'Lorem Ipsum dolor sit amet'
}];
