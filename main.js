/* Your task is to iterate the array containing the chunks of clay
and after your code is done, the toFireInKiln array should
contain the string value "Clay coffee mug" for every
string in the clay array. */

const clay = [ "Clay", "Clay", "Clay", "Clay" ]
const toFireInKiln = []

for (chunks in clay) {
   const mug = `${clay[chunks]} coffee mug`
   toFireInKiln.push(mug);
}

console.log(toFireInKiln)