var recipes = {}
function updateObjectWithKeyAndValue(object,key,value){
  var obj = {}
  obj=Object.assign({},object)
  obj[key]=value
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,{key:value})
}
function deleteFromObjectByKey(object,key){
  var obj = {}
  ojb = Object.assign({},object)
  delete obj[key]
  return obj
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}