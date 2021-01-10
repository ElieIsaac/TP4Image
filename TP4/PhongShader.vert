#version 450


uniform mat4 MVP;
uniform mat4 MODEL;

layout(location = 0) in vec3 position; // la location permet de dire de quel flux/canal on récupère les données (doit être en accord avec le location du code opengl)

layout(location = 2) in vec2 vertexUV; // Couleur
layout(location = 3) in vec3 normal; //(doit être en accord avec le location du code opengl)
layout(location = 4) in vec3 Tangente;
layout(location = 5) in vec3 B;

//out vec3 fragTangente;
//out vec3 fragB;

out vec3 fragPosition;
out vec3 fragNormal;

//out vec2 UV;

void main(){

//Envoyer normale et position
fragPosition = position;
fragNormal = normal ;

gl_Position = MVP * vec4(position,1.);

}
