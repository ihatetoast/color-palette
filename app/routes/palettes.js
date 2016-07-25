import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        name: 'Tropical',
        creator: 'YOUR NAME',
        colors: [
          { r: 217, g: 33, b: 32, styleString: 'background-color:rgb(217,33,32)', labelString: '217,33,32'},
          { r: 231, g: 116, b: 47, styleString: 'background-color:rgb(231,116,47)', labelString: '231,116,47'},
          { r: 223, g: 165, b: 58, styleString: 'background-color:rgb(223,165,58)', labelString: '223,165,58'},
          { r: 177, g: 190, b: 78, styleString: 'background-color:rgb(177,190,78)', labelString: '177,190,78'},
          { r: 109, g: 179, b: 136, styleString: 'background-color:rgb(109,179,136)', labelString: '109,179,136'}
        ]
      },
      {
        id: 2,
        name: 'Cool',
        creator: 'YOUR NAME',
        colors: [
          { r: 70, g: 131, b: 193, styleString: 'background-color:rgb(70,131,193)', labelString: '70,131,193'},
          { r: 63, g: 78, b: 161, styleString: 'background-color:rgb(63,78,161)', labelString: '63,78,161'},
          { r: 120, g: 28, b: 129, styleString: 'background-color:rgb(120,28,129)', labelString: '120,28,129'},
          { r: 0, g: 0, b: 0, styleString: 'background-color:rgb(0,0,0)', labelString: '0, 0, 0'},
          { r: 238, g: 238, b: 238, styleString: 'background-color:rgb(238,238,238)', labelString: '238,238,238'}
        ]
      }
    ];
  }
});