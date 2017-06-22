const skills = [];

function add(name, proficiency, featured = false) {
  skills.push({ name, proficiency, featured });
}


add('JavaScript / ES6', 90, true);
add('NODE', 85, true);
add('Hapi.js', 80, true);
add('Vue.js', 80, true);
add('C# / .NET', 75, true);
add('Angular 1', 75);
add('MSSQL / MySQL / PostgreSQL', 70, true);
add('Mongo', 65, true);
add('Redis', 65, true);
add('ZeroMQ', 60);
add('Elasticsearch', 55);
add('Express', 55);
add('Entity Framework', 50);
add('PHP', 35);


export default skills;
