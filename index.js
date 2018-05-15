var recipes = {}
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object,{key:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,{key:value})
}
function deleteFromObjectByKey(object,key){
  var obj.assign({},object)
  delete obj[key]
  return obj
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}