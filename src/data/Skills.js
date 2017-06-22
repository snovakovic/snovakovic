import Skill from 'common/Skill';

const skills = [];

function add(name, proficiency, featured = false) {
  skills.push({ name, proficiency, featured });
}


add(Skill.JAVASCRIPT, 90, true);
add(Skill.ES6, 90);
add(Skill.jQuery, 85);
add(Skill.NODE, 85, true);
add(Skill.HAPI, 80, true);
add(Skill.VUE, 80, true);
add(Skill.CSHARP, 75, true);
add(Skill.Angular1, 75);
add(Skill.MSSQL, 70, true);
add(Skill.MYSQL, 70);
add(Skill.POSTGRESQL, 70);
add(Skill.MONGO, 65, true);
add(Skill.REDIS, 65, true);
add(Skill.ZEROMQ, 60);
add(Skill.ELASTICSEARCH, 55);
add(Skill.EXPRESS, 55);
add(Skill.ENTITYFRAMEWORK, 50);
add(Skill.PHP, 35);


export default skills;
